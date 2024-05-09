<template>
  <div class="container"> 
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Navbar</a>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" @click="switchComponent('Home')">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" @click="switchComponent('WishList')">WishList</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" @click="switchComponent('Register')">Register</a>
              </li>
            </ul>
            <span class="navbar-text">
            </span>
          </div>
        </div>
      </nav>
  
      <div class="d-flex w-100 mx-auto my-3">
        <keep-alive> <component :is="targetComponent" :wishlist="wishlistProducts" @addToWishList="addToWishList"/>
        </keep-alive>

      </div>
    </div>
</template>

<script>
import WishList from './components/WishList.vue';
import Home from './components/Home.vue';
import Register from './components/Register.vue';

export default {
  data() {
    return {
      targetComponent: 'Home',
      wishlistProducts: []
    };
  },
  components: {
    WishList,
    Home,
    Register
  },
   methods: {
    switchComponent(component) {
      this.targetComponent = component;
    },
    addToWishList(product) {
      this.wishlistProducts.push(product);
      console.log(this.wishlistProducts);
    }
  }
};
</script>

<style>

</style>
