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
                                    应用 <feather type="chevron-down"></feather>
                                </a>

                                <ul class="dropdown_menu">
                                    <li class="nav-item">
                                        <a href="https://shop658hlt17.market.aliyun.com/" class="nav-link" target="_blank">阿里云</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="https://market.cloud.tencent.com/stores/1252192180" class="nav-link" target="_blank">腾讯云</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="https://market.huaweicloud.com/seller/e57458aa054b430fb2f82a066105f986" class="nav-link" target="_blank">华为云</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="https://azuremarketplace.microsoft.com/en-us/marketplace/apps?search=websoft9&page=1" class="nav-link" target="_blank">Azure</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="https://aws.amazon.com/marketplace/seller-profile?id=c639a579-182c-4d30-8578-4d4d89fba658" class="nav-link" target="_blank">AWS</a>
                                    </li>
                                
                                </ul>
                            </li>
                            
                            <li class="nav-item">
                                <router-link to="/cn/pricing" class="nav-link">价格</router-link>
                            </li>

                            <li class="nav-item">
                                <router-link to="/cn/services" class="nav-link">服务市场</router-link>
                            </li>

                            <li class="nav-item"><a href="#" class="nav-link">文档与支持<feather type="chevron-down"></feather></a>
                                <ul class="dropdown_menu">
                                    <li class="nav-item">
                                        <a href="https://support.websoft9.com/zh/alldocs.html" target="_blank" class="nav-link">文档</a>
                                    </li>

                                    <li class="nav-item">
                                        <a href="https://support.websoft9.com/docs/faq/zh" target="_blank" class="nav-link">FAQ</a>
                                    </li>

                                    <li class="nav-item">
                                        <a href="https://desk.zoho.com.cn/portal/websoft9/newticket" target="_blank" class="nav-link">7×24 工单</a>
                                    </li>

                                    <li class="nav-item">
                                        <a href="https://support.websoft9.com/zh/contact.html" target="_blank" class="nav-link">人工支持</a>
                                    </li>

                                    <li class="nav-item">
                                        <a href="https://support.websoft9.com/zh/terms.html" target="_blank" class="nav-link">支持须知</a>
                                    </li>

                                </ul>
                            </li>


                            <li class="nav-item">
                                <router-link to="/cn/partner" class="nav-link">伙伴</router-link>
                            </li>

                            <li class="nav-item">
                                <a href="https://blog.websoft9.com" target="_blank" class="nav-link">博客</a>
                            </li>

                            <li class="nav-item">
                                <a href="#" class="nav-link">关于<feather type="chevron-down"></feather></a>
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
                        </ul>
                    </b-collapse>

                    <div class="others-option">
                        <a href="https://github.com/websoft9" target="_blank" class="btn btn-light">Github</a>
                        <a href="#" class="btn btn-primary">登录</a>
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
                        <p>Websoft9 是一家基于开源的软件公司，面向数百个云端业务场景提供开源解决方案。并自动化部署技术，分发到全球主流云市场，服务全球3000万云端企业客户。</p>
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
                        <h3>地址</h3>
                        
                        <ul class="footer-contact-info">
                            <li><feather type="map-pin"></feather>长沙市岳麓区潇湘中路283号岳麓科创港1035室，中国.湖南</li>
                            <li><feather type="mail"></feather> Email: <a href="#">help@websoft9.com</a></li>
                            <li><feather type="phone-call"></feather> 电话: <a href="#">0731-89572759</a></li>
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
                        <p>©2014-2020 长沙网久软件有限公司 备案：<a href="http://beian.miit.gov.cn/" target="_blank">湘ICP备16009117号</a></p>
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