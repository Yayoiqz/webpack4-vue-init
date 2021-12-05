import Vue from 'vue';
import router from './router/index';
import App from './App.vue';
import './assets/style/base.less';

new Vue({
    el: '#app',
    router,
    render: h => h(App)
});

