<!-- Layout -->
<template>
  <div class="layout">
  
    <!-- Start Navbar Area -->
    <header id="header" :class="['headroom', {'is-sticky': isSticky}]">
        <div class="startp-nav">
            <div class="container">
                <nav class="navbar navbar-expand-md navbar-light">
                    <router-link class="navbar-brand" to="/cn">
                        <img src="../assets/logo.png" alt="logo" />
                    </router-link>

                    <b-navbar-toggle target="navbarSupportedContent"></b-navbar-toggle>


                    <b-collapse class="collapse navbar-collapse mean-menu" id="navbarSupportedContent" is-nav>
                        <ul class="navbar-nav nav ml-auto">
                            <li class="nav-item">
                                <a href="#" class="nav-link active">
                                    Product
                                </a>


                                <ul class="dropdown_menu">
                                    <li class="nav-item">
                                        <a href="https://aws.amazon.com/marketplace/seller-profile?id=c639a579-182c-4d30-8578-4d4d89fba658" class="nav-link" target="_blank">On AWS</a>
                                    </li>

                                    <li class="nav-item">
                                        <a href="https://azuremarketplace.microsoft.com/en-us/marketplace/apps?search=websoft9&page=1" class="nav-link" target="_blank">On Azure</a>
                                    </li>

                                    <li class="nav-item">
                                        <a href="https://shop658hlt17.market.aliyun.com/" class="nav-link" target="_blank">On AlibabaCloud</a>
                                    </li>

                                    <li class="nav-item">
                                        <a href="https://marketplace-intl.huaweicloud.com/seller/a0d01460031d46639391c78a61de9a0f" class="nav-link" target="_blank">On HUAWEI CLOUD</a>
                                    </li>
                                </ul>
                            </li>
                            
                            <li class="nav-item">
                                <router-link to="/en/pricing" class="nav-link">Pricing</router-link>
                            </li>

                            <li class="nav-item"><a href="/en/support" class="nav-link">Support</a>
                                <ul class="dropdown_menu">
                                    <li class="nav-item">
                                        <a href="https://support.websoft9.com/alldocs.html" target="_blank" class="nav-link">Documentation</a>
                                    </li>

                                    <li class="nav-item">
                                        <a href="https://support.websoft9.com/docs/faq/" target="_blank" class="nav-link">FAQ</a>
                                    </li>
                                    <li class="nav-item">
                                        <router-link to="/en/ticket" class="nav-link">7×24 Ticket</router-link>
                                    </li>

                                    <li class="nav-item">
                                        <a href="https://support.websoft9.com/contact.html" target="_blank" class="nav-link">Help Desk</a>
                                    </li>

                                </ul>
                            </li>


                            <li class="nav-item">
                                <router-link to="/en/partner" class="nav-link">Partner</router-link>
                            </li>

                            <li class="nav-item">
                                <a href="/en/about" class="nav-link">Company</a>
                                <ul class="dropdown_menu">

                                    <li class="nav-item">
                                        <router-link to="/en/about" class="nav-link">About Us</router-link>
                                    </li>

                                    <li class="nav-item">
                                        <router-link to="/en/cases" class="nav-link">Success Stories</router-link>
                                    </li>

                                    <li class="nav-item">
                                        <router-link to="/en/partner" class="nav-link">Partner</router-link>
                                    </li>

                                    <li class="nav-item">
                                        <a href="/en/news" class="nav-link">News</a>
                                    </li>
                                    
                                    <li class="nav-item">
                                        <a href="https://blog.websoft9.com" target="_blank" class="nav-link">Blog</a>
                                    </li>
                                    
                                    <li class="nav-item">
                                        <router-link to="/en/job" class="nav-link">Career</router-link>
                                    </li>

                                    <li class="nav-item">
                                        <a href="https://support.websoft9.com/docs/legal" target="_blank" class="nav-link">Legal</a>
                                    </li>

                                    <li class="nav-item">
                                        <router-link to="/en/contact" class="nav-link">Contact</router-link>
                                    </li>

                                </ul>
                            </li>
                        </ul>
                    </b-collapse>

                    <div class="others-option">
                        <a href="https://github.com/websoft9" target="_blank" class="btn btn-light">Github</a>
                        <a href="/cn" class="btn btn-primary">简体中文</a>
                    </div>
                </nav>
            </div> 
        </div>
    </header>
    <!-- End Navbar Area -->

    <slot></slot>

    <!-- Start Footer Area -->
    <footer class="footer-area bg-f7fafd">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="single-footer-widget">
                        <div class="logo">
                            <a href="/">
                                <img src="../assets/logo.png" alt="logo" />
                            </a>
                        </div>
                        <p>Websoft9 is an open source software company who classify and integrate 200+ cloud native applications. We have publish our solution 
                        to major Cloud MarketPlace includes AWS, Azure, AlibabaCloud, HUAWEICLOUD, The application reaches 30 million cloud enterprise customers.</p>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="single-footer-widget pl-5">
                        <h3>Product</h3>
                        <ul class="list">
                            <li><a href="/en/services">Product</a></li>
                            <li><a href="/en/services">Service</a></li>
                            <li><a href="/en/services">Solution</a></li>
                            <li><a href="/en/services">Industry</a></li>
                            <li><a href="/en/services">Feature</a></li>
                        </ul>
                    </div>
                </div>

                <div class="col-lg-2 col-md-6 col-sm-6">
                    <div class="single-footer-widget">
                        <h3>Support</h3>
                        <ul class="list">
                            <li><a href="https://support.websoft9.com/alldocs.html" target="_blank">Documentation</a></li>
                            <li><a href="https://support.websoft9.com/docs/faq" target="_blank">FAQ</a></li>
                            <li><a href="/en/ticket" target="_blank">7×24 Ticket</a></li>
                            <li><a href="/en/contact" target="_blank">Help Desk</a></li>

                        </ul>
                    </div>
                </div>

                <div class="col-lg-2 col-md-6 col-sm-6">
                    <div class="single-footer-widget">
                        <h3>Resource</h3>
                        <ul class="list">
                            <li><a href="/en/cases" target="_blank">Success stories</a></li>
                            <li><a href="https://support.websoft9.com/docs/faq/tech-tools.html" target="_blank">Tools</a></li>
                            <li><a href="https://github.com/websoft9" target="_blank">Github</a></li>
                            <li><a href="#" target="_blank"></a>Develop</li>
                            <li><a href="/en/donate">Donate</a></li>

                        </ul>
                    </div>
                </div>

                                <div class="col-lg-2 col-md-6 col-sm-6">
                    <div class="single-footer-widget">
                        <h3>About</h3>
                        <ul class="list">
                            <li><a href="/en/about">Company</a></li>
                            <li><a href="https://blog.websoft9.com/" target="_blank">Blog</a></li>
                            <li><a href="/en/partner">Partner</a></li>
                            <li><a href="https://support.websoft9.com/docs/legal" target="_blank">Legal</a></li>
                            <li><a href="/en/job">Career</a></li>
                            <li><a href="/en/contact">Contact Us</a></li>
                        </ul>
                    </div>
                </div>

                <div class="col-lg-12 col-md-12">
                    <div class="copyright-area">
                        <p>©2014-2020 Websoft9 Inc.</p>
                    </div>
                </div>
            </div>
        </div>

        <img src="../assets/img/map.png" class="map" alt="map">

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

<script>
export default {
    name: 'Header',
    data(){
        return {
            isSticky: false
        }
    },

    mounted() {
        const that = this;
        window.addEventListener('scroll', () => {
            let scrollPos = window.scrollY;
            // eslint-disable-next-line no-console
            if(scrollPos >= 100){
                that.isSticky = true;
            } else {
                that.isSticky = false;
            }
        })
    },

    computed: {
        shoppingCart(){
            return this.$store.state.cart;
        }
    }
};


</script>