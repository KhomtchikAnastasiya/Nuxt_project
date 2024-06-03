<template>
    <div class="slider-nav">
        <img src="~/public/img/arrow_left.svg" class="arrow-left" @click="props.minus">
        <span>{{ '0' + props.currentPage }}</span>
        <span class="line"></span>
        <span>{{ '0' + props.length }}</span>
        <img src="~/public/img/arrow_right.svg" class="arrow-right" @click="props.plus">
    </div>
</template>

<script setup>
const props = defineProps(['length', 'currentPage', 'plus', 'minus'])

</script>

<style scoped>
.slider-nav {
    font-family: Zilla_Slab, Verdana, sans-serif;
    font-weight: 400;
    font-size: 1.8rem;
    color: #222222;
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 6.1rem;
    left: calc(50% - 16.3rem);
}

.line {
    display: inline-block;
    height: 0.1rem;
    width: 21rem;
    border-color: var(--color-primary);
    border-width: 0rem;
    border-top-width: 0.1rem;
    border-style: solid;
    margin: 0 1.2rem;
}

.arrow-left {
    margin-right: 2rem;
    cursor: pointer;
}

.arrow-right {
    margin-left: 2rem;
    cursor: pointer;
}

@media all and (max-width: 1000px) {
    .slider-nav {
        bottom: 10.1rem;
        left: calc(50% - 10rem);
    }

    .line {
        width: 10rem;
    }
}
</style>