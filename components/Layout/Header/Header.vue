<template>
  <div class="header">
    <div>
      <!--Header Top Area Start-->
      <TopArea />

      <!--Header Middel Area Start-->
      <MiddleArea :cartItems="cartItems" />

      <!--Header bottom Area Start-->
      <BottomArea />
    </div>
  </div>
</template>
<script>
import TopArea from "./Components/TopArea.vue";
import MiddleArea from "./Components/MiddleArea.vue";
import BottomArea from "./Components/BottomArea.vue";
export default {
  components: { TopArea, MiddleArea, BottomArea },
  props: {
    cartItems: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.header {
  background-color: $color_primary;
}
</style>
