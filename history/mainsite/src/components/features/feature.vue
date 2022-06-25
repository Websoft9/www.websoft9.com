<template>
     <section id="features-wrap" class="features_wrap p-t-b-80">
                <b-container>
                    <b-row>
                        <b-col md="12" class="section-header mb-5">
                            <h2 class="font-weight-bold">Our Exciting Features</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat ea quam laborum, ducimus, laboriosam sint dolorum aspernatur libero.</p>

                        </b-col>


                        <b-col md="6" lg="6" sm="12" class="mb-4 mb-lg-0">
                            <b-row>
                                <b-col md="6" lg="4" sm="6" class=" mb-4" v-for="(feature, key) in features" :key='key'>
                                    <b-card class=" text-center">
                                        <i class="eva text-30" v-bind:class=feature.icon ></i>
                                        <h4 class="card-title pt-2 text-16">{{feature.name}}</h4>
                                    </b-card>
                                </b-col>
                                <!-- <div class="col-md-6 col-lg-4 col-sm-6 mb-4 ">
                                    <div class="card">

                                        <div class="card-body  text-center">
                                            <i class="eva eva-file-text-outline text-30"></i>
                                            <h4 class="card-title pt-2 text-16">Invoicing</h4>

                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-4 col-sm-6 mb-4 ">
                                    <div class="card">

                                        <div class="card-body  text-center">
                                            <i class="eva eva-shopping-bag-outline text-30"></i>
                                            <h4 class="card-title pt-2 text-16">Sales Report</h4>

                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-4 col-sm-6 mb-4 mb-lg-0">
                                    <div class="card">

                                        <div class="card-body  text-center">
                                            <i class="eva eva-lock-outline text-30"></i>
                                            <h4 class="card-title pt-2 text-16">Data Safety</h4>

                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-4 col-sm-6 mb-4 mb-lg-0 mb-md-0">
                                    <div class="card">

                                        <div class="card-body  text-center">
                                            <i class="eva eva-people-outline text-30"></i>
                                            <h4 class="card-title pt-2 text-16">Contracts</h4>

                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-4 col-sm-6 mb-4 mb-lg-0 mb-md-0">
                                    <div class="card">

                                        <div class="card-body  text-center">
                                            <i class="eva eva-bell-outline text-30 text-gradient"></i>
                                            <h4 class="card-title pt-2 text-16">Notification</h4>

                                        </div>
                                    </div>
                                </div> -->
                            </b-row>
                        </b-col>
                        
                        <!-- end of col-6 -->
                        <b-col md="6" lg="5" sm="12" class="offset-lg-1 d-flex align-items-center">

                            <img src="../../assets/images/landing/svg/features2.svg" class="img-responsive w-100" alt="">

                        </b-col>

                    </b-row>
                </b-container>
            </section>
</template>
<script>
export default {
    data(){
        return{
            
            
            features:[
                {
                  name:'Time Tracking',
                  icon:'eva-clock-outline'

                },
                {
                    name:'Invoicing',
                    icon:'eva-file-text-outline'
                },
                {
                    name:'Sales Report',
                    icon:'eva-shopping-bag-outline'
                },
                {
                    name:'Data Safety',
                    icon:'eva-lock-outline'
                },
                {
                    name:'Contracts',
                    icon:'eva-people-outline'
                },
                {
                    name:'Notification',
                    icon:'eva-bell-outline'
                }
               

            ]
        }
    }
}
</script>

