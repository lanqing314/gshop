// 路由器模块
import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/Home/Home.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order'
import Mine from '../pages/Mine/Mine'
import Login from '../pages/Login/Login'

Vue.use(VueRouter)

export default new VueRouter({
    routes:[
        {
            path:'/',
            redirect:'/home'
        },
        {
            path:'/home',
            component: Home,
            meta:{
                showFooter:true
            }
        },
        {
            path:'/search',
            component: Search,
            meta:{
                showFooter:true
            }
        },
        {
            path:'/order',
            component: Order,
            meta:{
                showFooter:true
            }
        },
        {
            path:'/mine',
            component: Mine,
            meta:{
                showFooter:true
            }
        },
        {
            path:'/login',
            component: Login
        },
    ]
})