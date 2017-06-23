from __future__ import unicode_literals
from django.db import models

class Book(models.Model):
    title = models.CharField(max_length=128)
    author = models.CharField(max_length=128)
    published_date = models.DateTimeField(auto_now_add=True)
    category = models.CharField(max_length=64)
    in_print = models.BooleanField()