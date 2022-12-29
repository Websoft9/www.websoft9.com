# DCMS

数据驱动的CMS，维护网站就像操作 Excel 一样简单。

## 驱动力

当前的 CMS，提供了“丰富的后台”，让用户在后台通过可视化的方式创作网站，用户也通过这种方式可以创作网站出来。  
但是，站在CEO的角度，企业的网站仅用作介绍公司，而无法作为内容营销的载体。  

DCMS 是以内容营销建模为核心，再结合与数据有关的展示模板，帮助用户快速建议一个具有**内容营销最佳实践**网站。

这个是产品的原生驱动力。

## 商业逻辑

![](https://images.contentstack.io/v3/assets/blt23180bf2502c7444/blt6d2cc25aab40f670/5d65166c51651427da8be32f/How_CS_works.png)

> 图片来源于 https://www.contentstack.com/docs/overview/how-contentstack-works/

* 内容营销建模：高智力知识成果的复制
* 内容营销表现方式：简化客户对内容营销方式的理解
* 内容营销自动分发：直接的引流
* 全静态：安全，速度极快

## 架构

* 无代码平台/Headless/数据库  承载数据库模型
* GraphQL 中间件与前端集成
* 构建出100%的前端代码供用户部署
* 提供一套 SaaS 生产平台
* 发布与生产脱离

## 对标

* [Contentstack](https://www.contentstack.com)
* [Softr](https://www.softr.io/product-features)
* [DotCMS](https://dotcms.com/solutions/intranet-portal)
* [webiny](https://www.webiny.com/)
* [builder](https://www.builder.io/)

## 集成

* 各种RDS系统
* Headless: [Contentful](https://www.contentful.com/) [graphcms](https://graphcms.com/) ...
* 信息展示：[venngage](https://venngage.com/)

## 问题

#### 应该给用户提供什么样组件？

主题，布局，组件 三级结构

#### 网站的顶部和底部怎么处理？

完全采用静态形式

#### 用户如何给前端传递后端数据？

应该简化用户的使用，完全遵循 table.column.item 模式，然后编译时赋值

#### 用户应该采用什么模板？

用户提供 HTML 或 Vue/React 模板，剩下的系统去做

#### 多语言怎么处理？

咨询了 supabase 的大神，得到其[回复](https://github.com/supabase/supabase/issues/5561)如下

```
create another column. eg if you had post, you might create post_en to store english
create a JSONB column with unstructured data. eg, if you had post you might create post_i18n to store all translations
create a translations table. eg, if you had a table posts, you might create a table posts_i18n and store all the translations in that table
```
