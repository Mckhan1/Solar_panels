<script setup>
</script>

<script>
export default {

}
</script>

<template>
    <div class="work h-[611px] w-[100%] bg-[#012465] mt-[1px]">
        <div class="workWrp h-[100%] w-[90%] m-auto flex">
            <div class=" workLeft h-[100%] w-[50%] flex flex-col justify-center">
                <h3 class="text-[40px] font-[700] text-[#fff] w-[80%]">{{ $t("education.work") }} </h3>
                <p class="text-[#fff] mt-[18px] w-[90%] text-[16px]">{{ $t("education.look") }} </p>
                <button class="btnWork mt-[45px] h-[56px] w-[175px] bg-[#FED700] font-[700] text-center text-[#000]">{{ $t("education.started") }} </button>
            </div>
            <div class="workRight h-[100%] w-[50%]  flex items-center justify-center">
                <img class="h-[520px] w-[562px]" src="@/assets/image/amico.png" alt="">
            </div>
        </div>
    </div>
</template>

<style scoped></style>