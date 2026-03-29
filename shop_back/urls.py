from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    # Ссылка на админку
    path('admin/', admin.site.urls),
    
    #"Все запросы, начинающиеся на /api/,
    path('api/', include('api.urls')),
]