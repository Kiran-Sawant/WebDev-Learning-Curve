"""myblog URL Configuration

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
from django.contrib.auth import views as au_views
from blog.views import (PostList, AboutView, DraftListView)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', PostList.as_view(), name='post_list'),                                 # Home page
    path('post/', include('blog.urls', namespace='blog')),                          # App URLs redirect
    path('about/', AboutView.as_view(), name='about'),                              # About page
    path('drafts/', DraftListView.as_view(), name='post_draft_list'),               # Draft List
    #_________________Authorization views_________________#
    path('accounts/login/', au_views.LoginView.as_view(), name='login'),
    path('accounts/logout/', au_views.LogoutView.as_view(), name='logout', kwargs={'next_page': ''}),
]
