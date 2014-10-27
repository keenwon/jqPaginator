describe('jqPaginator自动化测试', function () {

    it('$.jqPaginator 已存在', function () {
        expect($.jqPaginator).toBeDefined();
    });

    describe('初始化相关测试', function () {
        var $page = null,
            initFn = null;

        beforeEach(function () {
            $('body').append('<ul id="paginator"></ul>');
            $page = $('#paginator');
        });

        afterEach(function () {
            $page = null;
            initFn = null;
        });

        it('最简单的初始化', function () {
            initFn = function () {
                $page.jqPaginator({
                    currentPage: 1,
                    pageSize: 15,
                    totalCounts: 100
                });
            };

            expect(initFn).not.toThrow();
        });

        it('不指定当前页的测试', function () {
            initFn = function () {
                $page.jqPaginator({
                    pageSize: 15,
                    totalCounts: 100
                });
            };

            expect(initFn).not.toThrow();
        });

        it('未指定总页数，报错', function () {
            initFn = function () {
                $page.jqPaginator({
                    pageSize: 15
                });
            };

            expect(initFn).toThrow();
        });

        it('当前页数小于1，报错', function () {
            initFn = function () {
                $page.jqPaginator({
                    currentPage: -1,
                    pageSize: 15,
                    totalCounts: 100
                });
            };

            expect(initFn).toThrow();
        });

        it('当前页数大于总页数，报错', function () {
            initFn = function () {
                $page.jqPaginator({
                    currentPage: 10000000,
                    pageSize: 15,
                    totalPages: 100
                });
            };

            expect(initFn).toThrow();
        });

        it('总页数小于1，报错', function () {
            initFn = function () {
                $page.jqPaginator({
                    currentPage: 1,
                    pageSize: 15,
                    totalPages: -1611
                });
            };

            expect(initFn).toThrow();
        });

    });

    describe('测试初始化后的相关操作', function () {
        var $page = null,
            initFn = null;

        beforeEach(function () {
            $('body').append('<ul id="paginator"></ul>');
            $page = $('#paginator').jqPaginator({
                currentPage: 1,
                pageSize: 15,
                totalCounts: 100
            });
        });

        afterEach(function () {
            $page = null;
            initFn = null;
        });

        it('测试 jqPaginator("destroy") 方法', function () {
            initFn = function () {
                $page.jqPaginator('destroy');
            };

            expect(initFn).not.toThrow();
        });

        it('手动设置当前页', function () {
            initFn = function () {
                $page.jqPaginator('option', {
                    currentPage: 2
                });
            };

            expect(initFn).not.toThrow();
        });

        it('设置当前页小于0，报错', function () {
            initFn = function () {
                $page.jqPaginator('option', {
                    currentPage: -465
                });
            };

            expect(initFn).toThrow();
        });

        it('设置当前页大于总页数，报错', function () {
            initFn = function () {
                $page.jqPaginator('option', {
                    currentPage: 999999999
                });
            };

            expect(initFn).toThrow();
        });

    });

    describe('类型验证', function () {

        var $page = null,
            initFn = null;

        beforeEach(function () {
            $('body').append('<ul id="paginator"></ul>');
            $page = $('#paginator');
        });

        afterEach(function () {
            $page = null;
            initFn = null;
        });

        it('类型错误，报错', function () {
            initFn = function () {
                $page = $('#paginator').jqPaginator({
                    currentPage: '1',
                    pageSize: '15',
                    totalCounts: '100'
                });
            };

            expect(initFn).toThrow();
        });

        it('currentPage类型错误，报错', function () {
            initFn = function () {
                $page = $('#paginator').jqPaginator({
                    currentPage: '1',
                    pageSize: 15,
                    totalCounts: 100
                });
            };

            expect(initFn).toThrow();
        });

        it('pageSize类型错误，报错', function () {
            initFn = function () {
                $page = $('#paginator').jqPaginator({
                    currentPage: 1,
                    pageSize: '15',
                    totalCounts: 100
                });
            };

            expect(initFn).toThrow();
        });

        it('totalCounts类型错误，报错', function () {
            initFn = function () {
                $page = $('#paginator').jqPaginator({
                    currentPage: 1,
                    pageSize: 15,
                    totalCounts: '100'
                });
            };

            expect(initFn).toThrow();
        });

        it('类型错误，报错', function () {
            initFn = function () {
                $page = $('#paginator').jqPaginator({
                    currentPage: 1,
                    totalPages: '100'
                });
            };

            expect(initFn).toThrow();
        });
    });
});
