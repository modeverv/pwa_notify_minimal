# pwaによるweb push通知の最小サンプル

1. index.htmlで購読を得てそのままコンソールに出力
2. コピペしてindex.jsで送信

## 使い方
1. `npm run make-vapid`で公開鍵と秘密鍵を作成(コンソールログに鍵情報がでます)。
2. `index.html`に公開鍵、`index.js`に公開鍵と秘密鍵を書き込み
3. `index.html`,`manifest.json`,`service-worker.js`をサーバにアップロード
4. httpsでindex.htmlにアクセス、購読、購読情報をコピペ
5. `index.js`を4の内容で編集して`npm run send`で送信

## さらに
mobile safari(iPhone)ではかなり深いところの設定の変更が必要  
https://www.xda-developers.com/how-enable-safari-notifications-iphone/  
やばい。  
で、できてないこと。  
google calendarみたいにpc/macで閉じるボタンを押すまで通知が出続けるのはできてない。

## メモ
pwaが動くためにはhttpsでのindex.htmlの配信が必要である

## 動作サンプル
- 送信部分: `send.mov` <br/><video src="https://lovesaemi.daemon.asia/dev/send.mp4" width="320" height="240" controls></video>
- 受信部分: `notify.mp4` <br/><video src="https://lovesaemi.daemon.asia/dev/notify.mp4"  width="320" height="240" controls></video>


