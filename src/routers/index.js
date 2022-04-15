import { createRouter, createWebHistory } from "vue-router";
import Welcome from "../views/Welcome.vue";
import Homepage from "../views/Homepage.vue";
import User from "../views/User.vue";
import NotFound from "../views/NotFound.vue";

const history = createWebHistory();
const routes = [
	{
		path: "/",
		name: "root",
		component: Welcome,
	},
	{
		path: "/home/:userId",
		name: "homepage",
		component: Homepage,
	},
	{
		path: "/user/:username",
		name: "user",
		component: User,
	},
	{
		path: "/:catchNotMatchPath(.*)",
		name: "not-found",
		component: NotFound,
	},
];

const router = createRouter({ history, routes });

export default router;
