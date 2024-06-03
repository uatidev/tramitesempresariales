from django.urls import path, include


urlpatterns = [
    path('tramites-empresariales/', include('apps.landingpage.urls', namespace = 'lp')),
]
