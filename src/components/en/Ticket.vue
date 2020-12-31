<template>
  <div>
    <div class="page-title-area">
      <div class="d-table">
        <div class="d-table-cell">
            <div class="container">
                <h2>7×24 Ticket</h2>
            </div>
        </div>
      </div>
    </div>

		<section class="pricing-area ptb-80 bg-f9f6f6">
			<div class="container">
				<div class="section-title">

				</div>
            <div class="contact-cta-box">
                <h3>Submit support case to us?</h3>
                <p>Don't hesitate to contact us</p>
                <a href="https://share.hsforms.com/1YYp-zUNCRLuCA9X1au3v6A568t5" target="_blank" class="btn btn-primary">Create your ticket</a>
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