<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { ref, onMounted, onBeforeUnmount } from "vue";
import { dataInformation } from "../data/myData";
library.add(faStar);
const testimonialsData = dataInformation.testimonialsData;
const currentSlide = ref(0);

function startAutoSlide() {
  setInterval(() => {
    currentSlide.value =
      (currentSlide.value + 1) % testimonialsData.cartInfo.length;
  }, 4000);
}

onMounted(() => {
  startAutoSlide();
});

onBeforeUnmount(() => {
  clearInterval(startAutoSlide);
});
</script>

<template>
  <div class="pb-4 bg-gray-100">
    <div class="text-center py-10">
      <h1 class="font-bold text-4xl">{{ testimonialsData.title }}</h1>
      <hr class="m-auto w-[70px] my-4 bg-blue-400 pt-[3px]" />
      <p class="max-sm:w-[85%] m-auto">{{ testimonialsData.subTitle }}</p>
    </div>
    <div class="w-full">
      <div class="w-[600px] max-sm:w-full h-[70vh] m-auto overflow-hidden">
        <!-- Slider Container -->
        <div
          class="flex transition-transform duration-700"
          :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
        >
          <div
            v-for="(cart, index) in testimonialsData.cartInfo"
            :key="index"
            class="w-full flex-shrink-0 px-6 flex justify-center mb-2"
          >
            <div
              class="w-[450px] max-sm:w-[90%] py-5 flex flex-col justify-between shadow-md bg-slate-100 px-10 rounded-md"
            >
              <div class="flex justify-center py-4">
                <font-awesome-icon
                  :icon="['fas', 'star']"
                  style="color: #ffd43b"
                  v-for="n in 5"
                  :key="n"
                />
              </div>
              <div class="font-medium text-lg italic text-center pb-5">
                <p>{{ cart.cartDescription }}</p>
              </div>
              <div class="flex justify-center pt-4">
                <img class="rounded-full w-24" :src="cart.cartImg" :alt="n" />
              </div>
              <div class="text-center font-bold py-4">
                <h1 class="text-xl">{{ cart.cartTitle }}</h1>
                <p class="font-medium">{{ cart.cartSubTitle }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Indicator Dots -->
        <div class="flex justify-center mt-2 space-x-2">
          <span
            v-for="(cart, index) in testimonialsData.cartInfo"
            :key="index"
            @click="currentSlide = index"
            :class="{
              'w-3 h-3 rounded-full cursor-pointer': true,
              'bg-gray-800': currentSlide === index,
              'bg-gray-300': currentSlide !== index,
            }"
            class="w-3 h-3 rounded-full cursor-pointer"
          ></span>
        </div>
      </div>
    </div>
  </div>
</template>
