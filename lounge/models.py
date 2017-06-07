from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User


class Lounge(models.Model):
	name = models.CharField(max_length=20)
	message = models.CharField(max_length=300)
	
	fond = models.IntegerField(default=0,db_index=True)
	type = models.IntegerField(default=0,db_index=True)
	created_date = models.DateTimeField(default=timezone.now)
	
	# saveする場合、ラウンジメンバーがいなければ強制削除させる
	# ラウンジのトランザクション
	def save(self):
		# メンバーがいないかどうかをサーチ
		users = LoungeBelong.objects.select_for_update().filter(belongs_lounge=self)
		if (len(users) == 0):
			super().delete()
		else:
			super().save()
	
	def __str__(self):
		return self.name

class LoungeBelong(models.Model):
	user = models.OneToOneField("auth.user")
	belongs_lounge = models.ForeignKey("Lounge",default=None)
	is_leader = models.BooleanField()
	
	# saveする場合、リーダーの数に制限がつく
	# transaction:for updateを用いる
	# 人数とかも、saveですべて管理する
	# 最初にLoungeを
	def __str__(self):
		return str(self.user) + ":" + str(self.belongs_lounge)

class LoungeMessage(models.Model):
	user = models.ForeignKey("auth.user",null=True,on_delete=models.SET_NULL)
	lounge = models.ForeignKey("Lounge")
	content = models.CharField(max_length=1000)
	created_date = models.DateTimeField(default=timezone.now)
