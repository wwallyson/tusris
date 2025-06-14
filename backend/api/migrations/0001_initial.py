# Generated by Django 5.2 on 2025-04-16 19:55

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('contenttypes', '0002_remove_content_type_name'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Categoria',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('tipo', models.CharField(choices=[('Festival', 'festival'), ('Natureza', 'natureza'), ('Arquitetônico', 'arquitetônico')], max_length=20, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='Cidade',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome', models.CharField(max_length=100)),
                ('uf', models.CharField(default='PI', max_length=2)),
                ('latitude', models.FloatField()),
                ('longetude', models.FloatField()),
            ],
        ),
        migrations.CreateModel(
            name='Avaliacao',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('objects_id', models.PositiveIntegerField()),
                ('nota', models.IntegerField()),
                ('comentario', models.TextField()),
                ('content_type', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='contenttypes.contenttype')),
                ('usuario', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='PontoTuristico',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('titulo', models.CharField(max_length=200)),
                ('imagem', models.ImageField(upload_to='pontos/')),
                ('descricao', models.TextField()),
                ('latitude', models.FloatField()),
                ('longitude', models.FloatField()),
                ('Categoria', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='pontos', to='api.categoria')),
                ('cidade', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='pontos', to='api.cidade')),
            ],
        ),
    ]
