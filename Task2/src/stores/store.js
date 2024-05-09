// stores/store.js
import { defineStore } from 'pinia';
import products from "../../products";

export const useStore = defineStore('store', {
  state: () => ({
    wishlist: [],
    products: products,
  }),
  actions: {
    addToWishlist(product) {
      this.wishlist.push(product);
      product.added = true;
    },
    removeFromWishlist(product) {
      const index = this.wishlist.findIndex(item => item.id === product.id);
      if (index !== -1) {
        this.wishlist.splice(index, 1);
        product.added = false;
      }
    },
  },
});
