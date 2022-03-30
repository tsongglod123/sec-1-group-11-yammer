import { createRouter, createWebHistory } from "vue-router";

const history = createWebHistory();
const routes = [
	{
		path: "/path",
		name: "name",
		component: component_name,
	},
];

const router = createRouter({ history, routes });

export default router;
