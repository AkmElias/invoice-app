import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)
  const token = ref(null)

  const setUser = (userData) => {
    user.value = userData
  }

  const setToken = (tokenData) => {
    token.value = tokenData
  }

  const logout = () => {
    user.value = null
    token.value = null
  }

  return {
    user,
    token,
    setUser,
    setToken,
    logout
  }
}) 