from django.shortcuts import render
from rest_framework import status
from rest_framework.views import APIView
from .models import cartItem
from .serializers import cartSerializer
from rest_framework.response import Response

# Create your views here.
class cartItems(APIView):
    def get(self,request):
        allItems = cartItem.objects.all()
        toJson = cartSerializer(allItems,many=True)
        # print(toJson)
        # print(toJson.data)
        return Response(toJson.data)

    def post(self,request):
        # Deserialize the data from the request's body using the serializer
        serializer = cartSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
