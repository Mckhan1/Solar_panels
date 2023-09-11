<script setup>
</script>

<script>
export default {

}
</script>

<template>
    <div class="managment2 h-[max-content] w-[100%] mb-[100px]">
        <div class="managmentWrp2 h-[100%] w-[90%] m-auto flex justify-between items-center text-[#22343D]">
            <div class="rightImage h-[78%] w-[47%]"></div>
            <div class="leftManag2 h-[77%] w-[47%] flex flex-col">
                <h2 class="text-[32px] font-[700]">  {{ $t("education.appiled") }}</h2>
                <p class="textManeg w-[100%] mt-[40px] leading-[26px]">
                    {{ $t("education.solarMost") }}

                </p>
                <p class="textManeg w-[100%] mt-[30px] leading-[26px]">
                    {{ $t("education.forefront") }}
                </p>

            </div>
        </div>
    </div>
    <div class="managment h-[max-content] w-[100%] mb-[100px] ">
        <div class="managmentWrp h-[100%] w-[90%] m-auto flex justify-between items-center text-[#22343D]">
            <div class="leftManag h-[77%] w-[47%] flex flex-col">
                <h2 class="text-[32px] font-[700]"> #2_Courses</h2>
                <p class="textManeg w-[100%] mt-[40px] leading-[26px]"> {{ $t("education.during") }}
                </p>
                <p class="textManeg w-[100%] mt-[30px] leading-[26px]"> {{ $t("education.solarBecome") }}
                </p>

            </div>
            <div class="rightImage h-[78%] w-[47%]"></div>
        </div>
    </div>
    <div class="managment2 h-[max-content] w-[100%] mb-[100px]">
        <div class="managmentWrp2 h-[100%] w-[90%] m-auto flex justify-between items-center text-[#22343D]">
            <div class="rightImage h-[78%] w-[47%]"></div>
            <div class="leftManag2 h-[77%] w-[47%] flex flex-col">
                <p class="textManeg w-[100%] mt-[40px] leading-[26px]">
                    {{ $t("education.learning") }}

                </p>
                <p class="textManeg w-[100%] mt-[30px] leading-[26px]">
                    {{ $t("education.face") }}

                </p>

            </div>
        </div>
    </div>
    <div class="managment h-[max-content] w-[100%] mb-[100px]">
        <div class="managmentWrp h-[100%] w-[90%] m-auto flex justify-between items-center text-[#22343D]">
            <div class="leftManag h-[77%] w-[47%] flex flex-col">
                <p class="textManeg w-[100%] mt-[40px] leading-[26px]">
                    {{ $t("education.or") }}
                    <br> <br>
                    {{ $t("education.students") }}
                </p>
                <p class="textManeg w-[100%] mt-[30px] leading-[26px]">
                    {{ $t("education.gradus") }}
                </p>

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