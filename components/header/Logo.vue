<template>
    <div class="logo-wrapper">
        <span class="logo">
            <nuxt-link class="logo" to="/">
                AR.CHI
            </nuxt-link>
        </span>
        <span class="divider"></span>
        <div class="language">
            <span :class="{ active: !activeLang }" @click="changeActive">RUS</span>
            <span :class="{ active: activeLang }" @click="changeActive">ENG</span>
        </div>
    </div>
</template>

<script setup>
let activeLang = ref(true)

function changeActive() {
    activeLang.value = !activeLang.value
}
</script>

<style scoped>
.logo-wrapper {
    display: flex;
    flex-direction: row;
    gap: 4rem;
    align-items: center;
    z-index: 2;
}

.logo {
    font-family: 'PlayfairDisplay', sans-serif;
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 150%;
    color: var(--color-primary-dark);
    text-decoration: none;
    transition: all 0.5s ease;
}

.logo:hover {
    text-decoration: underline;
    color: var(--color-primary);
}

.language {
    font-size: 1.6rem;
    color: var(--color-additional-inactive);
    display: flex;
    gap: 2rem;
    align-items: center;
}

.language span {
    cursor: pointer;
    transition: all 0.5s ease;
}

.language span:hover {
    text-decoration: underline;
    color: var(--color-primary);
}

.language .active {
    color: var(--color-additional-dark);
    background-color: rgba(74, 100, 36, 0.1);
    padding: 0.6rem 0.6rem 0.3rem 0.6rem;
    border-radius: 5px;
}
</style>