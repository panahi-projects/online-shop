<template>
  <div class="container-x">
    <section class="row top">
      <div class="col-6">
        <h3>Filter By</h3>
      </div>
      <div class="col-6">
        <span
          @click="onClearFilters"
          class="theme-fg-color_primary fw-400 clear-filter pointer"
          >Clear Filters</span
        >
      </div>
    </section>
    <section class="middle">
      <div v-if="filters.length" class="badges">
        <SBadge
          v-for="(filterItem, filterIndex) in filters"
          :hasRemoveIcon="true"
        >
          {{ filterItem.item.value }}
        </SBadge>
      </div>
    </section>
    <section v-if="filterItems.length" class="content">
      <SCollapse v-for="(fi, idx) in filterItems">
        <template v-slot:title>
          <h5 class="fw-600">{{ fi.title }}</h5>
        </template>
        <template v-if="fi.items && fi.items.length" v-slot:content>
          <SCheckbox
            v-for="i in fi.items"
            :item="i"
            :reset="resetFilters"
            @change="onToggleFilter"
            >{{ i.value }}</SCheckbox
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
  props: {
    filterItems: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  data() {
    return {
      filters: [],
    };
  },
  computed: {
    resetFilters() {
      return this.filters.length == 0 ? true : false;
    },
  },
  watch: {
    filters: {
      handler(newVal) {
        if (newVal?.length) {
          this.$store.dispatch("productsFilters/addToFilters", newVal);
        } else {
          this.$store.dispatch("productsFilters/addToFilters", []);
        }
      },
      deep: true,
    },
  },
  methods: {
    onClearFilters() {
      this.filters = [];
    },
    onToggleFilter(item) {
      if (item.status) {
        this.filters.push(item);
      } else {
        let filterIndex = this.filters.findIndex(
          (x) => x.item.key == item.item.key
        );
        this.filters.splice(filterIndex, 1);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.clear-filter {
  text-align: right;
  display: block;
  transition: 0.3s;
  &:hover,
  &:focus {
    color: $color_primary2;
  }
}
</style>