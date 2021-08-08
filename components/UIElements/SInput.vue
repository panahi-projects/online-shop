<template>
  <div class="SInput">
    <span class="search" v-if="type == 'search'">
      <font-awesome-icon icon="search" />
    </span>
    <input
      @input="onInput"
      v-model="value"
      :type="type"
      :placeholder="placeholder"
      :class="[styleClasses, type == 'search' ? 'p-l-64' : '']"
    />
  </div>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
      default: "",
    },
    size: {
      type: String,
      default: "md",
      validator: (value) => {
        let acceptedValues = ["sm", "md", "lg"];
        return acceptedValues.includes(value);
      },
    },
    classes: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      value: "",
    };
  },
  computed: {
    styleClasses() {
      return `${this.size} ${this.classes}`;
    },
  },
  methods: {
    onInput(e) {
      let obj = {
        value: this.value,
        event: e,
      };
      this.$emit("input", obj);
    },
  },
};
</script>
<style lang="scss" scoped>
.SInput {
  position: relative;
}
// reset input default styles:
input {
  border: none;
  background-image: none;
  background-color: transparent;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
}
input {
  background: $color_secondary_pale;
  color: $color_text_pale;
  border-radius: 24px;
  display: block;
  width: 100%;
}
.sm {
  padding: 8px 16px;
}
.md {
  padding: 12px 24px;
}
.lg {
  padding: 16px 32px;
}
.search {
  position: absolute;
  left: 18px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 22px;
  cursor: pointer;
  color: $color_tertiary_text;
}
</style>