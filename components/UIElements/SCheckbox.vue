<template>
  <div class="SCheckbox">
    <input type="checkbox" v-model="val" :id="ID" class="hidden-checkbox" />
    <div class="visible-checkbox">
      <span class="checkbox" :class="val ? 'checked' : ''"></span>
      <label :for="ID" :class="val ? 'fw-600' : ''">
        <slot></slot>
      </label>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      ID: "",
      val: this.value,
    };
  },
  mounted() {
    this.ID = this._generateID(6);
  },
};
</script>
<style lang="scss" scoped>
.SCheckbox {
  padding: 4px;
  margin: 6px;
}
.hidden-checkbox {
  display: none;
}
.checkbox {
  display: inline-block;
  width: 15px;
  height: 15px;
  border-radius: 2px;
  border: 2px solid $color_secondary;
  transition: 0.3s;
}
label {
  margin-left: 10px;
  line-height: 1.5;
  display: inline-block;
}
.checked {
  background-color: $color_primary2;
  border: none !important;
}
</style>