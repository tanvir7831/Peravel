<template>
     
     <Banner></Banner>
     <NewArrivales></NewArrivales>
     <section class="pt-20 pb-[70px]">
          <div class="container border-b-1 border-[rgba(0,0,0,0.3)]">
               <div class="pb-15">
                    <h1 class="text-[36px] text-black font-semibold font-Inter leading-12 pt-[24px] pb-[40px]">Browse By Category</h1>
               </div>
               <div class="flex pb-[130px] space-x-[30px] ">
                    <div v-for="Category in 6" :key="Category" class="w-1/6 border-1 border-[rgba(0,0,0,0.3)] py-[25px] rounded-[4px] ">
                    <img :src="Cate1" alt="" class="m-auto">
                    <h3 class="text-[16px] font-normal font-popo leading-6 text-center pt-4">Phone</h3>
                    </div>
                    
               </div>
          </div>

     </section>
     <BestSellings></BestSellings>
     <ExploreProduct></ExploreProduct>
    
</template>

<script setup>
     import Nav from '@/components/nav.vue'
     import Footer from '@/components/footer.vue'
     import Banner from '@/components/Banner.vue'
     import NewArrivales from '@/components/NewArrivales.vue'
     import Cate1 from '../assets/Images/Cate1.png'
     import BestSellings from '@/components/BestSellings.vue'
     import ExploreProduct from '@/components/ExploreProduct.vue'
</script>