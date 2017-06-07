from django.shortcuts import render,redirect,get_object_or_404
from django.contrib.auth import login,logout,authenticate
from django.contrib.auth.models import User
from .forms import UserForm

def user_index(request):
	return render(request,"user/index.html",{"title":"タイトル"})

def user_login(request):
	message = "パスワードを入力してください。"
	if request.method == "POST":
		try:
			username = request.POST["username"]
			password = request.POST["password"]
			user = authenticate(username=username,password=password)
			if user is not None:
				if user.is_active:
					login(request,user)
					return redirect("user.views.user_index")
				else:
					message = "アカウントがアクティブではありません。すでに削除された可能性があります。"
			else:
				message = "IDまたはパスワードが違います"
		except KeyError:
			message = "不正なサイトからのフォームでの転送が行われました。もう一度やり直してください。"
	return render(request,"user/login.html",{"message":message})

def user_logout(request):
	logout(request)
	return redirect("user.vies.user_index")
