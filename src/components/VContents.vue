<script setup>
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
</script>

<template>
	<div id="content-list">
		<div v-for="post in posts" :key="post.id">
			<div class="card w-96 bg-base-100 shadow-xl">
				<div class="card-body">
					<div class="card-title">
						{{
							post.userId == userId
								? "You complain"
								: "Someone complains"
						}}
					</div>
					<div>{{ post.content }}</div>
				</div>
			</div>
			<br />
		</div>
	</div>
</template>

<style scoped></style>
