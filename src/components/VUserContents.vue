<script setup>
import { ref, onBeforeMount } from "vue";
import VEdit from "./buttons/VEdit.vue";
import VDelete from "./buttons/VDelete.vue";

const USER_URL = "http://localhost:5000/users";
const POSTS_URL = "http://localhost:5000/posts";

const props = defineProps({
    userId: {
        type: Number,
        require: true,
    },
});

const user = ref({});

// GET
const getPosts = async (url, id) => {
    const res = await fetch(url + "/" + id + "/" + "?_embed=posts");
    if (res.status === 200) {
        user.value = await res.json();
        user.value.posts = user.value.posts.reverse();
    }
};

// DELETE
const deletePost = async (id) => {
    if (confirm("Do you want to delete this post?")) {
        const res = await fetch(POSTS_URL + "/" + id, { method: "DELETE" });
        if (res.status === 200) {
            user.value.posts = user.value.posts.filter(
                (post) => post.id !== id
            );
        }
    }
};

// PUT
const editPost = (id) => {};

onBeforeMount(async () => {
    await getPosts(USER_URL, props.userId);
});
</script>

<template>
    <div id="content-list" class="grid justify-center pt-2">
        <div v-for="(post, index) in user.posts" :key="index">
            <div class="box-element box-border max-h-xl p-6 max-w-xl">
                <div class="font-semibold text-xl flex justify-between">
                    <div class="flex flex-row">
                        <div class="pr-1">You complain</div>
                        <VEdit :id="post.id" @click:action="editPost"/>
                    </div>
                    <VDelete :id="post.id" @click:action="deletePost" />
                </div>
                <div class="break-words pt-2">{{ post.content }}</div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.box-element {
    @apply shadow-xl bg-white my-2 rounded-xl;
}
</style>
