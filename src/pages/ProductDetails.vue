<template>
    <section class="pt-[109px] pb-[58px]">
        <div class="container">
            <div class="flex justify-between pb-[92px]">
                <div class="w-[170px]">
                    <div class="w-full bg-[#F5F5F5] px-[18px] py-[22px] rounded-[4px] mb-4">
                        <img :src="MainImg1" alt="">
                    </div>
                    <div class="w-full bg-[#F5F5F5] px-[18px] py-[22px] rounded-[4px] mb-4">
                        <img :src="MainImg2" alt="">
                    </div>
                    <div class="w-full bg-[#F5F5F5] px-[18px] py-[22px] rounded-[4px]">
                        <img :src="MainImg3" alt="">
                    </div>
                </div>
                <div class="w-[500px] bg-[#F5F5F5] px-7 py-[64px] rounded-[4px]">
                    <img :src="ProductM" alt="">
                </div>
                <div class="w-[373px]">
                    <h3 class="text-[24px] font-Inter font-semibold leading-6 pb-4">Havic HV G-92 Gamepad</h3>
                    <div class="flex items-center pb-4">
                        <p class="space-x-1 text-[#FFAD33] pr-2">
                            <i v-for="star in 5" :key="star" class=" fa-solid fa-star"></i>
                            <span class="text-[14px] font-semibold font-popo leading-[21px] text-[rgba(0,0,0,0.5)]">(80)</span>
                        </p>
                    </div>
                    <span class="text-[24px] font-Inter font-normal leading-6">$192.00</span>
                    <p class="text-[14px] font-popo font-normal leading-[21px] pt-6 pb-6 border-b-1 border-[rgba(0,0,0,0.3)]">PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.</p>
                    <div class="pt-6 pb-6">
                        <p class="text-[20px] font-popo font-normal leading-[20px]">Colours :</p>
                    </div>
                    <div class="flex items-center text-[20px] font-inter font-normal leading-[20px] pb-6">
                        <p class="text-[20px] font-popo font-normal leading-[20px]">Size:</p>
                        <div class="W-[32px]  border-1 border-[rgba(0,0,0,0.5)] rounded-[4px] px-2 py-[8px] ml-6 mr-4">XS</div>
                        <div class="w-[32px]  border-1 border-[rgba(0,0,0,0.5)] rounded-[4px] px-3 py-[8px] mr-4">S</div>
                        <div class="W-[32px] bg-[#DB4444] text-white rounded-[4px] px-[10px] py-[9px] mr-4">M</div>
                        <div class="w-[32px]  border-1 border-[rgba(0,0,0,0.5)] rounded-[4px] px-3 py-[8px] mr-4">L</div>
                        <div class="W-[32px]  border-1 border-[rgba(0,0,0,0.5)] rounded-[4px] px-2 py-[8px] mr-4">XL</div>
                        <div class="W-[32px]  border-1 border-[rgba(0,0,0,0.5)] rounded-[4px] px-2 py-[8px] mr-4">XXL</div>
                    </div>
                    <div class="flex justify-between">
                      <div class=" flex items-center border-1 border-r-none border-[rgba(0,0,0,0.5)] rounded-[4px] ">
                        <div class="text-[20px] font-inter font-normal leading-[20px] px-4 py-2 border-r border-[rgba(0,0,0,0.5)]">-</div>
                        <div class="text-[20px] font-inter font-normal leading-[20px] px-[34px] py-2">2</div>
                        <div class="text-[20px] font-inter font-normal leading-[20px] px-4 py-2 bg-[#DB4444] text-white rounded-tr-[3px] rounded-br-[3px]">+</div>
                      </div>
                    </div>
                </div>
            </div>
            <div class="w-[735px] pb-[58px]">
                <h2 class="text-[36px] font-popo font-semibold leading-[40px] pb-4" >Havic HV G-92 Gamepad</h2>
                <p class="text-[16px] font-popo font-normal leading-[24px] pb-10">The St. Louis Meramec Canoe Company was founded bAlfred Wickett in 1922. Wickett had previously worked for the Old Town Canoe Co from 1900 to 1914. Manufacturing of the classic  wooden canoes in Valley Park, Missouri ceased in 1978.</p>

                <h4 class="text-[24px] font-popo font-semibold leading-[32px] pb-[20px]">Features</h4>
                <span class="text-[16px] font-popo font-normal leading-[24px]">The St. Louis Meramec Canoe Company was founded by Alfred Wickett in 1922. Wickett had previously worked for the Old Town Canoe Co from 1900 to 1914. Manufacturing of the classic wooden canoes in Valley Park, Missouri ceased in 1978.</span>
                <h4 class="text-[24px] font-popo font-semibold leading-[32px] pt-[38px] pb-[20px]">Keywords</h4>
                <div class="flex">
                    <div class="flex border border-[#00000024] rounded-full px-[14px] py-2 mr-2">
                         <p class=" text-[12px] text-[#4B5563] font-normal font-popo leading-4"><i class="fa-regular fa-stars pr-1"></i>men's fashion</p>
                    </div>
                    <div class="flex border border-[#00000024] rounded-full px-[14px] py-2 mr-2">
                         <p class=" text-[12px] text-[#4B5563] font-normal font-popo leading-4"><i class="fa-regular fa-stars pr-1"></i>winter hat</p>
                    </div>
                    <div class="flex border border-[#00000024] rounded-full px-[14px] py-2 mr-2">
                         <p class=" text-[12px] text-[#4B5563] font-normal font-popo leading-4"><i class="fa-regular fa-stars pr-1"></i>colorful accessory</p>
                    </div>
                    <div class="flex border border-[#00000024] rounded-full px-[14px] py-2 mr-2">
                         <p class=" text-[12px] text-[#4B5563] font-normal font-popo leading-4"><i class="fa-regular fa-stars pr-1"></i>warm headwear</p>
                    </div>
                </div>
            </div>
            <div class="flex justify-between">
                <div v-for="newaArrivales in 4" :key="newaArrivales" class="w-[270px]">
                <div class="bg-[#F5F5F5] px-[40px] py-10 rounded-[4px] flex justify-center relative">
                    <img :src="img" alt="">
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
   
    import MainImg1 from '../assets/Images/Product1 (2).png'
    import MainImg2 from '../assets/Images/Product2.png'
    import MainImg3 from '../assets/Images/Product3.png'
    import ProductM from '..//assets/Images/ProductM.png'
    import img from '../assets/Images/tv.png'   
   
    
    
    
    
</script>