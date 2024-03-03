import axios from "./axios";

export default {
    actions: {
        fetchTasks(context, filters = {}) {
            let url = "/tasks";

            if (Object.keys(filters).length > 0) {
                url += '?';
                Object.entries(filters).forEach(([key, value]) => {
                    if (value) {
                        url += `${key}=${encodeURIComponent(value)}&`;
                    }
                });
                url = url.slice(0, -1);
            }
            return new Promise((resolve, reject) => {
                axios
                    .get(url)
                    .then((response) => {
                        context.commit("updateTasks", response.data.data);
                        resolve();
                    })
                    .catch(() => {
                        reject();
                    });
            });
        },
        fetchTask(context, taskId) {
            return new Promise((resolve, reject) => {
                axios
                    .get(`/tasks/${taskId}`)
                    .then((response) => {
                        context.commit("updateTask", response.data.data);
                        resolve();
                    })
                    .catch(() => {
                        reject();
                    });
            });
        },

        createTask(context, data) {
            return new Promise((resolve, reject) => {
                axios
                    .post("/tasks", data)
                    .then((response) => {
                        console.log(response);
                        resolve();
                    })
                    .catch(() => {
                        reject();
                    })
            });
        },
        updateTask(context, {taskId, data}) {
            return new Promise((resolve, reject) => {
                axios
                    .put(`/tasks/${taskId}`, data)
                    .then((response) => {
                        console.log(response);
                        resolve();
                    })
                    .catch(() => {
                        reject();
                    })
            });
        },
        deleteTask(context, taskId) {
            return new Promise((resolve, reject) => {
                axios
                    .delete(`/tasks/${taskId}`)
                    .then((response) => {
                        console.log(response);
                        resolve();
                    })
                    .catch(() => {
                        reject();
                    });
            });
        },
    },

    mutations: {
        updateTasks(state, tasks) {
            state.tasks = tasks;
        },
        updateTask(state, task) {
            state.task = task;
        },

    },
    state: {
        tasks: [],
        task: "",

    },
    getters: {
        getTasks(state) {
            return state.tasks;
        },
        getTask(state) {
            return state.task;
        },

    },
};