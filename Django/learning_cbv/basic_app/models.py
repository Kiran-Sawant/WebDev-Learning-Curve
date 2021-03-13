from django.db import models
from django.urls import reverse

# Create your models here.
class School(models.Model):
    """A Model representing a School"""

    name = models.CharField(max_length=100)
    principal = models.CharField(max_length=100)
    location = models.CharField(max_length=250)

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        """A URL to a page that represents this model."""

        # Creating reverse URL with view
        return reverse("basic_app:detail", kwargs={'pk':self.pk})


class Student(models.Model):
    """A model representing a student."""

    name = models.CharField(max_length=100)
    age = models.PositiveIntegerField()
    school = models.ForeignKey(School, on_delete=models.CASCADE, related_name='students', null=True)

    def __str__(self):
        return self.name
