<template>
  <div class="SCollapse tabs m-t-18 m-b-10">
    <div class="tab">
      <input type="checkbox" :id="`check_${ID}`" v-model="isCollapsed" />
      <label class="tab-label" :for="`check_${ID}`"
        ><slot name="title"></slot
      ></label>
      <div class="tab-content">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    collapsed: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      isCollapsed: this.collapsed,
      ID: "",
    };
  },
  mounted() {
    this.ID = this._generateID(6);
  },
};
</script>
<style lang="scss" scoped>
.SCollapse {
  background: $color_secondary_very_pale;
  padding: 8px 16px;
  position: relative;
  border-radius: 4px;
}
/* Accordion styles */
input {
  position: absolute;
  opacity: 0;
  z-index: -1;
}
.tabs {
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 4px 4px -2px rgba(0, 0, 0, 0.2);
}
.tab {
  width: 100%;
  overflow: hidden;
  &-label {
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    cursor: pointer;
    /* Icon */
    &::after {
      content: "\276F";
      width: 1em;
      height: 1em;
      text-align: center;
      transition: all 0.35s;
    }
  }
  &-content {
    max-height: 0;
    transition: all 0.35s;
  }
  &-close {
    display: flex;
    justify-content: flex-end;
    padding: 1em;
    font-size: 0.75em;
    cursor: pointer;
  }
}

// :checked
input:checked {
  + .tab-label {
    &::after {
      transform: rotate(90deg);
    }
  }
  ~ .tab-content {
    max-height: 100vh;
    padding: 0.55em;
  }
}
</style>