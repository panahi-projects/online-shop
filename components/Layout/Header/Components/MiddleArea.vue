<template>
  <div>
    <div class="header-middel-area">
      <div class="container">
        <div class="row">
          <!--Logo Start-->
          <div class="col-lg-3 col-md-3 col-12">
            <div class="logo">
              <nuxt-link to="/"><img src="/sample-images/logo.png" alt="" /></nuxt-link>
            </div>
          </div>
          <!--Logo End-->
          <!--Search Box Start-->
          <div class="col-lg-6 col-md-5 col-12">
            <div class="search-box-area">
              <form action="#">
                <div class="select-area">
                  <select
                    data-placeholder="Choose a Country..."
                    class="select"
                    tabindex="1"
                  >
                    <option value="">همه محصولات</option>
                    <optgroup label="NFC EAST">
                      <option>Dallas Cowboys</option>
                      <option>New York Giants</option>
                      <option>Philadelphia Eagles</option>
                      <option>Washington Redskins</option>
                    </optgroup>
                    <optgroup label="NFC NORTH">
                      <option>Chicago Bears</option>
                      <option>Detroit Lions</option>
                      <option>Green Bay Packers</option>
                      <option>Minnesota Vikings</option>
                    </optgroup>
                    <optgroup label="NFC SOUTH">
                      <option>Atlanta Falcons</option>
                      <option>Carolina Panthers</option>
                      <option>New Orleans Saints</option>
                      <option>Tampa Bay Buccaneers</option>
                    </optgroup>
                    <optgroup label="NFC WEST">
                      <option>Arizona Cardinals</option>
                      <option>St. Louis Rams</option>
                      <option>San Francisco 49ers</option>
                      <option>Seattle Seahawks</option>
                    </optgroup>
                    <optgroup label="AFC EAST">
                      <option>Buffalo Bills</option>
                      <option>Miami Dolphins</option>
                      <option>New England Patriots</option>
                      <option>New York Jets</option>
                    </optgroup>
                    <optgroup label="AFC NORTH">
                      <option>Baltimore Ravens</option>
                      <option>Cincinnati Bengals</option>
                      <option>Cleveland Browns</option>
                      <option>Pittsburgh Steelers</option>
                    </optgroup>
                    <optgroup label="AFC SOUTH">
                      <option>Houston Texans</option>
                      <option>Indianapolis Colts</option>
                      <option>Jacksonville Jaguars</option>
                      <option>Tennessee Titans</option>
                    </optgroup>
                    <optgroup label="AFC WEST">
                      <option>Denver Broncos</option>
                      <option>Kansas City Chiefs</option>
                      <option>Oakland Raiders</option>
                      <option>San Diego Chargers</option>
                    </optgroup>
                  </select>
                </div>
                <div class="search-box">
                  <input
                    type="text"
                    name="search"
                    id="search"
                    placeholder="جستجوی کالای مورد نظر..."
                  />
                  <button type="submit">
                    <font-awesome-icon icon="search" />
                  </button>
                </div>
              </form>
            </div>
          </div>
          <!--Search Box End-->
          <!--Mini Cart Start-->
          <div class="col-lg-3 col-md-4 col-12">
            <div class="mini-cart-area">
              <ul>
                <li>
                  <a href="#">
                    <font-awesome-icon icon="shopping-bag" />
                    <span class="cart-add farsi-number">{{ items.length }}</span>
                  </a>
                  <ul class="cart-dropdown text-right">
                    <!--Single Cart Item Start-->
                    <li
                      v-for="(cartItem, cartIndex) in items"
                      :key="`${cartIndex}_${cartItem.id}`"
                      class="cart-item"
                    >
                      <div class="cart-content">
                        <h4>
                          <a href="shopping-cart.html">
                            {{ cartItem.name }}
                          </a>
                        </h4>
                        <p class="cart-quantity">
                          تعداد:
                          <span class="farsi-number">{{ cartItem.quantity }}</span>
                        </p>
                        <p class="cart-price">
                          <span>{{ cartItem.price }}</span> تومان
                        </p>
                      </div>
                      <div class="cart-img">
                        <a href="shopping-cart.html"
                          ><img :src="cartItem.image" alt=""
                        /></a>
                      </div>
                      <div @click="onRemoveItem(cartItem, cartIndex)" class="cart-close">
                        &times;
                      </div>
                    </li>
                    <!--Single Cart Item Start-->
                    <!--Cart Total Start-->
                    <li class="cart-total-amount mtb-20">
                      <h4>
                        مبلغ کل :
                        <span class="pull-right farsi-number">{{ total }}</span> تومان
                      </h4>
                    </li>
                    <!--Cart Total End-->
                    <!--Cart Button Start-->
                    <li class="cart-button">
                      <a href="shopping-cart.html" class="button2">مشاهده سبد خرید</a>
                      <a href="checkout.html" class="button2">ثبت سفارش</a>
                    </li>
                    <!--Cart Button End-->
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <!--Mini Cart End-->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    cartItems: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      items: this.cartItems || [],
    };
  },
  methods: {
    onRemoveItem(item, index) {
      let newItems = this.items.map((i) => {
        debugger;
        if (i?.id !== item?.id) return i;
      });
      debugger;
      let filteredItems = newItems.filter((x) => {
        if (x) return x;
      });
      this.items = filteredItems;
    },
  },
  computed: {
    total() {
      if (this.items?.length) {
        return this.items.reduce((sum, item) => {
          return sum + item.price;
        }, 0);
      }
      return 0;
    },
  },
};
</script>
<style lang="scss">
/*----------------------------------------*/
/*  1.2 Header Middle CSS
/*----------------------------------------*/
.logo {
  padding: 44px 0;
}
.search-box-area {
  border-radius: 30px;
  position: relative;
  background: $color_base;
  display: block;
  vertical-align: middle;
  margin: 35px -50px 35px 50px;
  z-index: 11;
  overflow: visible;
  height: 50px;
}
.select-area {
  width: 30%;
  float: left;
  background: $color_base;
  border-radius: 25px 0 0 25px;
}
.search-box {
  width: 70%;
  float: left;
  position: relative;
  background: $color_base;
  height: 50px;
  border-radius: 0 30px 30px 0;
}
.search-box input {
  border-left: 1px solid $color_light_gray;
  padding: 0 95px 0 20px;
  float: left;
  margin: 13px 0 0;
  outline: medium none;
  height: 25px;
}
.search-box button {
  position: absolute;
  right: -1px;
  width: 67px;
  height: 50px;
  border: 0;
  background: $color_secondary;
  display: block;
  color: $color_base;
  font-size: 24px;
  z-index: 99;
  top: 0px;
  border-radius: 0 25px 25px 0;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}
.search-box button:hover {
  color: $color_primary;
}
.mini-cart-area {
  margin-left: 60px;
  text-align: left;
}
.mini-cart-area > ul > li {
  display: inline-block;
  position: relative;
  padding: 36px 0px;
}
.mini-cart-area > ul > li > a {
  font-size: 24px;
  color: $color_base;
  display: block;
  margin-right: 15px;
  width: 50px;
  height: 50px;
  border: 2px solid $color_base;
  line-height: 45px;
  text-align: center;
  border-radius: 100%;
  position: relative;
}
.mini-cart-area > ul > li:first-child > a:hover {
  color: $color_secondary;
}
.cart-add {
  position: absolute;
  top: -6px;
  right: -14px;
  font-size: 14px;
  width: 25px;
  height: 25px;
  line-height: 25px;
  background: $color_primary_hot;
  border-radius: 100%;
}
.cart-total {
  position: absolute;
  right: -70px;
  top: 0;
  font-size: 14px;
  font-weight: 600;
}
.cart-total {
  position: absolute;
  right: -84px;
  top: 0;
  font-size: 14px;
  font-weight: 600;
}
.cart-total i.fa {
  margin-left: 3px;
}
.cart-dropdown {
  position: absolute;
  width: 350px;
  background: $color_base;
  left: 0;
  top: 120%;
  text-align: left;
  padding: 10px 35px 0 35px;
  border-radius: 3px;
  box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.15);
  opacity: 0;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
  visibility: hidden;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  z-index: 999;
}
.mini-cart-area > ul > li:hover .cart-dropdown {
  top: 86%;
  opacity: 1;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
  visibility: visible;
}
.cart-dropdown:after {
  position: absolute;
  content: "";
  top: -18px;
  left: 22px;
  border-bottom: 10px solid $color_base;
  border-radius: 4px;
  border-right: 10px solid transparent;
  border-left: 10px solid transparent;
  border-top: 10px solid transparent;
  z-index: 99;
}
.cart-item {
  padding: 20px 0;
  display: block;
  position: relative;
  border-bottom: 1px solid $color_light_gray;
  overflow: hidden;
}
.cart-img {
  float: left;
  width: 30%;
}
.cart-content {
  float: left;
  padding-left: 20px;
  width: 70%;
}
.cart-content > h4 > a {
  font-size: 14px;
  text-transform: capitalize;
}
.cart-price {
  font-size: 14px;
  color: $color_primary;
  font-weight: 600;
  font-family: "IRANSansNumbers";
}
.cart-close {
  position: absolute;
  top: 20px;
  left: 0;
  font-size: 16px;
  z-index: 9;
  cursor: pointer;
}
.cart-quantity {
  color: $color_terinary;
  font-size: 12px;
  line-height: 20px;
  padding: 5px 0;
  display: block;
  margin: 0;
}
.cart-total-amount > h4 {
  font-weight: 700;
  text-transform: uppercase;
}
</style>
