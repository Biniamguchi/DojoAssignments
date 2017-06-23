from __future__ import unicode_literals
from django.shortcuts import render,redirect
from .models import Book

def index(request):
    ctx = {'books':Book.objects.all()}
    return render(request,'app_main/index.html',ctx)

def new_book(request):
    if request.method == "POST":
        Book.objects.create(
            title=request.POST['title'],
            author=request.POST['author'],
            category=request.POST['category']
        )

        return redirect('/')