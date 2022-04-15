<script setup>
import { ref, onBeforeMount } from "vue";
import { useRoute } from "vue-router";
import VTextarea from "../components/VTextarea.vue";
import VContents from "../components/VContents.vue";

const URL = "http://localhost:5000/posts";

// this.$route.params for template
let { params } = useRoute();
const posts = ref([]);

// GET
const getPosts = async (url) => {
    const res = await fetch(url);
    if (res.status === 200) {
        posts.value = await res.json();
        posts.value = posts.value.reverse();
    }
};

onBeforeMount(async () => {
    await getPosts(URL);
});
</script>

<template>
    <div id="homepage">
        <VTextarea
            :posts="posts"
            :userId="params.userId"
            class="flex justify-center pt-10"
        />
        <br />
        <VContents
            :posts="posts"
            :userId="params.userId"
            class="grid justify-center"
        />
    </div>
</template>

<style scoped>

</style>
