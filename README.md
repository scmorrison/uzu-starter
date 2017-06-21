uzu-starter
===========

Basic [Uzu](https://gitlab.com/samcns/uzu) starter project based on [HTML5 Boilerplate](https://html5boilerplate.com/).

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
uzu watch
```

Folder structure
================

```
├── config.yml                    # Uzu config file
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
    └── robots.txt
└── themes                        # Project themes
    └── default
        ├── assets                # Theme specific static files / assets (copied to /)
        │   ├── apple-touch-icon.png
        │   ├── browserconfig.xml
        │   ├── css
        │   │   ├── bootstrap.css
        │   │   ├── bootstrap.css.map
        │   │   ├── bootstrap.min.css
        │   │   ├── bootstrap-theme.css
        │   │   ├── bootstrap-theme.css.map
        │   │   ├── bootstrap-theme.min.css
        │   │   └── main.css
        │   ├── favicon.ico
        │   ├── fonts
        │   │   ├── glyphicons-halflings-regular.eot
        │   │   ├── glyphicons-halflings-regular.svg
        │   │   ├── glyphicons-halflings-regular.ttf
        │   │   └── glyphicons-halflings-regular.woff
        │   ├── img
        │   ├── initializr
        │   ├── js
        │   │   ├── main.js
        │   │   └── vendor
        │   │       ├── bootstrap.js
        │   │       ├── bootstrap.min.js
        │   │       ├── jquery-1.11.2.min.js
        │   │       ├── modernizr-2.8.3-respond-1.4.2.min.js
        │   │       └── npm.js
        │   ├── tile.png
        │   └── tile-wide.png
        └── layout                # Theme layout file
            └── layout.mustache
```

Requirements
============

* [Uzu](https://gitlab.com/samcns/uzu)

AUTHORS
=======

* [Sam Morrison](@samcns)
