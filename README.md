uzu-starter
===========

Basic [uzu](https://gitlab.com/samcns/uzu) starter project based on [HTML5 Boilerplate](https://html5boilerplate.com/).

Getting started
===============

1. Install [uzu](https://gitlab.com/samcns/uzu)
2. Clone this repository:
```
git clone https://gitlab.com/samcns/uzu-starter.git your-project-name
cd your-project-name/
```
3. Start watch server with uzu
```
uzu watch default # default is the layout name in layouts/
```

Folder structure
================

```
layouts
└── default.mustache  # Main layout, use with uzu: e.g. uzu watch default
partials              # Content partials
├── content.mustache
├── footer.mustache
├── head.mustache
├── jumbotron.mustache
└── navigation.mustache
assets                # Misc. assets (CSS, JS, images)
├── apple-touch-icon.png
├── browserconfig.xml
├── css
│   ├── bootstrap.css
│   ├── bootstrap.css.map
│   ├── bootstrap.min.css
│   ├── bootstrap-theme.css
│   ├── bootstrap-theme.css.map
│   ├── bootstrap-theme.min.css
│   └── main.css
├── favicon.ico
├── fonts
│   ├── glyphicons-halflings-regular.eot
│   ├── glyphicons-halflings-regular.svg
│   ├── glyphicons-halflings-regular.ttf
│   └── glyphicons-halflings-regular.woff
├── img
├── initializr
├── js
│   ├── main.js
│   └── vendor
│       ├── bootstrap.js
│       ├── bootstrap.min.js
│       ├── jquery-1.11.2.min.js
│       ├── modernizr-2.8.3-respond-1.4.2.min.js
│       └── npm.js
├── tile.png
└── tile-wide.png
```

Requirements
============

* [uzu](https://gitlab.com/samcns/uzu)

AUTHORS
=======

* [Sam Morrison](@samcns)
