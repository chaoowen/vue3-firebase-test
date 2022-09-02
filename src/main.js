import { createApp } from 'vue'
import { route } from './route.js'
import './assets/index.css'
import App from './App.vue'

const vue = createApp(App).use(route)

vue.mount('#app')