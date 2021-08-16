# webpack-tutorial

### Getting started

1. npm init -y
2. npm install webpack webpack-cli --save-dev
3. npm install --save lodash
4. npx webpack
5. open dist/index.html
6. npx webpack --config webpack.config.js
7. npm run build
8. open dist/index.html
9. npm run build -- --color

## memo

- unpkg.com (https://unpkg.com/)
  - CDN services, npmに登録されているパッケージを手軽に利用できる

```shell
# usage: 
# 最新のバージョンを指定する場合 * 最新バージョンにリダイレクトされます
https://unpkg.com/パッケージ名/ファイル

# バージョンを指定する場合
https://unpkg.com/パッケージ名@バージョン/ファイル

# ディレクトリ構造がある場合
https://unpkg.com/パッケージ名@バージョン/ディレクトリ/ファイル
```

- import _ from 'lodash'
  - 便利な関数をまとめて提供しているライブラリらしい。(https://lodash.com/)
- --save-dev, --save
  - --saveは本番用、--save-devは開発用、依存関係
- `npm webpack`の後に`--`をつけると引数を渡せる
