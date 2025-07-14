<template>
    <footer class="bg-black pt-[80px]">
        <div class="container">
            <div class="flex gap-x-[87px] pb-25">
                <div class="w-[25%]">
                    <a href="">
                        <img :src="logo" alt="">
                    </a>
                    <h4 class="text-[20px] font-medium font-popo leading-[28px] text-[#FAFAFA] pt-[24px]">Subscribe</h4>
                    <p class="text-[16px] font-regular font-popo leading-6 text-[#FAFAFA] pt-[24px]">Get 10% off your first order</p>
                </div>

                <div class="w-[24%]">
                    <h4 class="text-[20px] font-medium font-popo leading-[28px] text-[#FAFAFA]">Support</h4>
                    <p class="text-[16px] font-regular font-popo leading-6 text-[#FAFAFA] pt-[24px]"><a href="">111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</a>
                    </p>
                    
                    <p class="text-[16px] font-regular font-popo leading-6 text-[#FAFAFA] pt-4">
                        <a href="">exclusive@gmail.com</a>
                    </p>
                    <p class="text-[16px] font-regular font-popo leading-6 text-[#FAFAFA] pt-4">
                        <a href="">+88015-88888-9999</a>
                    </p>
                    
                    
                    
                </div>
                <div class="w-[16%]">
                    <h4 class="text-[20px] font-medium font-popo leading-[28px] text-[#FAFAFA]">Account</h4>
                    <p class="text-[16px] font-regular font-popo leading-6 text-[#FAFAFA] pt-[24px]"><a href="">My Account</a>
                    </p>
                    <p class="text-[16px] font-regular font-popo leading-6 text-[#FAFAFA] pt-[24px]"><a href="">Login / Register</a></p>
                    <p class="text-[16px] font-regular font-popo leading-6 text-[#FAFAFA] pt-4">
                        <a href="">Cart</a>
                    </p>
                   
                    <p class="text-[16px] font-regular font-popo leading-6 text-[#FAFAFA] pt-4">
                        <a href="">Wishlist</a>
                    </p>
                </div>
                
                <div class="w-[15%]">
                    <h4 class="text-[20px] font-medium font-popo leading-[28px] text-[#FAFAFA]">Quick Link</h4>
                    <p class="text-[16px] font-regular font-popo leading-6 text-[#FAFAFA] pt-[24px] "><a href="">Privacy Policy</a>
                    </p>
                    <p class="text-[16px] font-regular font-popo leading-6 text-[#FAFAFA] pt-[24px] "><a href="">Terms Of Use</a></p>
                    <p class="text-[16px] font-regular font-popo leading-6 text-[#FAFAFA] pt-4">
                        <a href="">FAQ</a>
                    </p>
                   
                    <p class="text-[16px] font-regular font-popo leading-6 text-[#FAFAFA] pt-4">
                        <a href="">Contact</a>
                    </p>
                </div>
                
                <div class="w-[20%]">
                    <h4 class="text-[20px] font-medium font-popo leading-[28px] text-[#FAFAFA]">Download App</h4>
                    <div class="flex pt-[24px] gap-[10px] items-center">
                        <div class="lest_logo">
                        <img :src="scan" alt="">
                    </div>
                    <div class="right_logo space-y-[10px] flex flex-col">
                        <a href=""><img :src="playstore" alt="" ></a>
                        <a href=""><img :src="appstore" alt=""></a>
                    </div>
                    </div>
                    <div class="secial_logo pt-[24px] space-x-[24px]">
                        <a href=""><i class="fa-brands fa-facebook-f text-[18px] text-white"></i></a>
                        <a href=""><i class="fa-brands fa-twitter text-[18px] text-white"></i></a>
                        <a href=""><i class="fa-brands fa-instagram text-[18px] text-white"></i></a>
                        <a href=""><i class="fa-brands fa-linkedin-in text-[18px] text-white"></i></a>
                    </div>
                </div>
                

                
                
            </div>
           
        </div>
        <div class="border-t-1 border-[#1d1d1d]">
            <div class="container">
                <p class="text-center text-[#393939] text-[16px] font-normal font-popo leading-6 pt-4 pb-[24px]">&copy;Copyright Rimel 2022. All right reserved</p>
            </div>
        </div>

    </footer>

</template>

<script setup>
    import logo from '../assets/Images/footerlogo.png'
    import scan from '../assets/Images/Qrcode 1.png'
    import playstore from '../assets/Images/playstorelogo.png'
    import appstore from '../assets/Images/appstorelogo.png'
    

</script>