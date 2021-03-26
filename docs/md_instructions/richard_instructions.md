---
id: richard-instructions
title: richard instructions
slug: /
---

## to add a doc page:

1. If you want the docs to go in a sub dir, create the sub dir
1. create a .md or .mdx file with whatever name you want
1. Add the metadata at the top following this pattern:
   
   <pre>
   <span>---</span>
   id: richard-instructions
   title: richard instructions
    ---</pre>
1. go to sidebars.js and add a new item to the sidebar following the patterns now demonstrated

## Basic md cookbook

# level one header
## level two header
### level three header
#### ...

Additionally lv1 header
========
also lv2
------

* this is a bullet point list
    * this is how you nest
+ also
- additionally this also works

1. ordered lists
   
    this is content for this list item
1. are done this way

* you can 
    1. mix and match

*italics*
**bold**

To do paragraphs,
you need to add one 

extra line break.
> Like this you can do quotes

do not forget<\br> you can add html here. but it seems that for self-closing tags you need to add the \

`code can be done this way`


![Adding images. this is alt](../../static/img/logo.jpg  "is title")

[this is a link ](http://google.com)

| this | is a | table|
|---- | ---- | ------ |
| this is the next| row| wow|

:::tip
like [this](https://docusaurus.io/docs/markdown-features/admonitions) you can add warnings, alerts or tooltips
:::