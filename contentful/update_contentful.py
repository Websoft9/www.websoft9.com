import os
import json
import datetime
from contentful_management import Client

# 设置 Contentful API 访问参数
ACCESS_TOKEN = os.environ['CONTENTFUL_ACCESS_TOKEN']
SPACE_ID = "ffrhttfighww"
ENVIRONMENT_ID = "master"

# 初始化 Contentful 管理客户端
client = Client(ACCESS_TOKEN)

def fetch_all_entries(environment, query):
    skip = 0
    limit = 100
    entries = []

    while True:
        query['skip'] = skip
        query['limit'] = limit
        page = environment.entries().all(query)
        entries.extend(page)
        if len(page) < limit:
            break
        skip += limit

    return entries

def update_entries(content_type_id, fields_to_update, update_conditions=None):
    update_count = 0
    fail_count = 0
    failed_entries = []

    try:
        # 获取空间和环境
        space = client.spaces().find(SPACE_ID)
        environment = space.environments().find(ENVIRONMENT_ID)

        # 构建查询条件
        query = {'content_type': content_type_id}
        if update_conditions:
            for field, value in update_conditions.items():
                if isinstance(value, bool):
                    # 将布尔值转换为小写字符串
                    query[f'fields.{field}'] = str(value).lower()
                else:
                    query[f'fields.{field}'] = value

        # 根据条件查找条目
        entries_to_update = fetch_all_entries(environment, query)

        total_to_update = len(entries_to_update)
        print(f"Found {total_to_update} entries to update.")

        # 更新找到的每个条目
        for entry in entries_to_update:
            try:
                for field, value in fields_to_update.items():
                    if isinstance(value, dict):
                        # 假设字典类型包含本地化字段
                        if 'sys' in value:
                            # 处理引用和资产类型
                            entry.fields('en-US')[field] = {'sys': value}
                        elif 'nodeType' in value:
                            # 处理富文本类型
                            entry.fields('en-US')[field] = value                    
                        elif 'date' in value:
                            # 处理日期和时间
                            entry.fields('en-US')[field] = datetime.datetime.strptime(value['date'], "%Y-%m-%dT%H:%M:%SZ")
                        else:
                            # 默认情况，假设是本地化字段
                            for locale, content in value.items():
                                entry.fields(locale)[field] = content
                    elif isinstance(value, bool):
                        # 处理布尔类型
                        entry.fields('en-US')[field] = value
                    elif isinstance(value, (int, float)):
                        # 处理数字类型
                        entry.fields('en-US')[field] = value
                    else:
                        # 默认情况，直接设置值
                        entry.fields('en-US')[field] = value

                entry.save()
                entry.publish()
                update_count += 1
                print(f"Entry '{entry.key}' updated successfully.")
            except Exception as e:
                fail_count += 1
                failed_entries.append(entry.key)
                print(f"Failed to update entry '{entry.key}': {e}")

        return {
            'total_to_update': total_to_update,
            'updated': update_count,
            'failed': fail_count,
            'failed_entries': failed_entries
        }
    except Exception as e:
        print(f"An error occurred while updating entries: {e}")

        return {
            'total_to_update': len(entries_to_update) if 'entries_to_update' in locals() else 0,
            'updated': update_count,
            'failed': fail_count + len(entries_to_update) if 'entries_to_update' in locals() else 0,
            'failed_entries': failed_entries
        }

# 读取环境变量
content_type_id = os.getenv('CONTENT_TYPE_ID')
fields_to_update = json.loads(os.getenv('FIELDS_TO_UPDATE'))
update_conditions = json.loads(os.getenv('UPDATE_CONDITIONS'))

# 调用函数
print(update_conditions)
update_stats = update_entries(content_type_id, fields_to_update,update_conditions)
print(update_stats)
