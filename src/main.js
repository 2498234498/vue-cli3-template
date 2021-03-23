import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './styles/layout.scss'

import ElementPlus from './plugins/element-plus'

const app = createApp(App)
app.use(store).use(router).use(ElementPlus).mount('#app')
