<template>
  <div class=" h-[90%] overflow-hidden">
    <ListHead />
    <ul class="h-full mt-2 no-scrollbar overflow-y-scroll">
      <Item v-for="task in tasks" :item="task" :key='task' />
    </ul>
  </div>
</template>

<script>
import Store from "../../Models/Store";
import Item from "./item";
import ListHead from "./list-head";

export default {
  name: "list",
  components: {Item, ListHead},
  mounted() {
    this.tasks = Store.getTasks();
  },
  data() {
    return {
      tasks: []
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