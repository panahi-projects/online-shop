<template>
  <span>
    <div class="Stars" :style="`--rating: ${score};`"></div>
    <span class="fs-12 fw-500">{{ score }}</span>
  </span>
</template>
<script>
export default {
  props: {
    score: {
      type: Number,
      default: 3,
      validator: (value) => {
        return value <= 5 ? true : false;
      },
    },
  },
};
</script>
<style lang="scss" >
:root {
  --star-size: 18px;
  --star-color: #e2e2e2;
  --star-background: #fc0;
}
.Stars {
  --percent: calc(var(--rating) / 5 * 100%);

  display: inline-block;
  font-size: var(--star-size);
  font-family: Times; // make sure ★ appears correctly
  line-height: 1;

  &::before {
    content: "★★★★★";
    letter-spacing: 3px;
    background: linear-gradient(
      90deg,
      var(--star-background) var(--percent),
      var(--star-color) var(--percent)
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
</style>