<script setup>
</script>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation } from 'swiper/modules';
import "swiper/css";

import "swiper/css/scrollbar";

import "../assets/swiper.css";
import "../assets/clientfeedmedia.css"

export default {    
    components: {
        Swiper,
        SwiperSlide,
        Navigation,
        Pagination
    },
    setup() {
        return {
            modules: [Pagination, Navigation],
        };
    },
}
</script>

<template>
    <!--  -->
    <swiper :pagination="{
        type: 'fraction',
    }" :slidesPerView="1" :spaceBetween="10" :scrollbar="false" :navigation="true" :modules="modules" class="mySwiper">
        <swiper-slide>
            <div class="client h-[613px] w-[100%] z-[100] relative">
                <div class="back backmedia"></div>
                <h2 class="textFeed text-[32px] text-[left] font-[600] ml-[50px] ">Easy Export</h2>
                <div class="clienFeed h-[100%] w-[100%] flex z-[100]">

                    <div class="clientWrp pl-[150px] h-[80%] z-[100] w-[55%] flex items-center justify-between">
                        <img class="imgFeed  h-[393px] w-[630px]" src="../assets/slider2.png" alt="">
                    </div>

                    <div class="clientSecWrp h-[80%] z-[100] w-[45%]  flex flex-col ">
                        <div class=" pl-[100px] ml-[0px] clientfeed-p mt-[30px] flex flex-col items-start">
                            <h2 class="text-[39px] text-[#fff] font-[700] ">{{ $t('panels.products')}}</h2>
                            <p class="pFeed text-[left] text-[#BFC8D8] text-[16px] w-[80%] mt-[10px]">
                                {{ $t('panels.solarHelp')}}
                            </p>
                            <div class="scro hidden">
                                <router-link to="/product/1">
                                    <button
                                        class="bg-[#FED700] w-[max-content] left ml-[10px] px-[5px] text-[13px] mt-[10px] py-[2px]">Water
                                        pump</button>
                                </router-link>
                                <router-link to="/product/2">
                                    <button
                                        class="bg-[#FED700] w-[max-content] left ml-[10px] px-[5px] text-[13px] mt-[10px] py-[2px]">CCTV</button>
                                </router-link>
                                <router-link to="/product/3">
                                    <button
                                        class="bg-[#FED700] w-[max-content] left ml-[10px] px-[5px] text-[13px] mt-[10px] py-[2px]">Fish
                                        feeder</button>
                                </router-link>
                                <router-link to="/product/4">
                                    <button
                                        class="bg-[#FED700] w-[max-content] left ml-[10px] px-[5px] text-[13px] mt-[10px] py-[2px]">Ongrid</button>
                                </router-link>
                                <router-link to="/product/5">
                                    <button
                                        class="bg-[#FED700] w-[max-content] left ml-[10px] px-[5px] text-[13px] mt-[10px] py-[2px]">Solar
                                        Traffic Lights</button>
                                </router-link>
                                <router-link to="/product/6">
                                    <button
                                        class="bg-[#FED700] w-[max-content] left ml-[10px] px-[5px] text-[13px] mt-[10px] py-[2px]">Splasher</button>
                                </router-link>
                                <router-link to="/product/6">
                                    <button
                                        class="bg-[#FED700] w-[max-content] left ml-[10px] px-[5px] text-[13px] mt-[10px] py-[2px]">Power
                                        Generators</button>
                                </router-link>
                            </div>
                            <div class="flex flex-wrap">
                                <router-link to="/product/1">
                                    <button
                                        class="bg-[#FED700] clientfeed-btn left ml-[10px] px-[30px] mt-[10px] py-[10px]">Water
                                        pump</button>
                                </router-link>
                                <router-link to="/product/2">
                                    <button
                                        class="bg-[#FED700] clientfeed-btn left ml-[10px] px-[30px] mt-[10px] py-[10px]">CCTV</button>
                                </router-link>
                                <router-link to="/product/3">
                                    <button
                                        class="bg-[#FED700] clientfeed-btn left ml-[10px] px-[30px] mt-[10px] py-[10px]">Fish
                                        feeder</button>
                                </router-link>
                                <router-link to="/product/4">
                                    <button
                                        class="bg-[#FED700] clientfeed-btn left ml-[10px] px-[30px] mt-[10px] py-[10px]">Ongrid</button>
                                </router-link>
                                <router-link to="/product/5">
                                    <button
                                        class="bg-[#FED700] clientfeed-btn left ml-[10px] px-[30px] mt-[10px] py-[10px]">Solar
                                        Traffic Lights</button>
                                </router-link>
                                <router-link to="/product/6">
                                    <button
                                        class="bg-[#FED700] clientfeed-btn left ml-[10px] px-[30px] mt-[10px] py-[10px]">Splasher</button>
                                </router-link>
                                <router-link to="/product/6">
                                    <button
                                        class="bg-[#FED700] clientfeed-btn left ml-[10px] px-[30px] mt-[10px] py-[10px]">1
                                        and 2 Kilowatt Solar Power Generator</button>
                                </router-link>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </swiper-slide>

        <swiper-slide>
            <div class="client h-[613px] w-[100%] z-[100] relative">
                <div class="back backmedia"></div>
                <h2 class="textFeed text-[32px] text-[left] font-[600] ml-[50px] ">Easy Export</h2>
                <div class="clienFeed h-[100%] w-[100%] flex z-[100]">

                    <div class="clientWrp pl-[150px] h-[80%] z-[100] w-[55%] flex items-center justify-between">
                        <img class="imgFeed  h-[393px] w-[630px]" src="../assets/slider1.JPG" alt="">
                    </div>

                    <div class="clientSecWrp h-[80%] z-[100] w-[45%]  flex flex-col ">
                        <div class="pl-[100px] ml-[0px] clientfeed-p mt-[30px] flex flex-col items-start">
                            <h2 class="text-[39px] text-[#fff] font-[700] ">{{ $t('panels.courses')}}</h2>
                            <p class="pFeed text-[left] text-[#BFC8D8] text-[19px] w-[80%] mt-[10px]">{{ $t('panels.industry')}}</p>
                            <router-link to="/education">
                                <button class="bg-[#FED700] px-[30px] mt-[30px] py-[10px]">{{ $t('panels.courses')}}</button>
                            </router-link>
                        </div>

                    </div>

                </div>
            </div>
        </swiper-slide>

        <swiper-slide>
            <div class="client h-[613px] w-[100%] z-[100] relative">
                <div class="back backmedia"></div>
                <h2 class="textFeed text-[32px] text-[left] font-[600] ml-[50px] ">Easy Export</h2>
                <div class="clienFeed h-[100%] w-[100%] flex z-[100]">

                    <div class="clientWrp pl-[150px] h-[80%] z-[100] w-[55%] flex items-center justify-between">
                        <img class="imgFeed  h-[393px] w-[max-content]" src="../assets/seminar.jpg" alt="">
                    </div>

                    <div class="clientSecWrp h-[80%] z-[100] w-[45%]  flex flex-col ">
                        <div class="pl-[100px] ml-[0px] clientfeed-p mt-[30px] flex flex-col items-start">
                            <h2 class="text-[39px] text-[#fff] font-[700] ">{{ $t('panels.seminars')}}</h2>
                            <p class="pFeed text-[left] text-[#BFC8D8] text-[19px] w-[80%] mt-[10px]">
                                {{ $t('panels.aboutSeminars')}}
                            </p>
                            <router-link to="/education">
                                <button class="bg-[#FED700] px-[30px] mt-[30px] py-[10px]">{{ $t('panels.courses')}}</button>
                            </router-link>
                        </div>

                    </div>

                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="client h-[613px] w-[100%] z-[100] relative">
                <div class="back back22 backmedia"></div>
                <h2 class="textFeed text-[32px] text-[left] font-[600] ml-[50px] ">Esy Export Office</h2>
                <div class="clienFeed h-[100%] w-[100%] flex z-[100]">

                    <div class="clientWrp pl-[150px] h-[80%] z-[100] w-[55%] flex items-center justify-between">
                        <img class="imgFeed ay h-[393px] w-[max-content]" src="../assets/office2.jpg" alt="">
                    </div>

                    <div class="clientSecWrp h-[80%] z-[100] w-[45%]  flex flex-col ">
                        <div class="pl-[100px] ml-[0px] clientfeed-p mt-[30px] flex flex-col items-start">
                            <p class="pFeed text-[left] text-[#BFC8D8] text-[19px] w-[80%] mt-[10px]">
                                <img class="ay" src="@/assets/office.jpg" alt="">
                            </p>

                        </div>

                    </div>

                </div>
            </div>
        </swiper-slide>



    </swiper></template>

<style scoped>.textFeed {
    text-align: left !important;
}

.back {
    background: #012465;
    height: 613px;
    width: 856px;
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: 0;
}</style>