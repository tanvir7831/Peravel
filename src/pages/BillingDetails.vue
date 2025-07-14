<template>
    <section class="pt-[181px] pb-[188px]">
        <div class="container">
            <div class="flex justify-between">
                <div class="w-[470px]">  
                    <h3 class=" text-[36px] font-Inter font-medium leading-[30px] pb-[48px]">Billing Details</h3>                  
                    <div class=" pb-8">
                        <label class="text-[16px] text-[#00000076] font-popo font-normal leading-6 pb-2 block" >First Name<span class="text-[#DB4444]">*</span></label>
                         <input type="text" class="w-full h-[50px] bg-[#F5F5F5] rounded-[4px] outline-none pl-5">
                    </div>
                    <div class=" pb-8">
                        <label class="text-[16px] text-[#00000076] font-popo font-normal leading-6 pb-2 block" >Company Name</label>
                         <input type="text" class="w-full h-[50px] bg-[#F5F5F5] rounded-[4px] outline-none pl-5">
                    </div>
                    <div class=" pb-8">
                        <label class="text-[16px] text-[#00000076] font-popo font-normal leading-6 pb-2 block" >Street Address<span class="text-[#DB4444]">*</span></label>
                         <input type="text" class="w-full h-[50px] bg-[#F5F5F5] rounded-[4px] outline-none pl-5">
                    </div>
                    <div class=" pb-8">
                        <label class="text-[16px] text-[#00000076] font-popo font-normal leading-6 pb-2 block" >Apartment, floor, etc. (optional)</label>
                         <input type="text" class="w-full h-[50px] bg-[#F5F5F5] rounded-[4px] outline-none pl-5">
                    </div>
                    <div class=" pb-8">
                        <label class="text-[16px] text-[#00000076] font-popo font-normal leading-6 pb-2 block" >Town/City<span class="text-[#DB4444]">*</span></label>
                         <input type="text" class="w-full h-[50px] bg-[#F5F5F5] rounded-[4px] outline-none pl-5">
                    </div>
                    <div class=" pb-8">
                        <label class="text-[16px] text-[#00000076] font-popo font-normal leading-6 pb-2 block" >Phone Number<span class="text-[#DB4444]">*</span></label>
                         <input type="number" class="w-full h-[50px] bg-[#F5F5F5] rounded-[4px] outline-none pl-5 [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none
                          [&::-webkit-outer-spin-button]:appearance-none">
                    </div>
                    <div class=" pb-8">
                        <label class="text-[16px] text-[#00000076] font-popo font-normal leading-6 pb-2 block" >Email Address<span class="text-[#DB4444]">*</span></label>
                         <input type="email" class="w-full h-[50px] bg-[#F5F5F5] rounded-[4px] outline-none pl-5">
                    </div>
                </div>

                <div class="w-[527px] pt-[110px]">
                    <div class="w-[422px] flex items-center justify-between pb-8">
                       <div class="flex items-center">
                         <img :src="image1" alt="" class="w-[50px] h-[40px]">
                        <p class=" text-[16px] font-popo font-normal leading-6 pl-6">LCD Monitor</p>
                       </div>
                        <div>
                            <span>$1170</span>
                        </div>
                    </div>
                    <div class="w-[422px] flex items-center justify-between pb-8">
                       <div class="flex items-center">
                         <img :src="image2" alt="" class="w-[50px] h-[40px]">
                        <p class=" text-[16px] font-popo font-normal leading-6 pl-6">Comportable chair</p>
                       </div>
                        <div>
                            <span>$870</span>
                        </div>
                    </div>
                    <div class="w-[422px]">

                    <div class="flex justify-between text-[16px] font-popo font-normal leading-6 pb-4 border-b-1 border-[rgba(0,0,0,0.3)]">
                    <p>Subtotal:</p>
                    <span>$1750</span>
                    </div>
                    <div class="flex justify-between text-[16px] font-popo font-normal leading-6 pb-4 pt-4  border-b-1 border-[rgba(0,0,0,0.3)]">
                        <p>Shipping:</p>
                        <span>Free</span>
                    </div>
                    <div class="flex justify-between text-[16px] font-popo font-normal leading-6 pb-8  pt-4 ">
                        <p>Total:</p>
                        <span>$1750</span>
                    </div>
                        




















                    </div>
                    <div class="text-[16px] font-popo font-normal leading-6 pb-8">
                        <p class="pb-8">Stripe</p>
                        <span>Cash on delivery</span>
                    </div>

                    <div class="flex justify-between pb-8">
                        <input type="text" placeholder="Coupon Code" class="w-[300px] border rounded-[4px] pl-6 py-4 placeholder:text-[16px] placeholder:font-popo placeholder:font-normal placeholder:leading-6 outline-none">
                        <button class="px-[48px] py-4 text-[16px] font-popo font-medium leading-6 rounded-[4px] bg-[#DB4444] text-white">Apply Coupon</button>
                    </div>
                    <button class="px-[48px] py-4 text-[16px] font-popo font-medium leading-6 rounded-[4px] bg-[#DB4444] text-white">Place Order</button>
                                           

                </div>
            </div>
            
        </div>
    </section>

</template>

 <script setup>
    import image1 from '../assets/Images/tv.png'
    import image2 from '../assets/Images/chair.png'

</script>