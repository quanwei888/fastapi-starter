<template>
    <div v-if="post" class="p-6 bg-white rounded-lg shadow-md">
      <h1 class="text-3xl font-bold mb-4">{{ post.title }}</h1>
      <p class="text-gray-500 text-sm mb-4">By {{ post.author }} on {{ new Date(post.date).toLocaleDateString() }}</p>
      <div class="text-gray-700 mb-4">{{ post.content }}</div>
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  const props = defineProps({
    post: {
      type: Object,
      required: true
    }
  });
  </script>