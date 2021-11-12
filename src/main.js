import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios"
import ja from 'element-plus/es/locale/lang/ja'

const app = createApp(App)
app.config.globalProperties.$axios=axios
app.use(store).use(router).use(ElementPlus,{locale: ja,}).mount('#app')
