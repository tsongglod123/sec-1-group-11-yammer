<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const URL = "http://localhost:5000/users";

const appRouter = useRouter();
const isMatch = ref(false);
const isNotFill = ref(false);
const username = ref("");

// POST
const addUsername = async (new_username) => {
	const res = await fetch(URL, {
		method: "POST",
		headers: {
			"content-Type": "application/json",
		},
		body: JSON.stringify({ username: new_username }),
	});
};

// GET
const login = async (name) => {
	if (name.length < 1) {
		isNotFill.value = true;
	} else {
		const res = await fetch(URL);
		if (res.status === 200) {
			const users = await res.json();
			users.forEach((user) => {
				if (user.username === name) {
					isMatch.value = true;
				}
			});
		}
		if (isMatch.value) {
			appRouter.push({ name: "homepage" });
		} else {
			addUsername(name);
			appRouter.push({ name: "homepage" });
		}
		[username.value, isMatch.value] = ["", false];
	}
};
</script>

<template>
	<div id="welcome-page">
		<div>Yammer</div>
		<div id="login">
			<input
				type="text"
				class="input input-lg"
				placeholder="Username"
				v-model.trim="username"
				@keyup.enter="login($event.target.value)"
			/>
			<button
				type="button"
				class="btn btn-lg"
				@click.left="login(username)"
			>
				Go
			</button>
		</div>
		<div v-show="isNotFill">Please enter your username!</div>
	</div>
</template>

<style scoped>
.btn {
	@apply btn-primary;
}
.input {
	@apply w-full max-w-xs;
}
</style>
