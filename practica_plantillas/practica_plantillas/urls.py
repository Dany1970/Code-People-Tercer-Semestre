from django.contrib import admin
from django.urls import path
from . import views #aún no existe views.py, pero ya existirá

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.index, name='index'), #por ejemplo, ya veremos el nombre de las vistas
    path('portfolio/', views.portfolio, name='portfolio') #idem
 
]
