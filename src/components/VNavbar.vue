<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import VLogout from "./buttons/VLogout.vue";

const props = defineProps({
    userId: {
        type: String,
        require: true,
    },
});

const URL = "http://localhost:5000/users";
const REPO = "https://github.com/tsongglod123/sec-1-group-11-supreme-engine";

const appRouter = useRouter();
const user = ref({});

// GET
const getUser = async (url, id) => {
    const res = await fetch(url + "/" + id);
    if (res.status === 200) {
        user.value = await res.json();
        appRouter.push({
            name: "user",
            params: { userId: user.value.id },
        });
    }
};

const homepage = () => appRouter.push({ name: "contents" });
const logout = (name) => appRouter.push(name);
</script>

<template>
    <div id="navbar-section" class="sticky top-0 left-0 right-0 opacity-100">
        <div class="navbar-color fade-animation navbar ">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="logo-icon btn btn-ghost btn-circle ">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h7"
                            />
                        </svg>
                    </label>
                    <ul
                        tabindex="0"
                        class="menu-color menu menu-compact dropdown-content mt-3 p-3 shadow bg-base-200 rounded-box w-52"
                    >
                        <li>
                            <button @click.left="homepage">Homepage</button>
                        </li>
                        <li>
                            <button @click.left="getUser(URL, userId)">
                                My Yammer
                            </button>
                        </li>
                        <li>
                            <a :href="REPO" target="_blank">
                                <div>About</div>
                            </a>
                        </li>
                        <li>
                            <button @click.left="logout({ name: 'root' })">
                                Logout
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="navbar-center">
                <router-link :to="{ name: 'contents' }">
                    <a class="normal-case text-xl font-bold p-4">
                        <span
                            class="logo-icon"
                            >Yammer</span
                        >
                    </a>
                </router-link>
            </div>
            <div class="navbar-end">
                <div class="tooltip tooltip-left" data-tip="Logout">
                    <VLogout @click:action="logout" />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.logo-icon{
   color: white;
}

.menu-color{
    background-color: #417D7A;
    color: white;
}
.navbar-color {
    background-color: #417D7A;
}
.fade-animation {
    opacity: 0;
    animation: fade-in-move-down 1s forwards;
}

@keyframes fade-in-move-down {
    0% {
        opacity: 0;
        transform: translateY(-3rem);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
