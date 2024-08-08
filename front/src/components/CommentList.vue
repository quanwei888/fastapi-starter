<template>
  <section class="mt-8">
    <h2 class="text-xl font-medium mb-4 text-gray-800">Comments</h2>
    <div v-if="comments.length">
      <div v-for="comment in comments" :key="comment.id" class="mb-4 p-4 bg-gray-100 rounded-lg">
        <p class="text-sm text-gray-600">{{ comment.author }} on {{ new Date(comment.date).toLocaleDateString() }}</p>
        <p class="text-gray-700">{{ comment.content }}</p>
      </div>
    </div>
    <div v-else>
      <p>No comments yet. Be the first to comment!</p>
    </div>
  </section>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  comments: {
    type: Array,
    required: true
  }
});
</script>
