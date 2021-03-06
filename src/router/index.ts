import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Money from "@/views/Money.vue";
import Statistice from "@/views/Statistice.vue";
import Labels from "@/views/Labels.vue";
import NotFound from "@/views/NotFound.vue";
import EditLabel from "@/views/EditLabel.vue"

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
    {
      path:'/',
      redirect:'/money'
    },
    {
      path: '/money',
      name: 'money',
      component: Money
    },
    {
      path: '/labels',
      name: 'labels',
      component:Labels
    },
    {
      path: '/statistacs',
      name: 'statistacs',
      component: Statistice
    },
    {
      path:'/labels/edit/:id',
      name:"editLabel",
      component:EditLabel
    },
    {
      path:'*',
      component:NotFound
    }


  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
  ]

const router = new VueRouter({
  routes
})

export default router
