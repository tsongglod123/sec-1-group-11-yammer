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
        <div v-for="post in posts" :key="post.id">
            <div class="box-element box-content max-h-xl p-6 ">
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
</template>

<style scoped>
.box-element {
    @apply shadow-xl my-3 rounded-xl;
    width:500px;
    background-color: #EDE6DB;
}
</style>
