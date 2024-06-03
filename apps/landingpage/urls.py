from django.urls import path
from apps.landingpage.views import *

app_name = 'landingpage'

urlpatterns = [
    path('', Solicitudes.as_view(), name = 'lpage'),
    path('constitucion/', Constitucion.as_view(), name = 'constitucion'),
    path('infraestructura-y-servicios/', Infraestructura.as_view(), name = 'infraestructura'),
    path('inicio-de-operaciones/', Operaciones.as_view(), name = 'operaciones'),
    path('directorio-de-la-secretaria-para-el-desarrollo-economico-y-la-competitividad/', Directorio.as_view(), name = 'directorio'),
    path('autoridades-municipales/', Autoridades.as_view(), name = 'autoridades')

]