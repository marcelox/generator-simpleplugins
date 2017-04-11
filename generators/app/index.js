'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the first-class ' + chalk.red('Simple Django CMS plugin') + ' generator!'
    ));

    var prompts = [{
      type: 'input',
      name: 'plugin_name',
      message: 'Your plugin name:'
    }];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.plugin_name;
      this.props = props;
    }.bind(this));
  },

  writing: function () {

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };
    var proper_plugin_name = capitalizeFirstLetter(this.props.plugin_name);

    this.fs.copy(
      this.templatePath('migrations/'),
      this.destinationPath('migrations/')
    );
    this.fs.copy(
      this.templatePath('__init__.py'),
      this.destinationPath('__init__.py')
    );
    this.fs.copy(
      this.templatePath('js/plugin.js'),
      this.destinationPath('js/'+this.props.plugin_name+'.js')
    );
    this.fs.copyTpl(
      this.templatePath('scss/plugin.scss'),
      this.destinationPath('scss/'+this.props.plugin_name+'.scss'),
      {
        plugin_name : this.props.plugin_name
      }
    );
    this.fs.copyTpl(
      this.templatePath('cms_plugins.py'),
      this.destinationPath("cms_plugins.py"),
      {
        plugin_name : proper_plugin_name,
        html_name : this.props.plugin_name
      }
    );
    this.fs.copyTpl(
      this.templatePath('models.py'),
      this.destinationPath("models.py"),
      {
        plugin_name : proper_plugin_name
      }
    );
    this.fs.copyTpl(
      this.templatePath('templates/plugin.html'),
      this.destinationPath('templates/'+this.props.plugin_name+'.html'),
      {
        plugin_name : this.props.plugin_name
      }
    );
  },

  install: function () {
    this.spawnCommand('echo', ['Your plugin is done! Don\'t forget to add it to your settings.py!']);
  }
});
