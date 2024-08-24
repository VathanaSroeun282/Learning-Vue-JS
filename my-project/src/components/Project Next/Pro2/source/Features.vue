<template>
    <div>
        <div class="text-center py-4">
            <h1 class="font-bold text-4xl">{{ dataInfo.title }}</h1>
            <hr class="m-auto w-[70px] my-4 bg-blue-400 pt-[3px]">
            <p class="max-sm:w-[80%] max-sm:flex">{{ dataInfo.subTitle }}</p>
        </div>
        <div class="flex max-sm:block gap-2 bg-slate-100">
            <!-- Cart Left -->
            <div class="w-[50%] max-sm:w-full h-[100vh] max-sm:h-[80vh] flex justify-center items-center">
                <div class="w-[90%]">
                    <!-- Cart1,2,3 -->
                    <div class="max-sm:w-[95%] flex justify-center items-center w-[75%] h-[20vh] p-4 m-auto bg-blue-100 rounded-lg transition-all delay-400 my-4" v-for="(dataFT, index) in dataInfo.cartData" :key="index">
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
            <div class="w-[50%] max-sm:w-full pb-16">
                <div class="m-auto w-[85%] h-full flex justify-center items-center">
                    <img class="rounded-xl shadow-md" :src=dataInfo.feartureImg alt="f-1">
                </div>
            </div>
        </div>
        <!-- Feature Detail -->
        <div class="w-full h-[85vh] flex justify-center items-center mt-20">
            <div class="w-[90%] max-sm:w-full h-[80%] flex max-sm:flex-col-reverse justify-between items-center">
                <div class="w-[45%] max-sm:w-[85%] max-sm:-mb-10 max-sm:mt-5">
                    <img class="rounded-xl shadow-md" :src=dataInfo.feartureDetail.cart1.cartImg alt="c-1">
                </div>
                <div class="w-[50%] max-sm:w-[94%] h-full flex justify-center items-center">
                    <div class="w-[90%] h-[50%] max-sm:h-full bg-blue-100 transition-all delay-200 rounded-xl p-8 max-sm:p-5">
                        <h2 class="text-3xl font-bold ">{{ dataInfo.feartureDetail.cart1.heading }}</h2>
                        <p class="my-2">{{ dataInfo.feartureDetail.cart1.detail }}</p>
                        <button class="font-bold px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg">{{ dataInfo.feartureDetail.cart1.btnName }}</button>
                    </div>
                </div>
            </div>
        </div>
        <!--  -->
        <div class="w-full h-[90vh] max-sm:h-[100vh] max-sm:py-5 flex justify-center items-center bg-slate-100">
            <div class="w-[90%] max-sm:w-full h-[90%] flex justify-between items-center flex-row-reverse max-sm:flex-col-reverse">
                <div class="w-[45%] max-sm:w-full">
                    <img class="rounded-xl shadow-md max-sm:w-[85%]  max-sm:m-auto" :src=dataInfo.feartureDetail.cart2.cartImg alt="c-2">
                </div>
                <div class="w-[50%] max-sm:w-full h-[100%] max-sm:h-[60%] py-7 flex justify-center items-center">
                    <div class="w-[90%] max-sm:w-[85%] h-[54%] max-sm:h-full bg-blue-100 transition-all delay-200 rounded-xl p-7">
                        <h2 class="text-3xl font-bold ">{{ dataInfo.feartureDetail.cart2.heading }}</h2>
                        <p class="my-2">{{ dataInfo.feartureDetail.cart2.detail }}</p>
                        <p v-for="(icon, key, index) in dataInfo.feartureDetail.cart2.IconDetailOption" :key="index" class="flex items-center py-1">
                            <img class="w-5 mt-[0.5px]" :src="icon" :alt="key">
                            <span class="px-2">{{ dataInfo.feartureDetail.cart2.detailOption[key] }}</span>
                        </p>
                        <button class="font-bold my-5 max-sm:my-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg">{{ dataInfo.feartureDetail.cart1.btnName }}</button>
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
