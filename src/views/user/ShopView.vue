<script setup>
import { RouterLink } from "vue-router";
import { ref, onMounted, computed } from "vue";

import BgSubpage from "@/components/layout/header/BgSubpage.vue";
import CardProduct from "@/components/ui/CardProduct.vue";

const products = ref([]);
const filterProducts = ref([]);
const category = ref([]);
const selectCategory = ref("all");

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
  selectCategory.value = name;

  const updateItems = products.value.filter((item) => {
    return item.category == name;
  });

  filterProducts.value = updateItems;
};

onMounted(() => {
  fetchdata();
  fetchCategory();
});
</script>

<template>
  <main>
    <BgSubpage title="Shop Page" />

    <div className="container mx-auto w-full my-40">

      <!-- Category -->
      <div class="w-fit mx-auto rounded-full flex space-x-2 justify-center bg-[#EEEEEE] py-2 px-2">
        <p
          class="item-category"
          :class="'all' == selectCategory && 'active'"
          @click="
            () => {
              selectCategory = 'all';
              filterProducts = products;
            }
          "
        >
          all
        </p>
        <p
          v-for="item in category"
          :key="item.id"
          class="item-category"
          :class="item.category == selectCategory && 'active'"
          @click="() => handleCategory(item.category)"
        >
          {{ item.category }}
        </p>
      </div>

      <!-- List products -->
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 pt-32 px-10">
        <CardProduct v-for="item in filterProducts" :key="item.id" :item="item" />
      </div>
    </div>
  </main>
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
