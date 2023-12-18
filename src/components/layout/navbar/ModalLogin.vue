<script setup>
import { ref, onMounted, reactive } from "vue";
/* Store */
import { useUserStore } from "@/stores/user";
import { storeToRefs } from "pinia";

/* store */
const { setShowLogin, login } = useUserStore();

const data = reactive({
  username: "",
  password: "",
});
const disabled = ref(false);

const handleSubmit = () => {
  disabled.value = true;
  login(data);

  setTimeout(() => {
    setShowLogin();
    disabled.value = false;
  }, 1000);
};
</script>

<template>
  <div class="modal modal-open">
    <div class="modal-box text-center text-black py-10">
      <button
        @click="() => setShowLogin()"
        class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
      >
        ✕
      </button>
      <h3 class="text-slate-600">Login</h3>
      <form class="mt-5" @submit.prevent="handleSubmit()">
        <input
          required
          name="username"
          type="text"
          placeholder="Username"
          class="input w-full max-w-xs"
          v-model="data.username"
        />
        <input
          required
          name="password"
          type="password"
          placeholder="Password"
          class="mt-5 input w-full max-w-xs"
          v-model="data.password"
        />
        <button
          :disabled="disabled"
          class="mt-5 btn btn-warning w-full max-w-xs uppercase"
          type="submit"
        >
          <span v-if="disabled" class="loading" />
          <p v-else>login</p>
        </button>
      </form>
    </div>
  </div>
</template>

<style scoped></style>
