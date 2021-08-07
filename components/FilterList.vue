<template>
  <div class="row">
    <div class="col-6">
      <span class="m-r-10 m-t-10 display-inline-block">
        <SSelect label="SORT BY" theme="dark" :values="sortBy"></SSelect>
      </span>
      <span class="m-r-10 m-t-10 display-inline-block">
        <SSelect theme="pale" placeholder="Condition"></SSelect>
      </span>
      <span class="m-r-10 m-t-10 display-inline-block">
        <SSelect theme="pale" placeholder="Delivery Options"></SSelect>
      </span>
    </div>
    <div class="col-6 switch-box">
      <span class="m-t-10 display-inline-block m-l-14">
        <SSwitchButton :items="displayMode"></SSwitchButton>
      </span>
      <span class="m-t-10 display-inline-block">
        <SSwitchButton :items="switchItems"></SSwitchButton>
      </span>
    </div>
  </div>
</template>
<script>
import SSelect from "@/components/UIElements/SSelect.vue";
import SSwitchButton from "@/components/UIElements/SSwitchButton.vue";
export default {
  components: { SSelect, SSwitchButton },
  data() {
    return {
      switchItems: [
        {
          id: 1,
          title: "Show all",
          isActive: false,
        },
        {
          id: 2,
          title: "Auction",
          isActive: true,
        },
        {
          id: 3,
          title: "Buy now",
          isActive: false,
        },
      ],
      displayMode: [
        {
          id: 1,
          title: "",
          isActive: false,
          icon: "th-list",
        },
        {
          id: 2,
          title: "",
          isActive: true,
          icon: "th-large",
        },
      ],
      sortBy: [
        {
          key: "highest_price",
          value: "Highest Price",
        },
        {
          key: "lowest_price",
          value: "Lowest Price",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.switch-box {
  text-align: right;
  direction: rtl;
}
</style>