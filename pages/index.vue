<template>
    <div class="content-wrapper">
        <SliderContent class="tilt-in-right-2" :slideId="slideId" :key="slideId" />
        <SliderNav :length="slidesNumber" :currentPage="slideId" :plus="plusSlide" :minus="minusSlide" />
    </div>
</template>

<script setup>
const slidesNumber = 3;
const slideId = ref(1);

function plusSlide() {
    if (slideId.value < slidesNumber) {
        slideId.value++;
    } else slideId.value = 1;
}

function minusSlide() {
    if (slideId.value <= 1) {
        slideId.value = 1;
    } else slideId.value--
}
</script>

<style scoped>
.content-wrapper {
    margin: 20rem 0 0 0;
}

.tilt-in-right-2 {
    -webkit-animation: tilt-in-right-2 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    animation: tilt-in-right-2 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

@keyframes tilt-in-right-2 {
    0% {
        -webkit-transform: rotateX(30deg) translateX(300px) skewX(-30deg);
        transform: rotateX(30deg) translateX(300px) skewX(-30deg);
        opacity: 0;
    }

    100% {
        -webkit-transform: rotateX(0deg) translateX(0) skewX(0deg);
        transform: rotateX(0deg) translateX(0) skewX(0deg);
        opacity: 1;
    }
}

@media all and (max-width: 600px) {
    .content-wrapper {
        margin: 6rem 0 0 0;
    }
}
</style>
