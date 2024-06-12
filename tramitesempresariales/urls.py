from django.urls import path, include


urlpatterns = [
    path('', include('apps.landingpage.urls', namespace = 'lp')),
]
