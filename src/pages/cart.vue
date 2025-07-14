<template>
  <section class="pt-[181px] pb-[108px]">
    <div class="container">
      <div class="flex justify-between px-10 py-6 mb-10 bg-white rounded-lg shadow-custom">
        <span class="w-[30%]">Product</span>
        <span class="w-[30%]">Price</span>
        <span class="w-[30%]">Quantity</span>
        <span class="w-[10%]">Subtotal</span>
      </div>
      <div v-for="(cart,index) in carts" class="flex items-center justify-between px-10 py-6 mb-10 bg-white rounded-lg shadow-custom">
          <div class="w-[30%] flex items-center">
            <img :src="cart.img" alt="" class="w-[50px] h-[40px]" />
            <p class="text-[14px] font-popo font-normal leading-6 pl-5">{{ cart.name }}</p>
          </div>
          <div class="w-[30%]">
            <span class="text-[14px] font-popo font-normal leading-6">${{ cart.price }}</span>
          </div>
          <div class="w-[30%]">
            <div class="flex w-[72px] h-[44px] border-1 border-[rgba(0,0,0,0.4)] rounded-[4px] items-center px-3 py-[6px] space-x-4 ">
           
              <p>{{ formatCount(cart.count) }}</p>
              <div class="flex flex-col">
                <i @click="increment(index)" class="fa-solid fa-angle-up cursor-pointer"></i>
                <i @click="decrement(index)" class="fa-solid fa-angle-down cursor-pointer "></i>
              </div>
            </div>
          </div>
          <div class="w-[10%]">
            <span class="text-[14px] font-popo font-normal leading-6">$850</span>
          </div>
      </div>

      <div class="flex justify-between pb-[112px]">
          <div class="px-[48px] py-4 border-1 border-[rgba(0,0,0,0.5)] rounded-[4px]">
            <RouterLink to ='/'><h3 class="text-[16px] font-popo font-medium leading-6">Return To Shop</h3></RouterLink>
          </div>
          <div class="px-[48px] py-4 border-1 border-[rgba(0,0,0,0.5)] rounded-[4px]">
            <h3 class="text-[16px] font-popo font-medium leading-6">Update Cart</h3>
          </div>
      </div>
      <div class="w-[470px] ml-auto px-6 py-8 border-2 border-black rounded-[4px]">
         <h2 class="text-[20px] font-popo font-medium leading-7 pb-6">Cart Total</h2>
      <div class="flex justify-between text-[16px] font-popo font-normal leading-6 pb-4 border-b-1 border-[rgba(0,0,0,0.3)]">
        <p>Subtotal:</p>
        <span>$1750</span>
      </div>
      <div class="flex justify-between text-[16px] font-popo font-normal leading-6 pb-4 pt-4 border-b-1 border-[rgba(0,0,0,0.3)]">
        <p>Shipping:</p>
        <span>Free</span>
      </div>
      <div class="flex justify-between text-[16px] font-popo font-normal leading-6 pb-4 pt-4">
        <p>Total:</p>
        <span>$1750</span>
      </div>
      <div class="text-center">
        <router-link to="/BillingDetails">
          <button class="text-[16px] text-white font-popo font-medium leading-6 px-[48px] py-4 bg-[#DB4444] rounded-[4px] items-center">
            Procees to checkout
          </button>
        </router-link>
      </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import image1 from "../assets/Images/tv.png";
import {ref} from 'vue';
const carts = ref([
  {
    id : 1,
    name: 'LCD Monitor',
    price:850,
    img: image1,
    count: 1
  },
  {
    id : 1,
    name: 'Samsung TV',
    price:950,
    img: image1,
    count: 1
  }
])
const increment = (index)=> {
  if(carts.value[index].count <10){
    carts.value[index].count++

  }
}
const decrement = (index)=>{
  if (carts.value[index].count > 1){
    carts.value[index].count--
  }
}
 const formatCount = (count)=> {
    return count < 10 ? '0' + count : count;
  }


</script>
