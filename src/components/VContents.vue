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
            <div class="hoverContent card max-w-xl shadow-xl bg-white">
                <div class="card-body">
                    <div class="card-title">
                        {{
                            post.userId == userId
                                ? "You complain"
                                : "Someone complains"
                        }}
                    </div>
                    <div class="break-words">{{ post.content }}</div>
                </div>
            </div>
            <br />
        </div>
    </div>
</template>

<style scoped>
.hoverContent:hover {
    @apply scale-125 duration-500 ease-in-out;
}
</style>
