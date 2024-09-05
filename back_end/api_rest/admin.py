from django.contrib import admin
from api_rest.models import equipment_model


@admin.register(equipment_model.Equipment)
class EquipmentAmin(admin.ModelAdmin):
    ...
