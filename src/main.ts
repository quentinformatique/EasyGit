import { createApp } from 'vue'
import { createPinia } from 'pinia'

import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import {fas} from "@fortawesome/free-solid-svg-icons";

library.add(fas)

createApp(App)
    .use(router)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia()) //use pinia
app.use(router) //use router
app.mount('#app')
