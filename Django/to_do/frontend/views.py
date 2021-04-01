from django.shortcuts import render

# Create your views here.
def list_(request):
    return render(request, 'frontend/list.html')