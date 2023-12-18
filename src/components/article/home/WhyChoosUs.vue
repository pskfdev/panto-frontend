<script setup>
import IconArrow from '@/components/icons/IconArrow.vue';

import { RouterLink } from "vue-router";
</script>

<template>
    <div class="container mx-auto py-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-5 md:px-0">
        <div class="flex items-center">
            <h1>Why Choosing Us</h1>
        </div>
        <div class="space-y-5">
            <h2>Luxury facilities</h2>
            <p>The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.</p>
            <RouterLink to="/about" class="btn text-warning btn-link">More Info <IconArrow /></RouterLink>
        </div>
        <div class="space-y-5">
            <h2>Affordable Price</h2>
            <p>You can get a workspace of the highst quality at an affordable price and still enjoy the facilities that are oly here.</p>
            <RouterLink to="/about" class="btn text-warning btn-link">More Info <IconArrow /></RouterLink>
        </div>
        <div class="space-y-5">
            <h2>Many Choices</h2>
            <p>We provide many unique work space choices so that you can choose the workspace to your liking and all-around facilities.</p>
            <RouterLink to="/about" class="btn text-warning btn-link">More Info <IconArrow /></RouterLink>
        </div>
    </div>
</template>

<style scoped>
    
</style>