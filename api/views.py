from django.http import JsonResponse
from .models import Category, Product

# 1. Список всех продуктов: /api/products/
def product_list(request):
    products = Product.objects.all()
    data = []
    for p in products:
        data.append({
            'id': p.id,
            'name': p.name,
            'price': p.price,
            'description': p.description,
            'count': p.count,
            'is_active': p.is_active,
            'category': p.category.name
        })
    return JsonResponse(data, safe=False)

# 2. Один продукт по ID: /api/products/<id>/
def product_detail(request, id):
    try:
        p = Product.objects.get(id=id)
        return JsonResponse({
            'id': p.id,
            'name': p.name,
            'price': p.price,
            'description': p.description,
            'count': p.count,
            'is_active': p.is_active
        })
    except Product.DoesNotExist:
        return JsonResponse({'error': 'Product not found'}, status=404)

# 3. Список всех категорий: /api/categories/
def category_list(request):
    categories = Category.objects.all()
    data = [{'id': c.id, 'name': c.name} for c in categories]
    return JsonResponse(data, safe=False)

# 4. Одна категория по ID: /api/categories/<id>/
def category_detail(request, id):
    try:
        c = Category.objects.get(id=id)
        return JsonResponse({'id': c.id, 'name': c.name})
    except Category.DoesNotExist:
        return JsonResponse({'error': 'Category not found'}, status=404)

# 5. Список продуктов конкретной категории: /api/categories/<id>/products/
def category_products(request, id):
    try:
        c = Category.objects.get(id=id)
        products = c.products.all() # Используем related_name из модели
        data = [{'id': p.id, 'name': p.name, 'price': p.price} for p in products]
        return JsonResponse(data, safe=False)
    except Category.DoesNotExist:
        return JsonResponse({'error': 'Category not found'}, status=404)