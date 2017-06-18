from __future__ import unicode_literals
from django.shortcuts import render,HttpResponse

def index(request):
    return render(request,'app_main/index.html')

def message(request):
    return HttpResponse('Hello from the server!')