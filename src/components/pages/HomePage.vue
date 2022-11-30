<script setup lang="ts">
import { LinkButton } from '@/components/atoms';
import { Routes } from '@/router';
</script>

<template>
    <h1>home</h1>
    <LinkButton :route="Routes.WELCOME" />
    <LinkButton :route="Routes.ABOUT" />
</template>
