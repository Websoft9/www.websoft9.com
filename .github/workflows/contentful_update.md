1. 手动执行Action：Contentful Upate
2. 传入参数：
   content_type_id : 要修改的表，例如：product
   fields_to_update : 需要修改的数据,json格式 例如：
   ```
   {
    "trademark":"可道云",  #对于有多语言的数据，如果不指定语言，默认en-US
    "trademark":{         #也可以同时修改多种语言
        "en-US":"kodbox-1",
        "zh-CN":"Kodbox-1 可道云"
    },
    "distribution":[      #修改数据类型为json的数据
            {
                'key': "enterprise",
                'value': "latest"
            },
        ],
    'plans': [       #修改数据类型为reference的数据
            {
                'sys': {
                    'type': 'Link',
                    'linkType': 'Entry',
                    'id': '48uR11Q2YEwK0u6W2L1Wyl' #Enterprise #id为引用的数据的id
                }
            },
            {
                'sys': {
                    'type': 'Link',
                    'linkType': 'Entry',
                    'id': '1cV0ianwxnzrprnlAFDDNM' #Team
                }
            },
            {
                'sys': {
                    'type': 'Link',
                    'linkType': 'Entry',
                    'id': '1hRql36oQt6Ic31k3Kw3Bd' #Basic
                }
            },
            {
                'sys': {
                    'type': 'Link',
                    'linkType': 'Entry',
                    'id': '6HhiOyVt6YDdWbyJ0Q8l9Y' #Free
                }
            }
        ],
        "vcpu":16, #修改为int的数据
        "production":true,  #修改数据类型为bool的数据
}
   ```
update_conditions : 修改数据时设定的条件，json格式 ，例如：
```
{
  "key": "kodbox-1",
  "production":false
}
```
