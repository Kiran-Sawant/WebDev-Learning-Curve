from django.db import models

# Create your models here.
class User(models.Model):
    """A model representing a user."""

    first_name = models.CharField(max_length=12)
    last_name = models.CharField(max_length=12)
    email = models.EmailField(unique=True)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"