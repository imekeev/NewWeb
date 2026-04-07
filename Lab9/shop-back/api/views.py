from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from django.http import JsonResponse
from .models import Product, Category
from .serializers import ProductSerializer, CategorySerializer

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    
    @action(detail=True, methods=['get'])
    def products(self, request, pk=None):
        category = self.get_object()
        products = Product.objects.filter(category=category)
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data) 

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    def create(self, request, *args, **kwargs):

        is_many = isinstance(request.data, list)
        

        serializer = self.get_serializer(data=request.data, many=is_many)
        serializer.is_valid(raise_exception=True)
        
        self.perform_create(serializer)
        
        return Response(serializer.data, status=status.HTTP_201_CREATED)


def product_list(request):
    
    products = Product.objects.all()
    data=[]
    for product in products:
        data.append({
            'id': product.id, 'name': product.name, 'price': product.price,
            'description': product.description, 'count': product.count,
            'is_active': product.is_active, 'category_id': product.category.id,
        })
    return JsonResponse(data,safe=False)

def product_detail(request, id):
    try:
        product = Product.objects.get(id=id)
        return JsonResponse({'id': product.id, 'name': product.name, 'price': product.price})
    except Product.DoesNotExist:
        return JsonResponse({'error' : 'Product not found'})

