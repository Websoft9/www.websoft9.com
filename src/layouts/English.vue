<!-- Layout -->
<template>
  <div class="layout">
    <header class="header">
      <g-link to="/"><g-image src="~/assets/logo.png" to="/" width="150"/></g-link>
      <nav class="nav">
        <g-link class="nav__link" to="/cn/apps/">应用</g-link>
        <g-link class="nav__link" to="/cn/apps/">价格</g-link>
        <g-link class="nav__link" to="https://support.websoft9.com">支持</g-link>
        <g-link class="nav__link" to="https://blog.websoft9.com">博客</g-link>
        <g-link class="nav__link" to="/cn/apps/">伙伴</g-link>
        <g-link class="nav__link" to="/cn/about/">资源</g-link>
        <g-link class="nav__link" to="/cn/about/">关于</g-link>
        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">简体中文</b-dropdown-item>
          <b-dropdown-item href="#">英文</b-dropdown-item>
        </b-nav-item-dropdown>
      </nav>
    </header>

    <slot></slot>

    <!-- Start Footer Area -->
    <footer class="footer-area bg-f7fafd">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="single-footer-widget">
                        <div class="logo">
                            <a href="/">
                                <img src="../assets/img/logo.png" alt="logo" />
                            </a>
                        </div>
                        <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="single-footer-widget pl-5">
                        <h3>Company</h3>
                        <ul class="list">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Features</a></li>
                            <li><a href="#">Our Pricing</a></li>
                            <li><a href="#">Latest News</a></li>
                        </ul>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="single-footer-widget">
                        <h3>Support</h3>
                        <ul class="list">
                            <li><a href="#">FAQ's</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms & Condition</a></li>
                            <li><a href="#">Community</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="single-footer-widget">
                        <h3>Address</h3>
                        
                        <ul class="footer-contact-info">
                            <li><feather type="map-pin"></feather> 27 Division St, New York, NY 10002, USA</li>
                            <li><feather type="mail"></feather> Email: <a href="#">startp@gmail.com</a></li>
                            <li><feather type="phone-call"></feather> Phone: <a href="#">+ (321) 984 754</a></li>
                        </ul>
                        <ul class="social-links">
                            <li><a href="#" class="facebook"><feather type="facebook"></feather></a></li>
                            <li><a href="#" class="twitter"><feather type="twitter"></feather></a></li>
                            <li><a href="#" class="instagram"><feather type="instagram"></feather></a></li>
                            <li><a href="#" class="linkedin"><feather type="linkedin"></feather></a></li>
                        </ul>
                    </div>
                </div>

                <div class="col-lg-12 col-md-12">
                    <div class="copyright-area">
                        <p>Copyright &copy;2020 Pasona. All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </div>

        <img src="../assets/img/map.png" class="map" alt="map">
        <div class="shape1"><img src="../assets/img/shape1.png" alt="shape"></div>
        <div class="shape8 rotateme"><img src="../assets/img/shape2.svg" alt="shape"></div>
        <!-- <div class="go-top"><feather type="arrow-up"></feather></div> -->

        <back-to-top bottom="50px" right="50px">
            <div class="go-top"><feather type="arrow-up"></feather></div>
        </back-to-top>
    </footer>
    <!-- End Footer Area -->
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}
.layout {
  max-width: 1280px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}
.nav__link {
  margin-left: 20px;
}
</style>
