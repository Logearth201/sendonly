from django.conf.urls import include,url
from . import views

urlpatterns = [
	url(r"^(?P<pk>[0-9]+)/$",views.lounge_detail),
	url(r"^(?P<pk>[0-9]+)/comment/$",views.lounge_comment_detail),
	url(r"^(?P<pk>[0-9]+)/user/$",views.lounge_belongs_user),
]
