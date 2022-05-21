<template>
    <div class="border  p-2 mb-2 rounded shadow">
        <div class="flex items-center">
            <input class="w-1/12" name="" type="radio"/>
            <div class="px-2 w-full text-[16px] ">
                {{ item.title }}
            </div>
            <span  class="w-2/12 flex">
               <svg @click="toggle" v-if="show" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"
                    fill="currentColor">
                 <path fill-rule="evenodd"
                       d="M4.293 15.707a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414 0zm0-6a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 5.414 5.707 9.707a1 1 0 01-1.414 0z"
                       clip-rule="evenodd"/>
               </svg>
               <svg @click="toggle" v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                 <path fill-rule="evenodd"
                       d="M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z"
                       clip-rule="evenodd"/>
               </svg>
               <!-- edit button -->
                <svg @click="edit()" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"/>
                  <path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                        clip-rule="evenodd"/>
                </svg>
                <svg @click="remove()" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                </svg>
            </span>
        </div>
        <div v-if="show" class="mt-1">
            {{ item.description }}
        </div>
    </div>
</template>

<script>
import store from "../../Store/index";
export default {
    props: ['item'],
    name: "item",
    data() {
        return {
            show: false,
        }
    },
    
    methods: {
        toggle() {
            this.show = !this.show;
        },
        edit(){
            store.dispatch('edit_task', this.item)
        },
        remove(){
            store.dispatch('remove_task', this.item)
        }
    }
}
</script>

<style scoped>

</style>