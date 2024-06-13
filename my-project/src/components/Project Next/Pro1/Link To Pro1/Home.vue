<template>
    <header>
        <nav>
            <ul>
                <li v-for="(item, index) in navItems" :key="index">{{ item }}</li>
            </ul>
        </nav>
    </header>
</template>
<script>
import { navData } from '../Data/Data';
export default {
    data() {
        return {
            navItems: navData
        };
    }
}
</script>