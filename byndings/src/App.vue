

<template>
  
  <div class="grid grid-cols-1 gap-6 p-6">
    <header class="flex justify-between items-center">
      <!-- Left Section -->
      <div class="flex items-center space-x-2">
        <img src="@/assets/time1.svg" alt="Time Icon" class="w-6 h-6">
        <p class="text-sm text-gray-700">Продолжить выбор</p>
      </div>

      <!-- Right Section -->
      <div class="text-right space-y-1">
        <h3 class="font-semibold text-lg">Наш телефон</h3>
        <p class="text-base">+996 705 188 955</p>
        <p class="text-base">+996 705 188 955</p>
        <div class="flex items-center space-x-1">
          <img src="@/assets/time.svg" alt="Working Hours Icon" class="w-4 h-4">
          <p class="text-sm">работаем c 10:00 до 00:00</p>
        </div>
      </div>
    </header>

    <form @submit.prevent="submitForm" class="bg-gray-50 border border-yellow-300 p-6 rounded-md">
      <!-- Form Section -->
      <h2 class="text-lg font-semibold mb-4">Ваши данные</h2>

      <div class="grid grid-cols-2 gap-4">
        <!-- Phone and Name -->
        <input type="text" v-model="form.phone" placeholder="Телефон" class="border p-2 rounded-md" required>
        <input type="text" v-model="form.name" placeholder="Имя" class="border p-2 rounded-md" required>


        <div class="col-span-2 flex space-x-4">
          <button @click="setPaymentType('cash')" :class="paymentType === 'cash' ? 'bg-yellow-400' : 'bg-gray-200'"
            class="py-2 px-4 rounded-md">
            Наличными
          </button>
          <button @click="setPaymentType('card')" :class="paymentType === 'card' ? 'bg-yellow-400' : 'bg-gray-200'"
            class="py-2 px-4 rounded-md">
            Картой
          </button>
        </div>

        <input v-show="deliveryType === 'courier'" type="text" v-model="form.street" placeholder="Улица" class="border p-2 rounded-md">
        <input v-show="deliveryType === 'courier'" type="text" v-model="form.house" placeholder="Дом" class="border p-2 rounded-md">

        <div class="col-span-2 flex space-x-4">
          <button @click="setDeliveryType('courier')" :class="deliveryType === 'courier' ? 'bg-orange-400' : 'bg-gray-200'"
            class="py-2 px-4 rounded-md">
            Курьером
          </button>
          <button @click="setDeliveryType('pickup')" :class="deliveryType === 'pickup' ? 'bg-orange-400' : 'bg-gray-200'"
            class="py-2 px-4 rounded-md">
            Самовывоз
          </button>
        </div>
    
        <textarea v-model="form.comment" placeholder="Комментарий к заказу" class="border p-2 rounded-md col-span-2"></textarea>

        <div class="col-span-2 text-center">
          <button type="submit" class="bg-orange-500 text-white py-2 px-6 rounded-md">Оформить заказ</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        phone: '',
        name: '',
        payment: '',
        street: '',
        house: '',
        comment: '',
      },
      paymentType: 'cash',
      deliveryType: 'courier',
    };
  },
  methods: {
    setPaymentType(type) {
      this.paymentType = type;
    },
    setDeliveryType(type) {
      this.deliveryType = type;
    },
    submitForm() {
      console.log('Form submitted', this.form);
    },
  },
};
</script>

<style scoped>
</style>







