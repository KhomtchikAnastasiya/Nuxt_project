<template>
    <div class="nav-wrapper">
        <ul class="nav">
            <li v-for="(item, index) in nav" :key="index" class="nav_item">
                <nuxt-link class="nav_link" to="/">{{ item }}</nuxt-link>
            </li>
        </ul>
        <span class="divider search-opened"></span>
        <img src="~/public/img/search.svg" alt="search_img" class="search-img search-opened" @click="toggleSearch">
        <span class="divider search-opened"></span>
        <div>
            <img src="~/public/img/burger.svg" alt="menu_img" class="menu-button" @click="toggleMenu">
        </div>
    </div>
    <NavScreen :toggleMenu="toggleMenu" :class="[animationNavStyle, displayMenu]" />
    <SearchInput :toggleSearch="toggleSearch" :class="[animationSearchStyle, displaySearch]" />
</template>

<script setup>
import SearchInput from '../searchInput/SearchInput.vue'
import NavScreen from '../navElements/NavScreen.vue'
const nav = ['About us', 'Architecture', 'Interior', 'Contact', 'Shop'];
let displayMenu = ref('disabled');
let displaySearch = ref('disabled');
let displayNav = ref('flex');
let displayNavSearch = ref('block')
let animationNavStyle = ref('slide-out-top')
let animationSearchStyle = ref('slit-out-vertical')

function toggleMenu() {
    if (displayMenu.value !== 'disabled') {
        displayNav.value = 'flex';
        displayNavSearch.value = '';
        animationNavStyle.value = 'slide-out-top';
        setTimeout(() => displayMenu.value = 'disabled', 500);
    } else {
        displayMenu.value = '';
        displaySearch.value = 'disabled';
        animationNavStyle.value = 'tilt-in-top-2';
    }
}

function toggleSearch() {
    if (displaySearch.value !== 'disabled') {
        animationSearchStyle.value = 'slit-out-vertical';
        setTimeout(() => {
            displaySearch.value = 'disabled';
            displayNav.value = 'flex';
            displayNavSearch.value = 'block'
        }, 500);
    } else {
        displaySearch.value = '';
        displayNav.value = 'none';
        displayNavSearch.value = 'none';
        animationSearchStyle.value = 'slit-in-vertical';
    }
}
</script>

<style scoped>
.disabled {
    display: none !important;
}

.nav-wrapper {
    display: flex;
    flex-direction: row;
    gap: 2rem;
    align-items: center;
}

.menu-button {
    margin-left: 2rem;
    cursor: pointer;
}

.nav {
    display: flex;
    flex-direction: row;
    gap: 4rem;
    padding-inline-start: 0rem;
    margin-right: 2rem;
    display: v-bind(displayNav);
}

.nav_item {
    list-style: none;
}

.nav_link,
.nav_link:visited {
    text-decoration: none;
    color: var(--color-primary-dark);
    transition: all 0.5s ease;
}

.nav_link:hover {
    text-decoration: underline;
    color: var(--color-primary);
}

.search-img {
    cursor: pointer;
    flex-shrink: 0;
}

.search-opened {
    display: v-bind(displayNavSearch);
}

.tilt-in-top-2 {
    -webkit-animation: tilt-in-top-2 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    animation: tilt-in-top-2 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

@keyframes tilt-in-top-2 {
    0% {
        -webkit-transform: rotateY(-30deg) translateY(-1000px) skewY(30deg);
        transform: rotateY(-30deg) translateY(-1000px) skewY(30deg);
        opacity: 0;
    }

    100% {
        -webkit-transform: rotateY(0deg) translateY(0) skewY(0deg);
        transform: rotateY(0deg) translateY(0) skewY(0deg);
        opacity: 1;
    }
}

.slide-out-top {
    -webkit-animation: slide-out-top 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
    animation: slide-out-top 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
}

@keyframes slide-out-top {
    0% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
        opacity: 1;
    }

    100% {
        -webkit-transform: translateY(-1000px);
        transform: translateY(-1000px);
        opacity: 0;
    }
}

.slit-in-vertical {
    -webkit-animation: slit-in-vertical 0.45s ease-out both;
    animation: slit-in-vertical 0.45s ease-out both;
}

@keyframes slit-in-vertical {
    0% {
        -webkit-transform: translateZ(-300) rotateY(90deg);
        transform: translateZ(-300px) rotateY(90deg);
        opacity: 0;
    }

    100% {
        -webkit-transform: translateZ(0) rotateY(0);
        transform: translateZ(0) rotateY(0);
    }
}

.slit-out-vertical {
    -webkit-animation: slit-out-vertical 0.5s ease-in both;
    animation: slit-out-vertical 0.5s ease-in both;
}

@keyframes slit-out-vertical {
    0% {
        -webkit-transform: translateZ(0) rotateY(0);
        transform: translateZ(0) rotateY(0);
        opacity: 1;
    }

    54% {
        -webkit-transform: translateZ(-160px) rotateY(87deg);
        transform: translateZ(-160px) rotateY(87deg);
        opacity: 1;
    }

    100% {
        -webkit-transform: translateZ(-800px) rotateY(90deg);
        transform: translateZ(-800px) rotateY(90deg);
        opacity: 0;
    }
}

@media all and (max-width: 1000px) {
    .nav {
        flex-wrap: wrap;
        column-gap: 2rem;
        row-gap: 1rem;
        margin-right: 1rem;
        margin-left: 2rem;
    }
}

@media all and (max-width: 735px) {
    .nav {
        display: none;
    }
}

@media all and (max-width: 800px) {

    .divider,
    .search-img {
        display: none;
    }
}
</style>