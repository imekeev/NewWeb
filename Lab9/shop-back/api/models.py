from django.db import models

# Create your models here.
class Category(models.Model):
    name = models.CharField('Name')
    description = models.TextField(blank=True)

    def __str__(self):
        return self.name
        
class Product(models.Model):
    name = models.CharField('Name')
    price = models.FloatField('Price')
    description = models.TextField('Description')
    count = models.IntegerField('Count')
    is_active = models.BooleanField('Active or not')
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='products')

    def __str__(self):
        return self.name