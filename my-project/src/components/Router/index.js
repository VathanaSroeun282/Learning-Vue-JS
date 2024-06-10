import { createRouter, createMemoryHistory} from 'vue-router' 
import About from '../Link To File/About.vue';
import Contact from '../Link To File/Contact.vue';
import Home from '../Link To File/Home.vue';


const routes = [
    {
        path : '/',
        name : 'Home',
        component : Home
    },
    {
        path : '/About',
        name : 'About',
        component : About
    },
    {
        path : '/Contact',
        name : 'Contact',
        component : Contact
    }
];
const router = createRouter({
    history: createMemoryHistory(),
    routes
});
export default router;