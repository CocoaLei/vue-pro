# vue-pro

> vue project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

> code style

## High priority

+ 组件名应该始终未多个单词
+ 组件的 data 必须是一个函数
+ props 定义应该尽量详细
+ 为 v-for 设置键值
+ 尽量避免 v-if 和 v-for 一起使用
+ 应该为组件的样式设置作用域(比如使用 scoped 或 module)
+ 在插件、混入等扩展中始终未自定义的私有属性使用 $_ 前缀，并附带一个命名空间以回避和其它作者的冲突
  
## Medium priority

+ 只要有能够拼接文件的构建系统，就应该把每个组件单独分成文件
+ 单文件组件的文件名称要么始终是单词大写开头，要么始终是横线连接
  