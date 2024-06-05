<script setup lang="ts">
import { ref } from 'vue';

defineProps<{ title: string }>();
</script>

<template>
  <h1>{{ title }}</h1>
</template>
