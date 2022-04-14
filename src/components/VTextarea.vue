<script setup>
const props = defineProps({
	content: {
		type: String,
		require: true,
	},
});
const emits = defineEmits(["post:content"]);
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
							@click.left="$emit('post:content', content)"
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
