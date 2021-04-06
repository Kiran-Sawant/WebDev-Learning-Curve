from django.shortcuts import (render, get_object_or_404, redirect)
from django.views.generic import (TemplateView, ListView,
                                    DetailView, CreateView,
                                    UpdateView, DeleteView)
from django.contrib.auth.decorators import login_required
from django.contrib.auth.mixins import LoginRequiredMixin
from django.utils import timezone
from django.urls import reverse_lazy

from . import models
from .forms import PostForm, CommentForm

# Create your views here.
class AboutView(TemplateView):
    template_name = 'blog/about.html'


class PostList(ListView):
    model = models.Post

    def get_queryset(self):
        # A queryset defines an SQL query
        # the statement below is equivalent to: SELECT * FROM Post WHERE published_date <= timezone.now()
        # __lte = less then or = to
        return models.Post.objects.filter(published_date__lte=timezone.now()).order_by('-published_date')
    

class PostDetailView(DetailView):
    model = models.Post


class CreatePostView(LoginRequiredMixin, CreateView):
    """A view foor creating Posts.
    The view requires Login, therefore LoginRequiredMixin is used
    login_url: URL to redirect if user is not logged in.
    redirect_field_name: redirect path after login."""

    login_url = '/login/'
    redirect_field_name = 'blog/post_detail.html'

    form_class = PostForm
    model = models.Post


class PostUpdateView(LoginRequiredMixin, UpdateView):
    login_url = '/login/'
    redirect_field_name = 'blog/post_detail.html'

    form_class = PostForm
    model = models.Post
    template_name = 'blog/post_form.html'


class PostDeleteView(LoginRequiredMixin, DeleteView):
    
    model = models.Post
    success_url = reverse_lazy('blog:post_list')

    template_name = 'blog/post_confirm_delete.html'


class DraftListView(LoginRequiredMixin, ListView):
    """A View for rendering a list of unpublished blogs."""

    login_url = '/login/'
    redirect_field_name = 'blog/post_list.html'

    model = models.Post
    template_name = "blog/post_draft_list.html"

    context_object_name = 'posts'

    def get_queryset(self):
        """SELECT * FROM Post WHERE published_date IS NULL"""
        return models.Post.objects.filter(published_date__isnull=True).order_by('create_date')


@login_required
def post_publish(request, pk):
    """A view for publishing the posts in Draft."""

    post = get_object_or_404(models.Post, pk=pk)
    post.publish()
    print('published')
    return redirect('blog:post_detail', pk=pk)

#######################################################
#           Function Based views for Comments         #
#######################################################

@login_required
def add_comment_to_post(request, pk):   # pk will be passed by comment button.
    """A view for adding comment."""

    post = get_object_or_404(models.Post, pk=pk)        # gets the instance of passed Model with passed pk

    if request.method == 'POST':        # If a comment is submmited.
        form = CommentForm(request.POST)
        if form.is_valid():
            comment = form.save(commit=False)
            comment.post = post         # associating post field in comment to this post instance.
            comment.save()
            return redirect('blog:post_detail', pk=post.pk)
    else:                               # comment page is requested.
        form = CommentForm()
    
    return render(request, 'blog/comment_form.html', {'form': form})

@login_required
def comment_approve(request, pk):
    comment = get_object_or_404(models.Comment, pk=pk)
    comment.approve()

    return redirect('blog:post_detail', pk=comment.post.pk)

@login_required
def comment_remove(request, pk):
    comment = get_object_or_404(models.Comment, pk=pk)
    post_pk = comment.post.pk 
    comment.delete()
    return redirect('blog:post_detail', pk=post_pk)
