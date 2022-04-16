<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import VLogout from "./buttons/VLogout.vue";

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
const logout = (name) => appRouter.push(name);
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
							<a :href="REPO" target="_blank">
								<div>About</div>
							</a>
						</li>
						<li>
							<button @click.left="logout({ name: 'root' })">
								Logout
							</button>
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
				<div class="tooltip tooltip-left" data-tip="Logout">
					<VLogout @click:action="logout" />
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped></style>
