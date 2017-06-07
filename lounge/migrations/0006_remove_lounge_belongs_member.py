# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('lounge', '0005_auto_20170607_1447'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='lounge',
            name='belongs_member',
        ),
    ]
