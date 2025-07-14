<template>
    <section class="pb-[92px]">
        <div class="container">
            <div class="flex">
                <div class="w-20% border-r-1 border-[rgba(0,0,0,0.3)]">
                    <ul class="pt-10 pr-[91px] flex flex-col gap-y-4 ">
                        <li v-for="category in categories" :key="category"><a class="text-[16px] font-normal leading-6 text-black font-popo" href="">{{ category }}</a></li>
                    </ul>
                </div>
                
                <div class="w-80% pt-10 pl-[45px]">
                 <a href=""> <img :src="banner" alt="" class="h-full"></a>
                </div>
                
            </div>
        </div>
      </section>

</template>

<script setup>
 import { ref } from "vue";
 import banner from '../assets/Images/banner.png'
 
 


 
 const categories = ref([
    'Woman’s Fashion',
    'Men’s Fashion',
    'Electronics',
    'Home & Lifestyle',
    'Medicine',
    'Sports & Outdoor',
    'Baby’s & Toys',
    'Groceries & Pets',
    'Health & Beaut',
 ])
</script>
