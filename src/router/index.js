import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/components/home/index";
import Contact from "@/components/contact/index";
import Main from "@/components/main";


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children:[
      {
        path: '/',
        name: 'Main',
        component: Main,
      },
      {
        path: '/contact',
        name: 'Contact',
        component: Contact,
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})



export default router
