# jqPaginator分页组件

[![Build Status][travis-image]][travis-url]
[![Bower Status][bower-image]][bower-url]

## 使用说明

1. 使用bower安装`bower install jqPaginator`
2. 直接引入`dist`编译好的文件

## 开发说明

源码基于GruntJS构建，确保安装Node的情况下，全局安装

```shell
sudo npm install grunt-cli
sudo npm install bower
```

在文件目录下运行

```shell
npm install
bower install
```

然后运行

```shell
grunt server
```

修改相应代码会自动刷新  
打包编译请运行

```shell
grunt build
```

开发文件位于src目录，编译后的最终文件位于dist目录

## 版本更新

#### 1.2.0

增加参数类型验证。

#### 1.1.0

1、onPageChange事件接受第二个参数type，表示事件类型，可能的值为:
- init：初始化
- change：点击页码

2、内置bootstrap类型的分页，不用每次都设置first，next，page等参数。

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

[travis-image]: https://img.shields.io/travis/keenwon/jqPaginator.svg?style=flat-square
[travis-url]: https://travis-ci.org/keenwon/jqPaginator
[bower-image]: https://img.shields.io/bower/v/jqPaginator.svg?style=flat-square
[bower-url]: https://github.com/keenwon/jqPaginator
