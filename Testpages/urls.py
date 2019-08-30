from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='Testpages-home'),
    path('about/', views.about, name='Testpages-about'),
    path('smartclip/', views.smartclip, name='Testpages-smartclip'),
    path('spotx_1x1_GAM/', views.spotx_1x1_GAM, name='Testpages-spotx_1x1_GAM'),
    path('videoJS/', views.videoJS, name='Testpages-videoJS'),
]