<script setup>
import { ref, onBeforeMount } from "vue";
import { useRoute } from "vue-router";
import VUserContents from "../components/VUserContents.vue";

const URL = "http://localhost:5000/users";

let { params } = useRoute();
const user = ref({});

// GET
const getUser = async (url, id) => {
	const res = await fetch(url + "/" + id);
	if (res.status === 200) {
		user.value = await res.json();
	}
};

onBeforeMount(async () => {
	await getUser(URL, params.userId);
});
</script>

<template>
	<div id="user-page">
		<div class="flex justify-center pt-5">
			<button type="button" class="btn">
				<span class="font-bold">{{ user.username }}</span>
			</button>
		</div>
		<VUserContents
			:userId="parseInt(params.userId)"
			class="grid justify-center pt-2"
		/>
	</div>
</template>

<style scoped>
.btn {
	@apply btn-primary rounded-full shadow-lg;
}
</style>
