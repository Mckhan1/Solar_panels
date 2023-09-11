<script setup>
</script>

<script>
export default {

}
</script>


<template>
    <div class="about h-[803px] w-[100%]" id="About">
        <div class="infoAbout h-[100%] w-[100%] flex ">
            <div class="infoleft w-[50%] h-[100%] bg-[#012465] flex flex-col justify-between">
                <div class="mt-[72px] ml-[80px]">
                    <h2 class="text-[24px] text-[#fff] font-[500]"> {{ $t('panels.ecoEnergy')}}
                    </h2>

                    <p class="aboutText mt-[30px] text-[#BDC6D7]">
                        {{ $t('panels.solarClub')}}
                    </p>
                </div>
                <router-link to="/seminars">
                    <button class="eduBtn h-[56px] w-[140px] bg-[#FED700] mb-[60px] ml-[80px] font-[600]">{{ $t('panels.seminars')}}</button>


                </router-link>
            </div>
            <div class="inforight w-[50%] h-[100%] bg-[pink]">

            </div>
        </div>
    </div>
    <div class="about h-[703px] w-[100%] mb-[100px]" id="About">
        <div class="infoAbout h-[100%] w-[100%] flex ">
            <div class="inforight w-[50%] h-[100%] bg-[pink]">

            </div>
            <div class="infoleft w-[50%] h-[100%] bg-[#012465] flex flex-col justify-between">
                <div class="mt-[42px] ml-[80px]">
                    <h2 class="text-[24px] text-[#fff] font-[500] mt-[5 0px]">{{ $t('panels.aboutCour')}}</h2>

                    <p class="aboutText mt-[20px] text-[#BDC6D7]">
                        {{ $t('panels.solarAcademy')}}
                        <br><br>
                        {{ $t('panels.solarCompany')}}
                        <br><br>
                        {{ $t('panels.solarEasy')}}

                    </p>
                </div>
                <router-link to="/education">
                    <button class="eduBtn h-[56px] w-[140px] bg-[#FED700] mb-[60px] ml-[80px] font-[600]">Courses</button>


                </router-link>

            </div>
        </div>
    </div>
</template>

<style scoped>
.inforight {
    background-repeat: no-repeat;
    background-image: url('../assets/course.JPG');

    background-size: cover;
    background-position: center;

}
.inforight:nth-child(2) {
    background-image: url('../assets/seminn.JPG');

    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

}
</style>