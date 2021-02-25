from django import forms
from app_two import models

class SignUp(forms.ModelForm):
    class Meta:
        model = models.User
        # fields = "__all__"
        fields = ['first_name', 'last_name', 'email']