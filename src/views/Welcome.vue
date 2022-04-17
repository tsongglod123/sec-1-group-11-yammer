<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import VLogin from "../components/buttons/VLogin.vue";

const URL = "http://localhost:5000/users";

const appRouter = useRouter();
const isMatch = ref(false);
const isNotFill = ref(false);
const username = ref("");

// POST
const addUsername = async (new_username) => {
    const res = await fetch(URL, {
        method: "POST",
        headers: {
            "content-Type": "application/json",
        },
        body: JSON.stringify({ username: new_username }),
    });
    login(new_username);
};

// GET
const login = async (name) => {
    let userId = 0;
    if (name.length < 1) {
        isNotFill.value = true;
    } else {
        const res = await fetch(URL);
        if (res.status === 200) {
            const users = await res.json();
            users.forEach((user) => {
                if (user.username === name) {
                    isMatch.value = true;
                    userId = user.id;
                }
            });
        }
        if (isMatch.value) {
            appRouter.push({
                name: "contents",
                params: { userId: userId },
            });
        } else {
            addUsername(name);
        }
        [username.value, isMatch.value] = ["", false];
    }
};
</script>

<template>
    <div id="welcome-page" style="font-family: 'Poppins', sans-serif" class="content-container center-page">
        <div class="center-page">
            <div class="fade-animation text-7xl project-title 
            text-center font-extrabold">
                <span class="logo">Yammer</span>
            </div>
            <div class="fade-animation-delay grid justify-items-center py-8">
                <div id="login" class="flex justify-items-center">
                    <div class="pr-5">
                        <input type="text" class="input input-lg rounded-full shadow-lg focus:outline-none"
                            placeholder="Username" v-model.trim="username" @keyup.enter="login($event.target.value)" />
                    </div>
                    <VLogin :username="username" @click:action="login" />
                </div>
                <div v-show="isNotFill" class="flex justify-items-center pt-5 text-red-600 font-semibold">
                    Please enter your username!
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.btn {
    @apply btn-primary rounded-full;
}

.input {
    @apply w-full max-w-xs;
    background-color: #EDE6DB;
}

.logo {
    color: white;
}

.content-container {
    /* margin-top: auto; */
    text-align: center;
    height: 100%;
    width: 100%;
    position: absolute;
}

.fade-animation {
    opacity: 0;
    animation: opacity-in 1.5s forwards;
}

.fade-animation-delay {
    opacity: 0;
    animation: opacity-in 1s forwards;
    animation-delay: 1s;
}

.center-page {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

@keyframes opacity-in {
    100% {
        opacity: 1;
    }
}
</style>
