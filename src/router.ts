import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/loan',
      name: 'loan',
      component: () => import(/* webpackChunkName: "loan" */ './views/Loan.vue'),
    },
    {
      path: '/repair',
      name: 'repair',
      component: () => import(/* webpackChunkName: "repair" */ './views/Repair.vue'),
    },
    // TODO
    // {
    //   path: '/photosonline',
    //   name: 'photosonline',
    //   component: () => import(/* webpackChunkName: "photosonline" */ './views/PhotosOnline.vue'),
    // },
    {
      path: '/history',
      name: 'history',
      component: () => import(/* webpackChunkName: "history" */ './views/History.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import(/* webpackChunkName: "contact" */ './views/Contact.vue'),
    },
  ],
});
