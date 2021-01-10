<template>
  <div>
    <h2>Cart</h2>
    <div>
      <table class="table-fixed">
        <thead>
          <tr>
            <th class="w-2/4 text-left p-3 pb-1">Product</th>
            <th class="w-1/4 text-left p-3 pb-1">Price</th>
            <th class="w-1/4 text-left p-3 pb-1">Amount</th>
            <th class="w-1/4 text-left p-3 pb-1">Subtotal</th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="border border-black background"
            v-for="productObj in productsInCart"
            :key="productObj.product.id"
          >
            <td class="p-3">{{ productObj.product.name }}</td>
            <td class="p-3">
              {{
                priceInEuro(
                  (Math.round(productObj.product.price * 100) / 100).toFixed(2),
                )
              }}
            </td>
            <td class="p-3">{{ productObj.amount }}</td>
            <td class="p-3">
              {{
                priceInEuro(
                  (
                    Math.round(
                      productObj.product.price * productObj.amount * 100,
                    ) / 100
                  ).toFixed(2),
                )
              }}
            </td>
          </tr>
        </tbody>
      </table>
      <div class="flex place-content-between p-3 pr-9">
        <p class="font-bold">TOTAL</p>
        <p class="font-bold">
          {{ priceInEuro((Math.round(totalPrice * 100) / 100).toFixed(2)) }}
        </p>
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
      console.log(this.$store.getters.getCart);
      return this.$store.getters.getCart;
    },
    totalPrice() {
      const arr = this.$store.getters.getCart;
      let total = 0;
      for (let i = 0; i < arr.length; i++) {
        total += arr[i].product.price * arr[i].amount;
      }
      return total;
    },
  },
  methods: {
    priceInEuro,
  },
};
</script>

<style scoped>
.background:nth-child(even){
  background-color: #d3bbbc56;
}
</style>
