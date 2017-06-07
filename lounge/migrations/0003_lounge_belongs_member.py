# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('lounge', '0002_loungebelong_belongs_lounge'),
    ]

    operations = [
        migrations.AddField(
            model_name='lounge',
            name='belongs_member',
            field=models.IntegerField(default=0),
        ),
    ]
