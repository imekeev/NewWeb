from django.http import JsonResponse
from .models import Category, Product

def product_list(request):
    products = Product.objects.all()
    min_price = request.GET.get('min_price')
    max_price = request.GET.get('max_price')

    if min_price:
        products = products.filter(price__gte=min_price)
    if max_price:
        products = products.filter(price__lte=max_price)

    data = []
    for p in products:
        data.append({
            'id': p.id,
            'name': p.name,
            'price': p.price,
            'description': p.description,
            'count': p.count,
            'is_active': p.is_active,
            'category': p.category.name if p.category else None
        })
    return JsonResponse(data, safe=False)

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

def category_list(request):
    categories = Category.objects.all()
    data = [{'id': c.id, 'name': c.name} for c in categories]
    return JsonResponse(data, safe=False)

def category_detail(request, id):
    try:
        c = Category.objects.get(id=id)
        return JsonResponse({'id': c.id, 'name': c.name})
    except Category.DoesNotExist:
        return JsonResponse({'error': 'Category not found'}, status=404)

def category_products(request, id):
    try:
        c = Category.objects.get(id=id)
        products = c.products.all()
        data = [{'id': p.id, 'name': p.name, 'price': p.price} for p in products]
        return JsonResponse(data, safe=False)
    except Category.DoesNotExist:
        return JsonResponse({'error': 'Category not found'}, status=404)