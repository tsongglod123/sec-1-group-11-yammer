<script setup>
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
</script>

<template>
	<div id="content-list">
		<div class="hover-content">
			<div v-for="post in posts" :key="post.id">
				<div class="box box-element box-border max-h-xl p-6 max-w-xl">
					<div class="font-semibold text-xl">
						{{
							post.userId === userId
								? "You complain"
								: "Someone complains"
						}}
					</div>
					<div class="break-words pt-2">{{ post.content }}</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.box-element {
	@apply shadow-xl bg-white my-4 rounded-xl;
}
.hover-content:hover .box {
	@apply scale-100 opacity-50 blur-sm duration-100 ease-in-out;
}
.hover-content:hover .box:hover {
	@apply blur-none scale-110 opacity-100;
}
</style>
