<template>
    <div class="text-center mt-5">
        <h1>Update Task</h1>
        <hr>
        <div class="d-flex justify-content-center align-content-center mt">
            <form
                class="col-lg-4 col-md-6 col-8 mb-4"
                @submit.prevent="submit"
            >
                <div class="mb-3">
                    <label for="taskTitle" class="form-label">Title</label>
                    <input
                        type="text"
                        class="form-control"
                        id="taskTitle"
                        v-model="addTask.title"
                        required
                    />
                </div>
                <div class="mb-3">
                    <label for="taskDescription" class="form-label"
                        >Description</label
                    >
                    <input
                        type="text"
                        class="form-control"
                        id="taskDescription"
                        v-model="addTask.description"
                        required
                    />
                </div>
                <div class="d-flex flex-column flex-md-row mt-5">
                    <router-link to="/" class="btn btn-outline-warning rounded-5 w-100 p-2 px-5 mx-0 mx-md-4 my-3 my-md-0">Cancel</router-link>
    
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
        name: "AddtaskPage",
        computed: {
            ...mapGetters(["getTask"]),
        },
        data() {
            return {
                addTask: {
                    title: "",
                    description: "",
                },
            };
        },
        methods: {
            ...mapActions(["updateTask","fetchTask"]),
            submit() {
                const taskData = {
                    title: this.addTask.title,
                    description: this.addTask.description,
                };
    
                this.updateTask({taskId: this.$route.params.taskId, data: taskData})
                    .then(() => {
                        this.$router.push("/");
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            },
    
        },
    
        mounted() {
            this.fetchTask(this.$route.params.taskId)
                    .then(()=>{
                        this.addTask = this.getTask
                    })
        },
    };
    </script>
    
    <style scoped></style>
    