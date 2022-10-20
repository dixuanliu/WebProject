import { createRouter,createWebHistory } from "vue-router";

import Page2 from "./components/blogsList.vue"
import Page3 from "./components/blogsItem.vue"

const routes=[
    {path:'/',
    component:Page2,
    alias:"/index"
},
    {path:'/:id', component:Page3}
]

const router = createRouter({
    history:createWebHistory(),
    routes,
})

export default router