<script setup>
import { useRoute } from "vue-router";
import VNavbar from "../components/VNavbar.vue";

let { params } = useRoute();
</script>

<template>
	<div id="homepage">
		<VNavbar :userId="params.userId" />
		<router-view></router-view>
	</div>
</template>

<style scoped></style>
