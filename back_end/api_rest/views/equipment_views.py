from api_rest.models.equipment_model import Equipment
from api_rest.serializers.equipment_serializer import EquipmentSerializer
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_object_or_404


# USANDO GENERICS
class EquipmentListAndCreateView(generics.ListCreateAPIView):
    queryset = Equipment.objects.all()
    serializer_class = EquipmentSerializer


# USANDO GENERICS
class EquipmentFindUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Equipment.objects.all()
    serializer_class = EquipmentSerializer

# USANDO APIVIEW


class EquipmentView(APIView):
    def get(self, request, pk=None):
        if pk:
            equipment = get_object_or_404(Equipment, pk=pk)
            serializer = EquipmentSerializer(equipment)

            return Response(serializer.data, status=status.HTTP_200_OK)

        all_equipments = Equipment.objects.all()
        serializer = EquipmentSerializer(instance=all_equipments, many=True)

        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        data = request.data

        serializer = EquipmentSerializer(data=data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        res = serializer.data
        return Response(res, status=status.HTTP_201_CREATED)

    def patch(self, request, pk=None):
        data = request.data

        equipment = get_object_or_404(Equipment, pk=pk)
        serializer = EquipmentSerializer(equipment, data=data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, pk=None):
        data = request.data

        equipment = get_object_or_404(Equipment, pk=pk)
        serializer = EquipmentSerializer(equipment, data=data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data, status=status.HTTP_200_OK)

    def delete(self, request, pk=None):
        if pk:
            equipment = get_object_or_404(Equipment, pk=pk)
            equipment.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        else:
            ids = request.data.get('ids', [])
            if not isinstance(ids, list):
                return Response(
                    {'error': 'IDs devem ser uma lista.'},
                    status=status.HTTP_400_BAD_REQUEST
                )
            if not ids:
                return Response(
                    {'error': 'Nenhum ID fornecido.'},
                    status=status.HTTP_400_BAD_REQUEST
                )
            deleted_count, _ = Equipment.objects.filter(id__in=ids).delete()
            return Response(
                {'deleted_count': deleted_count},
                status=status.HTTP_204_NO_CONTENT
            )
