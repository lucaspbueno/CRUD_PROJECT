from django.urls import path, include

urlpatterns = [
    path('', include('api_rest.urls.url'))
]
