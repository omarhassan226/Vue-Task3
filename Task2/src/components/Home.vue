<template>
    <div class="row ">
      <div class="card col-3 mb-4  p-1 border-1 " v-for="product in products" :key="product.id">
        <img :src="product.image" class="card-img-top" alt="">
        <div class="card-body">
          <h5 class="card-title">{{ product.name }}</h5>
         <p>counter {{ counterStore.counter }}</p>
          <p class="list-group-item ">Price: {{ formatCurrency(product.price) }}</p>
          <p class="list-group-item ">title: {{ product.title }}</p>
          <p :class="[product.pages >= 60 ? 'more' : ' less ','list-group-item px-4 py-1',]"> <span class="text-black">pages:</span> {{ product.pages }}</p>
          <p class="list-group-item ">price: {{ product.price }}</p>
          <p class="card-text">Author: {{ product.author }}</p>
          <button v-on:click.once="addToWishList(product)" :disabled="product.added" class="btn btn-primary">Add to Wishlist</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>

    import { storeToRefs } from "pinia"
import { useStore } from "./../stores/store"
  
  export default {
    name: "Home",
    props: ['wishlistProducts']
    ,
    data() {
console.log(useStore().products)
      
return {
  products: useStore().products,
  counterStore: useStore()  ,
  store:useStore()    
}
    },
    methods: {
      addToWishList(product) {
        this.store.addToWishlist(product);
      },
      formatCurrency(value) {
        return new Intl.NumberFormat("ar-EG", {
          style: "currency",
          currency: "EGP",
        }).format(value);
      }
    }
  }
  </script>
  
  <style scoped>
  .card-img-top {
    height: 300px; /* Adjust as needed */
    object-fit: cover; /* Maintain aspect ratio */
    padding: 0;
  }
  .more{
    color: tomato;
  }
  </style>
  