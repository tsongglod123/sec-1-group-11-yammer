<script setup>
import { ref } from "vue";

const URL = "http://localhost:5000/posts";

const props = defineProps({
	id: {
		type: Number,
		require: true,
	},
});
const emits = defineEmits(["click:action"]);

const post = ref({});

// GET
const getPost = async (id) => {
	const res = await fetch(URL + "/" + id);
	if (res.status === 200) {
		post.value = await res.json();
	}
};
</script>

<template>
	<div :id="`edit-btn-${id}`">
		<!-- The button to open modal -->
		<label
			:for="`edit-modal-${id}`"
			class="modal-button"
			@click.left="getPost(id)"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				stroke-width="2"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
				/>
			</svg>
		</label>

		<!-- Put this part before </body> tag -->
		<input type="checkbox" :id="`edit-modal-${id}`" class="modal-toggle" />
		<div class="modal">
			<div class="modal-box">
				<div class="font-bold text-xl px-4 pb-4">Edit</div>
				<textarea
					class="textarea bg-gray-200 rounded-xl ml-3 mt-2"
					rows="3"
					cols="60"
					v-model="post.content"
				></textarea>
				<div class="modal-action">
					<label
						:for="`edit-modal-${id}`"
						class="btn btn-primary"
						@click.left="$emit('click:action', post)"
					>
						Save
					</label>
					<label :for="`edit-modal-${id}`" class="btn btn-ghost">
						Cancel
					</label>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
textarea {
	resize: none;
}
.textarea {
	@apply textarea-ghost focus:outline-none border-2;
	border-color: rgb(192, 190, 190);
}
</style>
