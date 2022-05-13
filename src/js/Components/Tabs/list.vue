<template>
    <div class=" h-[90%] overflow-hidden">
        <ListHead/>
        <ul class="h-full mt-2 no-scrollbar overflow-y-scroll">
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
            // return []
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