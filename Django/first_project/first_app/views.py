from django.shortcuts import render
from django.http import HttpResponse        # class for creating http response
from first_app.models import Topic, WebPage, AccessRecord
from first_app import forms

# Create your views here.
# creating a function based view.
# each view must take at least one argument
# each view must return a HttpResponse
def index(request):
    webpages_list = AccessRecord.objects.order_by('date')
    date_dict = {'access_records': webpages_list}

    return render(request, template_name='first_app/index.html', context=date_dict)

def form_view(request):

    form = forms.FormName()

    if request.method == 'POST':
        # passing in the posted values to our form.
        form = forms.FormName(request.POST)

        if form.is_valid():
            print(f"Name: {form.cleaned_data['name']}")
            print(f"Email: {form.cleaned_data['email']}")
            print(f"Text: {form.cleaned_data['text']}")

    return render(request, 'first_app/form_page.html', {'form': form})