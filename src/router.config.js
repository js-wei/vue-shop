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
import MyRelease from './components/pager/my_release.vue'


export default [
    {
  	    path: '/index',
  	    component: Index,
        meta: {allowBack: false}
    },
    {
        path: '/release',
        component: Release,
        meta: {allowBack: false}
    },
    {
        path: '/personal',
        component: Personal,
        meta: {allowBack: false}
    },
    {
        path: '/login',
        component: Login,
        meta: {allowBack: false}
    },
    {
        path: '/register',
        component: Register,
        meta: {allowBack: false}
    },
    {
        path:'/setting',
        component:Setting,
        meta: {allowBack: false}
    },
    {
        path:'/edit',
        component:Edit,
        meta: {allowBack: false}
    },
    {
        path:'/information/:id/:tp',
        component:Information,
        meta: {allowBack: false}
    },
    {
        path:'/avatar',
        component:Avatar,
        meta: {allowBack: false}
    },
    {
        path:'/message',
        component:Message,
        meta: {allowBack: false}
    },
    {
        path:'/feedback',
        component:Feedback,
        meta: {allowBack: false}
    },
    {
        path:'/safe',
        component:Safe,
        meta: {allowBack: false}
    },
    {
        path:'/passwords',
        component:Passwords,
        meta: {allowBack: false}
    },
    {
        path:'/phone',
        component:Phone,
        meta: {allowBack: false}
    },
    {
        path:'/my_release',
        component:MyRelease,
        meta: {allowBack: false}
    },
    {
        path:'/',
        redirect:'/index',
        meta: {allowBack: false}
    },
    {
        path:'*',
        redirect:'/index',
        meta: {allowBack: false}
    }
]
