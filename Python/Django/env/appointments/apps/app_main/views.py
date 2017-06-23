from __future__ import unicode_literals
from django.shortcuts import render,redirect
from django.contrib import messages
from .models import Appointment

def index(request):
    return render(request,'app_main/index.html')

def process(request):
    errs = []

    

    if len(errs) < 1:
        return redirect('/success')
    else:
        for err in errs:
            messages.add_message(request,messages.ERROR,err)

    return redirect('/')

def success(request):
    return render(request,'app_main/success.html')