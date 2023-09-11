<script setup>
</script>

<script>
export default {

}
</script>

<template>
    <div class="managment h-[max-content] w-[100%] my-[100px]">
        <div class="managmentWrp h-[100%] w-[90%] m-auto flex justify-between items-center text-[#22343D]">
            <div class="leftManag h-[77%] w-[47%] flex flex-col">
                <h2 class="text-[32px] font-[700]"> {{ $t("education.solarDesign") }}</h2>
                <p class="textManeg w-[100%] mt-[40px] leading-[26px]"> {{ $t("education.solarCalculation") }}</p>
                <p class="textManeg w-[100%] mt-[30px] leading-[26px]">{{ $t("education.perfect") }} </p>

            </div>
            <div class="rightImage h-[78%] w-[47%]"></div>
        </div>
    </div>
</template>




<style scoped>
.rightImage {
    height: 600px !important;
    background: red;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-image: url('@/assets/image/Rectangle54.png');
}
</style>