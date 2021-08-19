# webpack-tutorial

https://webpack.js.org/guides/

## Getting started

1. npm init -y
2. npm install webpack webpack-cli --save-dev
3. npm install --save lodash
4. npx webpack
5. open dist/index.html
6. npx webpack --config webpack.config.js
7. npm run build
8. open dist/index.html
9. npm run build -- --color

### memo

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

## Assets Management

1. npm install --save-dev style-loader css-loader
2. npm run build
3. open dist/index.html
4. npm install --save-dev csv-loader xml-loader
5. npm install --save-dev yamljs json5
6. npm install toml yamljs json5 --save-dev

### memo

- /src/assetsにまとめて入れるより、/src/components/my-componentsに分けて入れると管理しやすい。

## Output Management

1. npm install --save-dev html-webpack-plugin

### memo

- html-webpack-pluginはhtmlを出力する
- 詳細 -> https://github.com/jantimon/html-webpack-plugin

- output: { clean: true }を指定すると./dist/以下のファイルを綺麗にしてくれる

## Development

1. npm install --save-dev webpack-dev-server
2. npm install --save-dev express webpack-dev-middleware

### memo

- devtool: 'inline-source-map'でエラーを追跡できる

1. webpack's Watch Mode
   - ブラウザをリフレッシュすると内容が変わる

2. webpack-dev-server
   - `localhost:8000`でサーバーが立ち上がる

3. webpack-middleware
   - サーバの設定を幅広く変更できる

## Code Splitting

- dependOnオプションはchunk間でモジュールを共有できる
- 1つのHTMLページで複数のエントリーポイントを使用する場合は、最適化.runtimeChunk: single」も必要です。
- SplitChunksPluginを使うと、既存のentry chunkや全く新しいchunkに共通の依存関係を抽出することができます
- returnにインポートを書いてそのまま返すDynamic Importsというやり方もあるhttps://webpack.js.org/guides/code-splitting/#dynamic-imports

