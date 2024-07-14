<script setup lang="ts">
const page = ref("unlock");
</script>

<template>
  <div class="w-90 h-150">
    <Unlock v-if="page === 'unlock'" />
  </div>
</template>

<style lang="scss">
@use "~/assets/styles/common.scss";
</style>
