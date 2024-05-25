<template>
    <div>
        <button v-on:click="clickMe">My MEme</button>
        <p v-if="meme">MEmEMEMEME</p>
        <p v-else>This is mememmememem</p>
    </div>
</template>
<script>
export default {
    data (){
        return {
            meme : true,
        }
    },
    methods : {
        clickMe(){
            this.meme =! this.meme;
        }
    }
}
</script>