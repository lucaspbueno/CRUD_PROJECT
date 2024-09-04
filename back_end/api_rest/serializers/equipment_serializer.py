from rest_framework import serializers
from api_rest.models.equipment_model import Equipment


class EquipmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Equipment
        fields = '__all__'
