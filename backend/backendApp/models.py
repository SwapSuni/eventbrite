from django.db import models
import django.contrib.auth.models
from django.contrib.auth.base_user import BaseUserManager
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
# Create your models here.

# Event model 
class Event(models.Model):
    id=models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
    user=models.ForeignKey(on_delete=models.CASCADE, to='backendApp.User'),
    event_name=models.CharField(max_length=255),
    date=models.DateField(),
    time=models.TimeField(),
    location=models.CharField(blank=True, max_length=255),
    description=models.TextField(blank=True),
    url=models.URLField(blank=True),
    is_liked=models.BooleanField(default=False),

# User model 
# class User(models.Model):
#     id=models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
#     email=models.EmailField(unique=True),
#     first_name=models.CharField(max_length=50),
#     last_name=models.CharField(max_length=50),
#     passw=models.CharField(unique= True),
#     is_active=models.BooleanField(default=True),
#     is_staff=models.BooleanField(default=False),
#     is_superuser=models.BooleanField(default=False),

class AppUserManager(BaseUserManager):
    def create_user(self, email, password=None):
        if not email:
            raise ValueError('An email is required.')
        if not password:
            raise ValueError('A password is required.')
        email = self.normalize_email(email)
        user = self.model(email=email)
        user.set_password(password)
        user.save()
        return user
    def create_superuser(self, email, password=None):
        if not email:
            raise ValueError('An email is required.')
        if not password:
            raise ValueError('A password is required.')
        user = self.create_user(email, password)
        user.is_superuser = True
        user.save()
        return user


class AppUser(AbstractBaseUser, PermissionsMixin):
    user_id = models.AutoField(primary_key=True)
    email = models.EmailField(max_length=50, unique=True)
    username = models.CharField(max_length=50)
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']
    objects = AppUserManager()
    def __str__(self):
        return self.username