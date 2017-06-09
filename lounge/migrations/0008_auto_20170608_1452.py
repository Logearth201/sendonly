# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('lounge', '0007_loungemessage'),
    ]

    operations = [
        migrations.AlterField(
            model_name='loungemessage',
            name='content',
            field=models.CharField(max_length=1000),
        ),
    ]
