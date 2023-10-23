from os import path
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register('Checklist_stat',views.Checklist_stat_viewset)
router.register('checklist_permis_feu',views.checklist_permis_feu_prest_viewset)
router.register('checklist_excavation',views.checklist_excavation_viewset)
router.register('checklist_espace_confine',views.checklist_espace_confine_viewset)
router.register('KPI',views.KPI_viewset)
router.register('Login',views.LoginView)
# router.register('kpi-list', views.KPIListView, basename='KPI')

urlpatterns = router.urls
