<template>
  <div class="layout">
    <header class="header">
      <g-link to="/"><g-image src="~/images/logo.png" to="/" width="150"/></g-link>
      <nav class="nav">
        <g-link class="nav__link" to="/apps/">应用</g-link>
        <g-link class="nav__link" to="/apps/">价格</g-link>
        <g-link class="nav__link" to="https://support.websoft9.com">支持</g-link>
        <g-link class="nav__link" to="https://blog.websoft9.com">博客</g-link>
        <g-link class="nav__link" to="/apps/">伙伴</g-link>
        <g-link class="nav__link" to="/about/">资源</g-link>
      </nav>
    </header>
    <slot/>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.layout {
  max-width: 1280px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}
</style>
