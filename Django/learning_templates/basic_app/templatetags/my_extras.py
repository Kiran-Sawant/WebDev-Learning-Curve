"""In this script we create a custom template filter for our template."""

from django import template

# Creating an instance of Library class.
# It is used to register our custom filters and template tags.
register = template.Library()

# registering using decorators.
@register.filter(name='cut')
def cut(value, arg):
    """This cuts out all values of arg from the value string."""

    return value.replace(arg, '')

# Registering or custom filter.
# first arg is the name by which we will call it in template, & second is the function itself
#register.filter('cut', cut)