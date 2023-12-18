<script setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import { RouterLink } from "vue-router";
import { ref, onMounted, computed } from "vue";

import IconArrow from "@/components/icons/IconArrow.vue";
import CardProduct from "@/components/ui/CardProduct.vue";


const products = ref([]);
const filterProducts = ref([]);
const category = ref([]);
const SelectCategory = ref("all");

const fetchdata = () => {
  fetch("/data.json")
    .then((response) => response.json())
    .then((res) => {
      products.value = res;
      filterProducts.value = res;
    });
};

const fetchCategory = () => {
  fetch("/category.json")
    .then((response) => response.json())
    .then((res) => {
      category.value = res;
    });
};

const handleCategory = (name) => {
  SelectCategory.value = name;

  const updateItems = products.value.filter((item) => {
    return item.category == name;
  });

  filterProducts.value = updateItems;
};

onMounted(() => {
  fetchdata();
  fetchCategory();
});

/* Setting Carousel */
const settings = {
  itemsToShow: 1,
  snapAlign: "center",
};
const breakpoints = {
  // 700px and up
  550: {
    itemsToShow: 2,
    snapAlign: "start",
  },

  750: {
    itemsToShow: 3,
    snapAlign: "start",
  },

  1024: {
    itemsToShow: 4,
    snapAlign: "start",
  },
};
</script>

<template>
  <div class="bg-[#F7F7F7] py-16">
    <div class="container mx-auto">
      <h1 class="text-center">Best Selling Product</h1>

      <!-- Category -->
      <div class="w-fit mx-auto rounded-full flex space-x-2 my-10 justify-center bg-[#EEEEEE] py-2 px-2">
        <p
          class="item-category"
          :class="'all' == SelectCategory && 'active'"
          @click="() => {
              SelectCategory = 'all';
              filterProducts = products;
            }"
        >
          all
        </p>
        <p
          v-for="item in category"
          :key="item.id"
          class="item-category"
          :class="item.category == SelectCategory && 'active'"
          @click="() => handleCategory(item.category)"
        >
          {{ item.category }}
        </p>
      </div>

      <!-- Carousel Products -->
      <carousel
        v-bind="settings"
        :breakpoints="breakpoints"
        class="my-20 container mx-auto flex flex-col"
      >
        <slide v-for="slide in filterProducts" :key="slide.id" class="px-5">
          <CardProduct :item="slide" />
        </slide>

        <template #addons>
          <navigation>
            <template #next>
              <button class="-mr-2 btn btn-sm btn-circle drop-shadow">></button>
            </template>
            <template #prev>
              <button class="-ml-2 btn btn-sm btn-circle drop-shadow">
                &lt
              </button>
            </template>
          </navigation>
        </template>
      </carousel>

      <div class="flex justify-center">
        <RouterLink to="/shop" class="btn btn-link text-warning text-lg">
          View All <IconArrow />
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.active {
  background-color: white;
}

.item-category {
  padding: 5px 17px;
  border-radius: 50px;
  cursor: pointer;
}
</style>
