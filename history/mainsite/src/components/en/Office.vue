<template>
<!-- Start Donate -->

<div>
    <!-- Start Project Details Area -->
    <section class="project-details-area ptb-80">
        <div class="section-title">
          <h3>Office</h3>
        </div>
        <div class="container">
            <CoolLightBox 
                :items = "items" 
                :index = "index"
                loop
                @close = "index = null">
            </CoolLightBox>
            <div class="row">

                <div
                    class="col-lg-6 col-md-6 col-sm-6"
                    v-for="(image, imageIndex) in items"
                    :key="imageIndex"
                >
                    <div class="project-details-image">
                        <img :src="image.src" alt="work">

                        <a @click="setIndex(imageIndex)" class="popup-btn"><feather type="plus"></feather></a>
                    </div>
                </div>

            </div>
        </div>
    </section>
    <!-- End Project Details Area -->

</div>

<!-- End Donate -->
</template>


<script>
import CoolLightBox from 'vue-cool-lightbox';
export default {
    name: 'Office',
    components: {
        CoolLightBox
    },
    data: function () {
        return {
        items: [
            {
                src: require('../../assets/img/works/1.png'),
            },
            {
                src: require('../../assets/img/works/2.png'),
            },
            {
                src: require('../../assets/img/works/3.png'),
            },
            {
                src: require('../../assets/img/works/4.png'),
            }
        ],
        index: null
    };
},
    methods: {
        setIndex(index) {
            this.index = index
        }
    }

}
</script>