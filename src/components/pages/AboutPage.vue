<script setup lang="ts">
import { LinkButton } from '@/components/atoms';
import { Routes } from '@/router';
</script>

<template>
    <div>
        <h1>About</h1>
        <LinkButton :route="Routes.WELCOME" />
        <LinkButton :route="Routes.HOME" />
    </div>
</template>
