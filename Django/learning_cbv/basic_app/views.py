from django.shortcuts import render
from django.http import HttpResponse
from django.urls import reverse_lazy
from django.views.generic import (View, TemplateView, ListView, 
                                    DetailView, CreateView, UpdateView,
                                    DeleteView, FormView)

from . import models
from . import forms

#____________Function based view______________#
def index(request):
    return render(request, 'index.html')

#_______________class based view_________________#
class CBView(View):
    """A basic CBV that is based on the Base generic View"""

    def get(self, request):

        return HttpResponse("Class Based views are awsome!")

#___________TemplateViews________________#
"""TemplateViews are used to render a template. If you want to make a view that does
multiple operations you can use, multiple abstract inheritance."""

class IndexView(TemplateView):

    template_name = 'index.html'
    #template_engine = The Name of the template engine to use for 
    #                   loading the template (Django template Engine default).
    #response_class = Custom template loading or custom context object instantiation.
    #content_type = Default Django uses 'text/html'

    def get_context_data(self, **kwargs):
        """Function for passing context dictionary to Template. """

        # Overriding getter method in super class.
        # assigning get method to 'context' identifier.
        context = super().get_context_data(**kwargs)
        # Adding key-value pair to context dictionary
        context['inject'] = 'Basic Injection'

        return context

#__________________________ListView_________________________________#
"""List views are used to display a list of Model objects. e.g. A feed of blog post
summaries made by a user."""

class SchoolListView(ListView):
    """By default the class will return a list named school_list"""

    # This changes default behaviour 
    context_object_name = 'schools'
    model = models.School

    """We can provide a template path to the this view but the view expects a
    template path similar to 'app_name/model_name_list.html' (all lower-case).
    It can be overriden by passing a path to template_name attribute of 
    TemplateResponseMixin class, a super class of ListView defined in base.py
    in django.views.generic """
    # template_name = 'basic_app/school_list.html'

#_________________________DetailView__________________________#
"""A detail view is used to display details of a specific instance of a Model.
It takes an argument pk for primary key of the instance to be detailed.
e.g. A view to display entire blog when a user clicks on a summary blog on his feed."""

class SchoolDetailView(DetailView):

    context_object_name = 'school_detail'
    model = models.School

    """Similar to ListView, DetailView expects a template path app/model_detail.html
    which can be overridden using template_name attribute."""
    template_name = 'basic_app/school_detail.html'


#________________________FormView__________________________________#

class studentFormView(FormView):

    form_class = forms.StudentForm
    template_name = 'basic_app/student_form.html'
    success_url = reverse_lazy('basic_app:list')

    def form_valid(self, form):
        form.save()
        return super().form_valid(form)

#____________________________CRUD views_________________________________#
"""Create & Update views require a form template. By default they
will look for school_form (model_name_form.html [model name lower cased])
in local template directory."""

# CreateView___________________________#
"""Create view is used to create an instance of a Model.
e.g. Creating a Blog, User, group, etc."""
class SchoolCreateView(CreateView):

    # Model to create an instance of.
    model = models.School
    # Fields requeired to create an instance of this Model.
    fields = ('name', 'principal', 'location')

# UpdateView___________________________#
"""UpdateView is used to edit the fields of a pre-existing instance of a Model."""

class SchoolUpdateView(UpdateView):

    # Model that this view updates.
    model = models.School
    # Fields of the model that this view is allowed to update.
    fields = ('name', 'principal')
    

# DeleteView____________________________#
"""DeleteView requires a success_url attribute, that defines where to
redirect if delete operation is a success, here we redirect to school
list after a school is deleted."""
# A note on reverse_lazy() method
"""In Python, functions are not executed on import; classes are. Therefore while using CBVs
one should use reverse_lazy() method while assigning success_url attribute outside a method,
or else the URLs will be resolved the moment the views file is imported to the urls file and
not when a call for that view(SchoolDeleteView) is made, if so the view will always return a
wrong URL. reverse_lazy() method resolves URL only when a call for that view is made and not
when the module is imported.
https://stackoverflow.com/questions/48669514/difference-between-reverse-and-reverse-lazy-in-django"""
class SchoolDeleteView(DeleteView):

    model = models.School
    success_url = reverse_lazy('basic_app:list')
