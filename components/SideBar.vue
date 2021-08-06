<template>
  <div class="container-x">
    <section class="row top">
      <div class="col-6">
        <h3>Filter By</h3>
      </div>
      <div class="col-6">
        <span class="theme-fg-color_primary fw-400 clear-filter"
          >Clear Filters</span
        >
      </div>
    </section>
    <section class="middle">
      <div class="badges">
        <SBadge :hasRemoveIcon="true">100 $ - 200 $</SBadge>
        <SBadge :hasRemoveIcon="true">Brand 2</SBadge>
        <SBadge :hasRemoveIcon="true">Brand 5</SBadge>
        <SBadge :hasRemoveIcon="true">Brand 8</SBadge>
      </div>
    </section>
    <section class="content">
      <SCollapse>
        <template v-slot:title>
          <h5 class="fw-600">Brands</h5>
        </template>
        <template v-slot:content>
          <SCheckbox v-for="i in 6">Brand {{ i }}</SCheckbox>
        </template>
      </SCollapse>
      <SCollapse>
        <template v-slot:title>
          <h5 class="fw-600">Price</h5>
        </template>
        <template v-slot:content>
          <SCheckbox v-for="i in prices"
            >{{ i.from }} $ - {{ i.to }} $</SCheckbox
          >
        </template>
      </SCollapse>
    </section>
  </div>
</template>
<script>
import SBadge from "@/components/UIElements/SBadge.vue";
import SCollapse from "@/components/UIElements/SCollapse.vue";
import SCheckbox from "@/components/UIElements/SCheckbox.vue";
export default {
  components: { SBadge, SCollapse, SCheckbox },
  data() {
    return {};
  },
  computed: {
    prices() {
      return [
        { from: 0, to: 10 },
        { from: 10, to: 50 },
        { from: 50, to: 100 },
        { from: 100, to: 200 },
        { from: 200, to: 300 },
        { from: 300, to: "and higher" },
      ];
    },
  },
};
</script>
<style lang="scss" scoped>
.clear-filter {
  text-align: right;
  display: block;
}
</style>