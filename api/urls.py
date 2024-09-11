from django.urls import path
from . import views

urlpatterns = [
    path('Tasks/', views.index, name='index'),
    path('Tasks/<int:pk>/update/', views.updateTask, name='updateTask'),
    path('Tasks/<int:pk>/delete/', views.deleteTask, name='deleteTask'),
]
