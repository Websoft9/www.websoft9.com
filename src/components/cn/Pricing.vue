<template>
    <div>
        <!-- Start Page Title -->
        <div class="page-title-area">
            <div class="d-table">
                <div class="d-table-cell">
                    <div class="container">
                        <h2>价格</h2>
                    </div>
                </div>
			</div>
        </div>
        <!-- End Page Title -->

        <!-- Start Pricing Area -->
		<section class="pricing-area ptb-80 bg-f9f6f6">
			<div class="container">
				<div class="section-title">
					<h2>定价计划</h2>
					<div class="bar"></div>
					<p>我们的所有定价计划基于“仅人工服务需要成本”的原则，按需订阅，最大程度帮您节省费用的同时获得企业级支持服务。</p>
				</div>

				<div class="row">
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="pricing-table">
                            <div class="pricing-header">
                                <h3>免费版</h3>
                            </div>
                            
                            <div class="price">
                                <span>0 元</span>
                            </div>
                            
                            <div class="pricing-features">
                                <ul>
                                    <li class="active">100% 开源</li>
                                    <li class="active">不限用户</li>
                                    <li class="active">文档</li>
                                    <li class="active">FAQ</li>
                                    <li class="active">通过 Github 提交故障</li>
                                    <li class="active">按需付费支持</li>
                                </ul>
                            </div>
                            
                            <div class="pricing-footer">
                                <a href="#" class="btn btn-primary">自助部署</a>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="pricing-table active-plan">
                            <div class="pricing-header">
                                <h3>标准服务版</h3>
                            </div>
                            
                            <div class="price">
                                <span><sup>最低</sup>10元 <span>/月</span></span>
                            </div>
                            
                            <div class="pricing-features">
                                <ul>
                                    <li class="active">【免费版】所有功能 +</li>
                                    <li class="active">订阅收费，随时取消</li>
                                    <li class="active">7×24 工单、邮件支持</li>
                                    <li class="active">7×8 电话客服</li>
                                    <li class="active">7×5 QQ/微信/旺旺、网页客服</li>
                                    <li class="active">建立客户档案</li>
                                    <li class="active">免费处理非人为故障</li>
                                    <li class="active">优先处理按需付费支持</li>
                                </ul>
                            </div>
                            
                            <div class="pricing-footer">
                                <a href="#" class="btn btn-primary">选择计划</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
                        <div class="pricing-table">
                            <div class="pricing-header">
                                <h3>专业服务版</h3>
                            </div>
                            
                            <div class="price">
                                <span><sup>最低</sup>60元 <span>/月</span></span>
                            </div>
                            
                            <div class="pricing-features">
                                <ul>
                                    <li class="active">【标准版】所有功能 +</li>
                                    <li class="active">一对一客服经理</li>
                                    <li class="active">HTTPS, SMTP 设置</li>
                                    <li class="active">备份与升级指导</li>
                                     <li class="active">高可用性指导</li>
                                     <li class="active">安全规划</li>
                                </ul>
                            </div>
                            
                            <div class="pricing-footer">
                                <a href="#" class="btn btn-primary">选择计划</a>
                            </div>
                        </div>
                    </div>
				</div>
			</div>
		</section>
		<!-- End Pricing Area -->

		<section class="faq-area ptb-80">
		  <div class="container">
            <div class="section-title">
                <h3>常见问题</h3>
            </div>
           <div class="faq-accordion">
             <VueFaqAccordion 
             :items="myItems"
             />
           </div>
          </div>
        </section>
    </div>
</template>

<script>
import VueFaqAccordion from 'vue-faq-accordion';
export default {
    name: 'Pricing',
    components: {
        VueFaqAccordion
    },
    data () {
        return {
            myItems: [
                                
                {
                    title: '使用付费版本，技术支持还需付费吗？',
                    value: '使用付费版本，我们提供对应的免费技术支持服务，但技术支持有一定的范围，具体参考《须知》</a>'
                },

                {
                    title: '免费版如何部署？',
                    value: '我们已经将所有应用的代码开源到 Github 上，您只需根据项目说明，运行一条自动化安装命令即可部署。'
                },
                {
                    title: '免费版如何获取人工支持？',
                    value: '免费版需要与我们客服人员联系，购买按需的技术支持服务'
                },
                {
                    title: '你们是如何实现订阅收费的？',
                    value: '我们将应用以镜像的方式发布到主流公有云中，用户在公有云上订阅后安装到自己的服务器即可。'
                },
                {
                    title: '已有服务器，可以订阅镜像吗？',
                    value: '可以。通过云控制台，将当前服务器的镜像更换成我们的应用镜像即可',
                },
                {
                    title: '除了按月付费，还有其他付费方式吗？',
                    value: '有，我们提供：按小时（按量）、包年、包月三种计费方式。'
                },
                {
                    title: '不想使用了，可以退订吗?',
                    value: '按量付费可以随时退订，包年订阅根据实际情况协商退订。'
                },
                {
                    title: '你们目前在哪些云上提供了应用?',
                    value: '阿里云，腾讯云，华为云，Azure，AWS 等'
                },
                {
                    title: '你们提供合同和发票吗？',
                    value: '提供，即使您按量付费（例如：使用一小时费用 0.1 元）我们也有义务为您开具发票。'
                },

                {
                    title: '付款方式有哪些？',
                    value: '主要通过云平台的云市场付费。'
                },

                {
                    title: '你们提供服务器吗？',
                    value: '我们不提供服务器，服务器是云厂商提供的，并归属在用户自己的云账号中。'
                }
            ]
        }
    }
}
</script>