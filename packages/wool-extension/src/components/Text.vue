<script setup lang="ts">
export interface TextProps {
  color?: "text" | "info" | "border" | "primary";
}
withDefaults(defineProps<TextProps>(), { color: "text" });
</script>

<template>
  <component :is="$attrs.is ?? 'div'" class="_bit-text" :class="[color]">
    <slot />
  </component>
</template>

<style lang="scss">
._bit-text {
  color: var(--text-color, black);
  &.text {
    --text-color: #{var(--color-text)};
  }
  &.info {
    --text-color: #{var(--color-info)};
  }
  &.border {
    --text-color: #{var(--color-border)};
  }
  &.primary {
    --text-color: #{var(--color-primary)};
  }
}
</style>
