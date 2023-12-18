<script setup>
import { ref, onMounted, computed, watch } from "vue";
import { RouterLink, useRoute } from "vue-router";
/* Store */
import { useCartStore } from "@/stores/cart";

import BgSubpage from "@/components/layout/header/BgSubpage.vue";
import ProductCategory from "@/components/article/category/ProductCategory.vue";

/* store */
const { addToCart } = useCartStore();

const route = useRoute();
/* const id = ref(route.params.id); */
const disabled = ref(false);
const data = ref([]);
const count = ref(1);

const fetchdata = (id) => {
  fetch("/data.json")
    .then((response) => response.json())
    .then((res) => {
      data.value = res.filter((item) => {
        return item.id == id;
      });
    });
};

fetchdata(route.params.id);

const decrement = () => {
  if (count.value == 1) {
    count.value = 1;
  } else {
    count.value -= 1;
  }
};

const increment = () => {
  count.value += 1;
};

const addCart = () => {
  disabled.value = true;

  addToCart(data.value[0], count.value);

  setTimeout(() => {
    disabled.value = false;
  }, 1000);
};


watch(() => route.params.id, (newId) => {
  fetchdata(newId)
});

</script>

<template>
  <main>
    <BgSubpage title="Product-detail Page" />

    <div v-if="data.length" class="container mx-auto w-full my-40">
      <div class="my-10 text-lg font-bold text-slate-500">
        <RouterLink to="/shop">Shop</RouterLink> <span>></span>
        <span class="text-black">{{ data[0].title }}</span>
      </div>

      <div
        class="w-full h-3/4 flex flex-col lg:flex-row lg:space-x-4 items-center"
      >
        <div class="w-full">
          <img
            :src="data[0].url"
            :alt="data[0].title"
            class="mx-auto w-80 md:w-fit object-cover h-[32rem]"
          />
        </div>

        <div class="w-full lg:w-9/12 space-y-8 mt-10 lg:mt-0">
          <div>
            <p class="text-3xl font-bold">{{ data[0].title }}</p>
            <br />
            <p class="text-xl font-bold">{{ data[0].price }}</p>
            <br />
            <p class="text-xl">{{ data[0].des }}</p>
          </div>

          <div class="flex items-center">
            <p class="text-xl me-5">Quantity:</p>
            <button
              @click="decrement"
              class="w-6 h-6 rounded-full text-white bg-gray-400 hover:bg-gray-500"
            >
              -
            </button>
            <span class="text-2xl font-bold mx-4">{{ count }}</span>
            <button
              @click="increment"
              class="w-6 h-6 rounded-full text-white bg-indigo-500 hover:bg-indigo-600"
            >
              +
            </button>
          </div>
          <br />

          <button
            @click="addCart"
            class="btn btn-primary w-full uppercase"
            :disabled="disabled"
          >
            <span v-if="disabled" class="loading" />
            <p v-else>add to cart</p>
          </button>
        </div>
      </div>

      <!-- Product filter category -->
      <div className="my-40">
        <h1 className="">You Might Also Like</h1>
        <ProductCategory v-if="data[0]" :category="data[0].category" />
      </div>
    </div>

    <!-- Case No Product -->
    <div v-else>
      <h1 class="text-center">No, Product...</h1>
    </div>
  </main>
</template>

<style scoped></style>
