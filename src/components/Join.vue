<script setup>

</script>

<script>
import axios from 'axios'
export default {
    methods: {
        sendFunc(){
            let message = `Имя пользователя: ${this.username} \n Почта: ${this.usergmail}`

            let api = `https://api.telegram.org/bot${this.token}/sendMessage?chat_id=${this.chatId}&text=${message}`


            axios.post(api)
            alert('Спасибо за заявку')

        },
    },
    data() {
        return {
            token: '6682358063:AAHFUc2uqg6jw-LVsUv8SrJ54FrERQB2xoc',
            chatId: -4062049106,
            username: '',
            usergmail: '',
        }
    },

}
</script>

<template>
    <div class="h-[481px] зн-х w-[100%] bg-[#F9F9F9] flex items-center">
        <div class="joinWrp h-[364px] w-[90%] bg-[#012465] m-auto flex flex-col items-center justify-center">
            <h2 class="text-[36px] text-[#fff]">
                {{ $t('panels.question')}}
            </h2>
            <p class="textPJoin text-[#fff] mt-[5px] w-[40%]  text-center">{{ $t('panels.admin')}}</p>
            <div class="mt-[30px] h-[56px] w-[472px] flex">
                <input v-model="username" class="h-[56px] w-[100%] text-[#CFCED6] pl-[21px] caret-black outline-none" placeholder="Your name" type="text">
            </div>
            <div class="mt-[10px] h-[56px] w-[472px] flex">
                <input v-model="usergmail" class="h-[56px] w-[100%] text-[#CFCED6] pl-[21px] caret-black outline-none" placeholder="Your gmail" type="email">
            </div>
            <div class="mt-[10px] h-[56px] w-[472px] flex">
                <button @click="sendFunc()" class="h-[56px] w-[100%] bg-[#4269E2] text-[#fff] cursor-pointer">{{ $t('panels.send')}}</button>
            </div>
        </div>
    </div>
</template>

<style></style>