from __future__ import unicode_literals
from django.shortcuts import render,redirect

def index(request):
    return render(request,'app_portfolio/index.html',{'style':'static/style.css'})

def projects(request):
    return render(request,'app_portfolio/projects.html',{'style':'static/style.css'})

def about(request):
    return render(request,'app_portfolio/about.html',{'style':'static/style.css'})

def testimonials(request):
    return render(request,'app_portfolio/testimonials.html',{'style':'static/style.css'})

def process(request):
    if request.method == "POST":
        print request.POST
    redirect('/')