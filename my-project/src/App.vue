<template>
  <div>
      <!-- <HelloWorld /> -->
      <!-- <FirstPro /> -->
      <!-- <ConditionRender /> -->
      <!-- <SecondPro /> -->
      <!-- <ThirdPro /> -->
      <!-- <ThirdPro_v2 /> -->
      <!-- <FourthPro /> -->
      <!-- <FivethPro /> -->
      <!-- <SixthPro /> -->
      <!-- <BindingDataTOAttribute /> -->
      <LoopVue />
  </div>
</template>

<script>
import BindingDataTOAttribute from './components/BindingDataTOAttribute.vue';
import FivethPro from './components/FivethPro.vue';
import FourthPro from './components/FourthPro.vue';
import LoopVue from './components/LoopVue.vue';
import SixthPro from './components/SixthPro.vue';

// import ThirdPro from './components/ThirdPro.vue';
// import ThirdPro_v2 from './components/ThirdPro_v2.vue';
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
      // ThirdPro_v2
      // ThirdPro
      // SecondPro
      // FirstPro,
      // ConditionRender
      // FourthPro
      // FivethPro
      // SixthPro
      // BindingDataTOAttribute
      LoopVue
    }
}
</script>
