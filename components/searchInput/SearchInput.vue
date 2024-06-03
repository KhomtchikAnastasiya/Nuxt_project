<template>
    <div class="search-input">
        <span class="divider"></span>
        <img src="~/public/img/search.svg" alt="search_img" class="search-img">
        <input type="text" class="input" placeholder="What are you looking for?">
        <img src="~/public/img/cross.svg" alt="close_img" class="close-img" @click="props.toggleSearch">
        <span class="divider"></span>
    </div>
</template>

<script setup>
const props = defineProps(['toggleSearch'])
</script>

<style scoped>
.search-img {
    cursor: pointer;
    flex-shrink: 0;
}

.search-input {
    position: absolute;
    right: 18.6rem;
    display: flex;
    gap: 1rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    width: 58.6rem;
    padding: 1.5rem;
    padding-inline-start: 0;
    padding-inline-end: 0;
    justify-content: stretch;
    display: flex;
}

.input {
    border: none;
    background: transparent;
    font-family: 'FuturaBookC', sans-serif;
    font-weight: 400;
    font-size: 1.6rem;
    color: var(--color-primary-inactive);
    flex-shrink: 1;
    width: 100%;
}

.close-img {
    cursor: pointer;
    flex-shrink: 0;
}

@media all and (max-width: 1150px) {
    .search-input {
        width: 40%;
        right: 12.6rem;
    }
}
</style>