import { createStore } from 'vuex';
import task from "@/plugins/vuex/task";

export default createStore({
    modules: {
        task,
    }
})