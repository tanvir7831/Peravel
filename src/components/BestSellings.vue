<template>
    <section class="pb-[150px]">
        <div class="container">
            <div class="flex items-center justify-between pb-[60px]">
                <h1 class="text-[36px] text-black font-semibold font-Inter leading-12">Best Selling Products</h1>
                
                <div>
                 <button class="font-medium text-white font-popo text-[16px] leading-6 bg-[#DB4444] px-[48px] py-4 rounded-[4px]"><a href="">View All</a></button>
            </div>
            </div>
            
            <div class="flex justify-between">
                <div v-for="newaArrivales in 4" :key="newaArrivales" class="w-[270px]">
                <div class="bg-[#F5F5F5] px-[40px] py-10 rounded-[4px] flex justify-center relative">
                    <img :src="jacket" alt="">
                </div>
                <div class="pt-4">
                    <h1 class="text-[16px] text-black font-medium font-popo leading-6 pb-2">The north coat</h1>
                    <p class="text-[16px] text-[#DB4444] font-medium font-popo leading-6 space-x-3 pb-2">
                        <span>$220</span>
                        <del class="text-[rgba(0,0,0,0.5)]">$360</del>
                        </p>
                    
                    <div class="flex items-center">
                        <p class="space-x-1 text-[#FFAD33] pr-2">
                            <i v-for="star in 5" :key="star" class=" fa-solid fa-star"></i>
                            <span class="text-[14px] font-semibold font-popo leading-[21px] text-[rgba(0,0,0,0.5)]">(80)</span>
                        </p>
                    </div>
                </div>
                </div>
            </div>
            
        </div>
    </section>

</template>


<script setup>
    import jacket from '../assets/Images/jacket.png'

</script>