from django.db import models
from django.utils import timezone

class Quiz(models.Model):
	user = models.ForeignKey("auth.user")
	title = models.CharField(max_length=220)
	question_text = models.TextField()
	answer = models.CharField(max_length=500)
	created_date = models.DateTimeField(default=timezone.now)
	
	def __str__(self):
		return self.title

