<template>
  <div id="wrapper">
    <header>
      <AppHeader :cartItems="cartItems" />
    </header>
    <nuxt keep-alive :keep-alive-props="{ max: 30 }" />
    <!-- <footer>
      <AppFooter />
    </footer> -->
  </div>
</template>
<script>
import { Header, Footer } from "@/components";
export default {
  components: {
    AppHeader: Header,
    AppFooter: Footer,
  },
  data() {
    return {
      cartItems: [
        {
          id: "1",
          name: "مانیتور ال جی مدل 22MK400H-B سایز 22 اینچ",
          quantity: 1,
          price: 4000000,
          image: "/sample-images/x2.jpg",
        },
        {
          id: "2",
          name: "کامپیوتر همه کاره 21.5 اینچی اپل مدل iMac MHK23 2020 با صفحه نمایش رتینا 4K",
          quantity: 2,
          price: 42000000,
          image: "/sample-images/x1.jpg",
        },
      ],
    };
  },
};
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background-color: $body-background-color;
}
</style>
