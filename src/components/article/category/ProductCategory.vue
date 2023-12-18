<script setup>
import { ref, onMounted, computed } from "vue";
import { RouterLink, useRoute } from "vue-router";

const prop = defineProps({
  category:String,
});

const data = ref([]);

const fetchdata = () => {
  fetch("/data.json")
    .then((response) => response.json())
    .then((res) => {
      data.value = res.filter((el) => {
        return el.category == prop.category;
      });
    });
};

fetchdata();


</script>

<template>
  <div class="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
    <div v-for="item in data" :key="item.id" class="text-center rounded-[20px] shadow-lg">
      <RouterLink :to="/product-detail/ + item.id">
        <img
          :src="item.url"
          :alt="item.title"
          class="w-full h-96 object-cover"
        />
        <br />
        <p class="text-lg font-bold">{{ item.title }}</p>
        <p>{{ item.price }}</p>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped></style>
