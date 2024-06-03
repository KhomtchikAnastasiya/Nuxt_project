<script setup lang="ts">
import AppHeader from '~/components/header/AppHeader.vue';
import AppFooter from '~/components/footer/AppFooter.vue';
</script>

<template>
    <div class="wrapper">
        <AppHeader />
        <slot />
        <AppFooter class="footer" />
    </div>
</template>

<style scoped>
.wrapper {
    position: relative;
}

.footer {
    position: absolute;
    bottom: 5rem;
}
</style>