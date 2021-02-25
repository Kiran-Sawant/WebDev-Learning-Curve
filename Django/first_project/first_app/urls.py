"""This script can be used to handle app specific URLs.
If your project is huge, consisting of many apps, it is better to rout the app specific URLs
to the apps specific urls.py URL mapper than to pile-up all the possible URL patterns in
the main urls.py mapper.
for instance, If your app is named 'banana' add, path('banana/', include('banana.urls'))
to the urlspattern list of the projects URL mapper."""

from django.contrib import admin
from django.urls import path
from first_app import views

urlpatterns = [
    # app specific URLs go here.
    # passing our view, '' means root URL
    path('', views.index, name='index'),
    # form view
    path('form/', views.form_view, name='form'),
    # 'admin/' will return the admin view if you type '/admin' after root URL
    path('admin/', admin.site.urls)
]