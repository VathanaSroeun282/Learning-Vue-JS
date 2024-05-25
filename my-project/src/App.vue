<template>
  <div>
      <!-- <HelloWorld /> -->
      <FirstPro />
      <!-- <ConditionRender /> -->
  </div>
</template>

<script>
// import ConditionRender from './components/ConditionRender.vue';
import FirstPro from './components/FirstPro.vue';
export default {
    data (){
      return {
        count : 0,
      }
    },
    methods: {
      clickMe(){
        count ++;
      }    
    },
    components :{
      FirstPro,
      // ConditionRender
    }
}
</script>
