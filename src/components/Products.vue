<script setup>
</script>
<script>
import store from "../store";

export default {
    data() {
        return {
            panels: store.state.panels,
            check: false,
            filter: false,
            filter2: false,
        };
    },
    methods: {
        checkFunc() {
            this.check = !this.check;
        },
        filterFunc() {
            this.filter = !this.filter;
        },
        filterFunc2() {
            this.filter2 = !this.filter2;
        },
    },
};
</script>

<template>
    <div class="productBlock min-h-[600px] w-[100%] bg-[#012465] mt-[0px]">
        <div class="h-[100%] w-[100%] flex">
            <div class="filterProduct w-[385px] h-[max-content] sticky top-[70px] pt-[51px] pl-[80px]">
                <ul class="">
                    <li class="text-[#fff] mb-[20px]">Product</li>

                    <button @click="checkFunc" class="mb-[12px] flex items-center">
                        <div class="h-[16px] w-[16px] border-[1px] border-solid border-[#4269E2] rounded-[2px]"></div>
                        <p class="text-[#fff] ml-[12px]">Water pump</p>
                    </button>

                    <button @click="checkFunc" class="mb-[12px] flex items-center">
                        <div class="h-[16px] w-[16px] border-[1px] border-solid border-[#4269E2] rounded-[2px]"></div>
                        <p class="text-[#fff] ml-[12px]">Ongrid</p>
                    </button>
                    <button @click="checkFunc" class="mb-[12px] flex items-center">
                        <div class="h-[16px] w-[16px] border-[1px] border-solid border-[#4269E2] rounded-[2px]"></div>
                        <p class="text-[#fff] ml-[12px]">CCTV</p>
                    </button>
                    <button @click="checkFunc" class="mb-[12px] flex items-center">
                        <div class="h-[16px] w-[16px] border-[1px] border-solid border-[#4269E2] rounded-[2px]"></div>
                        <p class="text-[#fff] ml-[12px]">Splasher</p>
                    </button>
                    <button @click="checkFunc" class="mb-[12px] flex items-center">
                        <div class="h-[16px] w-[16px] border-[1px] border-solid border-[#4269E2] rounded-[2px]"></div>
                        <p class="text-[#fff] ml-[12px]">Fish feeder</p>
                    </button>
                    <button @click="checkFunc" class="mb-[12px] flex items-center">
                        <div class="h-[16px] w-[16px] border-[1px] border-solid border-[#4269E2] rounded-[2px]"></div>
                        <p class="text-[#fff] ml-[12px]">Solar Traffic Lights</p>
                    </button>
                </ul>
            </div>
            <!-- при адаптиве -->

            <div class="filter_block flex absolute mt-[20px] left-[50%] translate-x-[-50%]">
                <div @click="filterFunc"
                    class="filter__menu h-[56px] mr-[20px] w-[250px] relative bg-[#f9f9f9] flex items-center justify-center">
                    Filters
                    <img class="ml-[12px]" src="../assets/icons/Caret--down.png" alt="" />
                </div>
                <div @click="filterFunc2"
                    class="filter__menu h-[56px] mr-[20px] w-[250px] relative bg-[#f9f9f9] flex items-center justify-center">
                    Sorting
                    <img class="ml-[12px]" src="../assets/icons/Caret--down.png" alt="" />
                </div>
            </div>
            <!--  -->
            <div :class="{ filterActive: this.filter == true }"
                class="filter_m h-[100px] w-[250px] bg-[#f9f9f9] z-[99] absolute mt-[76px] ml-[114px]">
                <ul class="filter-m__ul">
                    <button @click="checkFunc" class="mb-[12px] flex items-center">
                        <div :class="{ checkActive: this.check == true }"
                            class="h-[16px] w-[16px] border-[1px] border-solid border-[#4269E2] rounded-[2px]"></div>
                        <p class="tex text-[#000] ml-[12px]">Монокри</p>
                    </button>
                    <button @click="checkFunc" class="mb-[12px] flex items-center">
                        <div :class="{ checkActive: this.check == true }"
                            class="h-[16px] w-[16px] border-[1px] border-solid border-[#4269E2] rounded-[2px]"></div>
                        <p class="tex text-[#000] ml-[12px]">Моно</p>
                    </button>
                </ul>
            </div>

            <div :class="{ filterActive: this.filter2 == true }"
                class="filter_m filter2 h-[100px] w-[250px] bg-[#f9f9f9] z-[99] absolute mt-[76px] ml-[374px]">
                <ul class="filter-m__ul">
                    <button @click="checkFunc" class="mb-[12px] flex items-center">
                        <div :class="{ checkActive: this.check == true }"
                            class="h-[16px] w-[16px] border-[1px] border-solid border-[#4269E2] rounded-[2px]"></div>
                        <p class="text-[#000] ml-[12px]">0-100</p>
                    </button>
                    <button @click="checkFunc" class="mb-[12px] flex items-center">
                        <div :class="{ checkActive: this.check == true }"
                            class="h-[16px] w-[16px] border-[1px] border-solid border-[#4269E2] rounded-[2px]"></div>
                        <p class="text-[#000] ml-[12px]">100 - 250</p>
                    </button>
                </ul>
            </div>
            <!--  -->

            <!-- при адаптиве -->

            <div class="productItems flex-1 pb-[120px] bg-[#fff] pl-[45px] flex flex-wrap">
                <div class="h-[100%] text-[20px] w-[100%] pt-[30px]">
                    <span class="block font-[800]">Water pump.</span>
                    Harness the power of the sun with our solar water pump package! This
                    comprehensive package includes everything you need to set up a
                    fully-functioning solar powered water pumping system, including solar
                    panels, a gybrid inverter, and a charge controller. With adjustable
                    horsepower starting at 0.5, the pump can be perfectly tailored to meet
                    your needs and provide reliable water flow. Our expert technicians
                    will deliver and install your new system anywhere across the country,
                    so you don't have to worry about handling any complicated
                    installations on your own. Plus, with a complete one-year guarantee
                    included in every package, you can trust that you're investing in an
                    efficient and long-lasting solution for all your water pumping needs.
                    Order now and start enjoying eco-friendly electricity that's as good
                    for your wallet as it is for the planet!
                    <span span class="block font-[600] mt-[30px] text-[royalblue]">Benefits of the Solar Water Pump
                        Package:</span>

                    <ol style="list-style-type: disc; list-style-position: inside; color: royalblue;">
                        <li>Includes all sort of devices that is needed for a comprehensive solution</li>
                        <li>Can be adjusted to meet customer needs with power starting from 0.5 horsepower</li>
                        <li>Delivery and installation is provided by our technicians nationwide for convenience</li>
                        <li>Complete guarantee of one year ensures peace of mind for buyers</li>
                        <li>Utilizes renewable energy source, reducing carbon footprint</li>
                        <li>Lowers electricity costs by using solar power</li>
                        <li>No need for external power source or extensive wiring</li>
                        <li>Works even during power outages, providing continuous water supply</li>
                        <li>Easy to maintain and requires minimal upkeep compared to traditional water pumps</li>
                    </ol>
                    <span class="block mt-[10px]"> Splasher</span>
                    <span class="block"> Feesh feeder</span>
                    <br>
                    <img class="h-[200px]" src="https://elefantkip.ru/wa-data/public/shop/products/38/90/119038/images/131894/131894.750x0.jpg" alt="">


                </div>
            </div>
        </div>
    </div>
</template>

<style>
.checkActive {
    background: #4269e2;
    background-image: url("@/assets/icons/checkbox.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center center;
}

.filterActive {
    display: block;
}
</style>