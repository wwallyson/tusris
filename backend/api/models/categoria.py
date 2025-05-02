from django.db import models

class Categoria (models.Model):
    TIPO_CHOICES = [
        ('Festival', 'festival'),
        ('Natureza', 'natureza'),
        ('Arquitetônico', 'arquitetônico'),
    ]
    
    tipo = models.CharField(max_length=20, choices=TIPO_CHOICES, unique=True)

    def __str__(self):
        return self.tipo