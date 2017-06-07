# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import django.utils.timezone
from django.conf import settings
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('lounge', '0006_remove_lounge_belongs_member'),
    ]

    operations = [
        migrations.CreateModel(
            name='LoungeMessage',
            fields=[
                ('id', models.AutoField(verbose_name='ID', primary_key=True, serialize=False, auto_created=True)),
                ('content', models.CharField(max_length=100)),
                ('created_date', models.DateTimeField(default=django.utils.timezone.now)),
                ('lounge', models.ForeignKey(to='lounge.Lounge')),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
