from django.urls import path, re_path, include
from . import views

app_name = 'blog'

urlpatterns = [
    # Home
    path('', views.PostList.as_view(), name='post_list'),
    # About page
    path('about/', views.AboutView.as_view(), name='about'),
    #________________Post URLs_______________#
    # post Detail view
    re_path(r'^post/(?P<pk>[\d]+)$', views.PostDetailView.as_view(), name='post_detail'),
    # Post Create View
    path('post/new/', views.CreatePostView.as_view(), name='post_new'),
    # Post Update View
    re_path(r'^post/(?P<pk>[\d]+)/edit/$', views.PostUpdateView.as_view(), name='post_update'),
    # Post Draft list view
    path('drafts/', views.DraftListView.as_view(), name='post_draft_list'),
    # Post Delete View
    re_path(r'^post/(?P<pk>[\d]+)/remove/$', views.PostDeleteView.as_view(), name='post_remove'),
    # Post Publish View
    re_path(r'^post/(?P<pk>[\d]+)/publish/$', views.post_publish, name='post_publish'),
    #________________Comment URLs____________#
    re_path(r'^post/(?P<pk>[\d]+)/comment/$', views.add_comment_to_post, name='post_comment'),
    re_path(r'^comment/(?P<pk>[\d]+)/approve/$', views.comment_approve, name='comment_approve'),
    re_path(r'^comment/(?P<pk>[\d]+)/remove/$', views.comment_remove, name='comment_remove'),
]