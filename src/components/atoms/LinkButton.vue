<script setup lang="ts">
import { Routes } from '@/router';

defineProps<{
    route: Routes;
}>();
</script>

<template>
    <router-link :to="{ name: route }" class="button">{{ `Go to ${route}` }}</router-link>
</template>
