<template>
    <div>
        <h1 :class="myStyle">{{ myTitle }}</h1>
        <button @click="handleColorS">Click me</button>
    </div>
</template>
<script>
export default {
    data(){
        return {
            myStyle : 'titleStyleRed',
            myTitle : 'My Title Right here',
            myStatus : true
        }
    },
    methods:{
        handleColorS(){
            if(this.myStatus == true){
                this.myStyle = 'titleStyleBlue';
                this.myStatus = !this.myStatus;
            }
            else{
                this.myStyle = 'titleStyleRed';
                this.myStatus = !this.myStatus;
            }
        }
    }

}
</script>
<style>
.titleStyleRed{
    font-weight: bold;
    color: red;
}    
.titleStyleBlue{
    font-weight: bold;
    color : blue;
}
</style>