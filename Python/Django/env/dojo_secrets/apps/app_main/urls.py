from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$',views.index),
    url(r'^register$',views.register),
    url(r'^login$',views.login),

    url(r'^secrets$',views.secrets),
    url(r'^secrets/$',views.secrets_all),

    url(r'^post$',views.post),
    url(r'^delete_post/(?P<id>\d+)$',views.delete_post),
    url(r'^like_post/(?P<id>\d+)$',views.like_post)
]
