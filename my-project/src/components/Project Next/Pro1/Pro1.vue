<template>
    <header>
        <nav class="flex items-center w-full h-20 text-xl font-bold bg-blue-400 text-white z-[1000]">
            <ul class="flex justify-end gap-5 w-full px-4">
                <li class="hover:opacity-85 hover:cursor-pointer" v-for="(item, index) in navItems" :key="index">
                  <router-link :to="item.path" class="text-xl">{{ item.name }}</router-link>
                </li>
            </ul>
        </nav>
    </header>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>
import { routerPro1 } from './Router in Pro1/RouterPro1';

export default {
    data() {
        return {
            navItems: routerPro1.map(route => ({ name: route.name, path: route.path }))
        };
    }
}
</script>

