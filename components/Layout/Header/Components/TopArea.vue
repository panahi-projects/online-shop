<template>
  <div>
    <div class="header-top-area">
      <div class="container">
        <div class="row">
          <!--Header Top Right Area Start-->
          <div
            class="col-lg-8 col-md-8 col-sm-12 d-lg-block d-md-block d-none text-right"
          >
            <div class="header-top-menu">
              <ul>
                <li>
                  <span>زبان:</span>
                  <span class="pointer"
                    >{{ currentLanguage.name }} <font-awesome-icon icon="angle-down"
                  /></span>
                  <ul class="ht-dropdown">
                    <li v-for="(langItem, langIndex) in languages" :key="langItem.id">
                      <a href="#">{{ langItem.name }}</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <span class="support">
                    <font-awesome-icon icon="home" />
                    {{ address }}

                    <font-awesome-icon icon="phone" /> تلفن:
                    <span class="farsi-number">{{ phone }}</span></span
                  >
                </li>
              </ul>
            </div>
          </div>
          <!--Header Top Right Area End-->
          <!--Header Top Left Area Start-->
          <div class="col-lg-4 col-md-4 col-sm-12">
            <div class="header-top-menu">
              <ul class="account">
                <li>
                  <nuxt-link to="/">
                    <font-awesome-icon icon="user" /> ورود به حساب کاربری
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/">ثبت نام</nuxt-link>
                </li>
              </ul>
            </div>
          </div>
          <!--Header Top Left Area End-->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    languages: {
      type: Array,
      default: [
        {
          id: 1,
          name: "فارسی",
          selected: true,
        },
        {
          id: 2,
          name: "English",
          selected: false,
        },
      ],
    },
    address: {
      type: String,
      default: "ایران - فارس - شیراز - خیابان قصردشت -",
    },
    phone: {
      type: String,
      default: "09173332211",
    },
  },
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
/*----------------------------------------*/
/*  1. Header CSS
/*----------------------------------------*/
/*----------------------------------------*/
/*  1.1 Header Top CSS
/*----------------------------------------*/
.header-container {
  background: $color_primary;
  color: #fff;
}
.header-top-area {
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
}
.header-top-menu > ul > li {
  display: inline-block;
  position: relative;
  padding-left: 16px;
  margin-left: 16px;
  font-size: 12px;
  padding-top: 10px;
  padding-bottom: 10px;
  line-height: 25px;
}
.header-top-menu > ul > li:last-child {
  padding-right: 0px;
  margin-right: 0px;
}
.header-top-menu > ul > li:after {
  position: absolute;
  content: "";
  width: 1px;
  height: 16px;
  background: rgba(255, 255, 255, 0.3);
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  top: 50%;
  right: 100%;
  z-index: 99;
}
.header-top-menu > ul > li:last-child:after {
  display: none;
}
.header-top-menu > ul > li > span {
  padding: 10px 0;
  margin-right: 10px;
  line-height: 25px;
  color: #fff;
}
.header-top-menu > ul > li > a {
  display: inline-block;
  font-weight: 400;
  text-align: left;
  color: #fff;
  font-size: 12px;
}
.header-top-menu > ul > li > a > i {
  margin-left: 5px;
}
.ht-dropdown {
  position: absolute;
  top: 150%;
  width: 120px;
  background: #fff;
  z-index: 9999;
  right: 0;
  padding: 5px 15px;
  text-align: center;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  opacity: 0;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
  visibility: hidden;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}
.header-top-menu > ul > li:hover ul.ht-dropdown {
  top: 100%;
  opacity: 1;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
  visibility: visible;
}

.ht-dropdown > li > a {
  display: block;
  line-height: 36px;
  font-size: 12px;
  font-weight: 400;
  text-transform: capitalize;
}
.ht-dropdown > li:not(:last-child) {
  border-bottom: 1px solid #ebebeb;
}
.account {
  text-align: left;
}
</style>
