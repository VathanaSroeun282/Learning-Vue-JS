<template>
  <div>
      <!-- <HelloWorld /> -->
      <!-- <FirstPro /> -->
      <!-- <ConditionRender /> -->
      <SecondPro />
  </div>
</template>

<script>
import SecondPro from './components/SecondPro.vue';

// import ConditionRender from './components/ConditionRender.vue';
// import FirstPro from './components/FirstPro.vue';
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
      SecondPro
      // FirstPro,
      // ConditionRender
    }
}
</script>
