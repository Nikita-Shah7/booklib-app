from rest_framework import serializers
from .models import *

class cartSerializer(serializers.ModelSerializer):
    # Model Meta is basically the inner class of your model class.
    class Meta:
        model = cartItem
        fields = ['book_id','title'] # enter only those fields that you want in ur JSON format
        # fields = '__all__'