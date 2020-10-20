import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'
import Image from '../views/images.vue'
import AddImage from '../views/addimage.vue'
import Account from '../views/account.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/image',
    name: 'Image',
    component: Image
  },
  {
    path: '/image/add',
    name: 'Add Image',
    component: AddImage
  },
  {
    path: '/account',
    name: 'Account',
    component: Account
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
