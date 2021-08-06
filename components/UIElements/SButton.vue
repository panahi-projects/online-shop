<template>
  <button :type="type" :class="styleClasses">
    <slot></slot>
  </button>
</template>
<script>
export default {
  props: {
    type: {
      default: "button",
      type: String,
    },
    variant: {
      default: "outline-primary",
      type: String,
    },
    classes: {
      default: "",
      type: String,
    },
    shadow: {
      default: "",
      type: String,
    },
  },
  computed: {
    styleClasses() {
      return `${this.variant} ${this.shadow} ${this.classes}`;
    },
  },
};
</script>
<style lang="scss" scoped>
button {
  border: none;
  background: none;
  padding: 6px 16px;
  border-radius: 6px;
  font-family: "Inter";
  margin: 4px;
  display: inline-block;
}
.outline-primary {
  border: 1px solid $color_primary_pale;
  color: $color_primary;
  background: $white;
  font-weight: 600;
}
.secondary {
  color: $color_primary;
  background: $white;
  font-weight: 600;
}
.shadow-md {
  -webkit-box-shadow: -1px 4px 8px 0px rgba(187, 208, 241, 0.62);
  box-shadow: -1px 4px 8px 0px rgba(187, 208, 241, 0.62);
}
</style>