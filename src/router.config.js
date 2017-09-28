/**
 * @Author: 魏巍
 * @Date:   2017-09-20T09:33:02+08:00
 * @Email:  js_weiwei_100@hotmail.com
 * @Filename: router.config.js
 * @Last modified by:   魏巍
 * @Last modified time: 2017-09-25T14:51:43+08:00
 */


import Index from './components/pager/index.vue'
import Personal from './components/pager/personal.vue'
import Release from './components/pager/release.vue'
import Login from './components/pager/login.vue'
import Register from './components/pager/register.vue'
import Setting from './components/pager/setting.vue'
import Edit from './components/pager/edit.vue'
import Information from './components/pager/information.vue'
import Avatar  from './components/pager/avatar.vue'
import Message from './components/pager/message.vue'
import Feedback from './components/pager/feedback.vue'
import Safe from './components/pager/safe.vue'
import Passwords from './components/pager/setPassword.vue'
import Phone from './components/pager/phone.vue'


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
        path:'/information/:id/:tp',
        component:Information
    },
    {
        path:'/avatar',
        component:Avatar
    },
    {
        path:'/message',
        component:Message
    },
    {
        path:'/feedback',
        component:Feedback
    },
    {
        path:'/safe',
        component:Safe
    },
    {
        path:'/passwords',
        component:Passwords
    },
    {
        path:'/phone',
        component:Phone
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
