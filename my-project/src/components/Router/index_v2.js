import { createRouter, createMemoryHistory} from 'vue-router';
import Home from '../Link To File v2/Home.vue';
import Login from '../Link To File v2/Login.vue';
import SignUp from '../Link To File v2/SignUp.vue';


const routes = [
    {
        path : '/',
        name : 'Home',
        component : Home
    },
    {
        path : '/Login',
        name : 'Login',
        component : Login
    },
    {
        path : '/SignUp',
        name : 'SignUp',
        component : SignUp
    }
];
const router = createRouter({
    history: createMemoryHistory(),
    routes
});
export default router;