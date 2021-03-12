import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './styles/layout.scss'

import installElementPlus from './plugins/element-plus'

const app = createApp(App)
installElementPlus(app)
app.use(store).use(router).mount('#app')