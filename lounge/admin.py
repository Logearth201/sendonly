from django.contrib import admin
from .models import Lounge
from .models import LoungeBelong,LoungeMessage

# Register your models here.
admin.site.register(Lounge)
admin.site.register(LoungeBelong)
admin.site.register(LoungeMessage)
