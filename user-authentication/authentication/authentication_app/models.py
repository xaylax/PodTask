from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class UserProfileInfo(models.Model):
  user = models.OneToOneField(User,on_delete=models.CASCADE)
  credit_card = models.CharField(max_length=50)
  expiry = models.CharField(max_length=4)
  CVV = models.CharField(max_length=50)
  name_on_card = models.CharField(max_length=100)
  def __str__(self):
    return self.user.username
