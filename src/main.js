// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios';
import App from './App'
import router from './router'

/*
* 取消所有 Vue 日志与警告
* */
Vue.config.productionTip = false;

/*
* 指定组件渲染和观察期间未捕获错误的处理函数
*/
Vue.config.errorHandler = (err, vm, info) => {
  console.log(err, vm, info);
};

Vue.prototype.$req = axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
