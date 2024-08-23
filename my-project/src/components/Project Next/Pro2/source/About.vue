<template>
    <div class="py-16 flex items-center w-[88%] m-auto justify-center gap-24">
        <div class="w-[46%]">
            <h2 class="text-xl mb-10 uppercase opacity-40">{{ dataInfo.subTitle }}</h2>
            <h1 class="text-4xl mb-5 font-bold">{{ dataInfo.title }}</h1>
            <p class="italic mb-2">{{ dataInfo.description }}</p>  
            <p class="flex mb-2"><img class="h-6" :src=dataInfo.iconDes alt="icon1">{{ dataInfo.subDescription.sub1 }}</p>
            <p class="flex mb-2"><img class="h-6" :src=dataInfo.iconDes alt="icon2">{{ dataInfo.subDescription.sub2 }}</p>
            <p class="flex mb-2"><img class="h-6" :src=dataInfo.iconDes alt="icon3">{{ dataInfo.subDescription.sub3 }}</p>
            <button class="bg-blue-600 mt-4 w-36 h-10 text-white flex items-center rounded-md gap-2 relative group hover:bg-blue-700"><span class="ml-4">Read more</span> <img class="w-6 transition-all delay-75 absolute right-5 group-hover:right-2" :src=dataInfo.iconBtn alt="arrowright"></button>
        </div>
        <div class="flex justify-between w-[36.5%]">
            <div><img class="w-64 rounded-md" :src=dataInfo.img.img1 alt="img1"></div>
            <div class="flex flex-col justify-between">
                <div><img class="w-64 rounded-md" :src=dataInfo.img.img2 alt="img2"></div>
                <div><img class="w-64 rounded-md" :src=dataInfo.img.img3 alt="img3"></div>
            </div>
        </div>
    </div>
    <div class="flex justify-center gap-32">
        <div v-for="(value, index) in dataInfo.imgClient" :key="index">
            <img :src=value :alt=value class="w-24 grayscale hover:grayscale-0 transition-all delay-75">
        </div>
    </div>
</template>
<script>
import { dataInformation } from './../data/myData';
export default {
    data(){
        return {
            dataInfo : dataInformation.aboutData,
        }
    }
}
</script>