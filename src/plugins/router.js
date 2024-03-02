import { createRouter, createWebHistory } from "vue-router";

const routes = [{
        path: "/",
        component: () =>
            import ("@/pages/HomePage.vue"),
        name: "Home",
    },
    {
        path: "/createTask",
        component: () =>
            import ("@/pages/CreateTaskPage.vue"),
        name: "Create",
    },
    {
        path: "/updateTask/:taskId",
        component: () =>
            import ("@/pages/UpdateTaskPage.vue"),
        name: "Update",
    },
];

export default createRouter({
    history: createWebHistory(),
    routes,
});