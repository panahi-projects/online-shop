<template>
  <div>
    <div class="header-bottom-area header-sticky">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <!--Logo Sticky Start-->
            <div class="logo-sticky">
              <a href="index.html"><img src="img/logo/logo.png" alt="" /></a>
            </div>
            <!--Logo Sticky End-->
            <!--Main Menu Area Start-->
            <div class="main-menu-area">
              <nav>
                <ul class="main-menu">
                  <li class="active">
                    <a href="index.html">صفحه اصلی</a>
                    <!--Dropdown Menu Start-->
                    <ul class="dropdown">
                      <li><a href="index.html">Home Shop 1</a></li>
                      <li><a href="index-2.html">Home Shop 2</a></li>
                      <li><a href="index-3.html">Home Shop 3</a></li>
                      <li><a href="index-4.html">Home Shop 4</a></li>
                      <li><a href="index-5.html">Home Shop 5</a></li>
                      <li><a href="index-6.html">Home Shop 6</a></li>
                      <li><a href="index-7.html">Home Shop 7</a></li>
                    </ul>
                    <!--Dropdown Menu End-->
                  </li>
                  <li class="new">
                    <a href="#">محصولات</a>
                    <!--Mega Menu Start-->
                    <ul class="mega-menu">
                      <li>
                        <ul>
                          <li class="mega-title"><a href="#">pages</a></li>
                          <li><a href="about.html">About Us</a></li>
                          <li><a href="services.html">Services</a></li>
                          <li>
                            <a href="frequently-questions.html">Frequently Questions</a>
                          </li>
                          <li><a href="404.html">Error 404</a></li>
                          <li><a href="portfolio.html">Portfolio</a></li>
                        </ul>
                      </li>
                      <li>
                        <ul>
                          <li class="mega-title"><a href="#">blog</a></li>
                          <li><a href="blog-nosidebar.html">None Sidebar</a></li>
                          <li><a href="blog-left-sidebar.html">Sidebar Left</a></li>
                          <li><a href="blog-post-gallery.html">Gallery Format</a></li>
                          <li><a href="blog-post-audio.html">Audio Format</a></li>
                          <li><a href="blog-post-video.html">Video Format</a></li>
                        </ul>
                      </li>
                      <li>
                        <ul>
                          <li class="mega-title"><a href="#">shop</a></li>
                          <li><a href="shop-full-width.html">Full Width</a></li>
                          <li><a href="shop-right-sidebar.html">Sidebar Right</a></li>
                          <li><a href="shop-list-view.html">List View</a></li>
                        </ul>
                      </li>
                      <li class="menu-img">
                        <ul>
                          <li>
                            <a href="#"
                              ><img src="/sample-images/menu-banner.jpg" alt=""
                            /></a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                    <!--Mega Menu End-->
                  </li>
                  <li class="hot"><a href="shop.html">فروشگاه</a></li>
                  <li><a href="blog.html">وبلاگ</a></li>
                  <li><a href="contact.html">تماس با ما</a></li>
                  <li><a href="wishlist.html">درباره ما</a></li>
                  <li>
                    <a href="#">صفحات</a>
                    <ul class="dropdown">
                      <li><a href="shopping-cart.html">Shopping Cart</a></li>
                      <li><a href="wishlist.html">Wishlist</a></li>
                      <li><a href="checkout.html">Checkout</a></li>
                      <li><a href="my-account.html">My Account</a></li>
                      <li><a href="single-product.html">Product Details</a></li>
                      <li><a href="shop.html">Shop</a></li>
                      <li><a href="shop-full-width.html">Shop Full Width</a></li>
                      <li><a href="shop-list-view.html">Shop List View</a></li>
                      <li><a href="shop-right-sidebar.html">Shop Right Sidebar</a></li>
                      <li><a href="blog-post-img.html">Blog Image Post</a></li>
                      <li><a href="blog-post-video.html">Blog Video Post</a></li>
                      <li><a href="blog-nosidebar.html">Blog no Sidebar</a></li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
            <!--Main Menu Area End-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
/*----------------------------------------*/
/*  1.3 Header Bottom CSS
/*----------------------------------------*/
.main-menu-area .logo-sticky {
  display: none;
}
.main-menu-area {
  background: #363f4d;
  padding: 0 30px;
  border-radius: 30px 30px 0 0;
  position: relative;
}
.main-menu > li {
  display: inline-block;
  position: relative;
}
.main-menu > li > a {
  font-size: 13px;
  text-transform: uppercase;
  color: #fff;
  font-weight: 500;
  display: block;
  padding: 20px 20px;
}
.main-menu > li:first-child > a {
  padding-left: 0;
}
.main-menu > li.active > a,
.main-menu > li:hover > a {
  color: #eb3e32;
}
.main-menu > li.new:before,
.main-menu > li.hot:before {
  position: absolute;
  content: "جدید";
  width: 40px;
  height: 20px;
  background: #68b501;
  top: 5px;
  color: #fff;
  left: -11px;
  line-height: 20px;
  text-align: center;
  text-transform: capitalize;
  font-size: 10px;
  border-radius: 2px;
  z-index: 99;
}
.main-menu > li.hot:before {
  background: #eb3e32;
  content: "ویژه";
}
.main-menu > li.new:after,
.main-menu > li.hot:after {
  position: absolute;
  content: "";
  top: 25px;
  line-height: 1;
  left: 8px;
  border: 1px solid #ddd;
  border-top: 5px solid #68b501;
  border-right: 5px solid transparent;
  border-left: 5px solid transparent;
  border-bottom: 5px solid transparent;
  z-index: 99;
}
.main-menu > li.hot:after {
  border-top: 5px solid #eb3e32;
  border-right: 5px solid transparent;
  border-left: 5px solid transparent;
  border-bottom: 5px solid transparent;
}
.dropdown,
.mega-menu {
  position: absolute;
  width: 250px;
  background: #fff;
  padding: 20px 10px;
  box-shadow: 0 1px 2px 2px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  text-align: right;
  z-index: 999;
  top: 100%;
  right: -29px;
  -webkit-transform: perspective(600px) rotateX(-90deg);
  transform: perspective(600px) rotateX(-90deg);
  -webkit-transform-origin: 0 0 0;
  transform-origin: 0 0 0;
  opacity: 0;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
  visibility: hidden;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}
.main-menu li:last-child ul.dropdown {
  left: 0;
}
.main-menu > li:hover .dropdown,
.main-menu > li:hover .mega-menu {
  -webkit-transform: perspective(600px) rotateX(0deg);
  transform: perspective(600px) rotateX(0deg);
  opacity: 1;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
  visibility: visible;
}
.dropdown > li > a {
  font-size: 13px;
  display: block;
  padding: 10px 25px;
  text-transform: capitalize;
  line-height: 18px;
}
.mega-menu {
  width: 750px;
  padding: 45px 30px;
  right: 0;
}
.mega-menu > li {
  width: 33.33%;
  float: right;
  padding: 0px 15px 20px 15px;
}
.mega-menu > li > ul > li.mega-title > a {
  font-size: 12px;
  text-transform: uppercase;
  color: #363f4d;
  font-weight: 500;
  display: block;
}
.mega-menu > li > ul > li.mega-title > a:hover {
  color: #eb3e32;
}
.mega-menu > li > ul > li > a {
  font-size: 13px;
  text-transform: capitalize;
  display: block;
  padding: 2px 0;
  line-height: 22px;
}
.mega-menu > li.menu-img {
  width: 100%;
  padding-bottom: 0;
}
/*----------------------------------------*/
/*  Sticky Menu CSS
/*----------------------------------------*/
.header-sticky.sticky {
  background: rgba(54, 63, 77, 0.9);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  text-align: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.11);
  z-index: 99999;
  -webkit-animation: 500ms ease-in-out 0s normal none 1 running fadeInDown;
  animation: 500ms ease-in-out 0s normal none 1 running fadeInDown;
}
.header-sticky {
  -webkit-transition: background 0s ease-in-out 0s, margin-top 0s ease-in-out 0s,
    opacity 0s ease-in-out 0s;
  transition: background 0s ease-in-out 0s, margin-top 0s ease-in-out 0s,
    opacity 0s ease-in-out 0s;
}
.logo-sticky {
  display: none;
}
.header-sticky.sticky .logo-sticky {
  float: left;
  margin: 16px 0;
  display: block;
}
.header-sticky.sticky .logo-sticky a {
  vertical-align: middle;
  display: table-cell;
}
.header-sticky.sticky .main-menu-area {
  float: right;
  background: transparent;
}
/*Mobile Menu CSS*/

.mobile-menu {
  background: #363f4d;
  position: relative;
}
.mobile-menu:before {
  position: absolute;
  content: "MENU";
  color: #fff;
  top: 15px;
  left: 10px;
  z-index: 99999999;
  font-size: 18px;
  text-transform: uppercase;
  font-weight: 400;
}
.mean-container .mean-nav ul li a.mean-expand {
  height: 23px;
}
.mean-container .mean-bar {
  background: #363f4d;
  padding: 5px 0;
  border-radius: 10px 10px 0 0;
}
.mean-container .mean-nav {
  background: #f8f8f8;
}
.mean-container a.meanmenu-reveal {
  top: 3px;
}
.mean-container .mean-nav ul li a {
  color: #333;
  border-top: 1px solid #ccc;
}
.mean-container .mean-nav ul li a:hover {
  color: #e03550;
}
.mean-container .mean-nav ul li a.mean-expand:hover {
  background: #f8f8f8;
  color: #e03550;
}
.mean-container .mean-nav ul li {
  border-top: 1px solid #ebebeb;
}
.mean-container .mean-nav ul li li a {
  padding: 10px 10%;
}
</style>
