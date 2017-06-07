from django.shortcuts import render,redirect
from .models import Quiz
from .forms import QuizPost

def quiz_create(request):
	message = "クイズを入れてください。"
	if request.method == "POST":
		form = QuizPost(request.POST)
		
		if form.is_valid():
			quiz = form.save(commit=False)
			quiz.save()
			
			return redirect("quiz_detail",pk=quiz.id)
		else:
			message = "エラー：正しいフォームで入れなおせ！"
	else:
		form = QuizPost()
	return render(request,"quiz_edit.html",{"form":form,"message":message})

def quiz_detail(request,pk):
	# 子供__親の要素名という意味。子供__親１__親2__…__親nの要素名
	quizs = Quiz.objects.filter(user__id=pk)
	return render(request,"index.html",{"quizs":quizs})
