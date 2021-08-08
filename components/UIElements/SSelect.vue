<template>
  <div class="select" :class="theme">
    <label
      v-if="label"
      v-html="label"
      class="select-label"
      :for="`select_${ID}`"
    ></label>
    <select
      @change="onChange"
      v-model="value"
      name="select"
      :id="`select_${ID}`"
    >
      <option selected disabled>{{ placeholder }}</option>
      <option v-for="(v, idx) in values" :value="v.key">{{ v.value }}</option>
    </select>
  </div>
</template>
<script>
export default {
  props: {
    label: {
      type: String,
      default: "",
    },
    theme: {
      type: String,
      default: "dark",
    },
    placeholder: {
      type: String,
      default: "Choose an option",
    },
    values: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  data() {
    return {
      ID: "",
      value: this.placeholder || "",
    };
  },
  mounted() {
    this.ID = this._generateID(6);
  },
  methods: {
    onChange(e) {
      let obj = {
        value: this.value,
        event: e,
      };
      this.$emit("change", obj);
    },
  },
};
</script>
<style lang="scss" scoped>
/* Reset Select */
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none;
  outline: 0;
  box-shadow: none;
  border: 0;
  background: $color_base;
  background-image: none;
}
/* Remove IE arrow */
select::-ms-expand {
  display: none;
}
/* Custom Select */
.select {
  position: relative;
  display: inline-block;
  line-height: 2;
  border-radius: 0.25em;
  border: 1px solid $color_secondary_text;
}

.select-label {
  position: absolute;
  background-color: $color_base;
  padding: 2px 4px;
  font-size: 10px;
  display: inline-block;
  top: -14px;
  left: 10px;
  color: $color_secondary_text;
  font-weight: 600;
}
select {
  flex: 1;
  color: $color_primary_text;
  cursor: pointer;
  padding: 0 2em 0 0.5em;
  line-height: 2.2;
  border-radius: 0.25em;
}
/* Arrow */
.select::after {
  display: inline-block;
  content: "\25BE";
  position: absolute;
  top: 50%;
  right: 5px;
  background: none;
  color: $color_primary_text;
  cursor: pointer;
  pointer-events: none;
  -webkit-transition: 0.25s all ease;
  -o-transition: 0.25s all ease;
  transition: 0.25s all ease;
  transform: translateY(-50%) scale(1.4);
}
/* Transition */
.select:hover::after {
  color: $color_tertiary;
}
.pale {
  border: 1px solid $color_tertiary !important;
  select {
    color: $color_tertiary !important;
  }
  option {
    color: $color_primary_text;
  }
}
.select.pale::after {
  color: $color_tertiary !important;
}
</style>