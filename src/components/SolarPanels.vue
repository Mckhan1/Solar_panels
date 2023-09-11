<script setup>
</script>

<script>
export default {
    methods: {
    }
}
</script>


<template>
    <div class="solar h-[704px] z-[100] w-[100%] mt-[0px] ">
        <div class="block"></div>
        <div class="solarPanels h-[100%] z-[100] w-[90%] m-auto flex justify-between items-center">
            <div class="panelBlock h-[584px] w-[760px] z-[100] bg-[#012465] flex flex-col justify-between">
                <div class="itemBlock">
                    <h1 class="text-[32px] mt-[60px] ml-[60px] text-[#fff] w-[70%] font-[500]"> {{ $t("panels.solarPanels") }}</h1>

                    <a href="#collection">
                        <button
                            class="collection  h-[56px] cursor-pointer w-[200px] bg-[#FED700] mt-[46px] ml-[60px] text-center font-[600]">{{ $t("panels.viewCollection") }}</button>
                    </a>
                </div>
                <span class="text-[#C4CCDB] mb-[80px] ml-[60px] w-[70%]">{{ $t("panels.solarEnergy") }} </span>

            </div>
            <div class="image h-[584px] w-[520px] bg-[#f9f9f9] z-[100] "></div>
        </div>
    </div>
    <div id="collection"></div>
</template>

<style scoped>
.block {
    height: 704px;
    width: 100%;
    background: #FED700;
    position: absolute;
    z-index: -1;
    clip-path: polygon(0 75%, 100% 0, 100% 100%, 0% 100%);
}

.image {
    border: 1px solid #012465;
    background-image: url('../assets/firstscreen.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}</style>