<template>
  <div>
    <div class="page-title-area">
      <div class="d-table">
        <div class="d-table-cell">
            <div class="container">
                <h2>7×24 工单</h2>
            </div>
        </div>
      </div>
    </div>

		<section class="pricing-area ptb-80 bg-f9f6f6">
			<div class="container">
				<div class="section-title">
					<h3>提交工单</h3>
					<div class="bar"></div>
					<p>客服不在线？提交工单，获取专业的技术支持</p>
          <br>
          <a href="http://ticket.websoft9.com/" target="_blank">
          <img class="rounded mx-auto d-block" alt="Bootstrap Image Preview" src="https://libs.websoft9.com/Websoft9/DocsPicture/zh/common/workorder-ui.png" />
          </a>
				</div>

				<div class="row" v-html="hbspt"></div>
			</div>
		</section>
		<!-- End Pricing Area -->
    </div>
</template>

<script>

export default {
  name: 'Ticket',
  data () {
    return {
      hbspt: '<div class="container-fluid" id="myform"><script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/shell.js"><\/script>\n<script>window.onload = function() { hbspt.forms.create({portalId: "8689433",formId: "577bbee8-43e8-4603-8a11-d8bd912935db",target: "#myform"});};<\/script></div>',
    }
  },
}
</script>