<template>
    <section class=" pt-[60px] pb-[140px]">
     <div class="container">
        <div class="flex justify-between">
         <div class="w-[670px] h-[750px]">
            <img :src="img" alt="" class="w-full h-full">
        </div>
        <!-- Right side with form -->
        <div class="w-[371px] flex flex-col justify-center ">
            <h2 class="text-[36px] font-medium font-Inter leading-[30px] mb-6">Log in to Exclusive</h2>
            <p class="text-[16px] font-popo font-normal leading-6 pb-[48px]">Enter your details below</p>


            <form>
                <div class="pb-10">
                    <input type="text" placeholder="Email or Phone Number" class="w-full border-b-2 border-[rgba(0,0,0,0.3)] outline-none pb-2">
                </div>
                <div class="pb-10">
                    <input type="text" placeholder="Password" class="w-full border-b-2 border-[rgba(0,0,0,0.3)] outline-none pb-2">
                </div>   
            </form>
            <div class="flex justify-between items-center">
                <button class="text-[16px] text-white font-popo font-medium leading-6 px-[48px] py-4 bg-[#DB4444] rounded-[4px] items-center">Log in</button>
                <a href="" class="text-[16px] font-popo font-normal leading-6 text-[#DB4444]">Forget Password?</a>

            </div>
        </div>
    </div>
     </div>

        
   </section>

</template>

<script setup>
import img from '../assets/Images/Side Image.png'

</script>