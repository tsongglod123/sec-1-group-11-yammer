<script setup>
import { ref, onBeforeMount } from "vue";
import { useRoute } from "vue-router";
import VTextarea from "../components/VTextarea.vue";
import VContents from "../components/VContents.vue";
import VNavbar from "../components/VNavbar.vue";

const URL = "http://localhost:5000/posts";

// this.$route.params for template
let { params } = useRoute();
const posts = ref([]);

// GET
const getPosts = async (url) => {
	const res = await fetch(url);
	if (res.status === 200) {
		posts.value = await res.json();
		posts.value = posts.value.reverse();
	}
};

onBeforeMount(async () => {
	await getPosts(URL);
});
</script>

<template>
	<div id="homepage">
		<VNavbar :userId="params.userId" />
		<VTextarea
			:posts="posts"
			:userId="params.userId"
			class="flex justify-center pt-10"
		/>
		<VContents
			:posts="posts"
			:userId="params.userId"
			class="grid justify-center pt-3"
		/>
	</div>
</template>

<style scoped></style>
