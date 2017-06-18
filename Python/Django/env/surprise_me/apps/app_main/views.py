from __future__ import unicode_literals
from django.shortcuts import render,redirect
import random
import re
num_re = re.compile(r'^\d+$')

VALUES = [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6",
    "Item 7",
    "Item 8"
]

def index(request):
    return render(request,'app_main/index.html')

def process(request):
    if request.method == "POST":
        num = request.POST['surprise']
        if not num_re.match(num):#Idk how to flash in django yet
            return redirect('/')
        num = int(num)
        if num < 0 or num > len(VALUES): 
            return redirect('/')

        rnd = 0
        tmp = 0
        #Randomize values.
        for i in range(0,len(VALUES)):
            rnd = random.randint(0,len(VALUES)-1)
            tmp = VALUES[rnd]
            VALUES[rnd] = VALUES[i]
            VALUES[i]   = tmp
        # Chuck randomized values into a new li, up to the num they entered.
        li = []
        for i in range(0,num):
            li.append(VALUES[i])
        request.session['surprises'] = li

        return redirect('/results')
    else:
        return redirect('/')

def results(request):
    return render(request,'app_main/results.html')