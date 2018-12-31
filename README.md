# jq-paginator 分页组件

[![NPM Version][npm-image]][npm-url]
[![License Status][license-image]][license-url]
[![Build Status][circleci-image]][circleci-url]
[![Coverage Status][codecov-image]][codecov-url]
[![Lgtm Alerts][lgtm-alerts-image]][lgtm-alerts-url]
[![Lgtm Grade][lgtm-grade-image]][lgtm-grade-url]
  
[![Dependencies Status][dependencies-image]][dependencies-url]
[![Devdependencies Status][devdependencies-image]][devdependencies-url]

## 使用说明

详细的使用文档和 Demo 请查看 [http://jqpaginator.keenwon.com/](http://jqpaginator.keenwon.com/)

### npm 安装

```shell
npm install jq-paginator --save
```

:warning: **注意：npm 包名是 jq-paginator**

### 直接引入

直接下载使用 `dist` 文件夹中编译好的文件，或者使用 [unpkg](https://unpkg.com/) 等 CDN 服务。

## 开发说明

安装依赖：

```shell
npm install
```

本地开发：

```shell
npm start
```

执行测试：

```shell
npm test
```

编译：

```shell
npm run build
```

## Changelog

#### 2.0.0

- 使用新的工具流
- 发布 npm 包
- 不再支持 bower，spm

#### 1.2.0

增加参数类型验证。

#### 1.1.0

- onPageChange事件接受第二个参数type，表示事件类型，可能的值为:
  - init：初始化
  - change：点击页码
- 内置bootstrap类型的分页，不用每次都设置first，next，page等参数。

#### 1.0.2

更好的兼容 `$.paginator('#id',options)` 形式的调用

#### 1.0.1

option函数优化

#### 1.0.0

新增spm [https://spmjs.org/keenwon/jqPaginator/](https://spmjs.org/keenwon/jqPaginator/)   
安装方法：

```shell
spm install keenwon/jqPaginator
```

[npm-image]: https://img.shields.io/npm/v/jq-paginator.svg?maxAge=3600&style=flat-square
[npm-url]: https://www.npmjs.com/package/jq-paginator
[license-image]: https://img.shields.io/github/license/keenwon/jqPaginator.svg?maxAge=3600&style=flat-square
[license-url]: https://github.com/keenwon/jqPaginator/blob/master/LICENSE
[circleci-image]: https://img.shields.io/circleci/project/github/keenwon/jqPaginator.svg?maxAge=3600&logo=circleci&style=flat-square
[circleci-url]: https://circleci.com/gh/keenwon/jqPaginator
[codecov-image]: https://img.shields.io/codecov/c/github/keenwon/jqPaginator.svg?maxAge=3600&style=flat-square
[codecov-url]: https://codecov.io/gh/keenwon/jqPaginator
[dependencies-image]: https://img.shields.io/david/keenwon/jqPaginator.svg?maxAge=3600&style=flat-square
[dependencies-url]: https://david-dm.org/keenwon/jqPaginator
[devdependencies-image]: https://img.shields.io/david/dev/keenwon/jqPaginator.svg?maxAge=3600&style=flat-square
[devdependencies-url]: https://david-dm.org/keenwon/jqPaginator?type=dev
[lgtm-alerts-image]: https://img.shields.io/lgtm/alerts/g/keenwon/jqPaginator.svg?logo=lgtm&logoWidth=18&maxAge=3600&style=flat-square
[lgtm-alerts-url]: https://lgtm.com/projects/g/keenwon/jqPaginator/alerts/
[lgtm-grade-image]: https://img.shields.io/lgtm/grade/javascript/g/keenwon/jqPaginator.svg?logo=lgtm&logoWidth=18&maxAge=3600&style=flat-square
[lgtm-grade-url]: https://lgtm.com/projects/g/keenwon/jqPaginator/context:javascript
