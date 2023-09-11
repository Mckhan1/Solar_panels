<script setup></script>
<script>
export default {

}
</script>


<template>
    <div class="seminars h-[800px] bg-[#012465] w-[100%] ">
        <div class="h-[100%] w-[90%] m-auto pt-[80px] flex flex-col">
            <h2 class="semH2 text-[40px] text-[#fff] font-[700]">{{ $t('sempage.seminarsPage')}}</h2>
            
            <div class="semWrp h-[80%] w-[100%] mt-[20px] flex  justify-evenly">
                <div class="semLeft h-[100%] w-[50%] flex flex-col justify-center">
                    <p class="text-[#fff] w-[80%] text-[18px]"> {{ $t('sempage.inform')}}</p>
                    <p class="text-[18px] w-[80%] my-[30px] text-[#fff]"> {{ $t('sempage.explore')}}</p>
                </div>
                <div class="semRight h-[100%] w-[50%] ImageSem"></div>
            </div>  
        </div>
    </div>
</template>

<style>
.ImageSem{
    background-image: url('../assets/4412.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}
</style>