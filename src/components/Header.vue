<script>
import { useI18n } from 'vue-i18n';
import store from '../store';
import Tr from "@/i18n/translation"
import ModelViewer from "./ModelViewer.vue"
export default {
    components: {
        ModelViewer
    },
    setup() {
        const { t, locale } = useI18n()
        const supportedLocales = Tr.supportedLocales
        const switchLanguage = async (event) => {
            const newLocale = event.target.value

            await Tr.switchLanguage(newLocale)
        }

        return { t, locale, supportedLocales, switchLanguage }
    },
    data() {
        return {
            burger: false,
            uz: false,
            ru: false,
            writeus: false,

        }
    },
    mounted() {
        document.querySelector('.btnLan2').classList.add('languageActive')
    },
    methods: {
        BurgerFunc() {
            this.burger = !this.burger
        },
        LangFunc() {
            if (event.target.value == 'uz') {
                document.querySelector('.btnLan1').classList.add('languageActive')
                document.querySelector('.btnLan2').classList.remove('languageActive')
                document.querySelector('.btnLan3').classList.remove('languageActive')


            }
            else if (event.target.value == 'ru') {
                document.querySelector('.btnLan3').classList.add('languageActive')
                document.querySelector('.btnLan2').classList.remove('languageActive')
                document.querySelector('.btnLan1').classList.remove('languageActive')

            }
            else if (event.target.value == 'en') {
                document.querySelector('.btnLan3').classList.remove('languageActive')
                document.querySelector('.btnLan2').classList.add('languageActive')
                document.querySelector('.btnLan1').classList.remove('languageActive')

            }
        }

    },


}
</script>


<template>
    <header class="header h-[130px] w-[100%]  z-[999]">
        <div class="h-[100%] left-[0] w-[90%] m-auto flex flex-col">
            <div
                class="lan fixed bg-[white] z-[999] left-[0] top-[0] flex h-[70px] px-[100px] w-[100%] items-center justify-between border-b-[1px] border-[solid] border-[#E6E6E6]">
                <div class="h-[50px] w-[50px]  text-center">
                    <img src="@/assets/icons/Final-011.svg" alt="">
                </div>
                <router-link class="text-[24px]" to="/">
                    {{ $t("header.title") }}
                </router-link>
                <div @click="LangFunc">
                    <button value="uz" @click="switchLanguage" :class="{ languageActive: this.uz }" data-language="uz"
                        class="btnLan1 text-[#AFAFAF] font-[600] cursor-pointer ml-[15px]">UZ</button>
                    <button value="en" @click="switchLanguage" :class="{ languageActive: this.en }" data-language="en"
                        class="btnLan2 text-[#AFAFAF] font-[600] cursor-pointer ml-[15px]">ENG</button>
                    <button value="ru" @click="switchLanguage" :class="{ languageActive: this.ru }" data-language="ru"
                        class="btnLan3 text-[#AFAFAF] font-[600] cursor-pointer ml-[15px]">RU</button>
                </div>
            </div>

            <div class="flex mt-[70px] h-[60px] w-[100%] items-center justify-center">

                <router-link class="ml-[65px] link text-[#000]" to="/">{{ $t("header.home") }}</router-link>
                <router-link class="ml-[65px] link text-[#000]" to="/about">{{ $t("header.about") }}</router-link>
                <router-link class="ml-[65px] link text-[#000]" to="/seminars">{{ $t("header.seminars") }}</router-link>
                <router-link class="ml-[65px] link text-[#000]" to="/education">{{ $t("header.education") }}</router-link>
                <span @click="this.writeus = true" class="ml-[65px] link text-[#000]">{{ $t("header.write") }}</span>
            </div>




        </div>
    </header>

    <ModelViewer @closewritemodal="this.writeus = false" v-if="writeus" />
    <!-- адаптив -->
    <div>
        <div class="header_mini h-[70px] w-[100%]  top-[0] z-[999]">
            <div class="h-[100%] w-[90%] flex m-auto justify-between items-center">
                <div class="h-[50px] w-[50px]  text-center">
                    <img src="@/assets/icons/Final-011.svg" alt="">
                </div>
                <div class="flex items-center ">
                    <div @click="LangFunc">
                        <button value="uz" @click="switchLanguage" :class="{ languageActive: this.uz }" data-language="uz"
                            class="btnLan1 text-[#AFAFAF] font-[600] cursor-pointer ml-[15px]">UZ</button>
                        <button value="en" @click="switchLanguage" :class="{ languageActive: this.en }" data-language="en"
                            class="btnLan2 text-[#AFAFAF] font-[600] cursor-pointer ml-[15px]">ENG</button>
                        <button value="ru" @click="switchLanguage" :class="{ languageActive: this.ru }" data-language="ru"
                            class="btnLan3 text-[#AFAFAF] font-[600] cursor-pointer ml-[15px]">RU</button>
                    </div>

                    <div @click="BurgerFunc" :class="{ burgerLineActive: this.burger == true }"
                        class="burgerBlock dusration-[10s] h-[25px] w-[30px] ml-[40px] flex flex-col justify-between">
                        <div class="h-[1px] w-[100%] bg-[#000] "></div>
                        <div class="h-[1px] w-[100%] bg-[#000] "></div>
                        <div class="h-[1px] w-[100%] bg-[#000] "></div>
                        <div class="h-[1px] w-[100%] bg-[#000] "></div>
                    </div>
                </div>
            </div>
        </div>
        <div :class="{ burgerActive: this.burger == true }"
            class="burgerM  absolute h-[500px] text-center right-[0px] top-[71px] w-[100%] z-[999] ">

            <div @click="BurgerFunc" class="flex flex-col h-[100%] w-[100%] items-center justify-center">
                <router-link class="z-[999] text-[20px] mt-[20px] text-[#fff]" to="/">{{ $t("header.home") }}</router-link>
                <router-link class="z-[999] text-[20px] mt-[20px] text-[#fff]" to="/about">{{ $t("header.about")
                }}</router-link>
                <router-link class="z-[999] text-[20px] mt-[20px] text-[#fff]" to="/seminars">{{ $t("header.seminars")
                }}</router-link>
                <router-link class="z-[999] text-[20px] mt-[20px] text-[#fff]" to="/education">{{ $t("header.education")
                }}</router-link>
                <span @click="this.writeus = true" class="z-[999] text-[20px] mt-[20px] text-[#fff]">{{ $t("header.write")
                }}</span>

            </div>
        </div>
    </div>
    <!-- адаптив -->
</template>


<style>
* {}



.languageActive {
    /* border-b-[1px] border-solid border-[#012465] */
    /* text-[#012465]  */
    border-bottom: 1px solid #012465;
    color: #012465;
}

.header {
    background: white;
    /* box-shadow: 0px 2px 5px #dbdbdb; */
}

.header_mini {
    backdrop-filter: blur(50px);
}

.burgerActive {
    display: block !important;
    backdrop-filter: blur(50px);
}

.burgerM {
    display: flex;
    flex-direction: column;
    display: none;
}


.burgerLineActive div {
    opacity: 0;
}

.burgerLineActive {
    background-image: url('../assets/icons/2931151_close_delete_exit_remove_x_icon.svg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
}</style>