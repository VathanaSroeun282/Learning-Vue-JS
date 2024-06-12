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
        path : "/Portfollo",
        name : "Portfollo",
        component : Portfollo
    },
    {
        path : "/Team",
        name : "Team",
        component : Team
    },
    {
        path : "/Contact",
        name : "Contact",
        component : Contact
    }
];
const router_pro1 = createRouter({
    history: createMemoryHistory(),
    routerPro1
});
export default router_pro1;