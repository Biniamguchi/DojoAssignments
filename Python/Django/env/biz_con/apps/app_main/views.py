from __future__ import unicode_literals
from django.shortcuts import render,redirect

def index(request):
	return render(request,'app_main/index.html')