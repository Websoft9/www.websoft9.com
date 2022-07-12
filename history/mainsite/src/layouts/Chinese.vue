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
                                <a href="/cn/product" class="nav-link">
                                    产品
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
                                <router-link to="/cn/services" class="nav-link">服务</router-link>
                            </li>

                            <li class="nav-item">
                                <router-link to="/cn/pricing" class="nav-link">价格</router-link>
                            </li>


                            <li class="nav-item"><a href="/cn/support" class="nav-link">文档与支持</a>
                                <ul class="dropdown_menu">
                                    <li class="nav-item">
                                        <a href="https://support.websoft9.com/zh/alldocs.html" target="_blank" class="nav-link">文档</a>
                                    </li>

                                    <li class="nav-item">
                                        <a href="https://support.websoft9.com/docs/faq/zh" target="_blank" class="nav-link">FAQ</a>
                                    </li>
                                    <li class="nav-item">
                                        <router-link to="/cn/ticket" class="nav-link">7×24 工单</router-link>
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
                                <a href="/cn/about" class="nav-link">关于</a>
                                <ul class="dropdown_menu">

                                    <li class="nav-item">
                                        <router-link to="/cn/about" class="nav-link">公司介绍</router-link>
                                    </li>

                                    <li class="nav-item">
                                        <router-link to="/cn/cases" class="nav-link">客户案例</router-link>
                                    </li>

                                    <li class="nav-item">
                                        <router-link to="/cn/partner" class="nav-link">合作伙伴</router-link>
                                    </li>

                                    <li class="nav-item">
                                        <router-link to="/cn/news" class="nav-link">公司新闻</router-link>
                                    </li>
                                    
                                    <li class="nav-item">
                                        <a href="https://blog.websoft9.com" target="_blank" class="nav-link">博客</a>
                                    </li>
                                    
                                    <li class="nav-item">
                                        <router-link to="/cn/job" class="nav-link">招聘</router-link>
                                    </li>

                                    <li class="nav-item">
                                        <router-link to="/cn/trust" class="nav-link">社会责任</router-link>
                                    </li>
                                    
                                    <li class="nav-item">
                                        <a href="https://support.websoft9.com/docs/legal/zh/" target="_blank" class="nav-link">法律条款</a>
                                    </li>

                                    <li class="nav-item">
                                        <router-link to="/cn/contact" class="nav-link">联系我们</router-link>
                                    </li>

                                </ul>
                            </li>
                        </ul>
                    </b-collapse>

                    <div class="others-option">
                        <a href="https://github.com/websoft9" target="_blank" class="btn btn-light">Github</a>
                        <a href="/en" class="btn btn-primary">English</a>
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
                        <p>网久软件（英文名称：Websoft9）是一家开源软件公司，优选和集成数百个热门的云原生应用。目前与全球主流云平台（Azure，AWS，阿里云，腾讯云，华为云等）合作，应用直达 3000 万云端企业客户。</p>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="single-footer-widget pl-5">
                        <h3>产品与服务</h3>
                        <ul class="list">
                            <li><a href="/cn/services">应用</a></li>
                            <li><a href="/cn/services">服务</a></li>
                            <li><a href="/cn/services">解决方案</a></li>
                            <li><a href="/cn/services">行业</a></li>
                            <li><a href="/cn/services">特征</a></li>
                        </ul>
                    </div>
                </div>

                <div class="col-lg-2 col-md-6 col-sm-6">
                    <div class="single-footer-widget">
                        <h3>支持</h3>
                        <ul class="list">
                            <li><a href="https://support.websoft9.com/zh/alldocs.html" target="_blank">文档</a></li>
                            <li><a href="https://support.websoft9.com/docs/faq/zh" target="_blank">FAQ</a></li>
                            <li><a href="/cn/ticket" target="_blank">工单</a></li>
                            <li><a href="https://share.hsforms.com/1GJv3at4TRpOXm_YW_76OVg568t5" target="_blank">开具发票</a></li>
                            <li><a href="/cn/contact" target="_blank">人工客服</a></li>

                        </ul>
                    </div>
                </div>

                <div class="col-lg-2 col-md-6 col-sm-6">
                    <div class="single-footer-widget">
                        <h3>资源</h3>
                        <ul class="list">
                            <li><a href="/cn/cases" target="_blank">客户案例</a></li>
                            <li><a href="https://support.websoft9.com/docs/faq/zh/tech-tools.html" target="_blank">小工具</a></li>
                            <li><a href="https://github.com/websoft9" target="_blank">Github</a></li>
                            <li><a href="#" target="_blank">视频学习</a></li>
                            <li><a href="#" target="_blank">直播课堂</a></li>
                            <li><a href="#" target="_blank">中小企业上云</a></li>
                            <li><a href="#" target="_blank">开发者</a></li>
                            <li><a href="https://blog.websoft9.com/1111-buy-20-off-all-in-websoft9/" target="_blank">优惠折扣</a></li>
                            <li><a href="#" target="_blank">创客赋能</a></li>
                            <li><a href="/cn/distribution">全球分发</a></li>
                            <li><a href="/cn/donate">捐赠开源</a></li>

                        </ul>
                    </div>
                </div>

                                <div class="col-lg-2 col-md-6 col-sm-6">
                    <div class="single-footer-widget">
                        <h3>关于我们</h3>
                        <ul class="list">
                            <li><a href="/cn/about">公司介绍</a></li>
                            <li><a href="https://blog.websoft9.com/" target="_blank">新闻博客</a></li>
                            <li><a href="/cn/partner">合作伙伴</a></li>
                            <li><a href="https://support.websoft9.com/docs/legal/zh/" target="_blank">法律条款</a></li>
                            <li><a href="/cn/job">招聘</a></li>
                            <li><a href="/cn/contact">联系我们</a></li>
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