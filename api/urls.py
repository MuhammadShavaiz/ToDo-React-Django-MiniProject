from django.urls import path
from . import views
urlpatterns = [
        path('Tasks/',views.index, name='index'),
        path('Tasks/<int:pk>/', views.updateTask, name='updateTask')
]
