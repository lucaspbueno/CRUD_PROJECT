import uuid
from django.db import models


class Equipment(models.Model):
    id = models.UUIDField(
        primary_key=True,
        default=uuid.uuid4,
        editable=False,
        unique=True,
        blank=False,
        null=False
    )
    tp_equipment = models.CharField(max_length=255)
    nm_manufacturer = models.CharField(max_length=255)
    nm_model = models.CharField(max_length=255)
    nr_serial = models.CharField(max_length=255, unique=True)
    dt_purchase = models.DateTimeField()
    vl_purchase = models.FloatField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = 'equipment'
        verbose_name_plural = 'equipment'

    def __str__(self):
        return self.nm_equipment
