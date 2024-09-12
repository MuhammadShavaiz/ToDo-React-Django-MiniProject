from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .serializers import TaskSerializer
from .models import Task

# Create your views here.
@api_view(['GET'])
def index(request):
    tasks = Task.objects.all()
    serializer = TaskSerializer(tasks, many=True)
    return Response(serializer.data)

@api_view(['PUT'])
def updateTask(request, pk):
    task = get_object_or_404(Task, id=pk)
    data = request.data
    serializer = TaskSerializer(task, data=data, partial=True)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])
def deleteTask(request, pk):
    task = get_object_or_404(Task, id=pk)
    task.delete()
    return Response({'detail': 'Task deleted successfully'}, status=status.HTTP_204_NO_CONTENT)
@api_view(['POST'])
def createTask(request):
    serializer = TaskSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()  # Save the new task
        return Response(serializer.data, status=status.HTTP_201_CREATED)
