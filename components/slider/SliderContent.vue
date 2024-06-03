<template>
    <div v-if="sliderData">
        <h1 class="title">{{ sliderData.title }}</h1>
        <div class="two-column-layout">
            <div class="layout-item">
                <div class="subtitle">{{ sliderData.description.col1.title }}</div>
                <div class="content">{{ sliderData.description.col1.description }}</div>
            </div>
            <div class="layout-item">
                <div class="subtitle">{{ sliderData.description.col2.title }}</div>
                <div class="content">{{ sliderData.description.col2.description }}</div>
            </div>
        </div>
        <div class="button-container">
            <a class="button-dark button" v-bind:href="sliderData.link">Read More</a>
            <a class="button-light button" v-bind:href="sliderData.link">View project</a>
        </div>
    </div>
</template>

<script setup>
import axios from 'axios'
import { store } from '~/store/store.js'
const props = defineProps(['slideId'])
let sliderData = ref('')

axios.get('https://664878da2bb946cf2fa0af05.mockapi.io/api/v1/menu/' + props.slideId)
    .then(res => (sliderData.value = res.data,
        store.changeUrl(sliderData._rawValue.image)));
</script>

<style scoped>
.title {
    font-family: PlayfairDisplay, Verdana, sans-serif;
    font-weight: 700;
    font-size: 9.6rem;
    color: var(--color-primary);
    margin: 0;
}

.two-column-layout {
    margin: 4.7rem 0 4rem 0;
    display: flex;
    flex-direction: row;
    gap: 5.8rem;
}

.layout-item {
    max-width: 28.5rem;
}

.subtitle {
    font-weight: 400;
    font-size: 1.8rem;
    color: var(--color-primary);
    margin: 0 0 1.6rem 0;
}

.content {
    font-weight: 400;
    font-size: 1.4rem;
    color: var(--color-text-medium);
    line-height: 18px;
}

.button-container {
    display: flex;
    gap: 7rem;
    align-items: center;
}

.button-dark {
    font-weight: 400;
    font-size: 1.8rem;
    color: var(--color-primary-light);
    text-decoration: none;
    background-color: #597D4E;
    border-radius: 5px;
    height: 4.6rem;
    width: 20rem;
    position: relative;
    text-align: center;
    padding-top: 1.4rem;
}

.button-dark::after {
    content: '';
    display: inline-block;
    height: 4.6rem;
    width: 20rem;
    border-color: #000000;
    border-width: 0.5px;
    border-radius: 5px;
    border-style: solid;
    position: absolute;
    top: 0;
    left: 0;
    transform: rotate(-2.09deg)
}

.button-light {
    font-weight: 400;
    font-size: 1.8rem;
    color: #425A20;
    text-decoration: none;
    position: relative;
    margin-left: 22px;
    width: 9.7rem;
}

.button-light::before {
    content: url('~/public/img/triangle.svg');
    position: absolute;
    top: 0;
    left: -22px;
}

.button-light::after {
    content: url('~/public/img/triangle_border.svg');
    position: absolute;
    top: 0;
    left: -24px;
}

.button {
    transition: transform 0.5s ease;
}

.button:hover {
    transform: scale(1.1);
}

@media all and (max-width: 600px) {
    .title {
        font-size: 6rem;
    }

    .two-column-layout {
        margin: 2.7rem 0 2rem 0;
        flex-direction: column;
        gap: 3.8rem;
    }

    .layout-item {
        max-width: 100%;
    }

    .button-container {
        flex-direction: column;
        gap: 3rem;
        align-items: flex-start;
    }
}
</style>