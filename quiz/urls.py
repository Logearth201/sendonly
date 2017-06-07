from django.conf.urls import include,url
from . import views

urlpatterns = [
	url(r"^$",views.quiz_create),
	url(r"^(?P<pk>[0-9]+)/$",views.quiz_detail),
]

