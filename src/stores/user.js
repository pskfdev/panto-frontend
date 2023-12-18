import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useLocalStorage } from "@vueuse/core";

export const useUserStore = defineStore('user', () => {
  const user = useLocalStorage('user', {})
  const showLogin = ref(false)
  
  function login(data) {
    user.value = data
  }

  function logout() {
    user.value = ""
    localStorage.removeItem('user');
  }

  function setShowLogin() {
    showLogin.value = !showLogin.value
  }

  return { user, login, logout, showLogin, setShowLogin }
})
