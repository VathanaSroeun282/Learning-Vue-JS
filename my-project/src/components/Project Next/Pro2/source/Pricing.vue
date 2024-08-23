<template>
    <div class="bg-gray-100 py-4">
        <div class="text-center">
            <h1 class="font-bold text-4xl">{{ dataInfo.title }}</h1>
            <hr class="m-auto w-[70px] mt-4 bg-blue-400 pt-[3px]">
            <p class="py-4">{{ dataInfo.subTitle }}</p>
        </div>
        <div class="w-[85%] m-auto">
            <div class="flex justify-between items-center">
                <div class="w-[32%] h-auto bg-blue-100 rounded-md px-5 pb-8" v-for="(value, index) in dataInfo.textStyle" :key="index">
                    <div class="w-full my-5 text-end">
                        <span :class="{
                            'bg-blue-600 text-white font-bold px-3 py-1 rounded-lg': true,
                            'invisible': !value.isButton
                        }">
                            Popular
                        </span>
                    </div>
                    <div class=" w-[90%] m-auto">
                        <h1 class="text-xl font-medium">{{ value.cartTitle }}</h1>
                        <p class="my-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, consequuntur.</p>
                    </div>
                    <div>
                        <p class="h-[5rem] flex items-center mx-3">
                            <span class='text-5xl font-bold text-sky-600 self-start'>$</span>
                            <span class="text-6xl font-bold text-sky-600">{{ value.cartPrice }}</span>
                            <span class="texl-xl font-medium">/ month</span>
                        </p>
                    </div>
                    <div class="w-full flex flex-col items-center">
                        <div class="my-3 w-[90%]">
                            <span v-if="value.isButton">
                                <button class="w-full h-12 transition-all delay-100 bg-blue-600 text-white rounded-md border border-black">
                                    <span class="text-base font-medium">Start a free trial</span>
                                </button>
                            </span>
                            <span v-else>
                                <button class="w-full h-12 transition-all delay-100 hover:bg-blue-600  hover:text-white rounded-md border border-black">
                                    <span class="text-base font-medium">Start a free trial</span>
                                </button>
                            </span>
                            <p class="text-center my-2">No credit card required</p>
                        </div>
                        <ul class="w-[90%]">
                            <li class="flex font-medium my-4" v-for="(subValue, subIndex) in value.iconCartList">
                                <img class="h-7" :src=subValue.icon :alt="subValue.icon">
                                <span :class="['text-gray-500','mx-2', subValue.colorStyle]">{{ subValue.text }}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <FrequencyQues />
    <Testimonails />
</template>
<script>
import { dataInformation } from '../data/myData';
import FrequencyQues from './FrequencyQues.vue';
import Testimonails from './Testimonails.vue';
// import Testiminails from './Testiminails.vue';
export default {
    data(){
        return{
            dataInfo : dataInformation.pricingData,
        }
    },
    components : {
        FrequencyQues
        ,Testimonails
    }
}
</script>