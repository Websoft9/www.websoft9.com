<template>
    <div>
        <!-- Start Features Details Area -->
        
        <section class="features-details-area ptb-80">
        <div class="section-title">
            <h3>Features</h3>
        </div>
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6 features-details-image">
                        <img src="../../assets/img/features/index_w9special_01.png" class="wow fadeInUp" alt="image">
                    </div>

                    <div class="col-lg-6 features-details">
                        <div class="features-details-desc">
                            <h3>Running anywhere</h3>
                            <p>You can deploy our product by script or image on major Cloud, includes: Azure, AWS, AlibabaCloud, HUAWEI CLOUD </p>
                        </div>
                    </div>
                </div>

                <div class="row align-items-center">
                    <div class="col-lg-6 features-details">
                        <div class="features-details-desc">
                            <h3>One click deployment</h3>
                            <p>From applications, DevOps, database and AI, all solution deployment just need one click</p>
                        </div>
                    </div>
                    <div class="col-lg-6 features-details-image">
                        <img src="../../assets/img/features/index_w9special_02.png" class="wow fadeInUp" alt="image">
                    </div>
                </div>

                <div class="row align-items-center">
                    <div class="col-lg-6 features-details-image">
                        <img src="../../assets/img/features/index_w9special_03.png" class="wow fadeInUp" alt="image">
                    </div>

                    <div class="col-lg-6 features-details">
                        <div class="features-details-desc">
                            <h3>Integration</h3>
                            <p>All software is well-known open source applications, we have integrate and configure it them</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
        <!-- End Features Details Area -->
    </div>
</template>

<script>
import VueFaqAccordion from 'vue-faq-accordion';
export default {
    name: 'Feature',
    components: {
        VueFaqAccordion
    },
    data() {
        return {
            text: `Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute.`,
            myItems: [
                {
                    title: 'How many time zones are there in all?',
                    value: 'Given a 24-hour day and 360 degrees of longitude around the Earth'
                },
                {
                    title: 'How long is a day and year on Venus?',
                    value: 'Venus takes 224.7 Earth days to complete one orbit around the Sun.'
                },
                {
                    title: 'What animal smells like popcorn?',
                    value: 'Binturongs smell like popcorn.'
                }
            ]
        }
    }
}
</script>