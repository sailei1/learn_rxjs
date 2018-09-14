import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const mapObj = {
    'index':resolve => require(['../views/index.vue'], resolve),
    'learn':resolve => require(['../views/learn.vue'], resolve),

}


const routes=[];

routes.push(
    {path: '/', redirect: '/index'},
    {path:'/index',name:'index',component:mapObj.index},
    {path:'/learn',name:'learn',component:mapObj.learn},
);

export function createRouter() {
    return new Router({
        mode: 'history',
        fallback: false,
        scrollBehavior: () => ({y: 0}),
        routes: routes
    });
}