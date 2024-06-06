<template>
    <div class="w-full h-[100vh] bg-green-50">
        <a :href="links">Click Here</a>
    </div>
</template>
<script>
export default {
    data() {
        return {
            links: "myLink.vue"
        }
    },
}
</script>