<script setup>
import { ref } from "vue";

const URL = "http://localhost:5000/posts";

const content = ref("");

const props = defineProps({
	posts: {
		type: Array,
		require: true,
	},
	userId: {
		type: String,
		require: true,
	},
});

// POST
const createPost = async (new_content) => {
	const res = await fetch(URL, {
		method: "POST",
		headers: {
			"content-Type": "application/json",
		},
		body: JSON.stringify({
			content: new_content,
			userId: props.userId,
		}),
	});
	if (res.status === 201) {
		const newContent = await res.json();
		props.posts.unshift(newContent);
		content.value = "";
	}
};
</script>

<template>
	<div id="text-area">
		<div class="card w-96 bg-base-100 shadow-xl">
			<div class="card-body">
				<textarea
					class="textarea"
					rows="2"
					placeholder="What happened?"
					v-model="content"
				></textarea>
				<div class="card-actions justify-end">
					<div id="post-button">
						<button
							type="button"
							class="btn"
							@click.left="createPost(content)"
							:disabled="content.length < 1"
						>
							complain
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
textarea {
	padding: 12px 20px;
	resize: none;
}
.textarea {
	@apply textarea-ghost;
}
.btn {
	@apply btn-primary rounded-full;
}
</style>
