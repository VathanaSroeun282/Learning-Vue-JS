<template>
    <div>
        <p>My ID: {{ todoId }}</p>
        <button  class="hover:cursor-pointer bg-blue-700 text-white rounded-sm" @click="fetchMyInfo" :disabled="!myInfo">Fetch myInfo</button>
        <p v-if="!myInfo">Loading...</p>
        <pre v-else>
            {{ myInfo }}
        </pre>
    </div>
</template>

<script>
export default {
    data() {
        return {
            todoId: 1,
            myInfo: null
        };
    },
    methods: {
        async fetchMyInfo() {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${this.todoId}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                this.myInfo = await response.json();
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
    }
};
</script>
