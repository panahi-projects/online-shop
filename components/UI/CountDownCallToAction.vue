<template>
  <div class="call-to-action-button">
    <!-- <label>Count Down Call To Action</label> -->
    <span
      class="tooltip-box fg-light"
      :class="timer && mode == 'tooltip' ? 'tooltip-box-show' : ''"
    >
      <template v-if="timer && mode == 'tooltip'">
        <span v-html="cancelText" @click.stop="onCancel" class="hoverable-button"></span>
        <span v-if="timer" class="timer">{{ timer }}</span>
      </template>
    </span>
    <button
      @click.prevent="onClickButton"
      :class="className"
      :style="styles"
      type="button"
      class="btn-effect"
      :id="componentId"
    >
      <span v-if="timer && mode == 'normal'" @click.stop="onCancel" class="cancel">
        <slot name="cancel">Cancel</slot>
      </span>
      <slot>Delete</slot>
      <span v-if="timer && mode == 'normal'" class="timer">{{ timer }}</span>
    </button>
    <b-tooltip v-if="tooltip" :target="componentId" triggers="hover">
      <span v-html="tooltip"></span>
    </b-tooltip>
  </div>
</template>
<script>
export default {
  props: {
    mode: {
      type: String,
      default: "tooltip",
      validator: (value) => {
        // The value must match one of these strings
        return (
          ["toast", "normal", "animated", "animated-toast", "tooltip"].indexOf(value) !==
          -1
        );
      },
    },
    tooltipOption: {
      type: String,
      default: "rightside",
      validator: (value) => {
        // The value must match one of these strings
        return ["rightside", "leftside", "upside-1", "upside-2"].indexOf(value) !== -1;
      },
    },
    className: {
      type: String,
      default: "btn btn-danger",
    },
    styles: {
      type: String,
      default: "",
    },
    counter: {
      type: Number,
      default: 5,
    },
    onClick: {
      type: Function,
      default: () => {
        console.log("Countdown call to action button triggered successfuly!");
      },
    },
    onBeforeCancel: {
      type: Function,
      default: () => {
        console.log("this function runs before cancel method");
      },
    },
    cancelText: {
      type: String,
      default: "Cancel the action",
    },
    tooltip: {
      type: String,
    },
  },
  data() {
    return {
      componentId: "",
      timer: 0,
      isTimerStoped: true,
    };
  },
  methods: {
    onCancel() {
      this.isTimerStoped = true;
      this.timer = 0;
    },
    onClickButton() {
      if (this.timer > 0) return;

      this.isTimerStoped = false;
      if (this.timer <= 0) this.timer = this.counter;
      this.onTimer(() => {
        this.onClick();
      });
    },
    onTimer(callback) {
      var interval = setInterval(() => {
        if (this.isTimerStoped) {
          clearInterval(interval);
          return;
        }
        if (this.timer > 0) {
          --this.timer;
        } else {
          clearInterval(interval);
          callback.apply();
        }
      }, 1000);
    },
  },
  mounted() {
    this.componentId = this._generateID(8);
  },
};
</script>
<style lang="scss" scoped>
.call-to-action-button {
  position: relative;
  display: inline-block;
}
.btn-effect {
  transition: 0.5s !important;
  line-height: 1;
  z-index: -1;
}
.timer {
  background: rgba(255, 255, 255, 0.25);
  border-radius: 100%;
  display: inline-block;
  width: 18px;
  height: 18px;
  text-align: center;
  line-height: 1.7;
  font-size: 10px;
}
.cancel {
  background: rgba(255, 255, 255, 0.25);
  border-radius: 8px;
  padding: 2px 6px;
  margin: auto 4px;
  z-index: 999;
  font-size: 10px;
}
.tooltip-box {
  @include transparentBackground($dark, 0.8);
  position: absolute;
  min-width: 150px;
  width: 100%;
  padding: 4px 8px;
  text-align: center;
  border-radius: 4px;
  top: 50%;
  left: calc(100% + 5px);
  transform-origin: 0 0;
  transform: scale(0) translateY(-50%);
  transition: 0.3s;
  opacity: 0;
  z-index: 9999;
  &::before {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-width: 8px;
    border-style: solid;
    border-color: transparent transparentize($dark, 0.8) transparent transparent;
    top: 50%;
    left: -16px;
    transform-origin: 0 0;
    transform: scale(0) translateY(-50%);
    opacity: 0;
  }
}
.tooltip-box-show {
  transform: scale(1) translateY(-50%);
  opacity: 1;
  transform-origin: 0 0;
  &::before {
    opacity: 1;
    transform: scale(1) translateY(-50%);
    transform-origin: 0 0;
  }
}
.hoverable-button {
  cursor: pointer;
  padding: 2px;
  border-radius: 4px;
  display: inline-block;
  transition: 0.3s;
  z-index: 9999;
  &:focus,
  &:hover {
    background-color: transparentize($dark, 0.5);
  }
}
</style>
