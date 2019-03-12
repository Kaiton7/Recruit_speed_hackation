# Recruit Speed Hackathon 201902
このリポジトリは、スピードハッカソン用です。

## 使い方
### セットアップ
`npm install` で必要なライブラリをインストールします。

```sh
$ npm install
```
### 開発用サーバ起動
`npm start` で開発用のサーバが起動します。

```sh
$ npm start
```

サーバには、[http://localhost:3000](http://localhost:3000)でアクセスできます。

## 計測
Google ChromeのDeveloper Toolsから、Auditsを選択して、**Run audits**ボタンでlighthouseを実行します。

![developer tools](https://i.imgur.com/BWMP147.png)

結果が表示されます。

![audit results](https://i.imgur.com/AorP2Yu.png)

## レギュレーション
ソースに関しては、以下のルールを守れば、基本的になんでもアリとします

- [x] 画面上の機能が、初期状態から変化していないこと
  - 見た目と動きが同じならばOK
  - スタイルが崩れている、メニューが出ない、などはNG
- [x] `npm start`で開発用サーバが起動できること
  - サーバが起動できないと、最終的に採点ができません
- [x] 各チームごとのgithubリポジトリを成果物として採点を行います
  - 終了時間前までに全commitをpushしてください