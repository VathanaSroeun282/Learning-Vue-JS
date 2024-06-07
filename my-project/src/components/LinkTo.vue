<template>
    <div>
        <header>
            <nav class="w-full h-16 flex items-center pr-2 bg-gray-400 justify-end">
                <ul>
                    <li v-for="(myLink, index) in link" :key="index">
                        <a :href="hyperLink[index].path" class="text-xl">{{ myLink }}</a>
                    </li>
                </ul>
            </nav>
        </header>
        <main>
            <h1 class="text-3xl font-bold py-4">{{ pageTitle }}</h1>
            <p>{{ pageDescription }}</p>
        </main>
    </div>
</template>

<script>
export default {
    data() {
        return {
            link: [
                'Home',
                'Contact',
                'About'
            ],
            hyperLink: [
                {
                    path: "/Home",
                    template: '<h1>This is Home Page!</h1>'
                },
                {
                    path: "/Contact",
                    template: '<h1>This is Contact Page!</h1>'
                },
                {
                    path: "/About",
                    template: '<h1>This is About Page!</h1>'
                }
            ],
            pageTitle: 'This is Home Page!',
            pageDescription: 'Hello kon papa! This is a new webpage for learning Vue.js. If you want to learn Vue, please start now!'
        }
    },
    methods: {
        redirectTOContact() {
            this.$router.push('/Contact');
        },
        redirectTOAbout() {
            this.$router.push('/About');
        },
        redirectTOHome() {
            this.$router.push('/Home');
        }
    }
}
</script>
