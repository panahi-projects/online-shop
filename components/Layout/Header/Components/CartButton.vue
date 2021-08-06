<template>
  <div class="cart-button">
    <div class="user-image">
      <img src="/images/user.jpg" alt="user image" />
    </div>
    <SButton
      variant="secondary"
      shadow="shadow-md"
      :notification="cartItems.length"
      >My Cart</SButton
    >
    <SButton>Sign in</SButton>
    <div class="additional-menu display-inline-block">
      <span>Consumer Electronics</span>
    </div>
  </div>
</template>
<script>
import SButton from "@/components/UIElements/SButton.vue";
export default {
  components: { SButton },
  data() {
    return {};
  },
  computed: {
    cartItems: {
      get() {
        return this.$store.getters["cart/getCart"];
      },
      set(value) {},
    },
  },
};
</script>
<style lang="scss">
.cart-button {
  direction: rtl;
  text-align: right;
  vertical-align: middle;
}
.user-image {
  width: 38px;
  height: 38px;
  border-radius: 100%;
  overflow: hidden;
  display: inline-block;
  vertical-align: middle;
  img {
    width: 100%;
  }
}
.additional-menu {
  margin-right: 50px;
  color: $color_primary;
}
</style>
