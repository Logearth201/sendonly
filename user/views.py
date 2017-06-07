from django.shortcuts import render,redirect,get_object_or_404
from django.contrib.auth import login,logout,authenticate
from django.contrib.auth.models import User

def index(request):
	return render(request,"user/index.html",{"title":"タイトル"})

def login(request):
	form = UserForm()
	return render(request,"user/login.html",{})


