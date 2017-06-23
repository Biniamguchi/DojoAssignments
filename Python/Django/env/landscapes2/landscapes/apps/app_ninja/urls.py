from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^ninja$',views.index),
    url(r'^ninja/process/([1-4])$',views.process)
]
