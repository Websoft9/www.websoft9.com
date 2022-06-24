<template>
     <!-- start work carousel -->
            <section id="works-wrap" class="work-carousel-wrap ">
                <b-container>
                    <b-row>
                        <b-col md="12" class=" section-header  mb-5">
                            <h2 class="font-weight-bold"> Recent Works</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat ea quam laborum, ducimus, laboriosam sint dolorum aspernatur libero.</p>
                        </b-col>
                        <div class="col-md-6 col-lg-4 col-sm-6 mb-4">


                            <div class="card o-hidden ">
                                <img class="card-img-top" src="@/assets/images/landing/products/products9.svg" alt="Card image cap">
                                <div class="card-body">
                                    <h5 class="card-title font-weight-bold">Work one</h5>
                                    <p class="card-text">
                                        Some quick example text to build on the card title and make up the bulk of the card's content.
                                    </p>
                                </div>
                                <div class="card-footer pl-3">
                                    <a href="#" class="btn btn-lg p-1 text-dark mr-1">
                                        <span class="eva eva-link-2-outline"></span>
                                    </a>
                                    <a href="#" class="btn btn-lg p-1 text-dark mr-1">
                                        <span class="eva eva-share"></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 col-sm-6 mb-4">
                            <div class="card o-hidden">
                                <img class="card-img-top" src="@/assets/images/landing/products/products15.svg" alt="Card image cap">
                                <div class="card-body">
                                    <h5 class="card-title font-weight-bold">Work two</h5>
                                    <p class="card-text">
                                        Some quick example text to build on the card title and make up the bulk of the card's content.
                                    </p>
                                </div>
                                <div class="card-footer pl-3">
                                    <a href="#" class="btn btn-lg p-1 text-dark mr-1">
                                        <span class="eva eva-link-2-outline"></span>
                                    </a>
                                    <a href="#" class="btn btn-lg p-1 text-dark mr-1">
                                        <span class="eva eva-share"></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 col-sm-6 mb-4">
                            <div class="card o-hidden">
                                <img class="card-img-top" src="@/assets/images/landing/products/products11.svg" alt="Card image cap">
                                <div class="card-body">
                                    <h5 class="card-title font-weight-bold">Work Three</h5>
                                    <p class="card-text">
                                        Some quick example text to build on the card title and make up the bulk of the card's content.
                                    </p>
                                </div>
                                <div class="card-footer pl-3">
                                    <a href="#" class="btn btn-lg p-1 text-dark mr-1">
                                        <span class="eva eva-link-2-outline"></span>
                                    </a>
                                    <a href="#" class="btn btn-lg p-1 text-dark mr-1">
                                        <span class="eva eva-share"></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 col-sm-6 mb-lg-0  mb-4">
                            <div class="card o-hidden">
                                <img class="card-img-top" src="@/assets/images/landing/products/products12.svg" alt="Card image cap">
                                <div class="card-body">
                                    <h5 class="card-title font-weight-bold">Work Four</h5>
                                    <p class="card-text">
                                        Some quick example text to build on the card title and make up the bulk of the card's content.
                                    </p>
                                </div>
                                <div class="card-footer pl-3">
                                    <a href="#" class="btn btn-lg p-1 text-dark mr-1">
                                        <span class="eva eva-link-2-outline"></span>
                                    </a>
                                    <a href="#" class="btn btn-lg p-1 text-dark mr-1">
                                        <span class="eva eva-share"></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 col-sm-6 mb-lg-0 mb-md-0 mb-sm-0 mb-4">
                            <div class="card o-hidden">
                                <img class="card-img-top" src="@/assets/images/landing/products/products14.svg" alt="Card image cap">
                                <div class="card-body">
                                    <h5 class="card-title font-weight-bold">Work Five</h5>
                                    <p class="card-text">
                                        Some quick example text to build on the card title and make up the bulk of the card's content.
                                    </p>
                                </div>
                                <div class="card-footer pl-3">
                                    <a href="#" class="btn btn-lg p-1 text-dark mr-1">
                                        <span class="eva eva-link-2-outline"></span>
                                    </a>
                                    <a href="#" class="btn btn-lg p-1 text-dark mr-1">
                                        <span class="eva eva-share"></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 col-sm-6 mb-lg-0 mb-md-0 mb-sm-0">
                            <div class="card o-hidden">
                                <img class="card-img-top" src="@/assets/images/landing/products/products17.svg" alt="Card image cap">
                                <div class="card-body">
                                    <h5 class="card-title font-weight-bold">Work Six</h5>
                                    <p class="card-text">
                                        Some quick example text to build on the card title and make up the bulk of the card's content.
                                    </p>
                                </div>
                                <div class="card-footer pl-3">
                                    <a href="#" class="btn btn-lg p-1 text-dark mr-1">
                                        <span class="eva eva-link-2-outline"></span>
                                    </a>
                                    <a href="#" class="btn btn-lg p-1 text-dark mr-1">
                                        <span class="eva eva-share"></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </b-row>
                </b-container>


                 <div>
 

  
  </div>
            </section>
            <!-- end work carousel -->

</template>
<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>
<style>

</style>
