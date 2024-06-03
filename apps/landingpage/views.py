from django.shortcuts import render
from django.views.generic import TemplateView

# Create your views here.

class Solicitudes(TemplateView):
    template_name = 'pages/landingpage/index.html'

class Constitucion(TemplateView):
    template_name = 'pages/landingpage/constitucion.html'

class Infraestructura(TemplateView):
    template_name = 'pages/landingpage/infraestructura.html'

class Operaciones(TemplateView):
    template_name = 'pages/landingpage/operaciones.html'

class Directorio(TemplateView):
    template_name = 'pages/landingpage/directorio.html'

class Autoridades(TemplateView):
    template_name = 'pages/landingpage/autoridades.html'