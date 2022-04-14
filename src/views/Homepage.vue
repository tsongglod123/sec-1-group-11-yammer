<script setup>
import { ref, onBeforeMount } from "vue";
import { useRoute } from "vue-router";
import VTextarea from "../components/VTextarea.vue";
import VContents from "../components/VContents.vue";

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
		content.value = "";
	}
};

onBeforeMount(async () => {
	await getPosts(URL);
});
</script>

<template>
	<div id="homepage">
		<VTextarea v-model="content" @post:content="createPost" />
		<br />
		<VContents :posts="posts" :userId="params.userId" />
	</div>
</template>

<style scoped></style>
