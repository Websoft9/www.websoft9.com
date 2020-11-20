<template>
    <div>

        <!-- Start Page Title -->
        <div class="page-title-area">
            <div class="d-table">
                <div class="d-table-cell">
                    <div class="container">
                        <h2>服务市场</h2>
                        <div class="bar"></div>
					    <p>针对用户、开发者（软件提供商）和合作伙伴我们提供独特的价值</p>
                    </div>
                </div>
			</div>
			
        </div>
        <!-- End Page Title -->
        <div style="width:80%;margin-left:20%;">
            <div class="col-lg-3 col-md-5 col-sm-5" style=" display: inline-block;">
                <div class="woocommerce-topbar-ordering">
                    <select class="form-control" ref="servicePrice" @change="getValue">
                        <option value="0" >请选择价格</option>
                        <option value="1">300以下</option>
                        <option value="2">300~500</option>
                        <option value="3">500~1000</option>
                        <option value="4">1000~3000</option>
                        <option value="5">3000以上</option>
                    </select>
                </div>
            </div>
            <div class="col-lg-3 col-md-5 col-sm-5" style=" display: inline-block;">
                <div class="woocommerce-topbar-ordering">
                    <select class="form-control" ref="serviceType"  @change="getValue">
                        <option value="0">请选择服务类型</option>
                        <option value="1">安装</option>
                        <option value="2">咨询</option>
                        <option value="3">故障处理</option>
                        <option value="4">技术配置</option>
                        <option value="5">项目实施</option>
                        <option value="6">运维外包</option>
                        <option value="7">开发</option>
                        <option value="8">商务合作</option>
                    </select>
                </div>
            </div>
            <div class="col-lg-3 col-md-5 col-sm-5" style=" display: inline-block;">
                <div class="woocommerce-topbar-ordering">
                    <select class="form-control" ref="serviceUser" @change="getValue">
                        <option value="0">请选择服务对象</option>
                        <option value="1">软件供应商</option>
                        <option value="2">客户</option>
                    </select>
                </div>
            </div>
        </div>

        <!-- Start ML Services Area -->
		<section class="ml-services-area ptb-80">
			<div class="container">
                <div class="section-title">
					<h2>面向用户</h2>
					<div class="bar"></div>
					<p>从个人用户、初创企业到中大型企业，我们都提供合适的服务方案</p>
				</div>
                <div class="row">
                    <div class="col-lg-4 col-sm-6 col-md-6" v-for="edge in webData.edges" :key="edge.node.id">
                        <div class="single-ml-services-box">
                            <div class="image">
                                <img src="../../assets/img/services-image/1.png" alt="image">
                            </div>
                            <h3><a href="#">{{ edge.node.name }}</a></h3>
                            <p>{{ edge.node.brief }}</p>
                        </div>
                    </div>
                </div>
			</div>
		</section>

        <!-- End ML Services Area -->
    </div>
</template>


<script>


export default {
    
    name: 'Services',
    data () {  
        return {
            returnData: [],
            webData: [],
            // temList: [],
        }
    },
    async created () {
       // GraphQL持久化保存的数据
       this.returnData = this.$static.Websoft9service
       // 页面展示的数据，初期化的时候是全部查询
       this.webData = JSON.parse(JSON.stringify(this.returnData))
       this.temList = []
    },
    
    methods: {

        getValue: function(){
            
            var obj=JSON.parse(JSON.stringify(this.returnData));
            console.info("GraphQL持久化保存的数据"+obj);
            // 情况上次返回的数据
            this.temList = [];

            var serviceTypeList = ['请选择服务类型','安装','咨询','故障处理','技术配置','项目实施','运维外包','开发','商务合作'];
            var serviceUserList = ['请选择服务对象','软件供应商','客户'];
            var typeIndex = this.$refs.serviceType.value;
            var userIndex = this.$refs.serviceUser.value;

            // 根据价格查询
            for(const item of obj.edges){

                // this.temList.push(item);
                if (this.$refs.servicePrice.value == 0){
                    if ((typeIndex == 0 || serviceTypeList[typeIndex] == item.node.category[0]) && (userIndex == 0 || item.node.target[0].match(serviceUserList[userIndex]))){
                        this.temList.push(item);
                    }
                    
                }else if (this.$refs.servicePrice.value == 1){
                    if (item.node.pricing <=  300){
                        if ((typeIndex == 0 || serviceTypeList[typeIndex] == item.node.category[0]) && (userIndex == 0 || item.node.target[0].match(serviceUserList[userIndex]))){
                            this.temList.push(item);
                        }
                    }
                }else if (this.$refs.servicePrice.value == 2){
                    if (item.node.pricing >  300 && item.node.pricing <= 500){
                        if ((typeIndex == 0 || serviceTypeList[typeIndex] == item.node.category[0]) && (userIndex == 0 || item.node.target[0].match(serviceUserList[userIndex]))){
                            this.temList.push(item);
                        }
                    }
                }else if (this.$refs.servicePrice.value == 3){
                    if (item.node.pricing >  500 && item.node.pricing <= 1000){
                        if ((typeIndex == 0 || serviceTypeList[typeIndex] == item.node.category[0]) && (userIndex == 0 || item.node.target[0].match(serviceUserList[userIndex]))){
                            this.temList.push(item);
                        }
                    }
                }else if (this.$refs.servicePrice.value == 4){
                    if (item.node.pricing >  1000 && item.node.pricing <= 3000){
                        if ((typeIndex == 0 || serviceTypeList[typeIndex] == item.node.category[0]) && (userIndex == 0 || item.node.target[0].match(serviceUserList[userIndex]))){
                            this.temList.push(item);
                        }
                    }
                }else if (this.$refs.servicePrice.value == 5){
                    if (item.node.pricing >  3000){
                        if ((typeIndex == 0 || serviceTypeList[typeIndex] == item.node.category[0]) && (userIndex == 0 || item.node.target[0].match(serviceUserList[userIndex]))){
                            this.temList.push(item);
                        }
                    }
                }
                
            }

            console.info("页面展示的数据"+this.temList);
            this.webData.edges = this.temList;
            
        }
    }
}
</script>

<static-query>
query Websoft9service{
     Websoft9service: allService (sort: { by: "name", order: DESC }){
      edges {
        node{
          id
          name
          skuid
          brief
          deliver
          pricing
          detailCn
          detailEn
          target
          category
        }
      }
    }
}

</static-query>