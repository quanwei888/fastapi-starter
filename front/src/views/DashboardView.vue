<template>
  <div class="flex min-h-screen">
    <!-- Sidebar -->
    <aside class="w-64 bg-gray-800 text-white flex flex-col">
      <div class="p-4 text-2xl font-bold">Dashboard</div>
      <nav class="flex-1 p-4">
        <ul>
          <li class="mb-2">
            <router-link to="/" class="block p-2 rounded hover:bg-gray-700">Home</router-link>
          </li>
          <li class="mb-2">
            <router-link to="/create" class="block p-2 rounded hover:bg-gray-700">Create Post</router-link>
          </li>
          <li class="mb-2">
            <router-link to="/login" class="block p-2 rounded hover:bg-gray-700">Login</router-link>
          </li>
        </ul>
      </nav>
    </aside>

    <!-- Main Content -->
    <main class="flex-1 p-6 bg-gray-100">
      <header class="mb-6">
        <h1 class="text-3xl font-bold">Welcome to the Dashboard</h1>
      </header>
      <section>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="p-4 bg-white rounded-lg shadow">
            <h2 class="text-xl font-semibold mb-2">Section 1</h2>
            <p>Content for section 1.</p>
          </div>
          <div class="p-4 bg-white rounded-lg shadow">
            <h2 class="text-xl font-semibold mb-2">Section 2</h2>
            <p>Content for section 2.</p>
          </div>
          <div class="p-4 bg-white rounded-lg shadow">
            <h2 class="text-xl font-semibold mb-2">Section 3</h2>
            <p>Content for section 3.</p>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>
