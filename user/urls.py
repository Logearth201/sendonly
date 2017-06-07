from django.conf.urls import url
from . import views

urlpatterns = [
	url("^$",views.user_index),
	url("^login$",views.user_login),
]
