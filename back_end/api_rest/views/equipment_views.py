from api_rest.models.equipment_model import Equipment
from api_rest.serializers.equipment_serializer import EquipmentSerializer
from rest_framework import generics


class EquipmentListAndCreateView(generics.ListCreateAPIView):
    queryset = Equipment.objects.all()
    serializer_class = EquipmentSerializer
