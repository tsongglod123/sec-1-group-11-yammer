<script setup>
import { useRouter } from "vue-router";
const appRouter = useRouter();

const closeModal = () => appRouter.push({ name: "root" });
</script>

<template>
    <div id="not-found" class="modal-mask">
        <div class="modal-wrapper">
            <div class="modal-container">
                    <h3 class="font-bold text-lg text-red-600">
                        Page Not Found
                    </h3>
                <p class="py-4">Please try again!</p>
                <div class="modal-action ">
                    <label @click.left="closeModal" class="btn">Close</label>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

.modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(15, 15, 15, 0.5);
    display: table;
    transition: opacity 0.3s ease;
}
.modal-wrapper {
    display: table-cell;
    vertical-align: middle;
}
.modal-container {
    width: 300px;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    @apply rounded-2xl shadow-2xl;
	background-color: rgb(255, 255, 255);
}
.modal-header h3 {
    margin-top: 0;
    color: red;
}
.modal-body {
    margin: 20px 0;
}
.modal-button {
    display: flex;
    justify-content: flex-end;
}
</style>
