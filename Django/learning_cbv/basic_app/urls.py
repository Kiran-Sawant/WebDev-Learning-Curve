from django.urls import path, re_path, include
from . import views

app_name = 'basic_app'

urlpatterns = [
    path('', views.SchoolListView.as_view(), name='list'),
    # pk for primary key is an attribute od DetailView
    # SchoolDetailView will receive a pk and return detail view of instance with that id
    re_path(r"^(?P<pk>[\d]+)$", views.SchoolDetailView.as_view(), name='detail'),
    path('student/', views.studentFormView.as_view(), name='student'),
    re_path(r"^create/$", views.SchoolCreateView.as_view(), name='create'),
    re_path(r'^update/(?P<pk>[\d]+)$', views.SchoolUpdateView.as_view(), name='update'),
    re_path(r'^delete/(?P<pk>[\d]+)$', views.SchoolDeleteView.as_view(), name='delete'),
]