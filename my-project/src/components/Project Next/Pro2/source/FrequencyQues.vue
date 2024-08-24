<template>
    <div class="bg-gray-100">
        <div class="text-center py-5">
            <h1 class="font-bold text-4xl max-sm:w-[85%] m-auto">{{ dataInfo.title }}</h1>
            <hr class="m-auto w-[70px] my-4 bg-blue-400 pt-[3px]">
            <p>{{ dataInfo.subTitle }}</p>
        </div>
        <!------------------------------------------------------>
        <div>  
            <div class="m-auto w-[80%] max-sm:w-[85%] flex justify-between" v-for="(value, key) in dataInfo.question" :key="key">
                <div class="flex flex-wrap items-center w-full border-2 border-stone-400  px-4 py-2 rounded-sm my-2">
                    <div class="flex justify-between w-full items-center py-2">
                        <p :class="{'w-full': true, 'text-blue-500 transition-all delay-75': showAnswer[key]}">
                            {{ value.question }}
                        </p>
                        <button @click="handleClick(key)" :class="{'transition-all delay-50': true, 'rotate-90 transition-all delay-50': showAnswer[key]}">
                            <img :src="showAnswer[key] ? dataInfo.iconDropDown_blue : dataInfo.iconDropDown" :alt="key" class="w-8">
                        </button>
                    </div>

                    <transition name="slide">
                        <p v-if="showAnswer[key]" class="transition-content pb-3">
                            {{ value.answer }}
                        </p>
                    </transition>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { dataInformation } from '../data/myData';

export default {
    data() {
        return {
            dataInfo: dataInformation.frequencyQuesionData,
            showAnswer: {},
        };
    },
    methods: {
        handleClick(key) {
            this.showAnswer[key] = !this.showAnswer[key];
        }
    }
};
</script>

<style>

.slide-enter-active, .slide-leave-active {
    transition: all 0.3s ease;
    overflow: hidden;
}

.slide-enter-from, .slide-leave-to {
    height: 0;
    opacity: 0;
    transform: translateY(-40px);
}

.slide-enter-to, .slide-leave-from {
    height: auto;
    opacity: 1;
    transform: translateY(0);
}
</style>