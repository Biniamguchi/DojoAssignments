from __future__ import unicode_literals
from django.shortcuts import render,redirect
from .models import Blog,Comment

def index(request):
    ctx = {
        'blogs':Blog.objects.all(),
    }

    return render(request,'app_main/index.html',ctx)

def blogs(request):
    Blog.objects.create(
        title=request.POST['title'],
        blog=request.POST['blog']
    )

    return redirect('/')

def comments(request,id):
    blog = Blog.objects.get(id=id)
    Comment.objects.create(blog_id=blog,comment=request.POST['comment'])

    return redirect('/')

