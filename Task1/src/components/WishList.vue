<template>
  <div class="container m-auto" v-cloak>
    <div class="wishList">
      <div v-if="wishlist.length === 0">
        Cart is Empty
      </div>
      <table class="table" v-if="isWishlistVisible">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in wishlist" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.price }}</td>
            <td><button class="btn btn-danger" @click="deleteFromWishlist(item)">delete</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import products from "../../products";

export default {
  props: ['wishlist'],
  data() {
    return {
      products: products,
      isWishlistVisible: true,
    };
  },
  methods: {
    deleteFromWishlist(item) {
      const index = this.wishlist.findIndex(wishItem => wishItem.name === item.name);
      if (index !== -1) {
        this.wishlist.splice(index, 1);
      }
    },
  },
};
</script>

<style>
/* Add your styles here if needed */
</style>
