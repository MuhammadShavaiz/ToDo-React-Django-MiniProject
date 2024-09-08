from django.urls import path
from . import views
urlpatterns = [
        path('Tasks/',views.index, name='index'),
]
