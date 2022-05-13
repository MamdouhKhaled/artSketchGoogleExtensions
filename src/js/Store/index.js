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

            console.log(state.tasks);
        },
        ADD_TASK(state, task) {
            let item = {
                "id": state.tasks.length+1,
                "title" : task,
                "time" : (new Date()).getTime(),
                "description": "No Description",
                "completed" : false,
                "deleted" : false,
            }
            state.tasks.push(item)
            Task.addTask(item)
        },
        UPDATE_TASK(state, Task){

        }
    },
    getters: {
        getTasks(state) {
            return state.tasks;
        }
    }
})