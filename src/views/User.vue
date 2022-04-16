<script setup>
import { ref, onBeforeMount } from "vue";
import { useRoute, useRouter } from "vue-router";

const URL = "http://localhost:5000/users";

let { params } = useRoute();
const appRouter = useRouter();
const posts = ref([]);

// GET
const getPosts = async (url, id) => {
	const res = await fetch(url + "/" + id + "/" + "?_embed=posts");
	if (res.status === 200) {
		posts.value = await res.json();
	}
};

onBeforeMount(async () => {
	await getPosts(URL, params.userId);
});
</script>

<template>
	<div id="user-page">{{ posts }}</div>
</template>

<style scoped></style>
