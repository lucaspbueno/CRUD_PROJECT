from django.urls import path
from api_rest.views import equipment_views

urlpatterns = [
    path(
        'equipment/',
        equipment_views.EquipmentListAndCreateView.as_view(),
        name='equipment-get-post'
    )
]
