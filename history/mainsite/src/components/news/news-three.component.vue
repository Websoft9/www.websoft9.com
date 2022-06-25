<template>
     <!-- start news-three section -->
            <section id="news-three" class="news-three p-t-b-80">
                <b-container>
                    <b-row>
                        <b-col md="12" class="section-header  mb-5">
                            <h2 class="font-weight-bold">Our Blog</h2>
                            <p class="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat ea quam laborum, ducimus, laboriosam sint dolorum aspernatur libero.</p>
                        </b-col>
                        <b-col md="6" lg="4" class="mb-4" v-for="(anchorThree ,key) in newsThree" :key="key">
                            <b-card no-body class="news-three__card o-hidden">
                                <div class="blog-img">
                                    <div class="card-header p-0">
                                        <img class="img-responsive" :src="anchorThree.bg_img">
                                        <div class="blog-date">
                                            <strong>{{anchorThree.day}}</strong>
                                            <span>{{anchorThree.month}}</span>
                                        </div>
                                    </div>

                                </div>
                                <b-card-body>
                                    <a href="#">
                                        <h3 class="card-title mb-3 text-capitalize font-weight-bold">{{anchorThree.title}}
                                        </h3>
                                    </a>
                                    <div class="comment-blog">
                                        <i class="eva eva-message-square-outline align-middle text-20"></i>
                                        <span class="user-designation align-middle  w-75 "> {{ anchorThree.comments }} Comments</span>
                                    </div>
                                    <p class="card-text mt-3">Lorem ipsum dolor sit amet additional adipiscing elit Aenean commodo ligula</p>
                                </b-card-body>
                            </b-card>
                        </b-col>
                       
                    </b-row>
                </b-container>
            </section>
            <!-- end news-three section -->
</template>
<script>
export default {
    data(){
        return{
            heading:'Our Blog',
            paragraph:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat ea quam laborum, ducimus, laboriosam sint dolorum aspernatur libero.',
            newsThree:[
                {
                    bg_img:require('../../assets/images/landing/services/service1.svg'),
                    day:'17',
                    month:'nov',
                    title:'The spotlight effect is the phenomenon',
                    comments:'25',
                    desc:'Lorem ipsum dolor sit amet additional adipiscing elit Aenean commodo ligula'

                },
                {
                    bg_img:require('../../assets/images/landing/services/services4.svg'),
                    day:'12',
                    month:'jan',
                    title:'The telescoping effect is the tendency',
                    comments:'33',
                    desc:'Lorem ipsum dolor sit amet additional adipiscing elit Aenean commodo ligula'

                },
                {
                    bg_img:require('../../assets/images/landing/services/services7.svg'),
                    day:'17',
                    month:'nov',
                    title:'Victims whose stories we dont know are occurred',
                    comments:'68',
                    desc:'Lorem ipsum dolor sit amet additional adipiscing elit Aenean commodo ligula'

                }
            ]
        }
    }
}
</script>


