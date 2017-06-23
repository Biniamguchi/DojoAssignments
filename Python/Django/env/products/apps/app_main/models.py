from __future__ import unicode_literals
from django.db import models

class Product(models.Model):
    name        = models.CharField(max_length=255)
    description = models.CharField(max_length=255)
    weight      = models.IntegerField()
    cost        = models.IntegerField()
    category    = models.CharField(max_length=255)
