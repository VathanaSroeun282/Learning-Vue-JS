<template>
  <!-- Container -->
  <div class="w-[95%] max-sm:w-[85%] pb-8 m-auto">
    <hr class="py-5" />
    <!-- footer detail -->
    <div class="w-full flex max-sm:block justify-center">
      <!-- Quick start -->
      <div class="w-[35%] max-sm:w-full max-sm:mb-5">
        <h2 class="text-3xl font-medium mb-10">QuickStart</h2>
        <!-- Details -->
        <div class="mb-5">
          <p>A108 Adam Street</p>
          <p class="mb-3">New York, NY 535022</p>
          <p>Phone: +1 5589 55488 55</p>
          <p>Email: info@example.com</p>
        </div>
        <!-- Icon -->
        <div class="flex gap-4 m-auto">
          <div
            :class="{
              'transition-all hover:cursor-pointer w-10 h-10 flex justify-center items-center text-white rounded-full border-2 border-black': true,
              'border-blue-600': hoveredIcon[key],
            }"
            v-for="(value, key) in footerIcon.icon"
            :key="key"
            @mouseover="handleHover(key, true)"
            @mouseleave="handleHover(key, false)"
          >
            <span v-if="hoveredIcon[key]">
              <img :src="value.blue" class="w-5" :alt="key" />
            </span>
            <span v-else>
              <img :src="value.black" class="w-5" :alt="key" />
            </span>
          </div>
        </div>
      </div>
      <!-- Useful link -->
      <div class="w-[15%] text-stone-600 max-sm:w-full max-sm:mb-5">
        <h2 class="font-bold mb-3 text-black">Useful Links</h2>
        <p class="mb-2">Home</p>
        <p class="mb-2">About us</p>
        <p class="mb-2">Services</p>
        <p class="mb-2">Terms of Services</p>
        <p class="mb-2">Privacy policy</p>
      </div>
      <!-- Our Services -->
      <div class="w-[15%] text-stone-600 max-sm:w-full max-sm:mb-5">
        <h2 class="font-bold mb-3 text-black">Our Services</h2>
        <p class="mb-2">Web Design</p>
        <p class="mb-2">Web Development</p>
        <p class="mb-2">Product Management</p>
        <p class="mb-2">Marketing</p>
        <p class="mb-2">Graphic Design</p>
      </div>
      <!-- Our Newsletter -->
      <div class="w-[33%] max-sm:w-full max-sm:mb-5">
        <h2 class="font-bold mb-3">Our Newsletter</h2>
        <p>
          Subscribe to our newsletter and receive the latest news about our
          products and services!
        </p>
        <div class="mt-4">
          <input
            type="email"
            name="email"
            id="emial"
            class="w-full indent-3 h-12 rounded-3xl border-2 border-blue-400 focus-visible:border-blue-400 relative"
          />
          <button
            class="w-32 rounded-3xl h-12 text-center text-white text-lg absolute right-[53px] hover:transition-all bg-blue-400 hover:bg-blue-600 max-sm:right-9"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
    <hr class="h-1 my-5 w-[98%] m-auto" />
    <!-- sub-footer -->
    <div class="text-center">
      <p>
        © Copyright <span class="font-bold">QuickStart </span>All Rights Reserved
      </p>
    </div>
  </div>
</template>
<script>
import { dataInformation } from "../data/myData";
export default {
  data() {
    return {
      hoveredIcon: {},
      footerIcon: dataInformation.footerData,
    };
  },
  methods: {
    handleHover(key, isHover) {
        this.hoveredIcon[key] = isHover; 
    }
  }
};
</script>
