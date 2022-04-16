<script setup>
const props = defineProps({
	username: {
		type: String,
		require: true,
	},
});
const emits = defineEmits(["click:action"]);
</script>

<template>
	<button
		type="button"
		class="btn btn-lg rounded-full shadow-lg border-none"
		@click.left="$emit('click:action', username)"
	>
		Go
	</button>
</template>

<style scoped></style>
