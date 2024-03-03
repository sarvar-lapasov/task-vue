<template>
    <div class="text-center mt-5">
      <div class="d-flex justify-content-center align-content-center">
        <form class="col-lg-4 col-md-6 col-8 mb-4" @submit.prevent="submit">
          <div class="mb-3">
            <label for="taskTitle" class="form-label">Title</label>
            <input
              type="text"
              class="form-control"
              id="taskTitle"
              v-model="task.title"
              required
            />
          </div>
          <div class="mb-3">
            <label for="taskDescription" class="form-label">Description</label>
            <input
              type="text"
              class="form-control"
              id="taskDescription"
              v-model="task.description"
              required
            />
          </div>
          <div class="d-flex flex-column flex-md-row mt-5">
            <router-link
              to="/"
              class="btn btn-outline-warning rounded-5 w-100 p-2 px-5 mx-0 mx-md-4 my-3 my-md-0"
            >
              Cancel
            </router-link>
  
            <button
              type="submit"
              class="btn btn-outline-success w-100 rounded-5 p-2 px-5"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import { mapActions, mapGetters } from "vuex";
  
  export default {
    name: "TaskForm",
    props: {
      taskId: {
        type: Number,
        default: null,
      },
    },
    computed: {
      ...mapGetters(["getTask"]),
    },
    data() {
      return {
        task: {
          title: "",
          description: "",
        },
      };
    },
    methods: {
      ...mapActions(["createTask", "updateTask", "fetchTask"]),
      submit() {
        const taskData = {
          title: this.task.title,
          description: this.task.description,
        };
  
        if (this.taskId) {
          this.updateTask({
            taskId: this.taskId,
            data: taskData,
          })
            .then(() => {
              this.$router.push("/");
            })
            .catch((error) => {
              console.log(error);
            });
        } else {
          this.createTask(taskData)
            .then(() => {
              this.$router.push("/");
            })
            .catch((error) => {
              console.log(error);
            });
        }
      },
    },
    mounted() {
      if (this.taskId) {
        this.fetchTask(this.taskId).then(() => {
          this.task = this.getTask;
        });
      }
    },
  };
  </script>
  
  <style scoped></style>