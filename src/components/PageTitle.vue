<template>
    <div class="page-title">
      <h1>{{ title }}</h1>
      <hr>
    </div>
  </template>
  
  <script>
  export default {
    name: "PageTitle",
    props: {
      title: {
        type: String,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .page-title {
    text-align: center;
    margin-top: 5rem;
  }
  .page-title h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
 
  </style>