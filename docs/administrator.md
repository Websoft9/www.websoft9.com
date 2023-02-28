# 管理员手册

## 备份

目前已经通过 Github action 实现 Contentful 数据的自动备份  

打开：【Action】>【contentful automic backup】>【Run workflow】


## 编译

打开：【Action】>【Deploy Gatsby site to Pages】>【Run workflow】

## FAQ

####  WebpackError:TypeError: Cannot read properties of null (reading 'sort')?

可能存在 Base_catalog 中某个一级目录下没有二级目录

