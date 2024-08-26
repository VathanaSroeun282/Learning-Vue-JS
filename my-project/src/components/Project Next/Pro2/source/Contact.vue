<template>
  <div>
    <div class="text-center py-4">
      <h1 class="font-bold text-4xl">{{ contactData.title }}</h1>
      <hr class="m-auto w-[70px] my-4 bg-blue-400 pt-[3px]" />
      <p class="max-sm:w-[85%] max-sm:m-auto">{{ contactData.subTitle }}</p>
    </div>
    <div class="w-[85%] m-auto py-2">
      <div class="max-sm:w-full max-sm:flex-col flex gap-3">
        <!-- right -->
        <div
          class="max-sm:w-full border py-3 shadow-lg rounded-md w-[50%] h-full flex  justify-center items-center"
        >
          <!-- small 1 element -->
          <div class="flex flex-col justify-center items-center">
            <div>
              <img
                :src="contactData.cartInfo[0].icon"
                :alt="contactData.cartInfo[0].cartTitle"
                class="w-12 border-2 rounded-full p-2 border-dotted border-blue-400"
              />
              <!--Img -->
            </div>
            <div class="m-auto  flex flex-col justify-center items-center">
              <h2 class="text-lg font-medium my-2">
                {{ contactData.cartInfo[0].cartTitle }}
              </h2>
              <p>{{ contactData.cartInfo[0].cartSubTitle }}</p>
            </div>
          </div>
        </div>
        <!-- Left -->
        <div class="w-[50%] flex gap-3 max-sm:w-full max-sm:flex-col">
          <div
            class="max-sm:w-full py-3 border flex flex-col justify-center items-center bg-white shadow-lg rounded-md w-[50%] h-full"
          >
            <div>
              <img
                :src="contactData.cartInfo[1].icon"
                :alt="contactData.cartInfo[1].cartTitle"
                class="w-12 border-2 rounded-full p-2 border-dotted border-blue-400"
              />
              <!--Img -->
            </div>
            <div class="flex flex-col justify-center items-center">
              <h2 class="text-lg font-medium my-2">
                {{ contactData.cartInfo[1].cartTitle }}
              </h2>
              <p>{{ contactData.cartInfo[1].cartSubTitle }}</p>
            </div>
          </div>
          <div
            class="max-sm:w-full py-3 border flex flex-col justify-center items-center bg-white shadow-lg rounded-md w-[50%] h-full"
          >
            <div>
              <img
                :src="contactData.cartInfo[2].icon"
                :alt="contactData.cartInfo[2].cartTitle"
                class="w-12 border-2 rounded-full p-2 border-dotted border-blue-400"
              />
              <!--Img -->
            </div>
            <div class="flex flex-col justify-center items-center">
              <h2 class="text-lg font-medium my-2">
                {{ contactData.cartInfo[2].cartTitle }}
              </h2>
              <p>{{ contactData.cartInfo[2].cartSubTitle }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-[85%] m-auto py-2">
        <div class="flex max-sm:w-full max-sm:flex-col gap-3">
            <div class="w-[50%] max-sm:w-full flex justify-center items-center">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6664285.521580393!2d-88.29969084758464!3d35.35451302258123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1skm!2skh!4v1724349276614!5m2!1skm!2skh" 
                        class="w-full h-full max-sm:h-[40vh] rounded-md" 
                        allowfullscreen="" loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
            <div class="w-[50%] max-sm:w-full rounded-md flex justify-center items-center border-2 shadow-md">
                <form action="#" class="w-full h-full p-4 flex flex-col justify-between gap-4">
                    <div class="w-full flex max-sm:flex-col gap-3">
                        <input type="text" class="border-2 indent-3 rounded-sm h-12 w-1/2 max-sm:w-full" name="yourName" placeholder="Your Name">
                        <input type="text" class="border-2 indent-3 rounded-sm h-12 w-1/2 max-sm:w-full" name="yourEmail" placeholder="Your Email">
                    </div>
                    <div class="w-full">
                        <input type="text" class="border-2 rounded-sm h-12 w-full indent-3" name="subject" id="subject" placeholder="Subject">
                    </div>
                    <div>
                        <textarea name="message" id="message" placeholder="Message" class="border-2 rounded-sm h-40 w-full px-3">
                        </textarea>
                    </div>
                    <div class="self-center pb-4 max-sm:pb-0">
                        <button class="rounded-2xl font-bold text-white bg-blue-400 hover:bg-blue-900 py-2 px-4">Sent Message</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import { dataInformation } from "../data/myData";
export default {
  data() {
    return {
      contactData: dataInformation.contacData,
    };
  }
};
</script>
