from django.forms import forms, ModelForm
from . import models

class StudentForm(ModelForm):

    class Meta:
        model = models.Student
        fields = "__all__"