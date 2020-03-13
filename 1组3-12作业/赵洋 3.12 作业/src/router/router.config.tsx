import React from 'react'

//一级路由
import Home from '../views/home/index'
import CreateVote from '../views/createVote/index'
import ForgetPassword from '../views/forgetPassword/index'
import Login from '../views/login/index'
import Register from '../views/register/index'
import VoteList from '../views/voteList/index'
//二级路由
import Findex from '../views/home/findex/index'
import My from '../views/home/my/index'


export default {
    list:[
        {
            path:'/',
            redirect:'/home'
        },
        {
            path:'/home',
            component:Home,
            children:[
                {
                    path:'/home',
                    redirect:'/home/findex'
                },
                {
                    path:'/home/findex',
                    component:Findex
                },
                {
                    path:'/home/my',
                    component:My
                }
            ]
        },
        {
            path:'/createVote',
            component:CreateVote
        },
        {
            path:'/forgetPassword',
            component:ForgetPassword
        },
        {
            path:'/login',
            component:Login
        },
        {
            path:'/register',
            component:Register
        },
        {
            path:'/voteList',
            component:VoteList
        }
    ]
}