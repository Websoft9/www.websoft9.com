<!--
 * @FileDescription: 通用头部组件
 * @Author: Websoft9
 * @Date: 2021/10/20
 * @LastEditors: wuhong
 * @LastEditTime: 2021/10/20
-->
<template>
  <div class="main-header header-fixed-default" id="home-header">
    <b-navbar
      class="
        navbar
        container
        w-100
        navbar-expand-lg navbar-transparent
        bg-transparent
      "
      toggleable="lg"
      type=""
      variant=""
    >
      <b-navbar-brand href="#">
        <div class="logo">
          <img src="@/assets/images/landing/lOGO_d/websoft9_logo.png" alt="" />
        </div>
      </b-navbar-brand>

      <b-navbar-toggle
        target="nav-collapse"
        class="eva eva-menu-outline text-18 text-white"
      >
      </b-navbar-toggle>

      <!-- <div class="menu-toggle navbar-toggler" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <div></div>
                    <div></div>
                    <div></div>
                </div> -->

      <b-collapse id="nav-collapse" is-nav>
        <div style="margin: auto"></div>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="header-part-right">
          <!-- <b-nav-item href="#intro-wrap" v-smooth-scroll class="m-2"
            >Home <span class="sr-only">(current)</span></b-nav-item
          > -->

          <li class="nav-item">
            <a href="#intro-wrap" v-smooth-scroll class="m-2"
              >首页 <span class="sr-only">(current)</span></a
            >
          </li>
          <li class="nav-item">
            <a href="#features-wrap" class="m-2" v-smooth-scroll>软件</a>
          </li>
          <li class="nav-item">
            <a href="#services-wrap" class="m-2" v-smooth-scroll>服务</a>
          </li>
          <li class="nav-item">
            <a href="#services-wrap" class="m-2" v-smooth-scroll>用户</a>
          </li>
          <li class="nav-item">
            <a href="#services-wrap" class="m-2" v-smooth-scroll>语言</a>
          </li>
          <li class="nav-item">
            <a href="#services-wrap" class="m-2" v-smooth-scroll>支持</a>
          </li>
          <li class="nav-item">
            <a href="#services-wrap" class="m-2" v-smooth-scroll>收藏</a>
          </li>

          <!--&lt;!&ndash; drop down menu start &ndash;&gt;-->
          <!--<li class="nav-item b-nav-dropdown dropdown">-->
          <!--<a href="#" target="_self" class="nav-link m-2 m-2">-->
          <!--<span>Sections</span>-->
          <!--</a>-->

          <!--&lt;!&ndash; First  Drop Down &ndash;&gt;-->
          <!--<ul>-->
          <!--<li class="nav-item">-->
          <!--<a href="#teams-wrap" v-smooth-scroll class=" menu-item"-->
          <!--&gt;Team</a-->
          <!--&gt;-->
          <!--</li>-->
          <!--<li class="nav-item">-->
          <!--<a href="#testimonials-wrap" v-smooth-scroll class="  menu-item"-->
          <!--&gt;Testimonial</a-->
          <!--&gt;-->
          <!--</li>-->

          <!--<li>-->
          <!--<a>Second Level</a>-->
          <!--&lt;!&ndash; Second  Drop Down &ndash;&gt;-->
          <!--<ul>-->
          <!--<li class="nav-item">-->
          <!--<a href="#faqs-wrap" v-smooth-scroll class="  menu-item"-->
          <!--&gt;Faqs</a-->
          <!--&gt;-->
          <!--</li>-->
          <!--<li class="nav-item">-->
          <!--<a-->
          <!--href="#extra-feature-wrap"-->
          <!--v-smooth-scroll-->
          <!--class="  menu-item"-->
          <!--&gt;Extra features</a-->
          <!--&gt;-->
          <!--</li>-->
          <!--</ul>-->
          <!--</li>-->
          <!--</ul>-->
          <!--</li>-->
          <!--&lt;!&ndash; drop down menu end &ndash;&gt;-->
          <!--<li class="nav-item">-->
          <!--<a href="#pricing-wrap" class="m-2" v-smooth-scroll>Pricing</a>-->
          <!--</li>-->
          <!--<li class="nav-item">-->
          <!--<a href="#news-wrap" class="m-2" v-smooth-scroll>News</a>-->
          <!--</li>-->

          <!--<li class="nav-item">-->
          <!--<a href="#contacts-wrap" class="m-2" v-smooth-scroll>Contact Us</a>-->
          <!--</li>-->
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      link: {
        hash: ["#testimonials-wrap"],
      },
    };
  },
  methods: {
    handleScroll(event) {
      var scroll = window.pageYOffset;
      if (scroll >= 80) {
        document.querySelector(".main-header").classList.add("header-fixed");
      } else {
        document.querySelector(".main-header").classList.remove("header-fixed");
      }
    },
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style>
</style>
