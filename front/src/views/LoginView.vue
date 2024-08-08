<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="w-full max-w-xs p-8 bg-white border border-gray-300 rounded-lg shadow-lg">
      <h1 class="mb-6 text-3xl font-extrabold text-center text-gray-800">Login</h1>
      <form @submit.prevent="loginUser">
        <div class="mb-4">
          <label for="username" class="block mb-2 text-sm font-semibold text-gray-700">Username:</label>
          <input type="text" id="username" v-model="username" required class="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" />
        </div>
        <div class="mb-6">
          <label for="password" class="block mb-2 text-sm font-semibold text-gray-700">Password:</label>
          <input type="password" id="password" v-model="password" required class="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" />
        </div>
        <button type="submit" class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">Login</button>
      </form>
      <div class="mt-4">
        <button @click="loginWithGoogle" class="w-full px-4 py-2 font-bold text-white bg-red-500 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400">Login with Google</button>
      </div>
      <div class="mt-4 text-center">
        <a href="/register" class="text-sm text-blue-500 hover:underline">Don't have an account? Register</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { login } from '../api/auth'
import { useAuthStore } from '../stores/auth'

const username = ref('')
const password = ref('')
const router = useRouter()
const authStore = useAuthStore()

const loginUser = async () => {
  try {
    const response = await login(username.value, password.value)
    if (response.success) {
      authStore.setToken(response.token)
      alert('Login successful!')
      router.push('/')
    }
  } catch (error) {
    alert(error.message)
  }
}

const loginWithGoogle = () => {
  alert('Google login clicked')
}
</script>