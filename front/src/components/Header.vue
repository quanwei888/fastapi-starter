<template>
  <div class="flex items-center px-4 justify-between bg-white text-black">
    <div class="flex items-center space-x-2">
      <div>
        <p class="font-semibold">{{ user.name }}</p>
        <p class="text-sm text-gray-600">{{ user.email }}</p>
      </div>
    </div>
    <div>
      <button 
        v-if="isLoggedIn"
        @click="logout" 
        class="px-4 py-2 bg-red-500 hover:bg-red-700 text-white rounded"
      >
        Logout
      </button>
      <button 
        v-else 
        @click="login" 
        class="px-4 py-2 bg-green-500 hover:bg-green-700 text-white rounded text-sm"
      >
        Login
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const user = ref({
  name: 'John Doe',
  email: 'john.doe@example.com',
  avatar: 'https://via.placeholder.com/40'
});

const isLoggedIn = ref(false);

const login = () => {
  isLoggedIn.value = true;
};

const logout = () => {
  isLoggedIn.value = false;
};
</script>