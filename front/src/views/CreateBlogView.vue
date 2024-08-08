<template>
  <div class="flex flex-col min-h-screen p-2">
    <Header class="fixed top-0 left-0 w-full z-10" />
    <main class="flex-1 pt-16">
      <h1 class="text-3xl font-bold mb-4">Create New Blog Post</h1>
      <form @submit.prevent="submitPost">
        <div class="mb-4">
          <label for="title" class="block mb-2 text-sm font-semibold text-gray-700">Title:</label>
          <input type="text" id="title" v-model="title" required class="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" />
        </div>
        <div class="mb-4">
          <label for="category" class="block mb-2 text-sm font-semibold text-gray-700">Category:</label>
          <select id="category" v-model="category" required class="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent">
            <option v-for="cat in categories" :key="cat" :value="cat">{{ cat }}</option>
          </select>
        </div>
        <div class="mb-4">
          <label for="content" class="block mb-2 text-sm font-semibold text-gray-700">Content:</label>
          <textarea id="content" v-model="content" required class="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"></textarea>
        </div>
        <button type="submit" class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">Submit</button>
      </form>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { addPost, getCategories } from '../api/blog';
import Header from '../components/Header.vue';

const title = ref('');
const category = ref('');
const content = ref('');
const categories = ref([]);
const router = useRouter();

onMounted(async () => {
  try {
    categories.value = await getCategories();
  } catch (error) {
    console.error('Failed to fetch categories:', error);
  }
});

const submitPost = async () => {
  const post = {
    title: title.value,
    content: content.value,
    author: 'Current User',
    date: new Date().toISOString().split('T')[0],
    category: category.value
  };
  try {
    await addPost(category.value, post);
    router.push('/');
  } catch (error) {
    console.error('Failed to create post:', error);
  }
};
</script>