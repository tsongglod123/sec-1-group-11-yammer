<script setup>
import VPost from "./buttons/VPost.vue";
</script>

<template>
	<div id="text-area">
		<textarea cols="60" rows="4" placeholder="What happened?"></textarea>
		<VPost @post="" />
	</div>
</template>

<style scoped>
textarea {
	padding: 12px 20px;
	resize: none;
}
</style>
