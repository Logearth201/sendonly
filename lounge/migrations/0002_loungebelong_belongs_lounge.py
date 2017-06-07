# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('lounge', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='loungebelong',
            name='belongs_lounge',
            field=models.ForeignKey(default=None, to='lounge.Lounge'),
        ),
    ]
