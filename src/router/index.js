import Vue from 'vue';
import Router from 'vue-router';
const Home = () => import ('page/home');
const Test = () => import ('page/test');
const NotFound = () => import ('page/notFound');

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/test',
            name: 'test',
            component: Test
        },
        {
            path: '*',
            name: 'notFound',
            component: NotFound
        }
    ]
});
