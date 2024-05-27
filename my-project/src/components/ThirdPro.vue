<template>
    <div>
        <input type="text" @input="onInput">
        <p>{{ myInput }}</p>
    </div>
</template>
<script>
export default {
    data(){
        return {
            myInput : ""
        }
    },
    methods:{
        onInput(e){
            this.myInput = e.target.value;
        }
    }
}
</script>
<style>
    
</style>