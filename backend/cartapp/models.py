from django.db import models

# Create your models here.
class cartItem(models.Model):
    book_id = models.CharField(max_length=20,primary_key=True)
    title = models.CharField(max_length=100)

    def __str__(self) -> str:
        return self.book_id;
