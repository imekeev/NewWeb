from rest_framework import routers
from django.urls import include, path
from .views import category_list, product_list, products_by_category,product_detail, category_detail, CategoryViewSet, ProductViewSet

router = routers.DefaultRouter()

router.register('categories', CategoryViewSet)
router.register('products', ProductViewSet)

urlpatterns = router.urls