<template>
  <section class="pb-[716px]">
    <div class="container">
      <div>
        <h1
          class="text-[20px] text-black font-normal font-popo leading-[26px] pt-[80px] pb-[60px]"
        >
          Wishlist (4)
        </h1>
      </div>
      <div class="flex flex-wrap justify-between">
        <div
          v-for="product in 4"
          :key="product"
          class="w-[270px] min-h-[250px] pb-[60px] relative"
        >
          <div
            class="bg-[#F5F5F5] px-[40px] py-10 rounded-[4px] flex justify-center relative"
          >
            <img :src="Image" alt="" />
            <span
              class="bg-[#DB4444] text-white font-normal text-[12px] leading-[18ppx] py-1 px-3 absolute left-3 top-3 rounded-[4px]"
              >-40%</span
            >

            <div
              class="w-[34px] h-[34px] bg-white leading-[34px] rounded-[50%] text-black absolute top-[12px] right-[12px] text-center"
            >
              <i class="fa-regular fa-trash-can"></i>
            </div>
          </div>
          <div class="pt-4">
            <h1 class="text-[16px] text-black font-medium font-popo leading-6 pb-2">
              laptop
            </h1>
            <p
              class="text-[16px] text-[#DB4444] font-medium font-popo leading-6 space-x-3 pb-2"
            >
              <span>$110</span>
              <del class="text-[rgba(0,0,0,0.5)]">$200</del>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import Image from "../assets/Images/laptop.png";

import Wishlist from "@/pages/Wishlist.vue";
</script>
