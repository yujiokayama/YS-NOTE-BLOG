---
title: "computedとvuexのgettersで引数を渡す方法"
excerpt: ""
coverImage: "/assets/images/posts/thumbnail/vue_nuxt.png"
date: "2020-11-22T05:35:07.322Z"
author:
  name: Yuji Okayama
  picture: "/assets/blog/authors/joe.jpeg"
ogImage:
  url: "/assets/images/posts/thumbnail/vue_nuxt.png"
---

sytleに**scoped**を指定し、子コンポーネントに適用したい場合や動的に生成されたコンテンツやv-htmlのディレクティブで展開されたHTMLには通常通りのセレクタの指定ができないので**ディープセレクタ**を指定する必要があります:sparkles: