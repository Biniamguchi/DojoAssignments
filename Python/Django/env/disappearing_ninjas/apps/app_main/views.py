from __future__ import unicode_literals
from django.shortcuts import render,redirect

def index(request):
    return render(request,'app_main/index.html')

def allninjas(request):
    return render(request,'app_main/allninjas.html')

def ninjas(request,col):
    if col == 'red':
        col = 'raphael.jpg'
    elif col == 'blue':
        col = 'leonardo.jpg'
    elif col == 'purple':
        col = 'donatello.jpg'
    elif col == 'orange':
        col = 'michelangelo.jpg'
    else:
        col = 'notapril.jpg'

    ctx = {'col':col}

    return render(request,'app_main/ninjas.html',ctx)