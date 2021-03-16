from django.db import models
from django.utils import timezone
from django.urls import reverse

# Create your models here.
class Post(models.Model):
    author = models.ForeignKey('auth.User', on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    text = models.TextField()
    create_date = models.DateTimeField(default=timezone.now)
    published_date = models.DateTimeField(blank=True, null=True)

    def publish(self):
        self.published_date = timezone.now()
        self.save()

    def approve_comments(self):
        # Here comments is the relation name o fforeign key in Comments class
        return self.comments.filter(approve_comment=True)

    def get_absolute_url(self):
        """Returns URL for the instance after creating it.
        you can call this method directly in Templates"""
        
        return reverse("blog:post_detail", kwargs = {'pk': self.pk})

    def __str__(self):
        return self.title


class Comment(models.Model):
    # post to which the comment belongs.
    post = models.ForeignKey('blog.Post', related_name='comments', on_delete=models.CASCADE)
    author = models.CharField(max_length=200)
    text = models.TextField(max_length=2000)
    create_date = models.DateTimeField(default=timezone.now)
    approve_comment = models.BooleanField(default=False)

    def approve(self):
        self.approve_comment = True
        self.save()

    def get_absolute_url(self):
        return reverse('post_list')

    def __str__(self):
        return self.text