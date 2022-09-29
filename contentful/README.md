# Importing and exporting content with the Contentful CLI

## Requirements
- A (free) Contentful account.
- Locally installed contentful-cli.
- Authenticated with contentful-cli.

## Installing the Contentful CLI
- Using npm: `npm install -g contentful-cli`
- Using yarn: `yarn global add contentful-cli`
- Usage : `contentful --help`

## Authentication with the Contentful CLI
- `contentful login`
![image](https://user-images.githubusercontent.com/7624828/192952643-b95bb64b-3ac2-42ae-bb7b-06a5075670fb.png)
- If you have no browser available on your machine you can generate the management token manually and pass it directly to the login command.[Login](https://be.contentful.com/login) and create a management token at Settings > API keys > Content management tokens > Generate personal token.

- Remember the Access Token 

## Exporting content
- After you have the CLI tool installed and at the command line, run `contentful space export [options]`.
  All of these options can be put in an external config.json file. You can find a [reference config file here](https://github.com/Websoft9/www.websoft9.com/blob/main/contentful/export-config.json).
  ```
  {
  "spaceId": "<ID of the destination space>",
  "environmentId": "master",
  "managementToken": "<Contentful management API token>",
  "exportDir": "<Defines the path for storing the export json file>",
  "saveFile": true,
  "contentFile": "<The filename for the exported data>",
  "includeDrafts": false,
  "includeArchived": false,
  "skipContentModel": false,
  "skipContent": false,
  "skipRoles": false,
  "skipWebhooks": false,
  "contentOnly": false,
  "downloadAssets": false,
  "host": "api.contentful.com",
  "rawProxy": false,
  "maxAllowedLimit": 1000,
  "errorLogFile": "<Full path to the error log file>",
  "useVerboseRenderer": false
}
  ```
- Next, run your export.
`contentful space export --config export-config.json`
The exported JSON file has the following structure:
```
{
  "contentTypes": [],
  "entries": [],
  "assets": [],
  "locales": [],
  "webhooks": [],
  "roles": [],
  "editorInterfaces": []
}
```

## Importing content
- After you have the import CLI tool installed and at the command line, run `contentful space import [options]` from your command line.
- Similar to the export tool, these settings can be stored in an external json file. Find a [reference config file here](https://github.com/Websoft9/www.websoft9.com/blob/main/contentful/import-config.json).
```
{
  "spaceId": "<ID of the destination space>",
  "managementToken": "<Contentful management API token>",
  "contentFile": "<JSON file that contains data to be import to your space>"
}
```
  Note that you also need to reference a JSON file that contains the exported content. The expected format is the same as the export format from the export tool above.
- Next, run your import.
  `contentful space import --config import-config.json`
