<script setup>
const props = defineProps({
    id: {
        type: Number,
        require: true,
    },
});
const emits = defineEmits(["click:action"]);
</script>

<template>
    <div>
        <button @click.left="$emit('click:action', id)">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                />
            </svg>
        </button>
    </div>
</template>

<style scoped></style>
