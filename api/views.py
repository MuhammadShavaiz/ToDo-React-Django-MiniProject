from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import TaskSerializer
from .models import Task

# Create your views here.
@api_view(['GET'])
def index(request):
    task = Task.objects.all()
    serializer = TaskSerializer(task, many = True)
    return Response(serializer.data)
