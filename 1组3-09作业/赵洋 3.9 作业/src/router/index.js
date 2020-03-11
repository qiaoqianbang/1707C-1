import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
    {
      path:'/all',
      component:()=>import('../views/All.vue'),
      children:[
        {
          path:'/all/first',
          component:()=>import('../views/Layoat/First.vue')
        },
        {
          path:'/all/car',
          component:()=>import('../views/Layoat/Car.vue')
        },
        {
          path:'/all/my',
          component:()=>import('../views/Layoat/My.vue')
        },
      ]
    },
    {
      path:'/detail',
      component:()=>import('../views/Detail.vue')
    },
    {
      path:'/',
      redirect:'/all'
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
