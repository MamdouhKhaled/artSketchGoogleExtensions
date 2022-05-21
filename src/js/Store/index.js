import {createStore} from 'vuex'
import Task from "../Models/Store"
export default createStore({
    state() {
        return {
            tasks: []
        }
    },
    mutations: {
        GET_TASKS(state) {
            return state.tasks;
        },
        INIT_TASKS(state) {
            state.tasks = Task.getTasks()
        },
        ADD_TASK(state, task) {

            let item = {
                "id": (new Date()).getTime(),
                "title" : task,
                "time" : (new Date()).getTime(),
                "description": "No Description",
                "completed" : false,
                "deleted" : false,
            }
            state.tasks.push(item)
            Task.addTask(item)
        },
        UPDATE_TASK(state, item){
            console.log('Update',item);
        },
        REMOVE_TASK(state, item){
            let id = state.tasks.map((task) => task.id).indexOf(item.id);
            state.tasks.splice(id, 1);
            Task.removeTask(id)
        }
    },
    actions:{
        get_tasks({commit}) {
            return commit('GET_TASKS');
        },
        init_tasks({commit}) {
            return commit('INIT_TASKS');
        },
        add_task({commit}, task){
            commit('ADD_TASK', task)
        },
        edit_task({commit}, task){
            commit('UPDATE_TASK', task)
        },
        remove_task({commit}, task){
            commit('REMOVE_TASK', task)
        },
        completed({commit}, task){

        }
    },
    getters: {
        getTasks(state) {
            return state.tasks;
        }
    }
})