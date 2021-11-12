import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/components/home/index";


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    hidden:true,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})



export default router
