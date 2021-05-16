---
title: "NuxtのSSGしたサイトのパフォーマンスを最適化したい"
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

LightHouseのパフォーマ寸のスコア上げるためのチューニングでやったことをまとめていきます。

## 使用していないパッケージはnuxt.config.jsから外す
## 使用するパッケージでもバンドルサイズを小さくできないか検討する（見落としがち）
## webpで対応、または画像をgulp等で圧縮する
## fontfamilyの最適化を検討する（フォント重い）

