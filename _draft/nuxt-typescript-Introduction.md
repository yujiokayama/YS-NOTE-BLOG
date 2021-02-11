---
title: "既存のNuxt.jsプロジェクトにTypeScriptを導入する"
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

今回この記事を書こうとしたきっかけですが、先日 Vue.js の 3.0.0 ベータ版がリリースされました、どうやら TypeScript のサポートも充実しているとのことです。

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">We just released Vue 3.0.0-beta.1! Here&#39;s an overview from <a href="https://twitter.com/youyuxi?ref_src=twsrc%5Etfw">@youyuxi</a> on the status of 3.0 core and official tools &amp; libraries: <a href="https://t.co/7TP5ZMtjK4">https://t.co/7TP5ZMtjK4</a></p>&mdash; Vue.js (@vuejs) <a href="https://twitter.com/vuejs/status/1250890006060818440?ref_src=twsrc%5Etfw">April 16, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

私は普段、業務と個人の開発でVue/Nuxtを使用しているのですが、vue3.0.0 が正式にリリースされる前に少しでもTypeScript に慣れておきたいという思いででがんばりすぎない TypeScript の導入を検討していこうと思いました。

Vue.extendの手法を採用する
デコレータを使用しては全然書き方が変わるので無理しない


## TypeScript とは

## TypeScript を導入するメリット

・型を指定することでコードが読みやすくなる
・エディターの入力補完が強い
・リファクタリングしやすい

はい、いいことづくめですね
TypeScript を記述するメリットとして、「型宣言」ができることが最大の恩恵を受けられるのではないでしょうか、
どんなデータを渡せばよいか一目でわかる、エラーチェックができるので開発の効率があがります。

なので私はまず TypeScript の導入を、定数、変数、仮引数、戻り値に型指定する事のみでがんばりたいと思います。

## 型の種類
