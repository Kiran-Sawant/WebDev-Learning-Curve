from django.shortcuts import render
from basic_app import forms

from django.contrib.auth import authenticate, login, logout
from django.http import HttpResponseRedirect, HttpResponse
from django.urls import reverse
# used to create views requiring login.
from django.contrib.auth.decorators import login_required


# Create your views here.
def index(request):
    return render(request, 'basic_app/index.html')

@login_required             # This view will require login
def user_logout(request):
    # loggsout the user
    logout(request)
    return HttpResponseRedirect(reverse('index'))

@login_required
def special(request):
    """A view that requires user login."""
    return HttpResponse("You are logged in!")

def register(request):

    registered = False

    if request.method == 'POST':

        user_form = forms.UserForm(data=request.POST)                   # Creating User form
        profile_form = forms.UserProfileInfoForm(data=request.POST)     # Craeting UserProfileInfoForm

        if user_form.is_valid() and profile_form.is_valid():

            user = user_form.save()
            # encrypting the password field
            user.set_password(user.password)
            user.save()

            profile = profile_form.save(commit=False)
            # Defining the connection between ModelForms.
            profile.user = user

            if 'profile_pic' in request.FILES:      # if the user has uploaded a profile picture.
                profile.profile_pic = request.FILES['profile_pic']
            
            profile.save()

            registered = True
        
        else:       # If form is filled invalid
            print(user_form.errors, profile_form.errors)
        
    else:
        user_form = forms.UserForm()
        profile_form = forms.UserProfileInfoForm()

    return render(request, 'basic_app/registration.html', 
                    context={'user_form': user_form,
                             'profile_form': profile_form,
                             'registered': registered})

def user_login(request):

    if request.method == 'POST':
        # username is the name attribute.
        user_name = request.POST.get('username')
        password = request.POST.get('password')

        user = authenticate(request, username=user_name, password=password)

        if user:                # If authenticate passes a User instance.
            if user.is_active:
                # loggs-in the user
                login(request, user)
                return HttpResponseRedirect(reverse('index'))

            else:
                return HttpResponse("Account Inactive")
        
        else:                   # If authenticate doesn't pass a User instance.
            print("Someone tried to login & Failed")
            return HttpResponse('Invalid Login details!')

    else:
        return render(request, 'basic_app/login.html', {})