from django.db import models

# Create your models here.
class Topic(models.Model):
    top_name = models.CharField(max_length=240, unique=True)

    def __str__(self):
        return self.top_name

class WebPage(models.Model):

    # https://docs.djangoproject.com/en/3.1/topics/db/examples/many_to_one/
    topic = models.ForeignKey(Topic, on_delete=models.DO_NOTHING)
    name = models.CharField(max_length=264, unique=True)
    url = models.URLField(unique=True)

    def __str__(self):
        return self.name

class AccessRecord(models.Model):

    name = models.ForeignKey(WebPage, on_delete=models.DO_NOTHING)
    date= models.DateField()

    def __str__(self):
        return str(self.date)