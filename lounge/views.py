from django.shortcuts import render,redirect,get_object_or_404
from .models import Lounge,LoungeBelong,LoungeMessage
from django.contrib.auth.models import User
from django.http.response import HttpResponse
import json

def lounge_detail(request,pk):
	lounge = get_object_or_404(Lounge,id=pk)
	leader = LoungeBelong.objects.filter(belongs_lounge=lounge,is_leader=True)
	user_lounge_memo = LoungeBelong.objects.get(user=request.user)
	
	return render(request,"template.html",{"lounge":lounge})

def lounge_comment_detail(request,pk):
	lounge = get_object_or_404(Lounge,id=pk)
	user_lounge_memo = LoungeBelong.objects.get(user=request.user)
	
	if (user_lounge_memo.belongs_lounge.id == lounge.id):
		messages_raw = LoungeMessage.objects.filter(lounge=lounge).order_by("id").reverse()[:5]
	else:
		return HttpResponse("")
	
	# JSON形式で返す
	messages = []
	for data in messages_raw:
		messages.append({"data":data.content,"id":data.id,"user_id":data.user.id,"name":data.user.username})
	
	return HttpResponse(json.dumps(messages,ensure_ascii=False))

def lounge_belongs_user(request,pk):
	lounge = get_object_or_404(Lounge,id=pk)
	messages_raw = LoungeBelongs.objects.filter(lounge=lounge).order_by("id")

def lounge_comment_create(request,pk):
	if request.method == "POST":
		pass
	else:
		return HttpResponse("補遺貴様！GETでなんか送んなよ")


