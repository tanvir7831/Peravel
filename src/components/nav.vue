<template>
    <header class="bg-[#000] py-3">
        <div class="container">
            <div class="flex">
                <div class="w-[70%] text-right">
                    <p class="text-[14px] text-[#FAFAFA] font-normal leading-5 font-popo">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <a href="" class=" font-semibold text-[14px] text-[#FAFAFA] leading-6 pl-2 underline">ShopNow</a></p>
                </div>
                <div class="w-[30%] text-right">
                    <select name="" id="" class="text-[14px] text-[#FAFAFA] font-normal leading-5 font-popo outline-0">
                        <option value="" class="bg-black">English</option>
                        <option value="" class="bg-black">Bangla</option>
                    </select>

                </div>
            </div>

        </div>
    </header>
    <nav class="pt-[40px] pb-4 border-b-[1px] border-[rgba(25,25,25,0.3)]"> 
        <div class="container">
            <div class="flex items-center">
                <div class="w-[23%] ">
                    <img :src="logo" alt="">
                </div>
                <div class="w-[40%]">
                    <ul class="flex gap-[48px]">
                        <li><RouterLink to="/" class="text-[16px] text-[rgb(0,0,0)] font-normal leading-6 font-popo hover:border-b-2 hover:border-[rgba(0,0,0,0.5)] pb-1">Home</RouterLink></li>
                        <li><a href="" class="text-[16px] text-[#000000] font-normal leading-6 font-popo hover:border-b-2 hover:border-[rgba(0,0,0,0.5)] pb-1">About</a></li>
                        <li><a href="" class="text-[16px] text-[#000000] font-normal leading-6 font-popo hover:border-b-2 hover:border-[rgba(0,0,0,0.5)] pb-1">Contact</a></li>
                        <li><RouterLink to="/Registration" href="" class="text-[16px] text-[#000000] font-normal leading-6 font-popo hover:border-b-2 hover:border-[rgba(0,0,0,0.5)] pb-1">Sign Up</RouterLink></li>
                    </ul>
                    
                </div>
                <div class="w-[25%]">
                    <form action="" class="relative ">
                        <input type="text" placeholder="What are you looking for?" class="bg-[#F5F5F5] py-2 pl-5 pr-3 w-full rounded-[4px] outline-none">
                        <button class="absolute right-3 top-2"><i class="fa-solid fa-magnifying-glass"></i></button>
                    </form>
                </div>
                <div class="w-[12%]">
                    <div class="flex justify-end gap-3">
                        <p>
                            <RouterLink to="/wishlist"><i class="fa-regular fa-heart text-[18px] text-black w-[32px] h-[32px] rounded-full text-center !leading-[32px]  hover:bg-[#DB4444] hover:text-white"></i></RouterLink>
                        </p>
                        
                        <p class="relative ">
                            <RouterLink to="/cart"><i class="fa-regular fa-cart-shopping text-[18px] text-black  w-[32px] h-[32px] rounded-full text-center !leading-[32px]  hover:bg-[#DB4444] hover:text-white"></i>
                            <span class="text-[12px] w-[16px] h-[16px] rounded-full text-center !leading-[16px] bg-[#DB4444] text-white inline-block font-popo  absolute top-0 right-0">2</span></RouterLink>
                        </p>
                      
                        
                        <p class="w-[32px]">
                            <RouterLink to="Profile">
                                <i class="fa-light fa-user text-[18px] text-black  w-[32px] h-[32px] rounded-full text-center !leading-[32px]  hover:bg-[#DB4444] hover:text-white"></i>
                            </RouterLink>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup>
    import logo from '../assets/Images/logo.png'
import cart from '@/pages/cart.vue'
import Registration from '@/pages/Registration.vue'

</script>