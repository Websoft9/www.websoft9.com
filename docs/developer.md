# 开发者

## API


## Contentful 实施


### 概念

- Content：理解为一张内容表
- Content Model：可视化数据建模
- entry：相当于表的一条记录（条目）
- fields：相当于表的字段，这是 Contentful 最核心的部分
- Media：图片
- organizations：企业组织
- Spaces：工作空间，一个企业组织可以有多个空间
- Content preview
- widgets：字段的模板，例如 Single line, Multi-line text 等
- view：内容的视图
- folder：视图的归集

### Extension

[Extension（扩展）](https://github.com/contentful/extensions/tree/master/samples) 是对 Model 字段的补充：

1. 安装扩展（[范例](https://github.com/contentful/extensions/blob/master/samples/image-uploader/extension.json)）
2. 在 Content Model 增加对应的 Filed，便可以使用刚安装的 extension
3. 实际上，extension 还有另外一种用法，即将 extension 固定到 Content Model 的右侧菜单栏，这样对任何 Content 都生效，且无法更改内容（却别于每增加一个 Content 条目）

> 只有在 extension.json 配置文件中申明的扩展才会显示

### APP

1. 安装 APP
2. 创建 JSON Object
3. 给字段关联一个 APP


### API

[Contentful API](https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-types) 支持多种方式。

下面是已经连接成功的API范例：

```
# API
https://cdn.contentful.com/spaces/ffrhttfighww/environments/master/entries/3IWvbivu7ooiQt0VKu4lBS?include=10

# graphGL API

https://graphql.contentful.com/content/v1/spaces/ffrhttfighww/explore?access_token=****

#获取内容模型信息
curl --include \
     --request GET \
     https://cdn.contentful.com/spaces/{space_id}/environments/{environment_id}/content_types/{content_type_id}?access_token={access_token}
     

#获取内容信息
curl --include \
     --request GET \
     https://cdn.contentful.com/spaces/{space_id}/environments/{environment_id}/entries/{entry_id}?access_token={access_token}
```



## UI/UE

### 设计规范

* Brand logo 尺寸：
* 资质荣誉图尺寸：
* Resource Feature 图尺寸：
* Hero Feature 插画尺寸：

### Media 存储规范

图片、视频、文件附件等都存储在对象存储中，为了更好的复用，现约束其规范。

![](img/image-name.pngimage-name)

网站有关的图片文件夹有三个：

- DocsPicture: 存放产品截图，名称规范：wordpress-screenshot
- Design：存放深度设计的图片（banner，博客主图等）
- Logo：存放第三方公司或组织的企业徽标，以及公共使用的 Icon

## FAQ

#### 如何获取 icon 名称？

* 图标地址：https://fonts.google.com/icons
* 筛选图标：在页面搜索框，选择“Material Icons” ,在搜索框下面勾选“Two tone”，可在搜索框输入关键词，搜索相关图标
![image](https://user-images.githubusercontent.com/7624828/194828882-38b74e46-13dc-4c4d-8344-0a879bb97409.png)
* 找到相关图标后，选中图标，右侧弹出属性框，按图复制图标名称，存入contentful即可
![image](https://user-images.githubusercontent.com/7624828/194829902-46cabb70-6c11-4815-adc3-f05469c8468a.png)

#### 如何更改网站logo？

目录是：assets/images/logo    ，英文是: w9.svg  中文是：源生云.svg
