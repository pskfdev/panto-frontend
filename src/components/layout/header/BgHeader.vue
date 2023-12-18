<script setup>
import IconSearch from '@/components/icons/IconSearch.vue';
</script>

<template>
  <div class="hero min-h-screen bg-header">
    <div class=""></div>
    <div class="hero-content -mt-80 text-center text-neutral-content">
      <div class="max-w-2xl">
        <h1 class="mb-7 text-5xl font-bold leading-normal">
          Make Your Interior More Minimalistic & Modern
        </h1>
        <p class="mb-7 max-w-md mx-auto">
          Turn your room with panto into a lot more minimalist and modern with
          ease and speed.
        </p>
        <div class="relative w-72 mx-auto">
          <input
            type="text"
            placeholder="Search furniture"
            class="input opacity-40 rounded-full border-white w-full max-w-xs text-black"
          />
          <button class="btn btn-circle btn-warning absolute right-0"><IconSearch /></button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-header {
  background-image: url('/src/assets/bg-header.png');
  background-position: bottom;
}
</style>
