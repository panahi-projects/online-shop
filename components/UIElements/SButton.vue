<template>
  <span class="SButton">
    <span v-if="notification" class="notification">{{ notification }}</span>
    <button
      :type="type"
      :class="styleClasses"
      @click="onClick"
      :disabled="disabled"
    >
      <slot></slot>
    </button>
  </span>
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
    disabled: {
      default: false,
      type: Boolean,
    },
    notification: {
      default: 0,
      type: Number,
    },
  },
  methods: {
    onClick() {
      if (!this.disabled) {
        this.$emit("click");
      }
    },
  },
  computed: {
    styleClasses() {
      return `${this.variant} ${this.shadow} ${this.classes} ${
        this.disabled ? "disabled" : ""
      }`;
    },
  },
};
</script>
<style lang="scss" scoped>
.SButton {
  position: relative;
}
button {
  border: none;
  background: none;
  padding: 6px 16px;
  border-radius: 6px;
  font-family: "Inter";
  margin: 4px;
  display: inline-block;
  cursor: pointer;
  transition: 0.3s;
}
.outline-primary {
  border: 1px solid $color_primary_pale;
  color: $color_primary;
  background: $white;
  font-weight: 600;
}
.outline-primary:hover,
.outline-primary:focus {
  border: none;
  background-color: $color_primary2;
  color: $white;
  border: 1px solid $white;
}
.outline-primary:active {
  background-color: $color_primary;
}
.secondary {
  color: $color_primary;
  background: $white;
  font-weight: 600;
}
.disabled:focus,
.disabled:hover,
.disabled:active,
.disabled {
  border: 1px solid $color_secondary_text;
  color: $color_secondary_text;
  background-color: $color_secondary_very_pale;
  cursor: default;
}
.shadow-md {
  -webkit-box-shadow: -1px 4px 8px 0px rgba(187, 208, 241, 0.62);
  box-shadow: -1px 4px 8px 0px rgba(187, 208, 241, 0.62);
}
.secondary:focus,
.secondary:hover {
  -webkit-box-shadow: -1px 6px 12px 0px rgba(187, 208, 241, 0.8);
  box-shadow: -1px 6px 12px 0px rgba(187, 208, 241, 0.8);
}
.secondary:active {
  -webkit-box-shadow: -1px 3px 4px 0px rgba(187, 208, 241, 0.8);
  box-shadow: -1px 3px 4px 0px rgba(187, 208, 241, 0.8);
}
.notification {
  position: absolute;
  top: -5px;
  right: -5px;
  background: $color_primary_hot;
  color: $white;
  width: 18px;
  height: 18px;
  text-align: center;
  border-radius: 100%;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.3;
}
</style>