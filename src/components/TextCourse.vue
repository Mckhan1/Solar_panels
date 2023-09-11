<script setup>
</script>

<script>
export default {

}
</script>

<template>
    <div class="h-[max-content] w-[100%] mb-[80px]">
        <div class="flex flex-col w-[100%] h-[100%] m-auto ">
            <div class="h-[max-content] w-[100%] bg-[#012465] text-[#fff] p-[80px] topText">
                <h2 class="text-[32px] font-[700] mt-[30px]">#2_Courses</h2>
                <p class="textManeg w-[100%] mt-[25px] leading-[26px]">
                    {{ $t('education.pursue')}}

                </p>
                <h2 class="text-[32px] font-[700] mt-[30px]">{{ $t("education.install") }}</h2>
                <p class="textManeg w-[100%] mt-[25px] leading-[26px]">
                    {{ $t("education.solarSytstem") }}
                </p>
                <p class="textManeg w-[100%] mt-[25px] leading-[26px]">
                    {{ $t("education.industryGain") }}

                </p>
                <p class="textManeg w-[100%] mt-[25px] leading-[26px]">
                    {{ $t("education.solarGraduates") }}

                </p>
            </div>



            <div class="text-[#012465] p-[80px] bottomText">
                <h2 class="text-[32px] font-[700] mt-[30px]">{{ $t("education.mainTen") }}</h2>
            <p class="textManeg w-[100%] mt-[25px] leading-[26px]">
                {{ $t("education.demand") }}


            </p>

            <h2 class="text-[32px] font-[700] mt-[30px]">#2_Courses</h2>
            <p class="textManeg w-[100%] mt-[25px] leading-[26px]">
                {{ $t("education.provide") }}



            </p>
            <p class="textManeg w-[100%] mt-[25px] leading-[26px]">
                {{ $t("education.repair") }}




            </p>
            <p class="textManeg w-[100%] mt-[25px] leading-[26px]">
                {{ $t("education.cont") }}

            </p>
            <h2 class="text-[32px] font-[700] mt-[30px]">{{ $t("education.sources") }}:</h2>
            <p class="textManeg w-[100%] mt-[25px] leading-[26px] flex">
                1.
                <a class="text-[blue] ml-[8px] ahref" href="https://www.iea.org/reports/renewables-2019"> {{ $t("education.international") }}</a>
            </p>
            </div>
        </div>
    </div>
</template>

<style>
.ahref {
    border-bottom: 1px solid blue;
}
</style>