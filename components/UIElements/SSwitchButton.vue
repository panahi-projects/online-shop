<template>
  <div class="SSwitchButton">
    <span
      v-for="(i, idx) in items"
      class="item"
      :class="i.isActive ? 'active' : ''"
    >
      <font-awesome-icon v-if="i.icon" :icon="i.icon" />
      {{ i.title }}
    </span>
  </div>
</template>
<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
};
</script>
<style lang="scss" scoped>
.SSwitchButton {
  direction: ltr;
  background-color: $color_primary_very_pale;
  color: $color_secondary_text;
  border-radius: 6px;
  font-size: 0px;
}
.item {
  display: inline-block;
  padding: 8px 12px;
  font-size: 14px;
  text-align: center;
  transition: 0.3s;
  margin: 0;
}
.item:hover,
.item:focus,
.active {
  background-color: $color_base;
  -webkit-box-shadow: -1px 3px 4px 0px rgba(187, 208, 241, 0.62);
  box-shadow: -1px 3px 4px 0px rgba(187, 208, 241, 0.62);
  border-radius: 6px;
  cursor: pointer;
}
</style>