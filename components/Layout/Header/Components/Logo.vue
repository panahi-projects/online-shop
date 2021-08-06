<template>
  <div class="logo">
    <h1><span class="mark">S</span>Shopka</h1>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.logo {
  cursor: pointer;
  h1 {
    font-weight: 500;
    position: relative;
    .mark {
      display: inline-block;
      border-radius: 6px;
      background: rgb(74, 90, 164);
      background: linear-gradient(
        270deg,
        rgba(74, 90, 164, 1) 45%,
        rgba(41, 121, 255, 1) 100%
      );
      color: $white;
      height: 34px;
      width: 34px;
      font-weight: 600;
      text-align: center;
      line-height: 1;
      margin-right: 10px;
    }
  }
}
</style>