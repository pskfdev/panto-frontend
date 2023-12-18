<script setup>
import { ref, onMounted, computed } from "vue";
import { RouterLink } from "vue-router";
/* Store */
import { useCartStore } from "@/stores/cart";
import { useUserStore } from "@/stores/user";
import { storeToRefs } from "pinia";
/* Component */
import BgSubpage from "@/components/layout/header/BgSubpage.vue";
import IconBin from "@/components/icons/IconBin.vue";
import IconPlus from "@/components/icons/IconPlus.vue"


/* store */
const { removeToCart, decrementCount, incrementCount } = useCartStore();
const { cart } = storeToRefs(useCartStore());
const { user } = storeToRefs(useUserStore());

/* func */
const sumTotal = computed(() => {
  return cart.value.reduce((currentValue, nextValue) => {
    return currentValue + nextValue.count * nextValue.price;
  }, 0);
});

</script>

<template>
  <main>
    <BgSubpage title="Cart Page" />

    <div class="my-32 container mx-auto">
      <h1 class="text-center mb-20">Cart : {{ cart.length }} products</h1>

      <!-- Col 1 -->
      <div class="grid lg:grid-cols-2 gap-0 md:gap-4">
        <div class="w-full">
          <h2 class="text-center py-3 bg-indigo-200">List products</h2>
          <table class="table">
            <thead>
              <tr class="text-center">
                <th>No</th>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(item, index) in cart"
                :key="item.id"
                class="text-center"
              >
                <td>{{ index }}</td>
                <td>
                  <img :src="item.url" :alt="item.title" class="w-20 mx-auto" />
                </td>
                <td>{{ item.title }}</td>
                <td>{{ item.price }}</td>
                <td>
                  <div class="flex items-center justify-center">
                    <button
                      @click="() => decrementCount(item.id)"
                      class="w-6 h-6 rounded-full text-white bg-gray-400 hover:bg-gray-500"
                    >
                      -
                    </button>
                    <span class="font-bold mx-4">{{ item.count }}</span>
                    <button
                      @click="() => incrementCount(item.id)"
                      class="w-6 h-6 rounded-full text-white bg-indigo-500 hover:bg-indigo-600"
                    >
                      +
                    </button>
                  </div>
                </td>
                <td>
                  <IconBin
                    role="button"
                    @click="() => removeToCart(item.id)"
                    class="mx-auto text-error"
                  />
                </td>
              </tr>
            </tbody>
          </table>

          <RouterLink to="/shop" class="btn btn-outline w-full uppercase">
            <IconPlus />
          </RouterLink>
        </div>

        <!-- Col 2 -->
        <div class="w-full text-2xl border border-yellow-200 h-fit">
          <h2 class="text-center py-3 bg-yellow-200">Summary</h2>
          <div class="px-10 space-y-5 py-10">
            <p v-for="item in cart">
              {{ item.title }} x {{ item.count }} =
              <span class="text-warning">{{ item.price * item.count }}</span>
            </p>

            <hr class="border-yellow-200" />
            <div class="flex justify-between">
              <p>Total : <span class="text-warning">{{ sumTotal }}</span></p>
              <button :disabled="user? false :true" class="btn btn-warning">
                <p>Pay now</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
