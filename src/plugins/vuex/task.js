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
                        console.log("tasklar muvaffaqiyatli olindi");
                        console.log(response.data.data);
                        console.log(response.data);
                        let tasks = {
                            models: response.data.data,
                            totalItems: response.data.total,
                        };
                        context.commit("updateTasks", tasks);
                        resolve();
                    })
                    .catch(() => {
                        console.log("tasklar olishda xatolik");
                        reject();
                    });
            });
        },
        fetchTask(context, taskId) {
            return new Promise((resolve, reject) => {
                axios
                    .get(`/tasks/${taskId}`)
                    .then((response) => {
                        console.log("tasklar muvaffaqiyatli olindi");
                        console.log(response.data.data);
                        console.log(response.data);

                        context.commit("updateTask", response.data.data);
                        resolve();
                    })
                    .catch(() => {
                        console.log("tasklar olishda xatolik");
                        reject();
                    });
            });
        },

        createTask(context, data) {
            return new Promise((resolve, reject) => {
                axios
                    .post("/tasks", data)
                    .then((response) => {
                        console.log("yangi task bazaga qoshildi");
                        console.log(response.data);
                        console.log(response);
                        console.log(data);
                        resolve();
                    })
                    .catch(() => {
                        console.log("yangi task bazaga qoshilmadi");
                        console.log(data);
                        reject();
                    })
                    .finally(() => {
                        console.log("oxirgi bolib finally() ishladi");
                    });
            });
        },
        updateTask(context, { taskId, data }) {
            return new Promise((resolve, reject) => {
                axios
                    .put(`/tasks/${taskId}`, data)
                    .then((response) => {
                        console.log("yangi task update");
                        console.log(response.data);
                        console.log(response);
                        console.log(taskId, data);
                        resolve();
                    })
                    .catch(() => {
                        console.log("yangi task update qoshilmadi");
                        console.log(data);
                        reject();
                    })
                    .finally(() => {
                        console.log("oxirgi bolib finally() ishladi");
                    });
            });
        },
        deleteTask(context, taskId) {
            return new Promise((resolve, reject) => {
                axios
                    .delete(`/tasks/${taskId}`)
                    .then((response) => {
                        console.log("task ochirildi");
                        console.log(response);
                        console.log(taskId);
                        resolve();
                    })
                    .catch(() => {
                        console.log("tasklar ochirishda xatolik");
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
        tasks: {
            models: [],
            totalItems: 0,
        },
        task: "",

    },
    getters: {
        getTasks(state) {
            return state.tasks.models;
        },
        getTask(state) {
            return state.task;
        },
        getTaskTotal(state) {
            return state.tasks.totalItems;
        }
    },
};