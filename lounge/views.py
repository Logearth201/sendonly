from django.shortcuts import render,redirect,get_objects_or_404
from .models import Lounge,LoungeBelong,LoungeMessage

def lounge_show(request,pk):
	lounge = get_objects_or_404(Lounge,id=pk)
	leader = LoungeBelong.objects.get(belongs_lounge=self,is_leader=True)
	user_lounge_memo = LoungeBelong.objects.get(self,user=request.user)
	user_lounge_memo = User.objects.get(id=1)
	
	# 同じラウンジに属していれば、コメントを見ることができる
	if user_lounge_memo.belongs_lounge.id == lounge.id
		messages = LoungeMessage.filter(lounge=self)
	
	return render(request,"lounge_index.html",{"lounge":lounge,"messages":messages})



