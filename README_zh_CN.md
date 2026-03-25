# 思源笔记黑客主题 (Hacker Theme)

本插件旨在为您在 KDE Plasma 和其他 Linux 桌面环境上提供最佳体验，使其尽可能接近原版。

## 许可证 (License)

您可以自由地使用本仓库的代码。但是，我已在本仓库的许可证中加入了以下额外要求。如果您使用了本仓库的代码、设计、文字、算法或任何其他内容，您必须在以下三个地方包含我的用户名 "zxkmm" 以及本仓库的链接：

1. 在代码注释中。
2. 在与我的代码相关的设置界面中。
3. 在您的软件、网站或任何其他计算机产品的“关于”页面上。

底层基础许可证是 GNU Affero General Public License v3.0，并附带这些额外的许可和要求。

## 开发

* theme.json
* icon.png (160*160)
* preview.png (1024*768)
* README*.md
* theme.css
* theme.js

## theme.json

```json
{
  "name": "theme-sample",
  "author": "Vanessa",
  "url": "https://github.com/siyuan-note/theme-sample",
  "version": "0.0.3",
  "minAppVersion": "2.8.8",
  "displayName": {
    "default": "Theme Sample",
    "zh_CN": "主题示例"
  },
  "description": {
    "default": "This is a theme sample",
    "zh_CN": "这是一个主题示例"
  },
  "readme": {
    "default": "README.md",
    "zh_CN": "README_zh_CN.md"
  },
  "funding": {
    "openCollective": "",
    "patreon": "",
    "github": "",
    "custom": [
      "https://ld246.com/sponsor"
    ]
  },
  "modes": [
    "light"
  ],
  "keywords": [
    "sample", "示例"
  ]
}
```

* `name`：主题名称，必须和库名一致，且全局唯一（集市中不能有重名主题）
* `author`：主题作者名
* `url`：主题仓库地址
* `version`：主题版本号，建议遵循 [semver](https://semver.org/lang/zh-CN/) 规范
* `minAppVersion`：主题支持的最低版本号，建议遵循 [semver](https://semver.org/lang/zh-CN/) 规范
* `minAppVersion`：主题支持的最低思源笔记版本号
* `displayName`：模板显示名称，主要用于模板集市列表中显示，支持多语言
    * `default`：默认语言，必须存在
    * `zh_CN`、`en_US` 等其他语言：可选，建议至少提供中文和英文
* `description`：主题描述，主要用于主题集市列表中显示，支持多语言
    * `default`：默认语言，必须存在
    * `zh_CN`、`en_US` 等其他语言：可选，建议至少提供中文和英文
* `readme`：自述文件名，主要用于主题集市详情页中显示，支持多语言
    * `default`：默认语言，必须存在
    * `zh_CN`、`en_US` 等其他语言：可选，建议至少提供中文和英文
* `funding`：主题赞助信息
    * `openCollective`：Open Collective 名称
    * `patreon`：Patreon 名称
    * `github`：GitHub 登录名
    * `custom`：自定义赞助链接列表
* `modes`：主题支持的模式列表，可选值为 `light` 和 `dark`
* `keywords`：搜索关键字列表，用于集市搜索功能

## 打包

无论使用何种方式编译打包，我们最终需要生成一个 package.zip，它至少包含如下文件：

* icon.png
* preview.png
* README*.md
* theme.css
* theme.json

## 上架集市

* 生成 package.zip
* 在 GitHub 上创建一个新的发布，使用主题版本号作为 “Tag
  version”，示例 https://github.com/siyuan-note/theme-sample/releases
* 上传 package.zip 作为二进制附件
* 提交发布

如果是第一次发布版本，还需要创建一个 PR 到 [Community Bazaar](https://github.com/siyuan-note/bazaar) 社区集市仓库，修改该库的
themes.json。该文件是所有社区主题库的索引，格式为：

```json
{
  "repos": [
    "username/reponame"
  ]
}
```

PR 被合并以后集市会通过 GitHub Actions 自动更新索引并部署。后续发布新版本主题时只需要按照上述步骤创建新的发布即可，不需要再
PR 社区集市仓库。

正常情况下，社区集市仓库每隔 1 小时会自动更新索引并部署，可在 https://github.com/siyuan-note/bazaar/actions 查看部署状态。
