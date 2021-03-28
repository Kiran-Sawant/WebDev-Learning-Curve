from rest_framework import serializers
from .models import Task

# Creating a model Serializer
class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task            # The model to serialize
        fields = '__all__'      # Field's to serialize