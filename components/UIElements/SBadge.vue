<template>
  <span
    class="SBadge fs-15"
    :class="[
      theme == 'light' ? 'SBadge-light' : 'SBadge-dark',
      hasRemoveIcon ? 'p-r-36' : '',
    ]"
  >
    <span
      v-if="hasRemoveIcon"
      class="remove fs-24 theme-fg-color_primary pointer"
      >&times;</span
    >
    <slot></slot>
  </span>
</template>
<script>
export default {
  props: {
    hasRemoveIcon: {
      default: false,
      type: Boolean,
    },
    theme: {
      default: "light",
      type: String,
    },
  },
};
</script>
<style lang="scss" scoped>
.SBadge {
  background: $color_secondary_pale;
  color: $color_text_pale;
  border-radius: 24px;
  text-align: center;
  padding: 4px 12px;
  position: relative;
  display: inline-block;
  margin-top: 3px;
  margin-bottom: 6px;
}
.remove {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-56%);
}
</style>