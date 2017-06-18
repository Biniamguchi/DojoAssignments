from __future__ import unicode_literals
from django.shortcuts import render

def index(request):
    return render(request,'vinmymvc/index.html')

def show(request):
    return render(request,'vinmymvc/users.html')
