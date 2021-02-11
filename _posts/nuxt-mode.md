---
title: "Nuxt.jsの3つの構築モードについて"
excerpt: ""
coverImage: "/assets/images/posts/thumbnail/nuxt.png"
date: "2020-11-22T12:00:00.322Z"
author:
  name: Yuji Okayama
  picture: "/assets/blog/authors/"
ogImage:
  url: "/assets/images/posts/thumbnail/nuxt.png"
tags: ["Nuxt"]
---

## はじめに

NuxtにはUniversalモード（SSR）、SPAモード、静的サイトジェネレートなど様々なビルドの選択肢がありますが、各構築方法の理解があいまいだったのでまとめました:relaxed:

## SPA
SPAはSingle Page Applicationの略称です。
1ページをJavaScriptでレンダリングし、ページ遷移をしているかのようにみせるアプリケーションの構築方法。

### SPAの特徴
- サーバーサイドでレンダリングしてないので処理が高速。
- 初期ローディングにかかる時間がかかる。
- SEO対策に不向き（ページ毎にOGPなどの設定ができない）。

## SSR（ユニバーサルモード）
SSRはServer Side Renderingの略称です。
サーバーサイドでレンダリング(HTMLを生成する作業)をするので、PHP（WordPressなど）と同じようにサーバーサイド側でレンダリングした内容をブラウザにレスポンスを返すという構築方法。

### SSR（ユニバーサルモード）の特徴
- 検索エンジンのクローラが完全に描画されたページを解析するため、SEOが向上する。
- サーバーの準備にひと手間（node.jsが動作する環境）

## 静的サイトジェネレート

サイト訪問者全員が同じ内容のページを見るような、HTMLを事前に生成しても問題がないWebサイトの構築に向いている。
各ページのHTMLをあらかじめ生成するので、SSRよりもレスポンスが速いです。

### 静的サイトジェネレートの特徴
- 初期表示が速い
- SPAとは違い、OGPなどのメタ情報をページ毎に設定できる

## まとめ
制作するWebサイト・アプリケーションによって構築モードを選定する必要があるのでどれがいいかの一択ではなく、都度検討する必要があると思いました。
