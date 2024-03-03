<template>
    <div class="container">
        <PageTitle title="Create Task Page" />
        <TaskForm />
    </div>
  </template>
  
  <script>
  import PageTitle from "@/components/PageTitle.vue";
  import TaskForm from "@/components/TaskForm.vue";
  
  export default {
    name: "CreatePage",
    components: {
        TaskForm,
        PageTitle
    },
  };
  </script>
  
  <style scoped></style>