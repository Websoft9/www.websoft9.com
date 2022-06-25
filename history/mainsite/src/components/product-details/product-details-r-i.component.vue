<template>
              <!-- start::product-details-right-image -->
            <section id="product-details-right-image-wrap" class="product-details-right-image p-t-b-80 light-gray">
                <b-container>
                    <b-row>
                        <b-col md="6">
                            <b-col md="12" class="section-header mb-5">
                                <h2 class="font-weight-bold mb-2">{{Heading}}</h2>
                                <p class="mb-4">{{subHeading}}</p>

                                <ul class="list-group list-group-flush mt-4" v-for="(title ,key) in leftTitles" :key="key">
                                    <li class="list-group-item bg-transparent border-0 text-20">
                                        <i class="eva eva-checkmark-outline align-middle mr-2"></i> {{title.name}}
                                    </li>
                                </ul>

                            </b-col>
                        </b-col>
                        <b-col md="5" class="offset-md-1">
                            <img :src="leftImage" alt="">
                        </b-col>
                    </b-row>
                </b-container>
            </section>
            <!-- end::product-details-right-image -->
</template>
<script>
export default {
    data(){
        return{
            heading:'Powerful Service and Applications',
            subHeading:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat ea quam laborum, ducimus, laboriosam sint dolorum aspernatur libero.',
            leftImage:require('@/assets/images/landing/service-3/service_3-1.svg'),
            leftTitles:[
                {
                    name:'Responsive Template'
                },
                {
                    name:'Clean Code'
                },
                {
                    name:'Created with mobile specialist'
                },
                {
                    name:'Bug Free code'
                }
            ]
        }
    }
}
</script>