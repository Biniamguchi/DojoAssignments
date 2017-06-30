from __future__ import unicode_literals
from django.db import models
from django.contrib import messages
from django.contrib.messages import get_messages

class ProductManager(models.Manager):
	def validate(self,request):
		if len(request.POST['name']) < 1:
			messages.error(request,'Product name cannot be blank')
		if len(request.POST['description']) < 1:
			messages.error(request,'Product description cannot be blank')
		if len(request.POST['price']) < 1:
			messages.error(request,'Product price cannot be blank.')

	def add(self,request):
		self.validate(request)
		if len(get_messages(request)) < 1:#if no errs.
			self.create(
				name        = request.POST['name'],
				description = request.POST['description'],
				price       = request.POST['price']
			)
		else:
			return len(get_messages(request))#if 0, redirect to products, else back to new.
 
	def edit(self,request,id):
		self.validate(request)
		if len(get_messages(request)) < 1:
			product             = self.get(id=id)
			product.name        = request.POST['name']
			product.description = request.POST['description']
			product.price       = request.POST['price']
			product.save()
		else:
			return len(get_messages(request))

class Product(models.Model):
	name        = models.CharField(max_length=255)
	description = models.TextField(max_length=1000)
	price       = models.FloatField()
	manager     = ProductManager()