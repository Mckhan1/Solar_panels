<script setup>

</script>

<script>
import Work from '../components/Work.vue';
// import SignNow from '../components/SignNow.vue';
import ManagmentOne from '../components/ManagmentOne.vue';
import SecondManag from '../components/SecondManag.vue';
import Content from '../components/Content.vue';
import Courses from '../components/Courses.vue';
// import Rewview from '../components/Rewview.vue';
import Join from '../components/Join.vue';
import TextCourse from '../components/TextCourse.vue';
export default {
    components: {
        Work,
        // SignNow,
        ManagmentOne,
        SecondManag,
        Content,
        Courses,
        // Rewview,
        Join,
        TextCourse
    },
    mounted(){
    window.scrollTo(0,0);

  },


}
</script>
<template>
    <div >
        <Work class="mt-[130px]"/>
        <!-- <SignNow /> -->
        <ManagmentOne />
        <SecondManag />
        <Content />
        <Courses />
        <!-- <Rewview /> -->
        <TextCourse />
        <Join />
    </div>
</template>


<style></style>