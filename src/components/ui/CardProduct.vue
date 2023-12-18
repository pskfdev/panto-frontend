<script setup>
import { RouterLink } from "vue-router";
/* Store */
import { useCartStore } from "@/stores/cart";
import { storeToRefs } from "pinia";

import IconPlus from "@/components/icons/IconPlus.vue";

defineProps({
  item: Object,
});

/* store */
const { addToCart } = useCartStore();
</script>

<template>
  <div class="card card-compact w-full bg-base-100 shadow-lg">
    <RouterLink :to="'/product-detail/' + item.id">
      <img :src="item.url" :alt="item.title" />
    </RouterLink>
    <div class="card-body">
      <h2 class="card-title">{{ item.title }}</h2>
      <p class="text-start">{{ item.des.slice(0, 90) + "..." }}</p>
      <div class="card-actions flex justify-between items-center">
        <h4>{{ item.price }}</h4>
        <button
          @click="() => addToCart(item)"
          class="btn btn-circle btn-sm btn-warning text-white"
        >
          <IconPlus />
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
