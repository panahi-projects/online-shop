<template>
  <div class="footer"></div>
</template>
<style lang="scss" scoped>
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60px; /* Height of the footer */
  background: $gray-100;
  background-color: $color_tertiary;
  min-height: 50px;
  .content {
    @include content-container;
  }
}
// .copyright {
//   font-size: 0.8em;
//   text-align: center;
//   background-color: $light;
//   border-top: 1px solid #ddd;
//   bottom: 0;
//   position: absolute;
//   width: 100%;
//   padding: 4px 8px;
// }
</style>
