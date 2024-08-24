<template>
    <div class="w-full py-9 to-blue-300">
        <div class="text-center">
            <h1 class="text-4xl font-bold">{{ dataInfo.heroData.title }}</h1>
            <p class=" my-4">{{ dataInfo.heroData.subTitle }}</p>
        </div>
        <div class="flex items-center justify-center gap-2">
            <router-link :to="dataBtn1.path"><button class="px-5 py-2 rounded-full hover:bg-blue-600 bg-blue-500 text-white ">{{ dataBtn1.name }}</button></router-link>
            <button class="flex items-center"><img :src=dataInfo.heroData.btnWatch.icon class="w-8 " alt="play-icon"><span class="font-bold hover:text-blue-600 hover:transition">{{ dataInfo.heroData.btnWatch.title }}</span></button>
        </div>
        <div>
            <img class="m-auto w-[400px] max-sm:w-[250px]" :src=heroImg alt="Hero Img">
        </div>
        <div class="flex justify-center max-sm:block w-[98%] m-auto">
            <div class="flex  justify-center items-center md:w-full max-sm:w-full my-3  w-[30%]" v-for="(item, index) in heroFeartureServices" :key="index">
                <div class="w-[70px] h-[65px] hover:bg-blue-600 bg-blue-400 hover:cursor-pointer flex justify-center items-center">
                    <img :src=item.img class="w-9" alt="img1">
                </div>
                <div class="px-2 w-[70%]">
                    <h2 class="font-bold">{{ item.title }}</h2>
                    <p class="text-justify max-sm:text-sm max-sm:my-1 ">{{ item.description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { dataInformation } from '../data/myData';
import { quickStartLink } from '../router/quickstart';
import heroImg from './../img/hero-services-img.webp';
export default {
    data(){
        return {
            dataInfo : dataInformation,
            dataBtn1 : quickStartLink.find(route => route.isButton), 
            heroImg  : heroImg,
            heroFeartureServices : dataInformation.heroData.heroFeature
        }
    },
}
</script>