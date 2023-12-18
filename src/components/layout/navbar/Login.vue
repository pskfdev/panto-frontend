<script setup>
/* Store */
import { useUserStore } from "@/stores/user";
import { storeToRefs } from "pinia";

import IconDropdown from "@/components/icons/IconDropdown.vue";

/* store */
const { user } = storeToRefs(useUserStore());
const { setShowLogin, logout } = useUserStore();

</script>

<template>
  <div v-if="user" class="dropdown dropdown-end">
    <div tabIndex="{0}" role="button" class="btn btn-ghost avatar">
      <div class="w-8 rounded-full">
        <img alt="profile" src="/src/assets/profile/profile-1.png" />
      </div>
      {{ user.username }} <IconDropdown />
    </div>
    <ul
      tabIndex="{0}"
      class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-28 text-black"
    >
      <li @click="logout()"><a>Logout</a></li>
    </ul>
  </div>

  <div v-else>
    <button @click="() => setShowLogin()" class="btn glass uppercase">Login</button>
  </div>
</template>

<style scoped></style>
