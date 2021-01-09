<template>
  <div>
    <h2>Cart</h2>
    <div>
      <table class="table-fixed">
        <thead>
          <tr>
            <th class="w-2/4 text-left">Product</th>
            <th class="w-1/4 text-left">Price</th>
            <th class="w-1/4 text-left">Amount</th>
            <th class="w-1/4 text-left">Subtotal</th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="border border-black"
            v-for="product in productsInCart"
            :key="product.id"
          >
            <td class="">{{ product.name }}</td>
            <td class="">{{ priceInEuro(product.price) }}</td>
            <td class="">{{ product.amount }}</td>
            <td class="">{{ priceInEuro(product.price * product.amount) }}</td>
          </tr>
        </tbody>
      </table>
      <div class="flex place-content-between">
        <p>TOTAL</p>
        {{ totalPrice }}
      </div>
    </div>
  </div>
</template>

<script>
import { priceInEuro } from './shared/currency';

export default {
  name: 'Cart',
  computed: {
    productsInCart() {
      return this.$store.getters.getCart;
    },
    totalPrice() {
      const arr = this.$store.getters.getCart;
      let total = 0;
      for (let i = 0; i < arr.length; i++) {
        total += arr[i].price * arr[i].amount;
      }
      return total;
    },
  },
  methods: {
    priceInEuro,
  },
};
</script>

<style scoped></style>
