<template>
  <section>
    <div class="container">
      <div class="flex items-center justify-center pb-[88px]">
        <h1 class="text-[36px] text-black font-semibold font-Inter leading-12">
          Explore Our Products
        </h1>
        <div></div>
      </div>

      <div class="flex flex-wrap justify-between">
        <div
          v-for="Product in loadProducts"
          :key="Product.id"
          class="w-[270px] min-h-[250px] pb-[60px]"
        >
          <div
            class="bg-[#F5F5F5] px-[40px] py-10 rounded-[4px] flex justify-center relative h-[250px]"
          >
            <img :src="Product.images[0]" alt="" />
          </div>
          <div class="pt-4">
            <h1 class="text-[16px] text-black font-medium font-popo leading-6 pb-2">
              {{ Product.title }}
            </h1>

            <div class="flex items-center">
              <p class="text-[16px] text-[#DB4444] font-medium font-popo leading-6 pr-2">
                <span>${{ Product.price }}</span>
              </p>

              <p class="space-x-1 text-[#FFAD33] pr-2 text-base leading-none">
                <i v-for="star in 5" :key="star" class="text-[15px] fa-solid fa-star"></i>
                <span
                  class="text-[14px] font-semibold font-popo leading-[21px] text-[rgba(0,0,0,0.5)]"
                  >({{ Product.rating }})</span
                >
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center pb-[75px]">
        <button
          class="font-medium text-white font-popo text-[16px] leading-6 bg-[#DB4444] px-[48px] py-4 rounded-[4px]"
        >
          <a @click="loadMore">View All Products</a>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";

const products = ref([]);
const length = ref(8);

onMounted(async () => {
  const response = await fetch("https://dummyjson.com/products?limit=50");
  const data = await response.json();
  const allProduct = data.products;
  products.value = allProduct.map((item) => item);
});

const loadMore = () => {
  if (length.value >= products.value.length) return;
  length.value += 8;
};

const loadProducts = computed(() => {
  return products.value.slice(0, length.value);
});
</script>
