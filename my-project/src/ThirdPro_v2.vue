<template>
    <div>
        <input type="text" v-model="myInput">
        <p>{{ myInput }}</p>
    </div>
</template>
<script>
export default {
    data(){
        return {
            myInput : ""
        }
    }
}
</script>
<style>
    input{
        border: 1px solid black;
    }
</style>