---
id: 587d8247367417b2b2512c37
title: helmet.hidePoweredBy() を使用して危険性のある情報を隠す
challengeType: 2
forumTopicId: 301580
dashedName: hide-potentially-dangerous-information-using-helmet-hidepoweredby
---

# --description--

前のチャレンジで案内した通り、このプロジェクトはこちらの <a href="https://replit.com/github/freeCodeCamp/boilerplate-infosec" target="_blank" rel="noopener noreferrer nofollow">Replit</a> にあるスタータープロジェクトをベースに構築するか、<a href="https://github.com/freeCodeCamp/boilerplate-infosec/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a> からクローンして取り組んでください。

サイトで Express を使用していることがハッカーに知られた場合、ハッカーは Express や Node の既知の脆弱性を悪用する可能性があります。 デフォルトでは、Express からリクエストが発生するたびに `X-Powered-By: Express` が送信されます。 `helmet.hidePoweredBy()` ミドルウェアを使用して X-Powered-By ヘッダーを削除してください。

# --hints--

helmet.hidePoweredBy() ミドルウェアを正しくマウントする必要があります。

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/app-info').then(
    (data) => {
      assert.include(data.appStack, 'hidePoweredBy');
      assert.notEqual(data.headers['x-powered-by'], 'Express');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

# --solutions--

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```
