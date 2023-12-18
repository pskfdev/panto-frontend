<script setup>
import { defineProps } from 'vue';

defineProps({
    title: String
})
</script>

<template>
  <div class="hero h-80 bg-header text-white shadow-2xl">
    <div class=""></div>
    <div class="text-center flex items-center">
        <h1 class="leading-normal">
          {{ title }}
        </h1>
    </div>
  </div>
</template>

<style scoped>
.bg-header {
  background-image: url('/src/assets/bg-header.png');
}
</style>
