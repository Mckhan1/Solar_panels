<template>
    <div class="h-[max-content] min-h-[400px]">
        <div class="topAbout bg-[#012465] py-[50px]">
            <div class="oneAbout h-[100%] w-[90%] m-auto flex justify-between items-center ">
                <div class="backAbout h-[400px] w-[500px] bg-[white]"></div>
                <div class="textAboutus max-w-[600px] text-[white] text-[20px] ">
                    <span class="text-[#FED700] font-[700] text-[25px] mb-[15px]  block">{{ $t("about.welcome") }}</span>
                    <span> {{ $t('about.leadCompany') }}</span>
                </div>
            </div>
        </div>

        <div class="topAbout bg-[#012465] py-[50px] ">
            <div class="oneAbout h-[100%] w-[90%]  m-auto flex justify-between items-center ">
                <div class="textAboutus max-w-[600px] text-[white] text-[20px]">
                    <span class="text-[#FED700] font-[700] text-[25px] mb-[15px]  block">{{ $t('about.addition') }}</span>
                    <span>
                        {{ $t('about.solarEnergy') }}
                    </span>
                </div>
                <div class="backAbout h-[400px] w-[500px] bg-[white]"></div>
            </div>
        </div>

        <div class="topAbout bg-[#012465] py-[50px]">
            <div class="oneAbout h-[100%] w-[90%]  m-auto flex justify-between items-center ">
                <div class="backAbout backAbout1 h-[400px] w-[500px] bg-[white]"></div>
                <div class="textAboutus max-w-[600px] text-[white] text-[20px]">
                    <span class="text-[#FED700] font-[700] text-[25px] mb-[15px]  block">{{ $t('about.easy') }}</span>
                    <span>
                        {{ $t('about.believe') }}
                    </span>
                    <br>
                    <span>
                        {{ $t('about.commited') }}
                    </span>
                    <br>
                    <br>
                    <a href="tel:+998950065565">+99895 006 55 65</a> |
                    <a href="tel:+998990095565">+99899 009 55 65</a> |
                    <a href="tel:+998950045535">+99895 004 55 35</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        window.scrollTo(0, 0);

    },
}
</script>

<style scoped>
.backAbout:nth-child(1){
    background-image: url('../assets/about/1.jpg');
    background-size: cover;
    background-position: center center;
}
.backAbout:nth-child(2){
    background-image: url('../assets/about/2.jpg') !important;
    background-size: cover;
      background-position: center center;

}   
.backAbout1{
    background-image: url('../assets/about/3.jpg') !important;
    background-size: cover;
      background-position: center center;

}
</style>