# Mainsite

## 架构

后台：Contentful
前端：gridsome + [Dexam theme of Bootstrap Vue](https://themeforest.net/item/dexam-vue-saas-startup-product-landing-page/25894963)

## Install

```
git clone https://github.com/Websoft9/www.websoft9.com.git
cd www.websoft9.com/history/catalog
yarn global add @gridsome/cli
yarn install
gridsome develop
```

## 访问

* 网站：http://IP:8081  
* GraphQL: http://IP:8081/___explore

如果出现node-sass提示报错，执行`npm rebuild node-sass --force`;如果还是报错，执行重装`npm unstall node-sass` `npm install node-sass`
