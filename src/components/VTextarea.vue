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
		<div class="box-border px-9 shadow-xl bg-white rounded-xl">
			<div class="py-7">
				<textarea
					class="textarea focus:outline-none text-xl textarea-ghost bg-gray-200 rounded-xl"
					rows="3"
					cols="50"
					placeholder="What happened?"
					v-model="content"
				></textarea>
				<div class="grid justify-items-end pt-2">
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
