<script setup>
import { ref, onMounted } from "vue";
import { RouterLink } from "vue-router";
/* Store */
import { useCartStore } from "@/stores/cart";
import { useUserStore } from "@/stores/user"
import { storeToRefs } from "pinia";

import IconMenu from "@/components/icons/IconMenu.vue";
import IconCart from "@/components/icons/IconCart.vue";
import Login from "./Login.vue";
import ModalLogin from "./ModalLogin.vue";


/* store */
const { cart } = storeToRefs(useCartStore());
const { showLogin } = storeToRefs(useUserStore());

let scrollPosition = ref(null);

const updateColorNav = () => {
  scrollPosition.value = window.scrollY
};


onMounted(() => {
  window.addEventListener("scroll", updateColorNav);
});


</script>

<template>
  <nav class="py-4 fixed w-full z-10 text-white" :class="[scrollPosition > 100 && 'bg-active py-0']">
    <div class="navbar container mx-auto">
      <!-- Humberger -->
      <div class="navbar-start">
        <div class="dropdown">
          <div tabIndex="{0}" role="button" class="btn btn-ghost lg:hidden">
            <IconMenu class="w-8" />
          </div>
          <ul
            tabIndex="{0}"
            class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black"
          >
            <li><RouterLink to="/about">About Us</RouterLink></li>
            <li><RouterLink to="/shop">Shop</RouterLink></li>
            <li><RouterLink to="/contact">Contact</RouterLink></li>
          </ul>
        </div>
        <RouterLink to="/" class="btn btn-ghost text-2xl">Panto</RouterLink>
      </div>

      <!-- Menu -->
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1 text-lg">
          <li><RouterLink to="/about">About Us</RouterLink></li>
          <li><RouterLink to="/shop">Shop</RouterLink></li>
          <li><RouterLink to="/contact">Contact</RouterLink></li>
        </ul>
      </div>

      <!-- Cart and Profile -->
      <div class="navbar-end space-x-5">
        <RouterLink to="/cart" class="indicator">
          <IconCart class="w-8" />
          <span class="badge badge-sm indicator-item">{{ cart.length }}</span>
        </RouterLink>

        <Login />
        <ModalLogin v-if="showLogin" />
      </div>
    </div>
  </nav>
</template>

<style scoped>
.bg-active {
  background-color: #EEEEEE;
  color: black;
  opacity: 0.9;
  transition: 0.3ms ease-in-out;
}
</style>
