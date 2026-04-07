from django.urls import path
from api.views import ProductListCreateAPIView, ProductRetrieveUpdateDestroyAPIView

urlpatterns = [
    path('products/', ProductListCreateAPIView.as_view()),
    path('products/<int:id>/', ProductRetrieveUpdateDestroyAPIView.as_view()),
]