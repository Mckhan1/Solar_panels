<script setup>
</script>

<script>
import axios from 'axios'
export default {
    methods: {
        send() {
            // что это
            this.$emit('closewritemodal')
            let message = `Имя пользователя: ${this.username} \n Почта: ${this.usergmail}`

            let api = `https://api.telegram.org/bot${this.token}/sendMessage?chat_id=${this.chatId}&text=${message}`


            axios.post(api)
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
    <div class="h-[100vh] fixed z-[9999] top-[0] w-[100%] flex items-center jsutify-center bg-[#D9d9d9]">
        <div class="h-[550px] w-[450px] m-auto bg-[#012465]  flex flex-col items-center p-[20px] relative">
            <svg @click="$emit('closewritemodal')" class="absolute h-[40px] w-[40px] top-[15px] right-[20px]" fill="#fff"
                data-name="Capa 1" id="Capa_1" viewBox="0 0 20 19.84" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M10.17,10l3.89-3.89a.37.37,0,1,0-.53-.53L9.64,9.43,5.75,5.54a.37.37,0,1,0-.53.53L9.11,10,5.22,13.85a.37.37,0,0,0,0,.53.34.34,0,0,0,.26.11.36.36,0,0,0,.27-.11l3.89-3.89,3.89,3.89a.34.34,0,0,0,.26.11.35.35,0,0,0,.27-.11.37.37,0,0,0,0-.53Z" />
            </svg>
            <h2 class=" text-[35px] text-[#fff] mt-[50px]">WRITE US</h2>
            <form @submit.prevent="send()" class="flex flex-col items-center justify-center h-[100%] w-[100%]" action="">
                <input v-model="username"
                    class="h-[56px] w-[354px] outline-none px-[21px] bg-[#F9F9F9] mb-[40px] text-[#2A254B]" type="text"
                    placeholder="your name">
                <input v-model="usergmail"
                    class="h-[56px] w-[354px] outline-none px-[21px] bg-[#F9F9F9] mb-[40px] text-[#2A254B]" type="email"
                    placeholder="Your gmail">

                <button @click="sendFunc()"
                    class="bg-[#FED700] text-[16px] font-[700] text-center h-[56px] mb-[40px] w-[354px]">Send</button>


            </form>
        </div>
    </div>
</template>

<style></style>