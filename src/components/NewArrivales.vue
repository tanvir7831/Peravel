<template>
    <section>
        <div class="container border-b-1 border-[rgba(0,0,0,0.3)]">
            <div>
                <h1 class="text-[36px] text-black font-semibold font-Inter leading-12 pt-[24px] pb-[40px]">New Arrivals</h1>
            </div>
            <div class="flex flex-wrap justify-between ">
                <div v-for="product in loadProducts" :key="product.id" class="w-[270px] min-h-[250px] pb-[60px]">
                <div class="bg-[#F5F5F5] px-[40px] py-10 rounded-[4px] flex justify-center relative">
                    <img :src="product.images[0]" alt="">
                    <span class="bg-[#DB4444] text-white font-normal text-[12px] leading-[18ppx] py-1 px-3 absolute left-3 top-3 rounded-[4px]">-{{ Math.round(product.discountPercentage) }}%</span>
                </div>
                <div class="pt-4">
                    <h1 class="text-[16px] text-black font-medium font-popo leading-6 pb-2">{{ product.title }}</h1>
                    <p class="text-[16px] text-[#DB4444] font-medium font-popo leading-6 space-x-3 pb-2">
                        <span>${{ Math.round(product.price - product.price*product.discountPercentage/100)}}</span>
                        <del class="text-[rgba(0,0,0,0.5)]">${{ Math.round(product.price) }}</del>
                        </p>
                    
                    <div class="flex items-center">
                        <p class="space-x-1 text-[#FFAD33] pr-2">
                            <i v-for="star in 5" :key="star" class=" fa-solid fa-star"></i>
                            <span class="text-[14px] font-semibold font-popo leading-[21px] text-[rgba(0,0,0,0.5)]">({{ product.rating }})</span>
                        </p>
                    </div>
                </div>
                </div>
            </div>
            <div class="pt-[40px] text-center pb-[102px]">
                 <button class="font-medium text-white font-popo text-[16px] leading-6 bg-[#DB4444] px-[48px] py-4 rounded-[4px]"><a @click="loadMore">View All Products</a></button>
            </div>
        </div>
    </section>

</template>


<script setup>
    import { ref, onMounted, computed } from 'vue';
    const products = ref([])
    const length = ref(4)
    onMounted(async() => {
        const response = await fetch('https://dummyjson.com/products?limit=40')
        const data = await response.json()
        const allProduct = data.products
        products.value = allProduct.map((items) => items)
    
    })
    
    const loadMore = ()=>{
        if(length.value >= products.value.length)return;
        length.value += 8
    }
    const loadProducts = computed(()=>{
       return products.value.slice(0,length.value) 
    })
</script>