import { createApp } from 'vue'
import Tabs from './Components/app'
import store from "./Store/index";

store.commit('INIT_TASKS');
const app = createApp(Tabs).use(store).mount('#app');


