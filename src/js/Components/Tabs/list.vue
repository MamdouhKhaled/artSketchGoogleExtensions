<template>
    <div class="h-5/6">
        <ListHead/>
        <ul class="h-full overflow-y-auto mt-2 no-scrollbar">
            <Item v-for="(task, index) in tasks" :item="task" :key='index'/>
        </ul>
    </div>
</template>

<script>
import Item from "./item";
import ListHead from "./list-head";
import store from "../../Store/index";
export default {
    name: "list",
    components: {Item, ListHead},

    data() {
        return {
            count: 0,
            // tasks:[]
        }
    },
    computed:{
        tasks(){
            return store.getters.getTasks
        }
    }
}
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
    display: none;
    border: 1px solid #555;
}
</style>