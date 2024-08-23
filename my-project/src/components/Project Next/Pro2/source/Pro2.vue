<template>
    <header class="sticky top-0 bg-white">
      <nav class="flex items-center justify-between w-full h-24 shadow-lg z-10 px-4 md:px-10">
        <!-- Logo and Title -->
        <div class="flex items-center h-full gap-1">
          <img class="h-10 mt-1" :src="logo" alt="logo" />
          <p class="text-2xl md:text-4xl font-bold">QuickStart</p>
        </div>
  
        <!-- Mobile Menu Button -->
        <div class="md:hidden flex items-center">
          <button @click="isOpen = !isOpen" type="button" class="text-gray-500 hover:text-black focus:outline-none">
            <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path v-if="isOpen" fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
              <path v-if="!isOpen" fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
            </svg>
          </button>
        </div>
  
        <!-- Desktop Navigation Links -->
        <ul class="hidden md:flex gap-4 md:gap-10 justify-center items-center">
          <li
            class="hover:opacity-85 hover:cursor-pointer"
            v-for="(item, index) in myData"
            :key="index"
          >
            <span v-if="item.isButton">
              <router-link :to="item.path">
                <button
                  class="px-3 md:px-5 py-1 md:py-2 rounded-full hover:bg-blue-600 bg-blue-400 text-white text-sm md:text-base"
                >
                  {{ item.name }}
                </button>
              </router-link>
            </span>
            <span v-else>
              <router-link
                :to="item.path"
                class="text-black hover:text-blue-400 transition hover:transition text-base md:text-lg"
                active-class="text-blue-400 font-semibold"
              >
                {{ item.name }}
              </router-link>
            </span>
          </li>
        </ul>
  
        <!-- Mobile Navigation Links -->
        <ul :class="isOpen ? 'block' : 'hidden'" class="md:hidden absolute top-24 left-0 w-full bg-white shadow-lg">
          <li
            class="hover:opacity-85 hover:cursor-pointer border-b border-gray-300"
            v-for="(item, index) in myData"
            :key="index"
          >
            <span v-if="item.isButton">
              <router-link :to="item.path">
                <button
                  class="block px-3 py-2 text-blue-400 bg-white text-sm md:text-base w-full text-left"
                >
                  {{ item.name }}
                </button>
              </router-link>
            </span>
            <span v-else>
              <router-link
                :to="item.path"
                class="block px-3 py-2 text-black hover:text-blue-400 text-base md:text-lg w-full text-left"
                active-class="text-blue-400 font-semibold"
              >
                {{ item.name }}
              </router-link>
            </span>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </template>
  
  <script>
  import { quickStartLink } from "../router/quickstart";
  import { dataInformation } from "../data/myData";
  import logo from "../img/logo.png";
  
  export default {
    data() {
      return {
        isOpen: false,
        dataInfo: dataInformation,
        myData: quickStartLink,
        logo: logo,
      };
    },
  };
  </script>  