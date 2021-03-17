from django.urls import path, re_path, include
from . import views

app_name = 'blog'

urlpatterns = [
    #________________Post URLs_______________#
    
    re_path(r'^(?P<pk>[\d]+)$', views.PostDetailView.as_view(), name='post_detail'),                # post Detail view
    path('new/', views.CreatePostView.as_view(), name='post_new'),                                  # Post Create View
    re_path(r'^(?P<pk>[\d]+)/edit/$', views.PostUpdateView.as_view(), name='post_update'),          # Post Update View
    re_path(r'^(?P<pk>[\d]+)/remove/$', views.PostDeleteView.as_view(), name='post_remove'),        # Post Delete View
    re_path(r'^(?P<pk>[\d]+)/publish/$', views.post_publish, name='post_publish'),                  # Post Publish View
    #________________Comment URLs____________#
    re_path(r'^(?P<pk>[\d]+)/comment/$', views.add_comment_to_post, name='post_comment'),
    re_path(r'^comment/(?P<pk>[\d]+)/approve/$', views.comment_approve, name='comment_approve'),
    re_path(r'^comment/(?P<pk>[\d]+)/remove/$', views.comment_remove, name='comment_remove'),
]