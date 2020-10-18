<!-- Layout -->
<template>
  <div class="layout">
    <!-- Start Navbar Area -->
    <header id="header" :class="['headroom', {'is-sticky': isSticky}]">
        <div class="startp-nav">
            <div class="container">
                <nav class="navbar navbar-expand-md navbar-light">
                    <router-link class="navbar-brand" to="/">
                        <img src="../assets/logo.png" alt="logo" />
                    </router-link>

                    <b-navbar-toggle target="navbarSupportedContent"></b-navbar-toggle>


                    <b-collapse class="collapse navbar-collapse mean-menu" id="navbarSupportedContent" is-nav>
                        <ul class="navbar-nav nav ml-auto">
                            <li class="nav-item">
                                <a href="/apps" class="nav-link active">
                                    应用 <feather type="chevron-down"></feather>
                                </a>

                                <ul class="dropdown_menu">
                                    <li class="nav-item">
                                        <router-link to="/" class="nav-link">阿里云</router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link to="/developer" class="nav-link">腾讯云</router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link to="/web-hosting" class="nav-link">华为云</router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link to="/repair-center" class="nav-link">Azure</router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link to="/iot" class="nav-link">AWS</router-link>
                                    </li>
                                
                                </ul>
                            </li>

                            <li class="nav-item"><a href="#" class="nav-link">About <feather type="chevron-down"></feather></a>
                                <ul class="dropdown_menu">
                                    <li class="nav-item">
                                        <router-link to="/about-style-one" class="nav-link">About Style 1</router-link>
                                    </li>
                                    
                                    <li class="nav-item">
                                        <router-link to="/about-style-two" class="nav-link">About Style 2</router-link>
                                    </li>
                                    
                                    <li class="nav-item">
                                        <router-link to="/about-style-three" class="nav-link">About Style 3</router-link>
                                    </li>
                                </ul>
                            </li>

                            <li class="nav-item">
                                <router-link to="/shop" class="nav-link">Shop</router-link>
                            </li>
                            
                            <li class="nav-item">
                                <a href="#" class="nav-link">Pages <feather type="chevron-down"></feather></a>
                                <ul class="dropdown_menu">
                                    <li class="nav-item"><a href="#" class="nav-link">Features</a>
                                        <ul class="dropdown_menu">
                                            <li class="nav-item">
                                                <router-link to="/features" class="nav-link">Features</router-link>
                                            </li>

                                            <li class="nav-item">
                                                <router-link to="/feature-details" class="nav-link">Features Details</router-link>
                                            </li>
                                        </ul>
                                    </li>

                                    <li class="nav-item"><a href="#" class="nav-link">Services</a>
                                        <ul class="dropdown_menu">
                                            <li class="nav-item">
                                                <router-link to="/service-style-one" class="nav-link">Services Style 1</router-link>
                                            </li>

                                            <li class="nav-item">
                                                <router-link to="/service-style-two" class="nav-link">Services Style 2</router-link>
                                            </li>

                                            <li class="nav-item">
                                                <router-link to="/service-style-three" class="nav-link">Services Style 3</router-link>
                                            </li>
                                            
                                            <li class="nav-item">
                                                <router-link to="/service-style-four" class="nav-link">Services Style 4</router-link>
                                            </li>
                                            
                                            <li class="nav-item">
                                                <router-link to="/service-style-five" class="nav-link">Services Style 5</router-link>
                                            </li>

                                            <li class="nav-item">
                                                <router-link to="/service-details" class="nav-link">Services Details</router-link>
                                            </li>
                                        </ul>
                                    </li>
                                    
                                    <li class="nav-item"><a href="#" class="nav-link">Project</a>
                                        <ul class="dropdown_menu">
                                            <li class="nav-item">
                                                <router-link to="/project-style-one" class="nav-link">Project Style 1</router-link>
                                            </li>

                                            <li class="nav-item">
                                                <router-link to="/project-style-two" class="nav-link">Project Style 2</router-link>
                                            </li>
                                            
                                            <li class="nav-item">
                                                <router-link to="/project-details" class="nav-link">Project Details</router-link>
                                            </li>
                                        </ul>
                                    </li>

                                    <li class="nav-item">
                                        <router-link to="/team" class="nav-link">Team</router-link>
                                    </li>

                                    <li class="nav-item">
                                        <router-link to="/pricing" class="nav-link">Pricing</router-link>
                                    </li>
                                    
                                    <li class="nav-item">
                                        <router-link to="/faq" class="nav-link">FAQ</router-link>
                                    </li>

                                    <li class="nav-item">
                                        <router-link to="/coming-soon" class="nav-link">Coming Soon</router-link>
                                    </li>

                                    <li class="nav-item">
                                        <router-link to="/not-found" class="nav-link">404 Error</router-link>
                                    </li>
                                </ul>
                            </li>
                            

                            <li class="nav-item"><a href="#" class="nav-link">Blog <feather type="chevron-down"></feather></a>
                                <ul class="dropdown_menu">
                                    <li class="nav-item">
                                        <router-link to="/blog-grid" class="nav-link">Blog Grid</router-link>
                                    </li>

                                    <li class="nav-item">
                                        <router-link to="/blog-right-sidebar" class="nav-link">Blog Right Sidebar</router-link>
                                    </li>

                                    <li class="nav-item">
                                        <router-link to="/blog-grid-two" class="nav-link">Blog Grid 2</router-link>
                                    </li>

                                    <li class="nav-item">
                                        <router-link to="/blog-right-sidebar-two" class="nav-link">Blog Right Sidebar 2</router-link>
                                    </li>

                                    <li class="nav-item">
                                        <router-link to="/blog-grid-three" class="nav-link">Blog Grid 3</router-link>
                                    </li>

                                    <li class="nav-item">
                                        <router-link to="/blog-right-sidebar-three" class="nav-link">Blog Right Sidebar 3</router-link>
                                    </li>
                                    
                                    <li class="nav-item">
                                        <router-link to="/blog-details" class="nav-link">Blog Details</router-link>
                                    </li>
                                </ul>
                            </li>

                            <li class="nav-item">
                                <router-link to="/contact" class="nav-link">Contact</router-link>
                            </li>
                        </ul>
                    </b-collapse>

                    <div class="others-option">
                        <router-link to="/cart" class="cart-wrapper-btn">
                            <feather type="shopping-cart"></feather>
                            <span>标签</span>
                        </router-link>
                        <a href="#" class="btn btn-light">Support</a>
                        <a href="#" class="btn btn-primary">Login</a>
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
                            <li><a href="#">关于我们</a></li>
                            <li><a href="#">服务</a></li>
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
}
</script>