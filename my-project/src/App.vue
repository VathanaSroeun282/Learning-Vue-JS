<!-- <template>
  <h1>Hello App!</h1>
  <p>
    <strong>Current route path:</strong> {{ $route.fullPath }}
  </p>
  <nav>
    <RouterLink to="/">Go to Home</RouterLink>
    <RouterLink to="/about">Go to About</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template> -->

<template>
    <div>
        <NavBar />
        <Home />
    </div>
</template>

<script>
import Home from './components/Link To File v2/Home.vue';
import NavBar from './components/Link To File v2/NavBar.vue';

// import BindingDataTOAttribute from './components/BindingDataTOAttribute.vue';
// import FivethPro from './components/FivethPro.vue';
// import FourthPro from './components/FourthPro.vue';
//import LoopVue from './components/LoopVue.vue';
// import SixthPro from './components/SixthPro.vue';
// import ThirdPro from './components/ThirdPro.vue';
// import ThirdPro_v2 from './components/ThirdPro_v2.vue';
// import SecondPro from './components/SecondPro.vue';
// import ConditionRender from './components/ConditionRender.vue';
// import FirstPro from './components/FirstPro.vue';
// import LinkTo from './components/LinkTo.vue';
export default {
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
      // LoopVue
      // LinkTo
      Home,NavBar
    }
}
</script>
