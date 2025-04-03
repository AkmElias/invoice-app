<template>
  <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
    <div class="p-6 text-gray-900">
      <h1 class="text-2xl font-semibold mb-4">Welcome to Invoice Manager</h1>
      <p class="mb-4">Manage your invoices efficiently with our comprehensive invoice management system.</p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="bg-gray-50 p-4 rounded-lg">
          <h2 class="text-lg font-medium mb-2">Quick Actions</h2>
          <div class="space-y-2">
            <router-link 
              to="/invoices" 
              class="block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              View Invoices
            </router-link>
            <button 
              class="w-full px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              Create New Invoice
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Component logic will go here
</script> 