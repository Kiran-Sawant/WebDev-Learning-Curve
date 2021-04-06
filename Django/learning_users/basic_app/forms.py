from django import forms
from django.contrib.auth.models import User
from basic_app import models

# Base form.
class UserForm(forms.ModelForm):

    # modifying the predefined password field.
    password = forms.CharField(widget=forms.PasswordInput())

    class Meta():
        model = User
        fields = ('username', 'email', 'password')

# Custom Form
class UserProfileInfoForm(forms.ModelForm):

    class Meta():
        model = models.UserProfileInfo
        fields = ('portfolio_site', 'profile_pic') 
