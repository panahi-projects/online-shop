<template>
  <div class="container-xxl">
    <div class="clearfix">
      <div class="site-logo">
        <Logo />
      </div>
      <div class="top-bar clearfix">
        <div class="left-side">
          <span>Sell on Shopka</span>
          <span>Register</span>
        </div>
        <div class="right-side">
          <CartButton />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Logo from "./Logo";
import CartButton from "./CartButton";
export default {
  components: { Logo, CartButton },
  props: {},
  data() {
    return {};
  },
  computed: {
    currentLanguage() {
      return this.languages.find((lang) => lang.selected);
    },
  },
};
</script>
<style lang="scss">
.site-logo {
  float: left;
}
.top-bar {
  position: relative;
  vertical-align: middle;
  line-height: 2.9;
  font-weight: 500;
  color: $color_secondary_text;
}
.left-side {
  float: left;
  margin-left: 50px;
  span {
    padding: 4px 16px;
  }
}
.right-side {
  float: right;
}
@media only screen and (max-width: 767px) {
  .left-side {
    float: none;
    margin: auto;
    span {
      padding: 4px 16px;
    }
    display: block;
    text-align: center;
  }
  .site-logo,
  .right-side {
    float: none;
    display: block;
    text-align: center;
  }
}
</style>
