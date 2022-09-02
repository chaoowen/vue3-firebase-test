import { createRouter, createWebHistory } from 'vue-router'
import product from './views/product.vue'
import index from './views/index.vue'

export const route = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/product', component: product },
    { path: '/', component: index }
  ]
})