<template>
    <div class="container">
        <PageTitle title="Task List"/>
        <TaskList/>
    </div>
</template>

<script>
import PageTitle from "@/components/PageTitle.vue";
import TaskList from "@/components/TaskList.vue";

export default {
    name: "HomePage",
    components: {
        PageTitle,
        TaskList,
    }
}
</script>