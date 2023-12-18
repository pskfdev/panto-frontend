import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core";

export const useCartStore = defineStore("cart", () => {
  const cart = useLocalStorage("cart", []);


  function addToCart(item, count = 1) {
    let listcart = [];

    if (localStorage.getItem("cart")) {
      listcart = JSON.parse(localStorage.getItem("cart"));

      const found = listcart.find((el) => el.id == item.id);
      if (found) {
        found.count += count;
      } else {
        listcart.push({
          ...item,
          count: count,
        });
      }
    } else {
      listcart.push({
        ...item,
        count: count,
      });
    }

    cart.value = listcart;
  }

  function removeToCart(id) {
    let listcart = [];

    listcart = JSON.parse(localStorage.getItem("cart"));

    for (let i = 0; i < listcart.length; i++) {
      if (listcart[i].id == id) {
        listcart.splice(i, 1);
      }
    }

    cart.value = listcart;
  }

  function decrementCount(id) {
    let listcart = [];

    listcart = JSON.parse(localStorage.getItem("cart"));

    const found = listcart.find((el) => el.id == id);
    if (found) {
      if (found.count == 1) {
        found.count = 1;
      } else {
        found.count -= 1;
      }
    } else {
      console.log("item not found");
    }

    cart.value = listcart;
  }

  function incrementCount(id) {
    let listcart = [];

    listcart = JSON.parse(localStorage.getItem("cart"));

    const found = listcart.find((el) => el.id == id);
    if (found) {
      found.count += 1;
    } else {
      console.log("item not found");
    }

    cart.value = listcart;
  }


  return { cart, addToCart, removeToCart, decrementCount, incrementCount };
});
