from rest_framework import serializers
from api_rest.models.equipment_model import Equipment


class EquipmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Equipment
        fields = '__all__'

    def validate_tp_equipment(self, value):
        if len(value) < 3:
            raise serializers.ValidationError(
                'tp_equipment deve ter no mínimo 3 letras;'
            )

        return value
