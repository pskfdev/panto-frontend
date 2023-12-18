<script setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import { ref, onMounted, computed } from "vue";

import CardReview from "@/components/ui/CardReview.vue";


const data = ref([]);

const fetchdata = () => {
  fetch("/review.json")
    .then((response) => response.json())
    .then((res) => {
      data.value = res
    });
};


onMounted(() => {
  fetchdata()
})

const settings = {
  itemsToShow: 1,
  snapAlign: "center",
};
const breakpoints = {

  750: {
    itemsToShow: 2,
    snapAlign: "start",
  },

  1024: {
    itemsToShow: 3,
    snapAlign: "start",
  },
};
</script>

<template>
  <div class="my-52 container mx-auto">
    <div class="space-y-4 text-center mb-14">
      <p class="text-warning uppercase text-lg tracking-widest font-bold">Testimonials</p>
      <h1>Our Client Reviews</h1>
    </div>
    
    <carousel
      v-bind="settings"
      :breakpoints="breakpoints"
      class="flex flex-col"
    >
      <slide v-for="slide in data" :key="slide.id" class="px-5">
        <CardReview :item="slide" />
      </slide>

      <template #addons>
        <navigation>
          <template #next>
            <button class="-mr-2 btn btn-sm btn-circle drop-shadow">></button>
          </template>
          <template #prev>
            <button class="-ml-2 btn btn-sm btn-circle drop-shadow">&lt</button>
          </template>
        </navigation>
      </template>
    </carousel>
  </div>
</template>

<style></style>
