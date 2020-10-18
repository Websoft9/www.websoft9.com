<template>
  <ChineseLayout>
  <Banner></Banner> 
    <h1>关于我们</h1>
<p>
    Websoft9（“网久软件”）专注于开源软件的集成、自动化安装与商业级支持服务，通过我们的 Cloud Installer 技术，用户可以在云平台上更快速地完成软件个性化部署，简单、安全、高效，无需繁琐的安装与配置。

我们拥有广泛的开源集成解决方案，从基础架构、中间件、容器、数据库、DevOps，到云原生应用、企业管理、企业智能和物联网等。借助这些技术，任何规模的企业都可以成功地适应业务全球化和数字化。

我们提供全面的商业级支持服务，从知识库、工单、电话咨询、远程诊断，到专业培训、技术专家咨询等，通过这些服务，可满足企业在软件使用过程中的故障请求和个性化服务需求。

目前，我们已与全球主流的云平台进行合作，服务 140 多个国家和地区的 20000+ 企业客户。
    
 </p>

<b-container fluid class="p-4 bg-dark">
  <b-row>
    <b-col>
      <b-img thumbnail fluid src="https://libs.websoft9.com/Websoft9/mainsite/zh/2019/opentree.png" alt="Image 1"></b-img>
    </b-col>
    <b-col>
      <b-img thumbnail fluid src="https://libs.websoft9.com/Websoft9/mainsite/zh/2019/opentree.png" alt="Image 2"></b-img>
    </b-col>
    <b-col>
      <b-img thumbnail fluid src="https://libs.websoft9.com/Websoft9/mainsite/zh/2019/opentree.png" alt="Image 3"></b-img>
    </b-col>
  </b-row>
</b-container>
  </ChineseLayout>



</template>

<script>
import BackToTop from 'vue-backtotop'
import ChineseLayout from '~/layouts/Chinese.vue'
import Banner from '~/components/cn/Banner.vue'

export default {

  metaInfo: {
    title: '关于'
  },

  components: {
    ChineseLayout,
    Banner
  }
}
</script>