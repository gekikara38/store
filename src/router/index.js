import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import DetailProduct from "../views/DetailProduct";
import ShoppingCart from "../views/ShoppingCart";
import Success from "../views/Success";


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/detail-product',
        name: 'DetailProduct',
        component: DetailProduct,
    },
    {
        path: '/shopping-cart',
        name: 'ShoppingCart',
        component: ShoppingCart,
    },
    {
      path: '/success',
      name: 'Success',
      component: Success,
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router
