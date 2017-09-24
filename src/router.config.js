import Index from './components/pager/index.vue'
import Personal from './components/pager/personal.vue'
import Release from './components/pager/release.vue'
import Login from './components/pager/login.vue'
import Register from './components/pager/register.vue'
import Setting from './components/pager/setting.vue'
import Edit from './components/pager/edit.vue'

export default [
    {
  	    path: '/index',
  	    component: Index
    },
    {
        path: '/release',
        component: Release
    },
    {
        path: '/personal',
        component: Personal
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/register',
        component: Register
    },
    {
        path:'/setting',
        component:Setting
    },
    {
        path:'/edit',
        component:Edit
    },
    {
        path:'/',
        redirect:'/index'
    },
    {
        path:'*',
        redirect:'/index'
    }
]