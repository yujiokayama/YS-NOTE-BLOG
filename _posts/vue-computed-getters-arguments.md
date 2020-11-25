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
tags: ["Vue"]
---

sytleに**scoped**を指定し、子コンポーネントに適用したい場合や動的に生成されたコンテンツやv-htmlのディレクティブで展開されたHTMLには通常通りのセレクタの指定ができないので**ディープセレクタ**を指定する必要があります:sparkles:

## ディープセレクタの指定方法

### CSS

```css:css
.a >>> .b { /* ... */ }
```

CSSは上記の様に指定をすればOKですが、
SassやScssなどのプリプロセッサと動的に生成されたコンテンツは、<em>>>></em>
が使えないようです:sweat:<br>

CSSプリプロセッサと動的コンテンツでディープセレクタを指定する場合は
<em>/deep/</em>を指定する必要があります。<br><br>

### CSSプリプロセッサ＆動的コンテンツ

```css:scss
.a /deep/ {
  .b { /* ... */ }
}
```

この様に指定します。<br>
動的コンテンツにディープセレクタの指定をするルールは結構躓きやすい部分かと個人的に思いました。
Vueは公式ドキュメントが充実しているので、躓いたらまずは公式ドキュメントを見るように癖をつけましょう:eyes:

- 参考: <a href="https://vue-loader-v14.vuejs.org/ja/features/scoped-css.html" target="_blank">スコープ付き CSS</a>
