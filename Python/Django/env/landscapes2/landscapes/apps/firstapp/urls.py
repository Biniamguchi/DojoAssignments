from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^landscape$', views.index),
    # -? runs even if user enters negative number
    url(r'^landscape/-?(?P<number>\d+)$',views.process),    

]
