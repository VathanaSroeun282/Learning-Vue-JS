<template>
    <div class="bg-gray-100 pt-4 pb-4">
        <div class="text-center max-sm:w-full">
            <h1 class="font-bold text-4xl">{{ dataInfo.title }}</h1>
            <hr class="m-auto w-[70px] my-4 bg-blue-400 pt-[3px]">
            <p class="max-sm:w-[85%] m-auto">{{ dataInfo.subTitle }}</p>
        </div>
        <div class="w-[90%]  m-auto pb-32 max-sm:pb-5">
            <div class="flex flex-wrap">
                <!-- Cart1,2,3,4,5,6 -->
                <div class="w-[50%] max-sm:w-full max-sm:h-full max-sm:my-4 h-[34vh] flex justify-center items-end" v-for="(item, index) in dataInfo.cartData" :key="index">
                    <div class="w-[90%] h-[80%] p-5 bg-white border-gray-300 border rounded-lg flex">
                        <div class="w-[20%] h-full rounded-bl-lg rounded-tl-lg">
                            <!-- <div class="h-16 w-16 my-2  rounded-lg flex justify-center items-center border-2"> -->
                            <div :class="['h-16', 'w-16', 'my-2', 'rounded-lg', 'flex', 'justify-center', 'items-center', 'border-2', item.iconBG, item.iconBorder]">
                                <img class="w-8" :src=item.icon :alt=item.icon>
                            </div>
                        </div>
                        <div class="w-[80%] h-full rounded-tr-lg rounded-br-lg">
                            <h2 class="text-2xl font-medium">{{ item.heading }}</h2>
                            <p class="text-lg my-2">{{ item.description }}</p>
                            <button class="text-lg my-4 flex">
                                <span class="text-blue-800">{{ item.btn.btnName }}</span>
                                <img class="w-7 mx-2 mt-[2px]" :src=item.btn.btnIcon :alt=item.btn.btnName>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-[85%] max-sm:w-full m-auto flex max-sm:flex-col-reverse">
            <div class="w-[55%] max-sm:w-[90%] max-sm:py-4 m-auto h-[80%] flex justify-center items-center">
                <div class="w-[90%] max-sm:w-[89.5%] h-[90%]">
                    <h2 class="text-2xl font-bold">{{ dataInfo.moreServicesData.title }}</h2>
                    <p class="text-lg my-4">{{ dataInfo.moreServicesData.subTitle }}</p>
                    <div class="flex flex-wrap w-full h-[62.5%]">
                        <div class="w-[50%] max-sm:w-full mb-4 flex items-end  " v-for="(item, index) in dataInfo.moreServicesData.description" :key="index">
                            <div class="w-[15%] h-[90%] flex justify-center" >
                                <!-- icon -->
                                <img class="w-7 h-7 mt-1" :src=item.icon :alt="item.text.headerText">
                            </div>
                            <div class="w-[85%] h-[90%]">
                                <!-- title and sub title of the description -->
                                 <h3 class="text-xl ">{{ item.text.headerText }}</h3>
                                 <p class="text-sm font-normal">{{ item.text.footerText }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-[45%] max-sm:w-full h-[80%] flex justify-center items-center">
                <div class="w-[90%] max-sm:w-[81%]  h-[90%]">
                    <img class="shadow-md max-sm:rounded-md" :src=dataInfo.moreServicesData.moreSersImg :alt=dataInfo.moreServicesData.title>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { dataInformation } from '../data/myData';
export default {
    data(){
        return{
            dataInfo : dataInformation.servicesData
        }
    }  
}
</script>