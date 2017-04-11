from cms.plugin_pool import plugin_pool
from cms.plugin_base import CMSPluginBase
from django.utils.translation import ugettext_lazy as _
from models import *
from django.contrib import admin


class <%= plugin_name %>Plugin(CMSPluginBase):
    model = <%= plugin_name %>
    module = _("Components")
    name = _("<%= plugin_name %>")
    render_template = "<%= html_name %>.html"
    allow_children = True  # This enables the parent plugin to accept child plugins
    # You can also specify a list of plugins that are accepted as children,
    # or leave it away completely to accept all
    # child_classes = ['<%= plugin_name %>ItemPlugin']

plugin_pool.register_plugin(<%= plugin_name %>Plugin)


