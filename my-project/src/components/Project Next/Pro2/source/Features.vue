<template>
    <div>
        <div class="text-center py-4">
            <h1 class="font-bold text-4xl">{{ dataInfo.title }}</h1>
            <hr class="m-auto w-[70px] my-4 bg-blue-400 pt-[3px]">
            <p>{{ dataInfo.subTitle }}</p>
        </div>
        <div class="flex gap-2 bg-slate-100">
            <!-- Cart Left -->
            <div class="w-[50%] h-[100vh] flex justify-center items-center">
                <div class="w-[90%]">
                    <!-- Cart1,2,3 -->
                    <div class="flex justify-center items-center w-[75%] h-[20vh] p-4 m-auto bg-blue-100 rounded-lg transition-all delay-400 my-4" v-for="(dataFT, index) in dataInfo.cartData" :key="index">
                        <div class="p-2 bg-white rounded-full self-start mt-4 shadow-md">
                            <img class="w-16 " :src=dataFT.icon :alt=dataFT.title>
                         </div>
                        <div class="px-5">
                            <h2 class="text-xl">{{ dataFT.title }}</h2>
                            <p class="text-justify my-2">{{ dataFT.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Cart right -->
            <div class="w-[50%]">
                <div class="m-auto w-[85%] h-full flex justify-center items-center">
                    <img class="rounded-xl shadow-md" :src=dataInfo.feartureImg alt="f-1">
                </div>
            </div>
        </div>
        <!-- Feature Detail -->
        <div class="w-full h-[85vh] flex justify-center items-center">
            <div class="w-[90%] h-[80%] flex justify-between items-center">
                <div class="w-[45%]">
                    <img class="rounded-xl shadow-md" :src=dataInfo.feartureDetail.cart1.cartImg alt="c-1">
                </div>
                <div class="w-[50%] h-[100%]  flex justify-center items-center">
                    <div class="w-[90%] h-[50%] bg-blue-100 transition-all delay-200 rounded-xl p-8">
                        <h2 class="text-3xl font-bold ">{{ dataInfo.feartureDetail.cart1.heading }}</h2>
                        <p class="my-2">{{ dataInfo.feartureDetail.cart1.detail }}</p>
                        <button class="font-bold my-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg">{{ dataInfo.feartureDetail.cart1.btnName }}</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full h-[90vh] flex justify-center items-center bg-slate-100">
            <div class="w-[90%] h-[90%] flex justify-between items-center flex-row-reverse">
                <div class="w-[45%]">
                    <img class="rounded-xl shadow-md" :src=dataInfo.feartureDetail.cart2.cartImg alt="c-2">
                </div>
                <div class="w-[50%] h-[100%]  flex justify-center items-center">
                    <div class="w-[90%] h-[54%] bg-blue-100 transition-all delay-200 rounded-xl p-7">
                        <h2 class="text-3xl font-bold ">{{ dataInfo.feartureDetail.cart2.heading }}</h2>
                        <p class="my-2">{{ dataInfo.feartureDetail.cart2.detail }}</p>
                        <p v-for="(icon, key, index) in dataInfo.feartureDetail.cart2.IconDetailOption" :key="index" class="flex items-center py-1">
                            <img class="w-5 mt-[0.5px]" :src="icon" :alt="key">
                            <span class="px-2">{{ dataInfo.feartureDetail.cart2.detailOption[key] }}</span>
                        </p>
                        <button class="font-bold my-5 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg">{{ dataInfo.feartureDetail.cart1.btnName }}</button>
                    </div>
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
            dataInfo : dataInformation.feartureData
        }
    }    
}
</script>
