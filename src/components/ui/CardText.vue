<script setup>
import { defineProps } from "vue";

defineProps({
  title: String,
  des: String,
});
</script>

<template>
  <div class="w-64 bg-white m-2 py-10 text-center rounded-xl space-y-2">
    <div class="flex justify-center">
      <slot />
    </div>
    <p class="font-bold text-custom-primary mt-3">{{ title }}</p>
    <p class="text-muted">{{ des }}</p>
  </div>
</template>

<style scoped></style>
