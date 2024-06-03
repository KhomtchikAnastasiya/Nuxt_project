<script setup lang="ts">
import Logo from './Logo.vue';
import Navigation from './Navigation.vue';
</script>

<template>
    <div class="header-wrapper">
        <Logo />
        <Navigation />
    </div>
</template>

<style scoped>
.header-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 5.2rem;
}
</style>