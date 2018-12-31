/* eslint-env jquery */
/* eslint-disable no-new, new-cap */

function insertElement () {
  $('#paginator').remove()
  $('body').append('<ul id="paginator"></ul>')
}

describe('jqPaginator 测试', function () {
  describe('初始化相关测试', function () {
    var $page = null
    var initFn = null

    beforeEach(function () {
      insertElement()
      $page = $('#paginator')
    })

    afterEach(function () {
      $page = null
      initFn = null
    })

    it('最简单的初始化', function () {
      initFn = function () {
        $page.jqPaginator({
          currentPage: 1,
          pageSize: 15,
          totalCounts: 100
        })
      }

      expect(initFn).not.toThrow()
    })

    it('不指定当前页的测试', function () {
      initFn = function () {
        $page.jqPaginator({
          pageSize: 15,
          totalCounts: 100
        })
      }

      expect(initFn).not.toThrow()
    })

    it('未指定总页数，报错', function () {
      initFn = function () {
        $page.jqPaginator({
          pageSize: 15
        })
      }

      expect(initFn).toThrow()
    })

    it('当前页数小于1，报错', function () {
      initFn = function () {
        $page.jqPaginator({
          currentPage: -1,
          pageSize: 15,
          totalCounts: 100
        })
      }

      expect(initFn).toThrow()
    })

    it('当前页数大于总页数，报错', function () {
      initFn = function () {
        $page.jqPaginator({
          currentPage: 10000000,
          pageSize: 15,
          totalPages: 100
        })
      }

      expect(initFn).toThrow()
    })

    it('总页数小于1，报错', function () {
      initFn = function () {
        $page.jqPaginator({
          currentPage: 1,
          pageSize: 15,
          totalPages: -1611
        })
      }

      expect(initFn).toThrow()
    })
  })

  describe('分页操作测试', function () {
    var $page = null
    var initFn = null

    beforeEach(function () {
      insertElement()
      $page = $('#paginator').jqPaginator({
        currentPage: 1,
        pageSize: 15,
        totalCounts: 100
      })
    })

    afterEach(function () {
      $page = null
      initFn = null
    })

    it('测试 jqPaginator("destroy") 方法', function () {
      initFn = function () {
        $page.jqPaginator('destroy')
      }

      expect(initFn).not.toThrow()
    })

    it('手动设置当前页', function () {
      initFn = function () {
        $page.jqPaginator('option', {
          currentPage: 2
        })
      }

      expect(initFn).not.toThrow()
    })

    it('设置当前页小于0，报错', function () {
      initFn = function () {
        $page.jqPaginator('option', {
          currentPage: -465
        })
      }

      expect(initFn).toThrow()
    })

    it('设置当前页大于总页数，报错', function () {
      initFn = function () {
        $page.jqPaginator('option', {
          currentPage: 999999999
        })
      }

      expect(initFn).toThrow()
    })
  })

  describe('类型验证', function () {
    var $page = null
    var initFn = null

    beforeEach(function () {
      insertElement()
      $page = $('#paginator')
    })

    afterEach(function () {
      initFn = null
    })

    it('类型错误，报错', function () {
      initFn = function () {
        $page.jqPaginator({
          currentPage: '1',
          pageSize: '15',
          totalCounts: '100'
        })
      }

      expect(initFn).toThrow()
    })

    it('currentPage类型错误，报错', function () {
      initFn = function () {
        $page.jqPaginator({
          currentPage: '1',
          pageSize: 15,
          totalCounts: 100
        })
      }

      expect(initFn).toThrow()
    })

    it('pageSize类型错误，报错', function () {
      initFn = function () {
        $page.jqPaginator({
          currentPage: 1,
          pageSize: '15',
          totalCounts: 100
        })
      }

      expect(initFn).toThrow()
    })

    it('totalCounts类型错误，报错', function () {
      initFn = function () {
        $page.jqPaginator({
          currentPage: 1,
          pageSize: 15,
          totalCounts: '100'
        })
      }

      expect(initFn).toThrow()
    })

    it('类型错误，报错', function () {
      initFn = function () {
        $page.jqPaginator({
          currentPage: 1,
          totalPages: '100'
        })
      }

      expect(initFn).toThrow()
    })
  })

  describe('其他', function () {
    var $page = null
    var initFn = null

    beforeEach(function () {
      insertElement()
      $page = $('#paginator')
    })

    afterEach(function () {
      $page = null
      initFn = null
    })

    it('$.jqPaginator 已存在', function () {
      expect($.jqPaginator).toBeDefined()
    })

    it('id 不存在', function () {
      expect(function () {
        $('#keenwon').jqPaginator('destroy')
      }).toThrow()
    })

    it('option 不合法', function () {
      initFn = function () {
        $page.jqPaginator({
          currentPage: 1,
          pageSize: 10,
          totalCounts: 100
        })

        $page.jqPaginator('keenwon')
      }

      expect(initFn).toThrow()
    })

    it('wrapper', function () {
      initFn = function () {
        $page.jqPaginator({
          wrapper: '<div class="your class"></div>',
          currentPage: 1,
          pageSize: 10,
          totalCounts: 100
        })
      }

      expect(initFn).not.toThrow()
    })

    it('this 非 jqPaginator 实例', function () {
      initFn = function () {
        $.jqPaginator.call(null, '#paginator', {
          currentPage: 1,
          pageSize: 15,
          totalCounts: 100
        })
      }

      expect(initFn).not.toThrow()
    })

    it('pageSize 不合法', function () {
      initFn = function () {
        $.jqPaginator.call(null, '#paginator', {
          currentPage: 1,
          totalCounts: 100
        })
      }

      expect(initFn).toThrow()
    })

    it('自定义 html', function () {
      initFn = function () {
        $page.jqPaginator({
          currentPage: 1,
          pageSize: 15,
          totalCounts: 100,
          first: '<li class="first"><a href="javascript:;">First</a></li>',
          prev: '<li class="prev"><a href="javascript:;">Previous</a></li>',
          next: '<li class="next"><a href="javascript:;">Next</a></li>',
          last: '<li class="last"><a href="javascript:;">Last</a></li>',
          page: '<li class="page"><a href="javascript:;">{{page}}</a></li>'
        })
      }

      expect(initFn).not.toThrow()
    })

    it('visiblePages 不合法', function () {
      initFn = function () {
        $page.jqPaginator({
          currentPage: 1,
          pageSize: 15,
          totalCounts: 100,
          visiblePages: 'asdf'
        })
      }

      expect(initFn).toThrow()
    })

    it('当前在最后一页 (禁用 next 和 last)', function () {
      initFn = function () {
        $page.jqPaginator({
          currentPage: 10,
          pageSize: 10,
          totalCounts: 100
        })
      }

      expect(initFn).not.toThrow()
    })

    it('visiblePages > totalPages', function () {
      initFn = function () {
        $page.jqPaginator({
          currentPage: 1,
          pageSize: 10,
          visiblePages: 1000,
          totalCounts: 100
        })
      }

      expect(initFn).not.toThrow()
    })

    it('触发分页', function () {
      initFn = function () {
        $page.jqPaginator({
          currentPage: 1,
          pageSize: 10,
          totalCounts: 100
        })

        $('.next', $page).trigger('click')
      }

      expect(initFn).not.toThrow()
    })

    it('触发分页, disable', function () {
      initFn = function () {
        $page.jqPaginator({
          currentPage: 10,
          pageSize: 10,
          totalCounts: 100
        })

        $('.next', $page).trigger('click')
      }

      expect(initFn).not.toThrow()
    })

    it('触发分页, onPageChange 阻止', function () {
      initFn = function () {
        $page.jqPaginator({
          currentPage: 1,
          pageSize: 10,
          totalCounts: 100,
          onPageChange: function () {
            return false
          }
        })

        $('.next', $page).trigger('click')
      }

      expect(initFn).not.toThrow()
    })
  })
})
