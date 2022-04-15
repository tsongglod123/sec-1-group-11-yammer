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
            <div class="hover-content max-w-xl shadow-xl bg-white my-2 rounded-xl">
                <div class="box-border max-h-xl max-w-xl p-6 ">
                    <div class="font-semibold text-xl">
                        {{
                            post.userId == userId
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
.hover-content:hover {
    @apply scale-110 duration-500 ease-in-out;
}
</style>
