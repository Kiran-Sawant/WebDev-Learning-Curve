from django.shortcuts import render
from django.http import HttpResponse
from app_two.models import User
from app_two import forms

# Create your views here.
def home(request):

    contents = {'content': "Killer Bean Forever"}

    return render(request, 'app_two/index.html', context=contents)

def help(request):
    return HttpResponse("<h1>Help page</h1>")

def users(request):
    
    user_info = User.objects.order_by('first_name')

    context_dict = {'access_records': user_info}

    return render(request, 'app_two/users.html', context=context_dict)

def sign_up(request):
    """A view for sign-up page"""

    sign_form = forms.SignUp()

    if request.method == 'POST':
        sign_form = forms.SignUp(request.POST)

        # Checking validation.
        if sign_form.is_valid():
            sign_form.save(commit=True)

            # return homepage on submit.
            return home(request)
        else:
            print("invalid Form")

    return render(request, r"app_two/signup.html", context={'form': sign_form})