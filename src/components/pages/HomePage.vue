<script setup lang="ts">
import { LinkButton } from '@/components/atoms';
import { Routes } from '@/router';
import { useStore } from '@/stores';

const store = useStore();
</script>

<template>
    <h1>home</h1>
    <pre>{{ store }}</pre>
    <LinkButton :route="Routes.WELCOME" />
    <LinkButton :route="Routes.ABOUT" />
</template>
