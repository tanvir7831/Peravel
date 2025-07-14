<template>
   <section class=" pt-[60px] pb-[140px]">
      <div class="container">
        <div class="flex justify-between">
         <div class="w-[670px] h-[781px]">
            <img :src="img" alt="" class="w-full h-full">
        </div>
        <!-- Right side with form -->
        <div class="w-[371px] flex flex-col justify-center ">
            <h2 class="text-[36px] font-medium font-Inter leading-[30px] pb-6">Create an account</h2>
            <p class="text-[16px] font-popo font-normal leading-6 pb-[48px]">Enter your details below</p>

            <form>
                <div class="pb-10">
                    <input type="text" placeholder="Name" id="name" class="w-full border-b-2 border-[rgba(0,0,0,0.3)] outline-none pb-2">
                </div>
                <div class="pb-10">
                    <input type="text" placeholder="Email or Phone Number" class="w-full border-b-2 border-[rgba(0,0,0,0.3)] outline-none pb-2">
                </div>
                <div class="pb-10">
                    <input type="text" placeholder="Password" class="w-full border-b-2 border-[rgba(0,0,0,0.3)] outline-none pb-2">
                </div>   
            </form>
            <button class="text-[16px] text-white font-popo font-medium leading-6 px-[122px] py-4 bg-[#DB4444] rounded-[4px] items-center ">Create Account</button>


            <div class="pt-4">
                <button class="w-full bg-white border-1  text-gray-700 px-[46px] py-4 rounded-lg flex items-center justify-center hover:bg-gray-100">
                    <img :src="logo" alt="Google logo" class="pr-4">
                    Sign up with Google
                </button>
            </div>

            <div class="text-center pt-8 text-[16px] font-popo font-normal leading-6">
                <p class="text-gray-600">Already have an account?<RouterLink to="/Login" class="!font-medium ml-4 border-b-2 border-[rgba(0,0,0,0.3)] pb-1">Log in</RouterLink></p>
            </div>
        </div>
    </div>

      </div>
      


    

        
   </section>
    


</template>


<script setup> 
import img from '../assets/Images/Side Image.png'
import logo from '../assets/Images/Icon-Google.png'
import Login from '@/pages/Login.vue'




</script>