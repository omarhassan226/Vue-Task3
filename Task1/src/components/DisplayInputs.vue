<template>
   <div>
    <div>
      <label>Input 1: {{ input1 }}</label><br>
      <label>Input 2: {{ input2 }}</label>
    </div>
    <div>
      <button>Submit</button>
    </div>
  </div>
  </template>
  
  <script>
  export default {
    props: ['input1', 'input2']
  };
  </script>
  