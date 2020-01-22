from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from django.views.generic.edit import CreateView
from django.urls import reverse_lazy

from libgravatar import Gravatar

from .forms import UserForm


@login_required
def index(request):
    g = Gravatar(request.user.email)
    gravatar_img = g.get_image()

    return render(request, 'index.html', {'gravatar_img': gravatar_img})


class Register(CreateView):
    template_name = 'registration/registration.html'
    form_class = UserForm
    success_url = reverse_lazy('index-page')
