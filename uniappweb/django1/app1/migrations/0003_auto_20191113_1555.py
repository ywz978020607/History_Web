# Generated by Django 2.2.7 on 2019-11-13 07:55

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('app1', '0002_auto_20191113_1541'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='type',
            field=models.ForeignKey(db_constraint=False, default=0, on_delete=django.db.models.deletion.CASCADE, to='app1.Type'),
        ),
    ]
