<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { getPostById } from '../api/blog';
import { getCommentsByPostId, addCommentToPost } from '../api/comments';
import Blog from '../components/Blog.vue';
import Header from '../components/Header.vue';
import CommentList from '../components/CommentList.vue';

const route = useRoute();
const post = ref(null);
const comments = ref([]);
const newComment = ref('');

onMounted(async () => {
  const postId = parseInt(route.params.postId);
  try {
    post.value = await getPostById(postId);
    comments.value = await getCommentsByPostId(postId);
  } catch (error) {
    console.error('Failed to fetch post or comments:', error);
  }
});

const addComment = async () => {
  const postId = parseInt(route.params.postId);
  const comment = {
    id: Date.now(),
    author: 'Current User',
    content: newComment.value,
    date: new Date().toISOString().split('T')[0]
  };
  try {
    await addCommentToPost(postId, comment);
    comments.value.push(comment);
    newComment.value = '';
  } catch (error) {
    console.error('Failed to submit comment:', error);
  }
};
</script>

<template>
  <div class="flex flex-col min-h-screen p-2">
    <Header class="fixed top-0 left-0 w-full z-10" />
    <main class="flex-1 pt-16">
      <nav class="flex items-center text-sm mb-4 space-x-2">
        <router-link to="/" class="text-blue-500 hover:underline">Home</router-link>
        <span>&gt;</span>
        <router-link to="/" class="text-blue-500 hover:underline">{{ post?.category }}</router-link>
        <span>&gt;</span>
        <span class="text-gray-500">{{ post?.title }}</span>
      </nav>
      
      <Blog :post="post" />
      
      <CommentList :comments="comments" />
      
      <div class="mt-4">
        <textarea v-model="newComment" class="w-full p-2 border rounded-lg" placeholder="Add a comment..."></textarea>
        <button @click="addComment" class="mt-2 px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded">Submit</button>
      </div>
    </main>
  </div>
</template>