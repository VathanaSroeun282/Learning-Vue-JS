<template>
    <div>
        <header>
            <nav class="w-full h-16 flex items-center pr-2 bg-gray-400 justify-end">
                <ul>
                    <li v-for="(myLink, index) in link" :key="index"><a href='#' class='text-xl'>{{ myLink }}</a></li>
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
            link : [
                'Home',
                'Contact',
                'About'
            ],
            pageTitle : 'This is home Page!',
            pageDescription : 'Hello kon papa! this is a new webpage of learning vue js ok. If you want to learn vue, please lean it now guys.'
        }
    },
}
</script>