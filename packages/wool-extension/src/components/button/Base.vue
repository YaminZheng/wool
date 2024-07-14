<script setup lang="ts">
export type ButtonType = "fill" | "hollow" | "text";
export type ButtonColor = "primary";
export interface BaseButtonProps extends /* @vue-ignore */ FormStatusBase {
  type?: ButtonType;
  color?: ButtonColor;
}
withDefaults(defineProps<BaseButtonProps>(), {
  type: "fill",
  color: "primary",
});
</script>

<template>
  <button class="_bit-button" :class="[type, color]">
    <slot />
  </button>
</template>

<style lang="scss">
._bit-button {
  transition: background-color 0.1s linear;
  &.fill {
    padding-left: rem(4);
    padding-right: rem(4);
    height: rem(10); 
    border: 1px solid;
    border-radius: 4px;

    --primary-text-color: white;
    --primary-text-hover-color: white;
    --primary-text-active-color: white;
    --primary-border-color: #{var(--color-primary)};
    --primary-border-hover-color: #{var(--color-primary-hover)};
    --primary-border-active-color: #{var(--color-primary-active)};
    --primary-bg-color: #{var(--color-primary)};
    --primary-bg-hover-color: #{var(--color-primary-hover)};
    --primary-bg-active-color: #{var(--color-primary-active)};
  }

  &.text {
    height: unset;
    width: unset;

    --primary-text-color: #{var(--color-primary)};
    --primary-text-hover-color: #{var(--color-primary-hover)};
    --primary-text-active-color: #{var(--color-primary-active)};
    --primary-border-color: transparent;
    --primary-border-hover-color: transparent;
    --primary-border-active-color: transparent;
    --primary-bg-color: transparent;
    --primary-bg-hover-color: transparent;
    --primary-bg-active-color: transparent;
  }

  &.primary {
    color: var(--primary-text-color);
    border-color: var(--primary-border-color);
    background-color: var(--primary-bg-color);

    &:hover {
      color: var(--primary-text-hover-color);
      border-color: var(--primary-border-hover-color);
      background-color: var(--primary-bg-hover-color);
    }
    &:active {
      color: var(--primary-text-active-color);
      border-color: var(--primary-border-active-color);
      background-color: var(--primary-bg-active-color);
    }
  }
}
</style>
