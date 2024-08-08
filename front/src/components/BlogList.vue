<script setup>
import { defineProps, ref, onMounted } from 'vue'
import { getCommentsByPostId } from '../api/comments'

const props = defineProps({
  posts: {
    type: Array,
    required: true
  }
})

</script>

<template>
  <div>
    <div v-if="posts.length">
      <div v-for="post in posts" :key="post.id" class="mb-8 p-6 bg-white rounded-lg shadow-md">
        <h2 class="text-2xl font-semibold mb-2">{{ post.title }}</h2>
        <p class="text-gray-500 text-sm mb-4">By {{ post.author }} on {{ new Date(post.date).toLocaleDateString() }}</p>
        <p class="text-gray-700 mb-4">{{ post.content }}</p>
        <p class="text-gray-500 text-sm mb-4">0 comments</p>
        <RouterLink :to="{ name: 'post-detail', params: { postId: post.id } }" class="text-blue-500">Read more</RouterLink>
      </div>
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
  </div>
</template>