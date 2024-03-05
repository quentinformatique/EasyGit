import { createApp } from 'vue'

import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import {fas} from "@fortawesome/free-solid-svg-icons";

library.add(fas)

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router) //use router
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')