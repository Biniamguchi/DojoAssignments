from __future__ import unicode_literals
from django.shortcuts import render,redirect
from .models import Blog,Comment

def index(request):
    ctx = {
        'blogs':Blog.objects.all()
    }
    return render(request,'app_main/index.html',ctx)

def blog(request):
    Blog.objects.create(
        title=request.POST['title'],
        blog=request.POST['blog']
    )

    return redirect('/')