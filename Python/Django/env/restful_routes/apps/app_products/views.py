from __future__ import unicode_literals
from django.shortcuts import render,redirect
from .models import Product

def index(request):
	return render(request,'app_products/index.html',{
		'products':Product.manager.all()
	})

def show(request,id):
	return render(request,'app_products/show.html',{
		'product':Product.manager.get(id=id)
	})

def new(request):
	return render(request,'app_products/new.html')

def create(request):
	errs = Product.manager.add(request)
	if errs:
		return redirect('/products/new')
	else:
		return redirect('/products')

def show(request,id):
	return render(request,'app_products/show.html',{
		'product':Product.manager.get(id=id)
	})

def edit(request,id):
	return render(request,'app_products/edit.html',{
		'product':Product.manager.get(id=id)
	})

def update(request,id):
	errs = Product.manager.edit(request,id)
	if errs:
		return redirect('/products/edit/'+id)
	else:
		return redirect('/products')

def destroy(request,id):
	Product.manager.get(id=id).delete()
	return redirect('/products')