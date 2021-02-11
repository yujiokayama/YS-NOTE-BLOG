---
title: "Vueのスタイル指定におけるディープセレクタについて"
excerpt: ""
coverImage: "/assets/images/posts/thumbnail/vue.png"
date: "2020-11-22T05:35:07.322Z"
author:
  name: Yuji Okayama
  picture: "/assets/blog/authors/"
ogImage:
  url: "/assets/images/posts/thumbnail/vue.png"
tags: ["Vue"]
---

<br>

sytleに**scoped**を指定し、子コンポーネントに適用したい場合や動的に生成されたコンテンツやv-htmlのディレクティブで展開されたHTMLには通常通りのセレクタの指定ができないので**ディープセレクタ**を指定する必要がある

## ディープセレクタの指定方法

### CSS

```
.a >>> .b { /* ... */ }
```

CSSは上記の様に指定をすればOKですが、
SassやScssなどのプリプロセッサと動的に生成されたコンテンツは、<em>>>></em>
が使えない<br>

CSSプリプロセッサと動的コンテンツでディープセレクタを指定する場合は
<em>/deep/</em>を指定する必要がある<br><br>

### CSSプリプロセッサ＆動的コンテンツ

```
.a /deep/ {
  .b { /* ... */ }
}
```

この様に指定する<br>
- 参考: <a href="https://vue-loader-v14.vuejs.org/ja/features/scoped-css.html" target="_blank">スコープ付き CSS</a>
