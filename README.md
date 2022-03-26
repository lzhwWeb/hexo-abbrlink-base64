hexo-abbrlink-base64
This is an feature enhancement plugin for Hexo.

```
npm install hexo-abbrlink-base64 --save
```

Introduction
This plugin support multiple helpful features as blow (by now):

Auto generate abbrlink by filename, with base64.

Usage - abbrlink
hexo-enhancer will use base64(base64(title)) generate a short link for your post, you can use it in the permlink:
```
permalink: pages/:abbrlink.html
# permalink: :year/:abbrlink
# permalink: posts/:abbrlink.html
# permalink: :year/:month/:day/:abbrlink.html
```
With abbrlink, your post's url will really clean, like https://www.nirvana.net.cn/pages/0I5Q3YhhVV.html

License
MIT