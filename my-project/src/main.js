import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './components/Router/index_v2'

createApp(App).use(router).mount('#app')
