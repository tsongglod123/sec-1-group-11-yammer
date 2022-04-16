<script setup>
import { ref, onBeforeMount } from "vue";
import { useRoute } from "vue-router";
import VUserContents from "../components/VUserContents.vue";

const URL = "http://localhost:5000/users";

let { params } = useRoute();
const user = ref({});

// GET
const getUser = async (url, id) => {
	const res = await fetch(url + "/" + id);
	if (res.status === 200) {
		user.value = await res.json();
	}
};

onBeforeMount(async () => {
	await getUser(URL, params.userId);
});
</script>

<template>
	<div id="user-page">
		<div>{{ user.username }}</div>
		<VUserContents :userId="parseInt(params.userId)" />
	</div>
</template>

<style scoped></style>
