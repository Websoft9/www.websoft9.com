<template>
<Layout>
    <Faq></Faq>
</Layout>
</template>

<script>
//import DefaultLayout from '~/layouts/Default.vue'
import News from '~/components/news/news.vue'
import News3 from '~/components/news/news-three.component.vue'
import Faq from '~/components/faq/faq.vue'
import Header from '~/components/common/Header.vue'
import IntroFour from '~/components/intros/introFour.vue'
import PriceThree from '~/components/price/priceThree.vue'
import ServiceThree from '~/components/service/serviceThree.vue'
import ProductDetails from '~/components/product-details/best.vue'
import Slider from '~/components/slider.vue'
import Footer from '~/components/common/footer.vue'
export default {
  metaInfo: {
    title: '测试页面'
  },
  components: {
    Faq,
    News3,
    News,
    Header,
    IntroFour,
    PriceThree,
    ServiceThree,
    ProductDetails,
    Slider,
    Footer
  }
}
</script>
<page-query>
query {
  xu:allContentfulProduct {
    edges {
      node {
        id
        summary
        date
        locale
        catalog{
          key
          title
          description
        }
        title
        description
      }
    }
  }
}
</page-query>