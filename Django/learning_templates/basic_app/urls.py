from django.urls import path, include
from basic_app import views

# Global variable for finding app in template tagging.
# Django will look for the variable named 'app_name' in this module
app_name = 'basic_app'

urlpatterns = [
    path('', views.index, name='index'),
    path('relative/', views.relative, name='relative'),
    path('other/', views.other, name='other'),
]