<template>
    <NuxtLayout class="wrapper">
        <NuxtPage />
    </NuxtLayout>
</template>

<script setup>
import { store } from '~/store/store.js'
const backUrl = `url('${store.backUrl}')`
</script>

<style>
.wrapper {
    max-width: 144rem;
    height: 90rem;
    margin: 0 auto;
    /* background-image: v-bind(backUrl);
    background-repeat: no-repeat; */
    background: url('~/public/img/background.png') no-repeat;
    padding: 3.4rem 12rem 6.1rem 12rem;
}

@media all and (max-width: 1150px) {
    .wrapper {
        padding: 3.4rem 6rem 2.1rem 6rem;
    }
}

@media all and (max-width: 550px) {
    .wrapper {
        padding: 2.4rem 2rem 2.1rem 2rem;
    }
}
</style>