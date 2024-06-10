<!-- <template>
  <div>
    <header>
      <nav class="w-full h-16 flex items-center pr-2 bg-gray-400 justify-end">
        <ul>
          <li v-for="item in hyperLink" :key="item.path">
            <router-link :to="item" class="text-xl">{{ item.name }}</router-link>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <router-view></router-view>    
    </main>   
  </div>
</template>

<script>
import Home from './Link To File/Home.vue';
import About from './Link To File/About.vue';
import Contact from './Link To File/Contact.vue';

export default {
  data() {
    return {
      hyperLink: [
        { name: 'Home', path: '/Home' },
        { name: 'Contact', path: '/Contact' },
        { name: 'About', path: '/About' }
      ],
      pageTitle: 'This is Home Page!',
      pageDescription: 'Hello kon papa! This is a new webpage for learning Vue.js. If you want to learn Vue, please start now!'
    }
  },
  components: {
    Home, Contact, About
  }
}
</script> -->

<template>
  <div>
    <routerLink to="/">Home</routerLink>
    <routerLink to="/About">About</routerLink>
    <routerLink to="/Contact">Contact</routerLink>
  </div>
  <routerView></routerView>
</template>