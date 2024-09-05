from django.urls import path
from api_rest.views import equipment_views

urlpatterns = [
    # URLS USANDO GENERIC
    # path(
    #     'equipment/',
    #     equipment_views.EquipmentListAndCreateView.as_view(),
    #     name='equipment-get-post'
    # ),
    # path(
    #     'equipment/<uuid:pk>/',
    #     equipment_views.EquipmentFindUpdateDestroyView.as_view(),
    #     name='equipment-find-update-delete'
    # ),

    # URLS USANDO APIVIEW
    path(
        'equipment/',
        equipment_views.EquipmentView.as_view(),
        name='equipment-get-post'
    ),
    path(
        'equipment/<uuid:pk>/',
        equipment_views.EquipmentView.as_view(),
        name='equipment-find'
    ),
    path(
        'equipment/bulk-delete/',
        equipment_views.EquipmentView.as_view(),
        name='equipment-bulk-delete'
    ),
]
