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
		type: Number,
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
		<div class="box-element">
			<div class="py-7">
				<textarea
					class="textarea"
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
							YAM!!!
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
	@apply textarea-ghost focus:outline-none text-xl rounded-xl;
	background-color: #EDE6DB;
}
.box-element {
	@apply box-border shadow-xl rounded-xl px-9 ;
    background-color: #EDE6DB;
}
.btn {
	@apply btn-primary rounded-full shadow-lg;
}
</style>
