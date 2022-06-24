<template>
      <!-- solution start -->
            <section id="solution-wrap" class="solution p-t-b-80">
                <b-container>
                    <b-row>
                        <b-col md="12" class="section-header mb-5">
                            <h2 class="font-weight-bold">Our Solution</h2>
                            <p class="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat ea quam laborum, ducimus, laboriosam sint dolorum aspernatur libero.</p>
                        </b-col>
                        <b-col md="3" class="text-center" v-for="(featureTwo ,key) in featuresTwo"  :key=key>
                            <b-card class="p-4 mb-5 solution-container shadow-none">
                                <i v-bind:class="featureTwo.icon"  class="eva text-50"></i>
                                <h2 class="font-weight-bold card-title mb-2 mt-2">{{featureTwo.name}}</h2>
                                <p class="card-text">Lorem Ipsum is simply dummy text of the printing</p>
                            </b-card>
                        </b-col>
                        
                    </b-row>
                </b-container>
            </section>
            <!-- solution end -->
</template>
<script>
export default {
    data(){
        return{

            featuresTwo:[
                {
                   name:'title #1',
                   icon:'eva-phone-call-outline',
                   desc:'Lorem Ipsum is simply dummy text of the printing'
                },
                {
                   name:'title #2',
                   icon:'eva-people-outline',
                   desc:'Lorem Ipsum is simply dummy text of the printing'
                },
                {
                   name:'title #3',
                   icon:'eva-settings-2-outline',
                   desc:'Lorem Ipsum is simply dummy text of the printing'
                },
                {
                   name:'title #4',
                   icon:'eva-pantone-outline',
                   desc:'Lorem Ipsum is simply dummy text of the printing'
                },
                {
                   name:'title #5',
                   icon:'eva-trending-down-outline',
                   desc:'Lorem Ipsum is simply dummy text of the printing'
                },
                {
                   name:'title #6',
                   icon:'eva-wifi-outline ',
                   desc:'Lorem Ipsum is simply dummy text of the printing'  
                },
                {
                   name:'title #7',
                   icon:'eva-cube-outline ',
                   desc:'Lorem Ipsum is simply dummy text of the printing'  
                },
                {
                   name:'title #8',
                   icon:'eva-crop-outline',
                   desc:'Lorem Ipsum is simply dummy text of the printing'  
                },
                {
                   name:'title #9',
                   icon:'eva-flash-outline',
                   desc:'Lorem Ipsum is simply dummy text of the printing'  
                },
                {
                   name:'title #10',
                   icon:'eva-globe-outline ',
                   desc:'Lorem Ipsum is simply dummy text of the printing'  
                },
                {
                   name:'title #11',
                   icon:'eva-camera-outline ',
                   desc:'Lorem Ipsum is simply dummy text of the printing'  
                },
                {
                   name:'title #12',
                   icon:'eva-shield-off-outline ',
                   desc:'Lorem Ipsum is simply dummy text of the printing'  
                },
            ]


        }
    }
    
}
</script>

