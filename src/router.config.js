import Login from './components/component/login.vue'
import Register from './components/component/register.vue'
import Index from './components/pager/index.vue'
import Personal from './components/pager/personal.vue'

export default [
    {
        path:'/home',
        component:Index
    },
    {
        path:'/register',
        component:Register
    },
    {
        path:'/login',
        component:Login
    },
    {
      path:'/personal',
      component: Personal
    },
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '*',
        redirect: '/home'
    }
];