---
title: "Nuxt.jsのライフサイクルについて"
excerpt: ""
coverImage: "/assets/images/posts/thumbnail/vue_nuxt.png"
date: "2020-11-22T12:00:00.322Z"
author:
  name: Yuji Okayama
  picture: "/assets/blog/authors/joe.jpeg"
ogImage:
  url: "/assets/images/posts/thumbnail/vue_nuxt.png"
tags: ["Vue", "Nuxt"]
---

## はじめに

Nuxt の SSR/CSR の処理のタイミング（ライフサイクル）がどのようになっているか漠然と理解していたのでまとめました。

## SSR・CSR とは

### SSR（サーバーサイドレンダリング）

1. ブラウザからサーバーへリクエスト
2. **サーバーで**レンダリング
3. ブラウザにレスポンスを返す

> CSR: クライアントサイド レンダリング - ブラウザでアプリをレンダリングしたもの。一般的には DOM を使用する。

### CSR（クライアントサイドレンダリング）

> SSR: サーバーサイド レンダリング - クライアントサイド、または HTML によるユニバーサルアプリをサーバー上でレンダリングしたもの。

1. ブラウザからサーバーへリクエスト
2. サーバーがレスポンスを返す
3. **ブラウザ上**でレンダリング

<a href="https://developers.google.com/web/updates/2019/02/rendering-on-the-web?hl=ja" target="_blank">Rendering on the Web - Web 上のレンダリング
</a>

## ライフサイクルについて

Nuxt と Vue のライフサイクルは別物なので気を付ける

### 初回アクセス、リロード時

初回アクセスやリロード時にはサーバーサイドレンダリングの処理とクライアントサイドレンダリングの処理の両方が動作します。
plugins と created（beforeCreate）はどちらの処理でも動作するので注意が必要です。

ログイン機能などの処理はは middleware や plugins に記述することが一般的だと思いますが、middleware の場合は内部ナビゲーション遷移時はクライアントサイドでしか動作しないため、どちらの処理も書いておく必要があります。
plugins の場合は、内部ナビゲーション遷移時は動作しません。

> Vue インスタンスの ライフサイクル において、beforeCreate と created フックのみが クライアントサイドとサーバーサイドの両方 で呼び出されることに注意してください。それ以外のすべてのフックはクライアントサイドでのみ呼び出されます。
> <a href="https://ja.nuxtjs.org/guide/plugins/" target="_blank">プラグイン</a>

### SSR

<ul>
  <li>nuxtServerInit</li>
  <li>plugins</li>
  <li>middleware</li>
  <li>asyncData</li>
  <li>fetch</li>
  <li>beforeCreate</li>
  <li>created</li>
</ul>

### CSR

<ul>
  <li>plugins</li>
  <li>beforeCreate</li>
  <li>created</li>
  <li>beforeMount</li>
  <li>mounted</li>
</ul>

<br>
参考:
- <a href="https://jp.vuejs.org/v2/guide/instance.html#%E3%82%A4%E3%83%B3%E3%82%B9%E3%82%BF%E3%83%B3%E3%82%B9%E3%83%A9%E3%82%A4%E3%83%95%E3%82%B5%E3%82%A4%E3%82%AF%E3%83%AB%E3%83%95%E3%83%83%E3%82%AF" target="_blank">ライフサイクルダイアグラム
  </a>
