<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const props = defineProps({
	userId: {
		type: String,
		require: true,
	},
});

const URL = "http://localhost:5000/users";
const REPO = "https://github.com/tsongglod123/sec-1-group-11-supreme-engine";

const appRouter = useRouter();
const user = ref({});

// GET
const getUser = async (url, id) => {
	const res = await fetch(url + "/" + id);
	if (res.status === 200) {
		user.value = await res.json();
		appRouter.push({
			name: "user",
			params: { userId: user.value.id },
		});
	}
};

const homepage = () => appRouter.push({ name: "contents" });
const logout = () => appRouter.push({ name: "root" });
</script>

<template>
	<div id="navbar-section">
		<div class="navbar bg-base-200">
			<div class="navbar-start">
				<div class="dropdown">
					<label tabindex="0" class="btn btn-ghost btn-circle">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 6h16M4 12h16M4 18h7"
							/>
						</svg>
					</label>
					<ul
						tabindex="0"
						class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-200 rounded-box w-52"
					>
						<li>
							<button @click.left="homepage">Homepage</button>
						</li>
						<li>
							<button @click.left="getUser(URL, userId)">
								My Yammer
							</button>
						</li>
						<li>
							<a :href="REPO" target="_blank"><div>About</div></a>
						</li>
					</ul>
				</div>
			</div>
			<div class="navbar-center">
				<router-link :to="{ name: 'contents' }">
					<a class="btn btn-ghost normal-case text-xl">Yammer</a>
				</router-link>
			</div>
			<div class="navbar-end">
				<button class="btn btn-ghost btn-circle" @click.left="logout">
					<div class="indicator">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
							/>
						</svg>
					</div>
				</button>
			</div>
		</div>
	</div>
</template>

<style scoped></style>
