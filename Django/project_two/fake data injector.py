"""Inserts fake data into models of app two using faker module."""

import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'project_two.settings')

import django
django.setup()

# import random
from faker import Faker
from app_two.models import User

fakegen = Faker()

def populator(records=5):
    """Populates the model with passed number of records."""

    for i in range(records):

        f_name = fakegen.first_name()
        l_name = fakegen.last_name()
        mail = fakegen.ascii_email()

        User.objects.get_or_create(first_name=f_name, last_name=l_name, email=mail)[0]

if __name__ == '__main__':
    print("starting to populate")
    populator(20)
    print("populating complete")