<script setup>
</script>

<script>
import store from '../store';
export default {
    mounted() {
        // console.log(this.panels);
    },
    data() {
        return {
            panels: store.state.panels,
            fallback: [],
            eventPanet: {}
        }
    },
    methods: {
        eventFunc(i) {
            this.$router.push(`/product/${i.id}`)
            // this.fallback == this.panels
            // this.$store.dispatch('EVENT_FUNC', i.id)
            // console.log(event.currentTarget.id);

        }
    },
}
</script>

<template>
    <div class="min-h-[761px] w-[100%] mb-[80px]">
        <div class=" h-[100%] w-[90%] m-auto flex flex-col ">
            <h2 class="text-[32px] pt-[70px]">{{ $t("panels.products") }} </h2>
            <div class=" flex justify-evenly flex-wrap mx-auto h-[max-content] w-[80%] mt-[50px]">

                <div :id="i.id" @click="eventFunc(i)" v-for="i of this.panels" :key="i.id"
                    class="blockPanels h-[402px] mb-[20px] w-[305px] flex flex-col ">
                    <figure class="h-[242px] w-[305px]">
                        <img class="imgPanels object-cover h-[100%] w-[100%]" :src="i.img" alt="">
                    </figure>
                    <div class="mt-[35px] flex justify-between text-center h-[30px] items-center">
                        <span class="text-[20px]">{{ i.title }}</span>
                    </div>
                </div>
                
            </div>
            <hr>
        </div>
    </div>
</template>


<style></style>