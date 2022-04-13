<script setup>
const props = defineProps({});
const emits = defineEmits(["post"]);
</script>

<template>
	<div id="post-button">
		<button type="button" class="btn" @click.left="$emit('post')">
			Complain
		</button>
	</div>
</template>

<style scoped>
.btn {
	@apply rounded-full;
}
</style>
