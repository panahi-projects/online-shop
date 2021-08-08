<template>
  <div class="cart-button">
    <div class="user-image">
      <img src="/images/user.jpg" alt="user image" />
    </div>
    <span v-click-outside="onInvisibleCart" class="cart-container">
      <SButton
        variant="secondary"
        shadow="shadow-md"
        :notification="cartItems.length"
        @click="onToggleTinyCart"
        >My Cart</SButton
      >
      <section class="tiny-cart" :class="showTinyCart ? 'show-cart' : ''">
        <ul>
          <li v-for="(item, idx) in cartItems">
            <div class="clearfix cart">
              <span class="remove-item">
                <font-awesome-icon icon="times" />
              </span>
              <span class="content">
                <span class="title ellipsis">{{ item.title }}</span>
                <span class="price">
                  <span class="fw-100">Price:</span>
                  <span class="fw-600 fs-14">{{ item.price }} $</span>
                </span>
                <span class="count">
                  <span class="fw-100">Count:</span>
                  <span class="fw-600 fs-14">{{ item.count }}</span>
                </span>
              </span>
              <span class="thumbnail">
                <img :src="item.image" :alt="item.title" />
              </span>
            </div>
          </li>
        </ul>
        <div class="row">
          <div class="col-12 total">
            <span>Total: </span> <span>{{ total }} $</span>
          </div>
          <div class="col-12 pay-cart clearfix">
            <span> Payment </span>
            <span> Cart </span>
          </div>
        </div>
      </section>
    </span>
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
    return {
      showTinyCart: false,
    };
  },
  computed: {
    cartItems: {
      get() {
        return this.$store.getters["cart/getCart"];
      },
      set(value) {},
    },
    total() {
      let sum = this.cartItems.reduce((total, item) => {
        return total + item.price * item.count;
      }, 0);
      return parseFloat(sum.toString()).toFixed(2);
    },
  },
  methods: {
    onToggleTinyCart() {
      this.showTinyCart = !this.showTinyCart;
    },
    onInvisibleCart() {
      this.showTinyCart = false;
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
.cart-container {
  position: relative;
}
.cart {
  vertical-align: middle;
  position: relative;
}
.remove-item {
  font-size: 12px;
  position: absolute;
  top: 0px;
  left: 0px;
  color: $color_tertiary;
  cursor: pointer;
  cursor: pointer;
}
.tiny-cart {
  clip-path: circle(0 at top right);
  transition: clip-path ease-in-out 0.3s;
  overflow: hidden;
  border-radius: 14px;
  direction: ltr;
  text-align: left;
  position: absolute;
  background: $white;
  top: calc(100% + 20px);
  right: 0;
  z-index: 9;
  -webkit-box-shadow: -1px 2px 20px -1px rgba(117, 117, 117, 0.57);
  box-shadow: -1px 2px 20px -1px rgba(117, 117, 117, 0.57);

  min-width: 250px;
  .content {
    width: 55%;
    float: left;
    padding: 8px 4px 4px 16px;
    .title,
    .price,
    .count {
      display: block;
      text-align: left;
      line-height: 1.1;
      font-size: 12px;
      max-width: 100px;
    }
    .title {
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 8px;
    }
  }
  .thumbnail {
    float: right;
    background: transparent;
    width: 30%;
    height: 70px;
    margin: 8px 12px 5px 5px;
  }
  .thumbnail img {
    width: 100%;
    height: 70px;
    object-fit: scale-down;
  }
}

.tiny-cart ul {
  overflow-y: scroll;
  max-height: 400px;
  scrollbar-width: thin;
}
.tiny-cart ul::-webkit-scrollbar {
  width: 5px;
}

.tiny-cart ul::-webkit-scrollbar-track {
  box-shadow: inset 0 0 3px rgba(148, 148, 148, 0.3);
}

.tiny-cart ul::-webkit-scrollbar-thumb {
  background-color: rgb(236, 236, 236);
  outline: 1px solid rgb(216, 216, 216);
}
.tiny-cart ul li {
  border-bottom: 1px solid #ddd;
  padding: 8px;
}
.pay-cart {
  border-top: 1px solid #ddd;
  font-size: 14px;
  color: $color_secondary_very_pale;
  span {
    background: $color_secondary;
    float: left;
    display: inline-block;
    width: 50%;
    text-align: center;
    transition: 0.3s;
    &:first-child {
      border-right: 1px solid $color_secondary_text;
    }
    &:hover,
    &:focus {
      background: $color_secondary_dark;
      cursor: pointer;
    }
  }
}
.total {
  line-height: 0.5;
  padding: 4px 16px 8px;
  font-size: 13px;
  font-weight: 600;
}
.show-cart {
  clip-path: circle(150% at top right);
}
@media only screen and (max-width: 767px) {
  .cart-button {
    text-align: center;
    display: block;
  }
}
</style>
