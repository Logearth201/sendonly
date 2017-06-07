from django import forms
from .models import Quiz

class QuizPost(forms.ModelForm):
	class Meta:
		model = Quiz
		fields = ("user","title","question_text","answer",)

