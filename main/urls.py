from django.urls import path, include
from django.contrib.auth import views as auth_views

from .views import index, Register

urlpatterns = [
    path('', index, name="index-page"),
    path('accounts/login/', auth_views.LoginView.as_view(), name='login'),
    path('register/', Register.as_view(), name='register'),
    path('logout/', auth_views.LogoutView.as_view(), name='logout'),
]
