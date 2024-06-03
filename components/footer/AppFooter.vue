<script setup lang="ts">
const media = ['Facebook', 'Vkontakte', 'Behance'];
</script>

<template>
    <div class="footer-wrapper">
        <ul class="media">
            <li v-for="(item, index) in media" :key="index" class="media_item">
                {{ item }}
            </li>
        </ul>
    </div>
</template>

<style scoped>
.footer-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    z-index: 2;
}

.media {
    display: flex;
    flex-direction: row;
    gap: 3.5rem;
    padding-inline-start: 0rem;
    line-height: 100%;
    font-weight: 400;
    font-size: 1.6rem;
    color: var(--color-additional-dark);
}

.media_item {
    list-style: none;
    cursor: pointer;
}

.media_item:hover {
    text-decoration: underline;
    color: var(--color-primary);
}
</style>