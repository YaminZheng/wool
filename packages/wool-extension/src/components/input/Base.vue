<script setup lang="ts">
export interface BaseInputProps extends FormStatusBase {}
defineProps<BaseInputProps>();
</script>

<template>
  <input class="_bit-input" />
</template>

<style lang="scss">
._bit-input {
  height: rem(10);
  background-color: transparent;
  outline: none;
  border-radius: 4px;
  text-indent: 10px;
  border: 1px solid;
  transition: border-color 0.1s linear;

  --border-color: #{var(--color-border)};
  --border-focus-color: #{var(--color-info)};
  --text-color: #{var(--text-color)};
  color: var(--text-color);
  border-color: var(--border-color);

  &:focus {
    border-color: var(--border-focus-color);
  }
}
</style>
