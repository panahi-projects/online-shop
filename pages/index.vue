<template>
  <div class="container">
    <b-row>
      <b-col cols="12"> Index </b-col>
    </b-row>
  </div>
</template>

<script>
import { CountDownCallToAction } from "@/components";
export default {
  components: { CountDownCallToAction },
  data() {
    return {};
  },
  methods: {
    test() {
      console.log("Clicked outside");
      // return;
    },
  },
};
</script>

<style></style>
