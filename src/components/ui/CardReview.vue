<script setup>
defineProps({
  item: Object,
});
</script>

<template>
  <div
    class="w-full flex items-end justify-center p-5 h-96 rounded-3xl bg-no-repeat" 
    :style="{ 'background-image': 'url(' + item.bg + ')', 'background-size': '100% 100%' }"
  >
    <div class="relative bg-white rounded-3xl text-center pt-10 pb-5">
      <div class="w-fit p-2 bg-white rounded-full absolute -top-7 inset-x-0 mx-auto">
        <img :src="item.profile" :alt="item.name" class="w-10 rounded-full" />
      </div>
      <h3>{{ item.name }}</h3>
      <p>{{ item.location }}</p>
      <br />
      <p>
        {{ item.review }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.bg-card {
  background-image: url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg);
  object-fit: cover;
}
</style>
