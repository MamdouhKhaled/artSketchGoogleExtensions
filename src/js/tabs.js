import { createApp } from 'vue'
import Tabs from './Components/app'
import store from "./Store/index";


const app = createApp(Tabs).use(store).mount('#app');


