<template>
    <div class="container">
        <PageTitle title="Update Task Page" />
        <TaskForm :taskId="taskId" />
    </div>
 
  </template>
  
  <script>
  import PageTitle from "@/components/PageTitle.vue";
  import TaskForm from "@/components/TaskForm.vue";
  
  export default {
    name: "UpdatePage",
    components: {
        PageTitle,
        TaskForm,
    },
    computed: {
      taskId() {
        return parseInt(this.$route.params.taskId);
      },
    },
  };
  </script>
  
  <style scoped></style>