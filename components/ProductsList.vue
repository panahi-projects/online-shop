<template>
  <div class="row">
    <div v-for="(i, idx) of items" class="col-3">
      <SCard :item="i" />
    </div>
  </div>
</template>
<script>
import SCard from "@/components/UIElements/SCard.vue";
export default {
  components: { SCard },
  props: {
    items: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
</style>