import { createRouter, createMemoryHistory } from "vue-router";
import Home from "../source/Home.vue";
import About from "../source/About.vue";
import Features from "../source/Features.vue";
import Services from "../source/Services.vue";
import Pricing from "../source/Pricing.vue";
import Contact from "../source/Contact.vue";
import GetStart from "../source/GetStart.vue";
export const quickStartLink = [
    {
        path : "/",
        name: "Home",
        component : Home
    },
    {
        path : "/about",
        name: "About",
        component : About
    },
    {
        path : "/features",
        name: "Features",
        component : Features
    },
    {
        path : "/services",
        name: "Services",
        component : Services
    },
    {
        path : "/pricing",
        name: "Pricing",
        component : Pricing
    },
    {
        path : "/contact",
        name: "Contact",
        component : Contact
    },
    {
        path : "/getStart",
        name: "Get Started",
        isButton : true,
        component : GetStart
    }
];
const routerPro2Config = createRouter({
    history: createMemoryHistory(),
    routes: quickStartLink
});

export default routerPro2Config;