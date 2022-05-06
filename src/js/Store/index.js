import {createStore} from "vuex";

export default createStore({
    state () {
        return {
            count: 0,
            tasks: []
        }
    },
    mutations: {
        increment(state) {
            state.count++
        },
        setTask(state, task){
            let old = state.tasks
            state.tasks = old.push(task)
        },
        getTasks(state){
            return state.tasks
        }
    },
    actions:{
        Tasks: ()=>{
            return localStorage.getItem("tasks") ?? []
        }
    },
    getters: {
        tasks : (state) =>{

        }
    }
})