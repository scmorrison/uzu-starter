uzu-starter (webpack example)
===========

[Uzu](https://github.com/scmorrison/uzu) + Webpack starter project.

![uzu-starter screenshot](https://raw.githubusercontent.com/scmorrison/uzu-starter/master/ss/uzu-starter-ss.png)

Getting started
===============

1. Install [uzu](https://github.com/scmorrison/uzu)
2. Clone this repository:
```
git clone https://github.com/scmorrison/uzu-starter
cd uzu-starter/webpack/
```
3. Install npm modules:
```
npm i
```
3. Start watch server with uzu
```
uzu watch
```

Folder structure
================

```
├── config.yml                    # Uzu config file (post_command triggers webpack command)
├── webpack.config.js             # Webpack config
├── package.json                  # npm package.json
├── .babelrc                      # babel configuration
├── i18n                          # Language translation files
│   ├── en.yml
├── pages                         # Each page becomes a .html file
│   ├── about.mustache
│   └── index.mustache
├── partials                      # Partials can be included in pages
│   ├── footer.mustache           # and themes
│   ├── head.mustache
│   ├── home.mustache
│   ├── jumbotron.mustache
│   ├── navigation.mustache
│   └── profiles.mustache
├── public                        # Static files / assets independant of theme (copied to /)
│   └── robots.txt
├── themes                        # Project themes
│   └── default
│       ├── assets                # Theme specific static files / assets (copied to /)
│       │   ├── apple-touch-icon.png
│       │   ├── browserconfig.xml
│       │   ├── css
│       │   │   ├── bootstrap.css
│       │   │   ├── bootstrap.css.map
│       │   │   ├── bootstrap.min.css
│       │   │   ├── bootstrap-theme.css
│       │   │   ├── bootstrap-theme.css.map
│       │   │   ├── bootstrap-theme.min.css
│       │   │   └── main.css
│       │   ├── favicon.ico
│       │   ├── fonts
│       │   │   ├── glyphicons-halflings-regular.eot
│       │   │   ├── glyphicons-halflings-regular.svg
│       │   │   ├── glyphicons-halflings-regular.ttf
│       │   │   └── glyphicons-halflings-regular.woff
│       │   ├── img
│       │   ├── initializr
│       │   ├── js
│       │   │   ├── main.js
│       │   │   └── vendor
│       │   │       ├── bootstrap.js
│       │   │       ├── bootstrap.min.js
│       │   │       ├── jquery-1.11.2.min.js
│       │   │       ├── modernizr-2.8.3-respond-1.4.2.min.js
│       │   │       └── npm.js
│       │   ├── tile.png
│       │   └── tile-wide.png
│       └── layout               # Theme layout file
│           └── layout.mustache
└── webpack                      # React app
    ├── components               
    │   └── Hello.js             # Hello component
    └── entry.js                 # React entry
```

Requirements
============

* [Uzu](https://github.com/scmorrison/uzu)
* [npm](https://nodejs.org/)
* [webpack](https://webpack.js.org/)

AUTHORS
=======

* [Sam Morrison](@samcns)

LICENSE
=======

uzu-starter is free software; you can redistribute it and/or modify it under the terms of the Artistic License 2.0. (Note that, unlike the Artistic License 1.0, version 2.0 is GPL compatible by itself, hence there is no benefit to having an Artistic 2.0 / GPL disjunction.) See the file LICENSE for details.

