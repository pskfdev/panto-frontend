<script setup>
import { RouterLink } from "vue-router";

import IconArrow from "@/components/icons/IconArrow.vue";
</script>

<template>
  <div class="my-40 space-y-48">
    <!-- Section 1 -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
      <!-- Col 1 -->
      <div class="w-11/12">
        <img
          src="/src/assets/promote-sec1.png"
          alt=""
          class="w-full object-cover drop-shadow-2xl"
        />
      </div>
      <!-- Col 2  -->
      <div class="flex items-center px-5">
        <div class="w-full md:w-3/4 space-y-5">
          <p class="text-warning uppercase text-lg tracking-widest font-bold">Experience</p>
          <h1 class="">We Provide You The Best Experience</h1>
          <p class="text-xl">
            You don’t have to worry about the result because all of these
            interiors are made by people who are professionals in their fields
            with an elegant and lucurious style and with premium quality
            materials
          </p>
          <RouterLink to="/about" class="btn btn-link text-warning text-lg">
            More Info <IconArrow />
          </RouterLink>
        </div>
      </div>
    </div>

    <!-- Section 2 -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 h-full">
      <!-- Col 1 -->
      <div class="flex items-center mx-10">
        <div class="w-full md:w-3/4 space-y-5">
          <p class="text-warning uppercase text-lg tracking-widest font-bold">Materials</p>
          <h1 class="">Very serious materials for making furniture</h1>
          <p class="text-xl">
            You don’t have to worry about the result because all of these
            interiors are made by people who are professionals in their fields
            with an elegant and lucurious style and with premium quality
            materials
          </p>
          <RouterLink to="/about" class="btn btn-link text-warning text-lg">
            More Info <IconArrow />
          </RouterLink>
        </div>
      </div>

      <!-- Col 2 -->
      <div class="flex flex-col md:flex-row lg:space-x-5">
        <div class="hidden w-3/5 md:flex flex-col items-end">
          <img
            src="/src/assets/promote-sec2-2.png"
            alt=""
            class="object-cover -mb-10"
          />
          <img
            src="/src/assets/promote-sec2-3.png"
            alt=""
            class="object-cover -mb-16"
          />
        </div>

        <div class="flex items-end w-full">
          <img
            src="/src/assets/promote-sec2-1.png"
            alt=""
            class="w-full object-cover drop-shadow-2xl"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
