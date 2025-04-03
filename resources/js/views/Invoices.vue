<template>
  <div class="bg-white shadow-sm sm:rounded-lg">
    <div class="p-6">
      <div class="flex justify-between items-center mb-6">
        <h1 class="text-2xl font-semibold text-gray-900">Invoices</h1>
        <button
          class="btn-primary"
          @click="createNewInvoice"
        >
          Create New Invoice
        </button>
      </div>

      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Invoice #
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Client
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Amount
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Due Date
              </th>
              <th scope="col" class="relative px-6 py-3">
                <span class="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="invoice in invoices" :key="invoice.id">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {{ invoice.number }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {{ invoice.client }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                ${{ invoice.amount }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span
                  :class="[
                    'px-2 inline-flex text-xs leading-5 font-semibold rounded-full',
                    invoice.status === 'paid' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  ]"
                >
                  {{ invoice.status }}
                </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {{ invoice.dueDate }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button
                  class="text-blue-600 hover:text-blue-900 mr-4"
                  @click="viewInvoice(invoice)"
                >
                  View
                </button>
                <button
                  class="text-red-600 hover:text-red-900"
                  @click="deleteInvoice(invoice)"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Mock data for demonstration
const invoices = ref([
  {
    id: 1,
    number: 'INV-001',
    client: 'Acme Corp',
    amount: '1,200.00',
    status: 'paid',
    dueDate: '2024-04-15'
  },
  {
    id: 2,
    number: 'INV-002',
    client: 'TechStart Inc',
    amount: '850.00',
    status: 'pending',
    dueDate: '2024-04-20'
  }
])

const createNewInvoice = () => {
  // TODO: Implement create invoice logic
  console.log('Create new invoice')
}

const viewInvoice = (invoice) => {
  // TODO: Implement view invoice logic
  console.log('View invoice:', invoice)
}

const deleteInvoice = (invoice) => {
  // TODO: Implement delete invoice logic
  console.log('Delete invoice:', invoice)
}
</script> 