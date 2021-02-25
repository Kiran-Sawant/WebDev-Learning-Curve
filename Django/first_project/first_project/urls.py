"""first_project URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
# importing our created view
from first_app import views

urlpatterns = [
    # routing projects URL patterns, to apps URL pattern
    path('app/', include('first_app.urls')),
    # passing our view, '' means root URL
    path('', views.index, name='index'),
    # 'admin/' will return the admin view if you type '/admin' after root URL
    path('admin/', admin.site.urls)
]
