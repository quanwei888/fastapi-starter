<script setup>
import { ref, onMounted } from 'vue'
import { getPostsByCategory, getCategories } from '../api/blog'
import Header from '../components/Header.vue'
import BlogList from '../components/BlogList.vue'

const categories = ref([])
const selectedTab = ref('')
const postsByCategory = ref({})

onMounted(async () => {
  try {
    categories.value = await getCategories()
    selectedTab.value = categories.value[0]
    for (const category of categories.value) {
      postsByCategory.value[category] = await getPostsByCategory(category)
    }
    console.log(postsByCategory)
  } catch (error) {
    console.error('Failed to fetch categories or blog posts:', error)
  }
})
</script>

<template>
  <div class="flex flex-col min-h-screen p-2">
    <Header class="fixed top-0 left-0 w-full z-10" />
    <main class="flex-1 pt-16">
      <div class="border-b border-gray-200">
        <nav class="-mb-px flex space-x-8" aria-label="Tabs">
          <button
            v-for="category in categories"
            :key="category"
            @click="selectedTab = category"
            :class="selectedTab === category ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'"
            class="whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
          >
            {{ category }}
          </button>
        </nav>
      </div>
      <div v-for="category in categories" v-show="selectedTab === category" class="mt-8">
        <h2 class="text-xl font-medium mb-4 text-gray-800">{{ category }}</h2>
        <BlogList :posts="postsByCategory[category] || []" />
      </div>
    </main>
  </div>
</template>

<style scoped>
/* Add any additional styles if needed */
</style>