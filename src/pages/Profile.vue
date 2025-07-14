<template>
    <section class="pt-[80px] pb-[180px]"> 
        <div class="container">
            <h3 class="text-right text-[14px] font-normal font-popo leading-[21px] pb-[80px]">Welcome <span class="text-[#DB4444]">Mr Tanvir</span></h3>
        

            <div class="flex">
                <div class="w-[300px] text-[16px] font-popo font-medium leading-6 space-y-3">
                    <p>My Account</p>
                    <p>My Orders</p>
                    <RouterLink to="Wishlist">My WishList</RouterLink>
                </div>

                <div class="w-[870px] px-[80px] py-10 shadow-custom rounded-[4px]">
                    <h4 class="text-[20px] font-medium font-popo leading-[28px] text-[#DB4444] pb-4">Edit Your Profile</h4>
                    <div class="flex justify-between flex-wrap ">
                        <div class="w-[330px] pb-[24px]">                          
                        <label class="text-[16px]  font-popo font-normal leading-6 pb-2 block" >First Name</label>
                         <input type="text" placeholder="Sharfu" class="w-full pl-4 py-[13px] bg-[#F5F5F5] rounded-[4px] outline-none placeholder:text-[16px] placeholder:font-popo placeholder:font-normal placeholder:leading-6">                 

                        </div>
                        <div class="w-[330px] pb-[24px]">
                            <label class="text-[16px] font-popo font-normal leading-6 pb-2 block" >Last Name</label>
                            <input type="text" placeholder="Uddin" class="w-full pl-4 py-[13px] bg-[#F5F5F5] rounded-[4px] outline-none placeholder:text-[16px] placeholder:font-popo placeholder:font-normal placeholder:leading-6"> 
                        </div>
                        <div class="w-[330px]">
                            <label class="text-[16px]  font-popo font-normal leading-6 pb-2 block" >Email</label>
                            <input type="email" placeholder="tanvir10bd@gmail.com" class="w-full pl-4 py-[13px] bg-[#F5F5F5] rounded-[4px] outline-none placeholder:text-[16px] placeholder:font-popo placeholder:font-normal placeholder:leading-6"> 
                        </div>
                        <div class="w-[330px]">
                            <label class="text-[16px]  font-popo font-normal leading-6 pb-2 block" >Address</label>
                            <input type="text" placeholder="Kingston, 5236, United State" class="w-full pl-4 py-[13px] bg-[#F5F5F5] rounded-[4px] outline-none placeholder:text-[16px] placeholder:font-popo placeholder:font-normal placeholder:leading-6"> 
                        </div>
                        <div class="w-full pt-6">
                            <label class="text-[16px]  font-popo font-normal leading-6 pb-2 block" >Password Changes</label>
                            <input type="text" placeholder="Current Password" class="w-full pl-4 py-[13px] bg-[#F5F5F5] rounded-[4px] outline-none placeholder:text-[16px] placeholder:font-popo placeholder:font-normal placeholder:leading-6 "> 
                        </div>
                        <div class="w-full pt-6">
                            <input type="text" placeholder="New Password" class="w-full pl-4 py-[13px] bg-[#F5F5F5] rounded-[4px] outline-none placeholder:text-[16px] placeholder:font-popo placeholder:font-normal placeholder:leading-6"> 
                        </div>
                        <div class="w-full pt-6 pb-6">
                            <input type="text" placeholder="Confirm New Password" class="w-full pl-4 py-[13px] bg-[#F5F5F5] rounded-[4px] outline-none placeholder:text-[16px] placeholder:font-popo placeholder:font-normal placeholder:leading-6 "> 
                        </div>     
                    </div>
                    <div class="flex justify-end items-center space-x-[32px]">
                        <span>Cancel</span>
                         <button class="px-[48px] py-4 text-[16px] font-popo font-medium leading-6 rounded-[4px] bg-[#DB4444] text-white">Place Order</button>
                    </div>


                </div>
            </div>

         </div>
    </section>




</template>


<script setup>




</script>