<script setup>
</script>

<script>
import store from '../store';
export default {
    data() {
        return {
            product: store.state.panels,
            eventpanels: {},
            showsplasher: true,
            who: false,
        }
    },
    mounted() {
        window.onclick = () => console.log(document.querySelector("html").lang);
        if (window.location.pathname.split('/')[window.location.pathname.split('/').length - 1] == 1) {
            this.showsplasher = true
        } else {
            this.showsplasher = false
        }
        if (window.location.pathname.split('/')[window.location.pathname.split('/').length - 1] == 7) {
            this.who = true
        } else {
            this.who = false
        }
        window.scrollTo(0, 0);
        for (let i of this.product) {
            if (this.$route.fullPath.split('/').pop() == i.id) {
                this.eventpanels = i
            }
        }
    }
}
</script>


<template>
    <div class="payment mt-[0px] mb-[50px] h-[max-content] w-[100%]">
        <div class="paymentWrp  h-[100%] w-[100%] m-auto flex">
            <div class="paymentImg pl-[50px] mt-[50px]  w-[50%] left_img">
                <img class="images sticky top-[200px] object-cover" :src="'../' + this.eventpanels.img" alt="">
            </div>

            <div class="paymentBlock h-[100%] w-[50%] pl-[50px] pt-[80px] flex flex-col text-[#2A254B]">

                <div class="textBack h-[max-content] w-[640px] bg-[#012465]">
                    <h2 class="text-[36px] text-[#fff] font-[600] py-[10px] ml-[15px]">{{ this.eventpanels.title }}</h2>
                </div>

                <p class="mt-[25px] ">Description</p>
                <span class="descPayment mb-[20px] mt-[16px] text-[#505977] w-[75%]">{{ this.eventpanels.desc }}</span>
                <ul v-for="item of this.eventpanels.benefits " :key="item.id" class="w-[90%] mt-[0px] text-[#505977]">
                    <li><b>{{ item }}</b>

                    </li>
                </ul>

                <div v-if="showsplasher" class="splashBlock flex items-center flex-wrap ">
                    <img class="splasherimage h-[200px]  m-[20px]" src="../assets/splahser.jpg" alt="">
                    <img class="splasherimage2 h-[200px] m-[20px]" src="../assets/fish.png" alt="">
                    <img class="splasherimage2 h-[200px] m-[20px]" src="../assets/01.jpg" alt="">
                    <img class="splasherimage2 h-[200px] m-[20px]" src="../assets/02.jpg" alt="">
                    <img class="splasherimage2 h-[200px] m-[20px]" src="../assets/03.jpg" alt="">
                    <img class="splasherimage2 h-[200px] m-[20px]" src="../assets/04.jpg" alt="">
                </div>

                <div v-if="who">
                    <hr class="my-[20px] w-[80%]">
                    <b>Who needs these packages ?</b>
                    <p class="w-[80%] mt-[10px]">
                        Our Packages: 1 and 2 Kilowatt Solar Power Generator are suitable for any one who are looking
                        for a reliable and cost-effective source of energy. Here are some examples of who might benefit
                        from this package:
                    <ul class="w-[80%] font-[600]">
                        <li>
                            1) Homeowners who want to save money on their electric bills and have a reliable backup
                            source of energy during blackouts.
                        </li>
                        <li>
                            2) Small business owners who want to reduce their operating costs and promote
                            sustainability.
                        </li>
                        <li>3) Farmers and ranchers who need a reliable source of energy for their operations.</li>
                        <li>4) Remote communities or households far from the country's electricity network.</li>
                        <li>5) Emergency response teams who need a reliable source of energy during natural
                            disasters or emergencies.</li>
                        <li>6) Campers and outdoor enthusiasts who want a portable and sustainable source of
                            energy.</li>
                        <li>7) Non-profit organizations and charities who want to provide sustainable energy solutions
                            to communities in need.</li>
                    </ul>
                    <p class="w-[80%]">
                        In short, anyone who wants a reliable, cost-effective, and sustainable source of energy can
                        benefit from our Packages: 1 and 2 Kilowatt Solar Power Generator.
                    </p>

                    </p>
                </div>


            </div>
        </div>
    </div>
</template>

<style>
.splasherimage {
    height: 300px;
    float: left;
}

.splasherimage2 {
    height: 200px;
    float: left;
}

.left_img img {
    width: 720px;
}

.ul {
    list-style-type: disc;
}
</style>