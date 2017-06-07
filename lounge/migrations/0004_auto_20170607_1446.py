# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        ('lounge', '0003_lounge_belongs_member'),
    ]

    operations = [
        migrations.AlterField(
            model_name='loungebelong',
            name='user',
            field=models.ForeignKey(unique=True, to=settings.AUTH_USER_MODEL),
        ),
    ]
