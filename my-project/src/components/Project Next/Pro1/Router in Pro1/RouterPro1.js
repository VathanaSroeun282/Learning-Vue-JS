import { createRouter, createMemoryHistory } from "vue-router";
const routerPro1 = [
    {
        path : "/",
        name : "Home",
        component : Home
    },
    {
        path : "/About",
        name : "About",
        component : About
    },
    {
        path : "/Services",
        name : "Services",
        component : Services
    },
    {
        path : "/Training",
        name : "Training",
        component : Training
    },
    {
        path : "/Team",
        name : "Team",
        component : Team
    },
    {
        path : "/Contact Us",
        name : "Contact Us",
        component : Contact
    }
];
const router_pro1 = createRouter({
    history: createMemoryHistory(),
    routerPro1
});
export default router_pro1;