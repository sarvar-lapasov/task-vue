<template>
    <div class="container text-center mt-5">
      <h1>Task List</h1>
      <hr>
      <div>
        <router-link class="btn btn-outline-success rounded-5 p-2 px-5" to="/createTask">Create Task</router-link>
      </div>
      <div class="text-start d-flex flex-column flex-md-row justify-content-between align-items-center mt-5">
        <div class="d-flex flex-column flex-md-row">
            <div>
              <select class="form-control rounded-3 p-2 px-3"  v-model="filterStatus" @change="applyFilter">
                <option value="">All</option>
                <option value="0">UnCompleted</option>
                <option value="1">Completed</option>
              </select>
            </div>
            <div>
              <input class="form-control rounded-3 p-2 px-3 mx-md-4 mx-0 my-3 my-md-0" type="date" v-model="filterDate" @change="applyFilter" />
            </div>
        </div>
        <div class="">
          <input class="form-control rounded-5 p-2 px-3" type="text" v-model="searchQuery" @input="applyFilter" placeholder="Search"/>
        </div>
      </div>
      <div
        class="border d-flex flex-column flex-md-row justify-content-between align-items-center rounded-5 my-4 px-5 py-4"
        v-for="task in getTasks"
        :key="task.id"
        :class="{'bg-light':task.completed}"
      
      >
        <div class="d-flex flex-column text-start" :class="{'text-decoration-line-through':task.completed}">
        <div class="text-start d-flex align-items-center my-3 my-md-0">
            <input class="form-check-input " type="checkbox" id="gridCheck" @change="toggleEvent(task.id, !task.completed)"  :checked="task.completed">
            <div class="mx-2">
                <h6 class="text-secondary m-0">
                {{ task.title }}
              </h6>
              <p class="text-secondary m-0" >
                {{ task.description }}
              </p>
            </div>
          
        </div>
        </div>
        <div class="flex-column flex-md-row ">
          <div>
            <p class="text-warning text-center text-md-end">{{ dayjs(task.created_at).tz('Asia/Tashkent').format('DD-MM-YYYY HH:mm:ss') }}</p>
          </div>
          <div class="d-flex flex-column flex-md-row">
            <router-link :to="'/updateTask/' + task.id" class="btn btn-outline-success w-100 w-md-50 rounded-5 p-2 px-5 mx-0 mx-md-4 my-3 my-md-0">Edit</router-link>
            <button @click="deleteTaskById(task.id)" class="btn btn-outline-danger w-100 w-md-50 rounded-5 p-2 px-5">Delete</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { mapActions, mapGetters } from "vuex";
  import dayjs from "dayjs";
  import timezone from "dayjs/plugin/timezone"
  import utc from "dayjs/plugin/utc"
  dayjs.extend(utc);
  dayjs.extend(timezone);
  export default {
    name: "TaskList",
    data() {
      return {
        filterStatus: '',
        filterDate: '',
        searchQuery: '',
        dayjs,
      };
    },
    computed: {
      ...mapGetters(["getTasks"]),
    },
    methods: {
      ...mapActions(['fetchTasks', 'deleteTask','updateTask']),
      deleteTaskById(id) {
        this.deleteTask(id)
          .then(() => {
            this.fetchTasks();
          });
      },
      applyFilter() {
        this.fetchTasks({
          status: this.filterStatus,
          date: this.filterDate,
          search: this.searchQuery,
        });
      },
      toggleEvent(id, status){
      
            this.updateTask({taskId:id,data:{completed:status}})
                .then(()=>{
                    this.fetchTasks()
            });
      },
    },
    created() {
      this.fetchTasks();
    },
  };
  </script>
  <style scoped>
  .form-control{
    width: 200px;
  }
</style>