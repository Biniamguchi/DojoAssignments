from __future__ import unicode_literals
from django.db import models

class Appointment(models.Model):
    date       = models.DateTimeField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

