<template>
  <div class="header">
    <div>
      <!--Header Top Area Start-->
      <TopArea />

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
    return {};
  },
};
</script>
<style lang="scss" scoped>
// .header {
//   // background-color: $color_primary;
// }
</style>
