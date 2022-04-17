<script setup>
import { ref, onBeforeMount } from "vue";
import VEdit from "./buttons/VEdit.vue";
import VDelete from "./buttons/VDelete.vue";

const USERS_URL = "http://localhost:5000/users";
const POSTS_URL = "http://localhost:5000/posts";

const props = defineProps({
	userId: {
		type: Number,
		require: true,
	},
});

const user = ref({});
const length = ref(0);

// GET
const getPosts = async (url, id) => {
	const res = await fetch(url + "/" + id + "/" + "?_embed=posts");
	if (res.status === 200) {
		user.value = await res.json();
		length.value = user.value.posts.length;
		user.value.posts = user.value.posts.reverse();
	}
};

// DELETE
const deletePost = async (id) => {
	if (confirm("Do you want to delete this post?")) {
		const res = await fetch(POSTS_URL + "/" + id, { method: "DELETE" });
		if (res.status === 200) {
			user.value.posts = user.value.posts.filter(
				(post) => post.id !== id
			);
		}
	}
};

// PUT
const editPost = async (modified_post) => {
	if (modified_post.content.length < 1) {
		deletePost(modified_post.id);
	} else {
		const res = await fetch(POSTS_URL + "/" + modified_post.id, {
			method: "PUT",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify({
				userId: modified_post.userId,
				content: modified_post.content,
			}),
		});
		if (res.status === 200) {
			const modifiedPost = await res.json();
			user.value.posts = user.value.posts.map((post) =>
				post.id === modifiedPost.id
					? { ...post, content: modifiedPost.content }
					: post
			);
		}
	}
};

onBeforeMount(async () => {
	await getPosts(USERS_URL, props.userId);
});
</script>

<template>
	<div id="content-list">
		<div v-for="(post, index) in user.posts" :key="index">
			<div class="box-element box-content max-h-xl p-6">
				<div class="font-semibold text-xl flex justify-between">
					<div class="flex flex-row">
						<div class="pr-1">You complain</div>
						<VEdit :id="post.id" @click:action="editPost" />
					</div>
					<VDelete :id="post.id" @click:action="deletePost" />
				</div>
				<div class="break-words pt-2">{{ post.content }}</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.box-element {
	@apply shadow-xl my-3 rounded-xl;
	width: 500px;
	background-color: #ede6db;
}
</style>
