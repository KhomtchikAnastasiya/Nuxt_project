<template>
    <div class="nav-screen">
        <div class="close">
            <span @click="props.toggleMenu" class="close-img">Close</span>
            <img src="~/public/img/cross.svg" alt="close_img" class="close-img" @click="props.toggleMenu">
        </div>
        <ul class="nav-full">
            <li v-for="(item, index) in navFull" :key="index" class="nav-full_item" :class="item.class">
                <nuxt-link class="nav-full_link" to="/">{{ item.name }}</nuxt-link>
            </li>
        </ul>
    </div>
</template>

<script setup>
const props = defineProps(['toggleMenu'])
const navFull = [{ name: 'About us', class: '' },
{ name: 'Interior', class: 'interior' },
{ name: 'Architecture', class: 'archit' },
{ name: 'Portfolio', class: '' },
{ name: 'Contact', class: '' }];
</script>

<style scoped>
.nav-screen {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: #FFFFFF url('~/public/img/background_menu.svg') no-repeat;
    z-index: 1;
}

.nav-full {
    display: flex;
    flex-direction: column;
    gap: 3.9rem;
    margin: 15.7rem auto auto auto;
    text-align: center;
    width: 27.1rem;
    padding-inline-start: 0;
}

.nav-full_item {
    list-style: none;
    position: relative;
}

.nav-full_link,
.nav-full_link:visited {
    font-family: 'PlayfairDisplay', sans-serif;
    font-weight: 400;
    font-size: 4.8rem;
    color: var(--color-primary-dark);
    text-decoration: none;
    transition: all 0.5s ease;
}

.nav-full_link:hover {
    color: #425A20;
}

ul:hover .nav-full_link:not(:hover) {
    color: var(--color-primary-inactive);
}

.interior:hover::after {
    content: url('~/public/img/interior.png');
    position: absolute;
    top: -6rem;
    right: -30rem;
    transition: all 0.5s ease;
}

.archit:hover::before {
    content: url('~/public/img/archit.png');
    position: absolute;
    top: -10rem;
    right: 30rem;
    transform: rotate(3.45deg);
    transition: all 0.5s ease;
}

.close {
    display: flex;
    justify-content: flex-end;
    gap: 1.4rem;
    align-items: center;
    margin-right: 12.3rem;
    margin-top: 4rem;
}

.close-img {
    cursor: pointer;
    flex-shrink: 0;
}

@media all and (max-width: 950px) {

    .interior:hover::after,
    .archit:hover::before {
        content: '';
    }

    .nav-full_link,
    .nav-full_link:visited {
        font-size: 3.8rem;
    }
}

@media all and (max-width: 550px) {
    .nav-full {
        gap: 2rem;
        margin: 10.7rem auto auto auto;
        width: 100%;
        padding-inline-start: 0;
    }

    .close {
        position: absolute;
        margin: 0;
        top: 8rem;
        right: 5rem;
    }
}
</style>