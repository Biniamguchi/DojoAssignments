from __future__ import unicode_literals
from django.shortcuts import render,redirect
import nltk
import re
sen_re = re.compile(r'^[A-Za-z]')

def index(request):
    return render(request,'app_main/index.html')

def success(request):
    return render(request,'app_main/success.html')

def process(request):
    if request.method == "POST":
        sen = request.POST['sentence']
        err = []
        if len(sen) < 1:
            err.append('Sentence cannot be blank.')
        if not sen_re.match(sen):
            print "NO MATCH"
            err.append('Sentence must contain A-Z and a-z characters only.')

        if len(err) >= 1:
            return redirect('/')
        else:
            tok = tokenize(sen)
            return redirect('/success')