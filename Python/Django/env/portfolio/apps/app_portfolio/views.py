from __future__ import unicode_literals
from django.shortcuts import render
# I guess this is all we're doing?
def index(request):
    return render(request,'app_portfolio/index.html')

def testimonials(request):
    return render(request,'app_portfolio/testimonials.html')