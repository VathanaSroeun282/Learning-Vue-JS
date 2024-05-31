<template>
    <div>
        <p >My ID : {{ myID }}</p>
        <button class="bg-blue-700 text-white rounded-sm" @click="myID++" :disable="!myInfo">fetch myInfo</button>
        <p v-if="!myInfo">Loading...</p>
        <pre v-else>
            {{ myInfo }}
        </pre>
    </div>
</template>
<script>
export default {
    data(){
        return {
            myID : 1,
            myInfo : null
        }
    },
    methods: {
        async fetchMyInfo (){
            this.myInfo = null
            const res  = await fetch(
                `https://jsonplaceholder.typicode.com/todos/${this.myID}`
            );
            this.myInfo = await res.json();
        },
        mounted(){
            this.fetchMyInfo()
        },
        watch: {
            myInfo(){
                this.fetchMyInfo()
            }
        }
    }
}
</script>