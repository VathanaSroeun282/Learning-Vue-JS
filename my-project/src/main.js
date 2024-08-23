import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
// import routerPro1 from './components/Project Next/Pro1/Router in Pro1/RouterPro1';
import routerPro2Config from './components/Project Next/Pro2/router/quickstart';

createApp(App).use(routerPro2Config).mount('#app');