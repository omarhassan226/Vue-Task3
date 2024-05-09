<template>
    <div > 
    <div   v-if="!submitted"> 
      <input v-model="input1" placeholder="Input 1">
      <input v-model="input2" placeholder="Input 2">
      <button @click="submitForm">Next</button>
    </div>

    <div  v-if="submitted"> 
      <DisplayInputs :input1="input1" :input2="input2"  />
    </div>
    
    </div>
  </template>
  
  <script>
  import DisplayInputs from './DisplayInputs.vue';
  
  export default {
    components: {
      DisplayInputs
    },
    data() {
      return {
        
        input1: '',
        input2: '',
        submitted: false
      };
    },
    methods: {
      submitForm() {
        this.submitted = true;
      }
    }
  };
  </script>
  