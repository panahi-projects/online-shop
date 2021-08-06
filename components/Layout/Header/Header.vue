<template>
  <div class="header">
    <div>
      <!--Header Top Area Start-->
      <span>
        <TopArea />
      </span>

      <!--Header bottom Area Start-->
      <div class="m-t-26">
        <BottomArea />
      </div>
    </div>
  </div>
</template>
<script>
import TopArea from "./Components/TopArea.vue";
import BottomArea from "./Components/BottomArea.vue";
export default {
  components: { TopArea, BottomArea },
  props: {
    cartItems: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      stickyHeader: false,
    };
  },
  mounted() {
    if (process.client) {
      if (document.body.scrollTop > 160) {
        this.stickyHeader = true;
      } else {
        this.stickyHeader = false;
      }
    }
  },
};
</script>
<style lang="scss" scoped>
.fixed-top-bar {
  // position: fixed;
  // top: 0;
  // width: 100%;
  // background-color: $white;
  // z-index: 1;
}
</style>
