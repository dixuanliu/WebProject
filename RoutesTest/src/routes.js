import { createRouter, createWebHistory } from "vue-router";

const BlogList = () => import("./components/blogsList.vue");
const BlogItem = () => import("./components/blogsItem.vue");
const HomePage = () => import("./components/homePage.vue");
const SideBar = () => import("./components/sideBar.vue");
const Main = () => import("./components/mainContent.vue");

// import Page2 from "./components/blogsList.vue"
// import Page3 from "./components/blogsItem.vue"

const routes = [
	{
		path: "/",
		component: HomePage,
		children: [
			{
				path: "/",
				components: {
					SideBar:SideBar,
					Main,
				},
			},
            {
                path:"blogs",
                component:BlogList,
            },
            {
                path:":id",
                component:BlogItem
            }
		],
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
