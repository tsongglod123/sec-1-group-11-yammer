<script setup>
import { ref, onBeforeMount } from "vue";
import { useRoute } from "vue-router";
import VTextarea from "../components/VTextarea.vue";

const URL = "http://localhost:5000/posts";

// this.$route.params for template
let { params } = useRoute();
const posts = ref([]);
const content = ref("");

// GET
const getPosts = async (url) => {
	const res = await fetch(url);
	if (res.status === 200) {
		posts.value = await res.json();
		posts.value = posts.value.reverse();
	}
};

// POST
const createPost = async (new_content) => {
	const res = await fetch(URL, {
		method: "POST",
		headers: {
			"content-Type": "application/json",
		},
		body: JSON.stringify({
			content: new_content,
			userId: params.userId,
		}),
	});
	if (res.status === 201) {
		const newContent = await res.json();
		posts.value.unshift(newContent);
	}
};

onBeforeMount(async () => {
	await getPosts(URL);
});
</script>

<template>
	<div id="homepage">
		<VTextarea v-model="content" @post:content="createPost" />
		<div v-for="post in posts" :key="post.id">
			{{ post }}
		</div>
	</div>
</template>

<style scoped></style>
