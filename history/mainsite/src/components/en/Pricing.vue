<template>
    <div>
        <!-- Start Page Title -->
        <div class="page-title-area">
            <div class="d-table">
                <div class="d-table-cell">
                    <div class="container">
                        <h2>Pricing</h2>
                    </div>
                </div>
			</div>
        </div>
        <!-- End Page Title -->

        <!-- Start Pricing Area -->
		<section class="pricing-area ptb-80 bg-f9f6f6">
			<div class="container">
				<div class="section-title">
					<h3>Subscription plan</h3>
					<div class="bar"></div>
					<p>Payment on demand, free Enterprise Support for your business</p>
				</div>

				<div class="row">
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="pricing-table">
                            <div class="pricing-header">
                                <h3>Free</h3>
                            </div>
                            
                            <div class="price">
                                <span>$0</span>
                            </div>
                            
                            <div class="pricing-features">
                                <ul>
                                    <li class="active">100% open source</li>
                                    <li class="active">Unlimited users</li>
                                    <li class="active">Documentation</li>
                                    <li class="active">FAQ</li>
                                    <li class="active">Get support from Github issues</li>
                                    <li class="active">Get support on demand</li>
                                </ul>
                            </div>
                            
                            <div class="pricing-footer">
                                <a href="#" class="btn btn-primary">Use it</a>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="pricing-table active-plan">
                            <div class="pricing-header">
                                <h3>Standard</h3>
                            </div>
                            
                            <div class="price">
                                <span><sup>Mini </sup>0.03/hour</span>
                            </div>
                            
                            <div class="pricing-features">
                                <ul>
                                    <li class="active">Includes all【Free】+</li>
                                    <li class="active">Subscription fee, cancel anytime</li>
                                    <li class="active">7×24 Ticket and Email support</li>
                                    <li class="active">7×8 Telephone support</li>
                                    <li class="active">7×5 IM support</li>
                                    <li class="active">VIP archives</li>
                                    <li class="active">Free for system issues</li>
                                    <li class="active">Priority for paid service</li>
                                </ul>
                            </div>
                            
                            <div class="pricing-footer">
                                <a href="#" class="btn btn-primary">Subscription</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
                        <div class="pricing-table">
                            <div class="pricing-header">
                                <h3>Professional</h3>
                            </div>
                            
                            <div class="price">
                                <span><sup>Mini </sup>0.06/hour</span>
                            </div>
                            
                            <div class="pricing-features">
                                <ul>
                                    <li class="active">Includes all【Standard】+</li>
                                    <li class="active">One-to-one support</li>
                                    <li class="active">Free for HTTPS, SMTP settings</li>
                                    <li class="active">Guide for Backup and upgrade</li>
                                     <li class="active">Guide for HA</li>
                                     <li class="active">Guide for security</li>
                                </ul>
                            </div>
                            
                            <div class="pricing-footer">
                                <a href="#" class="btn btn-primary">Subscription</a>
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
                <h3>FAQs</h3>
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
                    title: 'Do I still need to pay for technical support with the paid version?',
                    value: 'You can get most of free support</a>'
                },

                {
                    title: 'How can I deploy free version?',
                    value: 'Just need one command, get it from: https://github.com/websoft9'
                },
                {
                    title: 'How to get manual support for the free version?',
                    value: 'Please contact our customer service staff to purchase on-demand technical support services'
                },
                {
                    title: 'How do you implement subscription fees?',
                    value: 'We publish the application to MarketPlace, and users can install it on their own Cloud Server.'
                },
                {
                    title: 'Apart from monthly payment, are there other payment methods?',
                    value: 'Yes, you can use it by on Demand, by Month, By year'
                },
                {
                    title: 'I do not want to use it, can I unsubscribe?',
                    value: 'Pay-as-you-go can unsubscribe at any time, and the annual subscription is negotiated and unsubscribed according to the actual situation.'
                },
                {
                    title: 'Which clouds do you currently provide applications on?',
                    value: 'Azure, AWS, AlibabaCloud, HUAWEI CLOUD'
                },
                {
                    title: 'Do you provide EULA and invoices?',
                    value: 'Yes, you can download them from Cloud Console'
                },

                {
                    title: 'What are the payment methods?',
                    value: 'You can only pay on Cloud Platform'
                },

                {
                    title: 'Do you provide servers?',
                    value: 'No, we do not provide server for you'
                }
            ]
        }
    }
}
</script>