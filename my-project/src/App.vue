<template>
  <div>
      <!-- <HelloWorld /> -->
      <!-- <FirstPro /> -->
      <!-- <ConditionRender /> -->
      <!-- <SecondPro /> -->
      <!-- <ThirdPro /> -->
      <ThirdPro_v2 />
  </div>
</template>

<script>
import ThirdPro from './components/ThirdPro.vue';
import ThirdPro_v2 from './components/ThirdPro_v2.vue';

// import SecondPro from './components/SecondPro.vue';

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
      ThirdPro_v2
      // ThirdPro
      // SecondPro
      // FirstPro,
      // ConditionRender
    }
}
</script>
