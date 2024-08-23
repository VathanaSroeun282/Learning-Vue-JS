import { createRouter, createMemoryHistory } from "vue-router";
import Home from '../Link To Pro1/Home.vue';
import About from './../Link To Pro1/About.vue';

export const routerPro1 = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/About",
        name: "About",
        component: About
    }
    
    // {
    //     path: "/Services",
    //     name: "Services",
    //     component: Services
    // },
    // {
    //     path: "/Training",
    //     name: "Training",
    //     component: Training
    // },
    // {
    //     path: "/Team",
    //     name: "Team",
    //     component: Team
    // },
    // {
    //     path: "/ContactUs",
    //     name: "Contact Us",
    //     component: Contact
    // }
];

const routerPro1Config = createRouter({
    history: createMemoryHistory(),
    routes: routerPro1
});

export default routerPro1Config;
