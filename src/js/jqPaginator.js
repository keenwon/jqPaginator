(function ($) {
    'use strict';

    $.jqPaginator = function (el, options) {
        if(!(this instanceof $.jqPaginator)){
            return new $.jqPaginator(el, options);
        }

        var that = this;

        that.$container = $(el);

        that.$container.data('jqPaginator', that);

        that.init = function () {

            if (options.first || options.prev || options.next || options.last || options.page) {
                options = $.extend({}, {
                    first: '',
                    prev: '',
                    next: '',
                    last: '',
                    page: ''
                }, options);
            }

            that.options = $.extend({}, $.jqPaginator.defaultOptions, options);

            that.verify();

            that.extendJquery();

            that.render();

            that.fireEvent(this.options.currentPage, 'init');
        };

        that.verify = function () {
            var opts = that.options;

            if (!that.isNumber(opts.totalPages)) {
                throw new Error('[jqPaginator] type error: totalPages');
            }

            if (!that.isNumber(opts.totalCounts)) {
                throw new Error('[jqPaginator] type error: totalCounts');
            }

            if (!that.isNumber(opts.pageSize)) {
                throw new Error('[jqPaginator] type error: pageSize');
            }

            if (!that.isNumber(opts.currentPage)) {
                throw new Error('[jqPaginator] type error: currentPage');
            }

            if (!that.isNumber(opts.visiblePages)) {
                throw new Error('[jqPaginator] type error: visiblePages');
            }

            if (!opts.totalPages && !opts.totalCounts) {
                throw new Error('[jqPaginator] totalCounts or totalPages is required');
            }

            if (!opts.totalPages && !opts.totalCounts) {
                throw new Error('[jqPaginator] totalCounts or totalPages is required');
            }

            if (!opts.totalPages && opts.totalCounts && !opts.pageSize) {
                throw new Error('[jqPaginator] pageSize is required');
            }

            if (opts.totalCounts && opts.pageSize) {
                opts.totalPages = Math.ceil(opts.totalCounts / opts.pageSize);
            }

            if (opts.currentPage < 1 || opts.currentPage > opts.totalPages) {
                throw new Error('[jqPaginator] currentPage is incorrect');
            }

            if (opts.totalPages < 1) {
                throw new Error('[jqPaginator] totalPages cannot be less currentPage');
            }
        };

        that.extendJquery = function () {
            $.fn.jqPaginatorHTML = function (s) {
                return s ? this.before(s).remove() : $('<p>').append(this.eq(0).clone()).html();
            };
        };

        that.render = function () {
            that.renderHtml();
            that.setStatus();
            that.bindEvents();
        };

        that.renderHtml = function () {
            var html = [];

            var pages = that.getPages();
            for (var i = 0, j = pages.length; i < j; i++) {
                html.push(that.buildItem('page', pages[i]));
            }

            that.isEnable('prev') && html.unshift(that.buildItem('prev', that.options.currentPage - 1));
            that.isEnable('first') && html.unshift(that.buildItem('first', 1));
            that.isEnable('statistics') && html.unshift(that.buildItem('statistics'));
            that.isEnable('next') && html.push(that.buildItem('next', that.options.currentPage + 1));
            that.isEnable('last') && html.push(that.buildItem('last', that.options.totalPages));

            if (that.options.wrapper) {
                that.$container.html($(that.options.wrapper).html(html.join('')).jqPaginatorHTML());
            } else {
                that.$container.html(html.join(''));
            }
        };

        that.buildItem = function (type, pageData) {
            var html = that.options[type]
                .replace(/{{page}}/g, pageData)
                .replace(/{{totalPages}}/g, that.options.totalPages)
                .replace(/{{totalCounts}}/g, that.options.totalCounts);

            return $(html).attr({
                'jp-role': type,
                'jp-data': pageData
            }).jqPaginatorHTML();
        };

        that.setStatus = function () {
            var options = that.options;

            if (!that.isEnable('first') || options.currentPage === 1) {
                $('[jp-role=first]', that.$container).addClass(options.disableClass);
            }
            if (!that.isEnable('prev') || options.currentPage === 1) {
                $('[jp-role=prev]', that.$container).addClass(options.disableClass);
            }
            if (!that.isEnable('next') || options.currentPage >= options.totalPages) {
                $('[jp-role=next]', that.$container).addClass(options.disableClass);
            }
            if (!that.isEnable('last') || options.currentPage >= options.totalPages) {
                $('[jp-role=last]', that.$container).addClass(options.disableClass);
            }

            $('[jp-role=page]', that.$container).removeClass(options.activeClass);
            $('[jp-role=page][jp-data=' + options.currentPage + ']', that.$container).addClass(options.activeClass);
        };

        that.getPages = function () {
            var pages = [],
                visiblePages = that.options.visiblePages,
                currentPage = that.options.currentPage,
                totalPages = that.options.totalPages;

            if (visiblePages > totalPages) {
                visiblePages = totalPages;
            }

            var half = Math.floor(visiblePages / 2);
            var start = currentPage - half + 1 - visiblePages % 2;
            var end = currentPage + half;

            if (start < 1) {
                start = 1;
                end = visiblePages;
            }
            if (end > totalPages) {
                end = totalPages;
                start = 1 + totalPages - visiblePages;
            }

            var itPage = start;
            while (itPage <= end) {
                pages.push(itPage);
                itPage++;
            }

            return pages;
        };

        that.isNumber = function (value) {
            var type = typeof value;
            return type === 'number' || type === 'undefined';
        };

        that.isEnable = function (type) {
            return that.options[type] && typeof that.options[type] === 'string';
        };

        that.switchPage = function (pageIndex) {
            that.options.currentPage = pageIndex;
            that.render();
        };

        that.fireEvent = function (pageIndex, type) {
            return (typeof that.options.onPageChange !== 'function') || (that.options.onPageChange(pageIndex, type) !== false);
        };

        that.callMethod = function (method, options) {
            switch (method) {
                case 'option':
                    that.options = $.extend({}, that.options, options);
                    that.verify();
                    that.render();
                    break;
                case 'destroy':
                    that.$container.empty();
                    that.$container.removeData('jqPaginator');
                    break;
                default :
                    throw new Error('[jqPaginator] method "' + method + '" does not exist');
            }

            return that.$container;
        };

        that.bindEvents = function () {
            var opts = that.options;

            that.$container.off();
            that.$container.on('click', '[jp-role]', function () {
                var $el = $(this);
                if ($el.hasClass(opts.disableClass) || $el.hasClass(opts.activeClass)) {
                    return;
                }

                var pageIndex = +$el.attr('jp-data');
                if (that.fireEvent(pageIndex, 'change')) {
                    that.switchPage(pageIndex);
                }
            });
        };

        that.init();

        return that.$container;
    };

    $.jqPaginator.defaultOptions = {
        wrapper: '',
        first: '<li class="first"><a href="javascript:;">First</a></li>',
        prev: '<li class="prev"><a href="javascript:;">Previous</a></li>',
        next: '<li class="next"><a href="javascript:;">Next</a></li>',
        last: '<li class="last"><a href="javascript:;">Last</a></li>',
        page: '<li class="page"><a href="javascript:;">{{page}}</a></li>',
        totalPages: 0,
        totalCounts: 0,
        pageSize: 0,
        currentPage: 1,
        visiblePages: 7,
        disableClass: 'disabled',
        activeClass: 'active',
        onPageChange: null
    };

    $.fn.jqPaginator = function () {
        var that = this,
            args = Array.prototype.slice.call(arguments);

        if (typeof args[0] === 'string') {
            var $instance = $(that).data('jqPaginator');
            if (!$instance) {
                throw new Error('[jqPaginator] the element is not instantiated');
            } else {
                return $instance.callMethod(args[0], args[1]);
            }
        } else {
            return new $.jqPaginator(this, args[0]);
        }
    };

})(jQuery);