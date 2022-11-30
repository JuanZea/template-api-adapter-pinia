<script setup lang="ts">
import { Api } from '@/services/SwApi';
import { useInfoStore } from '@/stores';

const fillState = async () => {
    const infoStore = useInfoStore();
    infoStore.refreshPeople();
    infoStore.refreshPlanets();
};
</script>

<template>
    <div>
        <img alt="Vue logo" src="src/assets/vue.svg" />
        <h1>Welcome Services Layout</h1>
        <button @click="fillState" class="button">Fill state</button>
    </div>
</template>
