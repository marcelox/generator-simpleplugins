# generator-simpleplugins [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> This Yeoman generates a simple Django CMS plugin. It is thought for Django CMS projects that need a simple and fast custom plugin initialization

## Installation

First, install [Yeoman](http://yeoman.io) and generator-simpleplugins using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-simpleplugins
```
## Usage in a Django CMS Project
Assuming your workspace (directory structure) looks (roughly!) like this:
```aidl
├── env/
├── mysite/
│   ├── scss/
│   ├── static/
│   ├── templates/
│   │   ├── base.html
│   ├── __init__.py
│   ├── settings.py
│   ├── urls.py
│   ├── wsgi.py
├── requirements.txt
├── plugins/   <-- here is your friend
├── manage.py
├── project.db
```

Inside the `plugins` directory in your Django CMS Project, create a new directory named after your plugin name: `mkdir myplugin`, and your tree will look like this:

```aidl
...
├── plugins/
│   ├── myplugin/
...
```

After `cd myplugin`, generate your new plugin with yeoman (please make sure to be inside the fresh myplugin directory):

```bash
yo simpleplugins
```

Don't forget to add your new plugin to `INSTALLED_APPS` in `settings.py`

## Getting To Know Yeoman

 * Yeoman has a heart of gold.
 * Yeoman is a person with feelings and opinions, but is very easy to work with.
 * Yeoman can be too opinionated at times but is easily convinced not to be.
 * Feel free to [learn more about Yeoman](http://yeoman.io/).

## License

MIT © [marcelo cordeiro correia](https://marcelo.berlin)


[npm-image]: https://badge.fury.io/js/generator-plugins.svg
[npm-url]: https://npmjs.org/package/generator-plugins
[travis-image]: https://travis-ci.org/marcelox/generator-plugins.svg?branch=master
[travis-url]: https://travis-ci.org/marcelox/generator-plugins
[daviddm-image]: https://david-dm.org/marcelox/generator-plugins.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/marcelox/generator-plugins
