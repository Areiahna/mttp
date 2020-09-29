from django.db import models
from mptt.models import MPTTModel, TreeForeignKey

# Create your models here.


class File(MPTTModel):
    # name = models.CharField(max_length=200, unique=True)
    new_file = models.FilePathField(
        path='/Users/spoon828/Desktop/q1', allow_folders=True, allow_files=True, blank=True)
    parent = TreeForeignKey('self', on_delete=models.CASCADE,
                            related_name="children", blank=True, null=True)

    class mpttMETA:
        order_insertion_by = ["new_file"]

    def __str__(self):
        return self.new_file
