# SiYuan Hacker Theme

This plugin is intended to give you the best experience on KDE Plasma and other Linux desktop environments, making it as close to the original as possible.

## License

You are free to use the code in this repository. However, I have incorporated these additional requests into the license of this repository. If you use the code, design, text, algorithms, or anything else from this repository, you must include my username "zxkmm" and the link to this repository in three places:

1. In the code comments.
2. In the settings interface related to my code.
3. On the 'About' page of your software/website/and or any other format of computer production.

The underlying base license is the GNU Affero General Public License v3.0, with these additional permissions and requirements.

## Development

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

* `name`: Theme name, must be the same as the repo name, and must be unique globally (no duplicate theme names in the
  marketplace)
* `author`: Theme author name
* `url`: Theme repo URL
* `version`: Theme version number, it is recommended to follow the [semver](https://semver.org/) specification
* `minAppVersion`: Minimum version number of SiYuan required to use this theme
* `displayName`: Widget display name, mainly used for display in the marketplace list, supports multiple languages
    * `default`: Default language, must exist
    * `zh_CN`, `en_US` and other languages: optional, it is recommended to provide at least Chinese and English
* `description`: Theme description, mainly used for display in the marketplace list, supports multiple languages
    * `default`: Default language, must exist
    * `zh_CN`, `en_US` and other languages: optional, it is recommended to provide at least Chinese and English
* `readme`: readme file name, mainly used to display in the marketplace details page, supports multiple languages
    * `default`: Default language, must exist
    * `zh_CN`, `en_US` and other languages: optional, it is recommended to provide at least Chinese and English
* `funding`: Theme sponsorship information
    * `openCollective`: Open Collective name
    * `patreon`: Patreon name
    * `github`: GitHub login name
    * `custom`: Custom sponsorship link list
* `modes`: Theme mode list, currently only supports `light` and `dark`
* `keywords`: Search keyword list, used for marketplace search function

## Package

No matter which method is used to compile and package, we finally need to generate a package.zip, which contains at
least the following files:

* icon.png
* preview.png
* README*.md
* theme.css
* theme.json

## List on the marketplace

* Generate the package.zip
* Create a new GitHub release using your new version number as the "Tag version". See here for an
  example: https://github.com/siyuan-note/theme-sample/releases
* Upload the file package.zip as binary attachments
* Publish the release

If it is the first release, please create a pull request to
the [Community Bazaar](https://github.com/siyuan-note/bazaar) repository and modify the themes.json file in it. This
file is the index of all community theme repositories, the format is:

```json
{
  "repos": [
    "username/reponame"
  ]
}
```

After the PR is merged, the bazaar will automatically update the index and deploy through GitHub Actions. When releasing
a new version of the theme in the future, you only need to follow the above steps to create a new release, and you
don't need to PR the community bazaar repo.

Under normal circumstances, the community bazaar repo will automatically update the index and deploy every hour,
and you can check the deployment status at https://github.com/siyuan-note/bazaar/actions.
