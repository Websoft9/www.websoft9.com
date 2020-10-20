<template>
<!-- Start Donate -->

<div>
    <!-- Start Project Details Area -->
    <section class="project-details-area ptb-80">
        <div class="section-title">
          <h3>办公环境</h3>
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
                src: require('../../assets/img/works-image/1.jpg'),
            },
            {
                src: require('../../assets/img/works-image/2.jpg'),
            },
            {
                src: require('../../assets/img/works-image/3.jpg'),
            },
            {
                src: require('../../assets/img/works-image/4.jpg'),
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