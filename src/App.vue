<script setup>
import { RouterLink, RouterView } from "vue-router";

import NavigationBar from "@/components/layout/navbar/NavigationBar.vue";
import Footer from "@/components/layout/footer/Footer.vue";
</script>

<template>
  <div class="app">
    <header class="">
      <NavigationBar />
    </header>

    <main>
      <RouterView />
    </main>

    <footer>
      <Footer />
    </footer>
  </div>
</template>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  width: 100%;
  flex-grow: 1;
}
</style>
