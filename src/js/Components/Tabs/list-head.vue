<template>
    <form action="#" method="post" accept-charset="utf-8">
        <div class="flex">
            <input v-model="task" class="text-input w-11/12" type="text" autocomplete="off" placeholder="Add New Task..">
            <button @click.prevent="addTask" class="btn w-1/12" type="submit">+</button>
        </div>
    </form>
</template>

<script>
import store from "../../Store/index";

export default {
    name: "list-head",
    data(){
        return {
            task: '',
        }
    },
    methods:{
        addTask(){
            if(this.task.length >= 3)
                store.commit('ADD_TASK', this.task)
        }
    }
}
</script>

<style scoped>

</style>