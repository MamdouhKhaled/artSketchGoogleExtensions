import { createApp } from 'vue'
import Tabs from './Components/app'
import store from "./Store/index";

store.dispatch('init_tasks');
const app = createApp(Tabs).use(store).mount('#app');


