from __future__ import unicode_literals
from django.shortcuts import render,redirect
from django.contrib import messages
from .models import User,Secret,Like
from datetime import datetime

def index(request):
    #request.session.clear()
    return render(request,'app_main/index.html')

def register(request):
    first_name = request.POST['first_name']
    last_name  = request.POST['last_name']
    email      = request.POST['email']
    password   = request.POST['password']
    confirm    = request.POST['confirm']

    reg = User.manager.register(
        first_name,last_name,email,password,confirm
    )

    if not reg[0]:
        for err in reg[1]:
            messages.add_message(request,messages.ERROR,err)
        return redirect('/')
    request.session['id'] = reg[1].id
    request.session['first_name'] = reg[1].first_name
    return redirect('/secrets')

def login(request):
    email      = request.POST['email']
    password   = request.POST['password']
    log        = User.manager.login(email,password)

    if not log[0]:
        for err in log[1]:
            messages.add_message(request,messages.ERROR,err)
        return redirect('/')
    request.session['id'] = log[1].id
    request.session['first_name'] = log[1].first_name
    return redirect('/secrets')

def secrets(request):
    if not 'id' in request.session:#no login bypass for you.
        messages.add_message(request,messages.ERROR,"You must be logged in to visit this page.")
        return redirect('/')

    secrets = Secret.manager.all().order_by('-id')[:5]

    ctx = {
        'secrets':secrets,
        'likes':Like.manager.all()
    }

    return render(request,'app_main/secrets.html',ctx)

def secrets_all(request):
    if not 'id' in request.session:#no login bypass for you.
        messages.add_message(request,messages.ERROR,"You must be logged in to visit this page.")
        return redirect('/')

    ctx = {
        'secrets':Secret.manager.all().order_by('-likes'),
        'likes':Like.manager.all(),
        'page':'Most Popular Secrets'
    }

    return render(request,'app_main/secrets.html',ctx)

def post(request):
    validPost = Secret.manager.validate(
        request.POST['text'],
        request.session['id']
    )

    if not validPost[0]:
        for err in validPost[1]:
            messages.add_message(request,messages.ERROR,err)
    else:
        messages.add_message(request,messages.SUCCESS,"Secret posted successfully.")
    return redirect('/secrets')

def delete_post(request,id):
    Secret.manager.get(id=id).delete()
    messages.add_message(request,messages.SUCCESS,"Secret deleted successfully.")
    return redirect('/secrets')

def like_post(request,id):
    #id is post/secret id.
    #request.session['id'] is user who liked the post.
    validLike = Like.manager.add(request.session['id'],id)

    if not validLike[0]:
        messages.add_message(request,messages.ERROR,'You no longer like this secret.')
    else:
        messages.add_message(request,messages.SUCCESS,'You liked a secret.')

    return redirect('/secrets')
