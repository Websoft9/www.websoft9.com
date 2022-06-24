<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="0"
      controls=""
      indicators
      background="#ababab"
      img-width="200"
      img-height="200"
      class="w-50"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
      
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        caption="First slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="https://picsum.photos/1024/480/?image=52"
        img-width="200"
      img-height="200"
      
      ></b-carousel-slide>

     
      <!-- Slides with image only -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide>

     
      
    </b-carousel>

  
  </div>
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
.carousel-control-next-icon{
    background-image: none!important;
    display: inline-block;
    -webkit-transform: translate(0,0);
    transform: translate(0,0);
    text-rendering: auto;
    font: 400 14px/1 Eva-Icons;
    font-size: 50px!important;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    color: red;
    

}
.carousel-control-prev{}
.carousel-control-next-icon::before{
    content: "\ea70";
}
</style>
