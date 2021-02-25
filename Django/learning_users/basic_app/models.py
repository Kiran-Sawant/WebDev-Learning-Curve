from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class UserProfileInfo(models.Model):
    """A class that extends the in-built User model of django."""

    user = models.OneToOneField(User, on_delete=models.CASCADE)

    # adding fields to built-in User model.
    # blank=True means it is not necessary
    portfolio_site = models.URLField(blank=True)
    # profile_pics points to profile_pics directory in media folder.
    profile_pic = models.ImageField(upload_to='profile_pics', blank=True)

    def __str__(self):
        """return value will be displayed in the admins model registry.
        This class extends the built-in User model & username is declared in it."""
        return self.user.username