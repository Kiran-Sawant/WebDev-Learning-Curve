import os

# needed to configure the settings for the project.
# It sets the OS environment variable 'DJANGO_SETTINGS_MODULE', to our passed default for this perticulaar module.
# 'DJANGO_SETTINGS_MODULE' environ var is used by django.setup() @line-10
# https://docs.python.org/3/library/stdtypes.html#dict.setdefault
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'first_project.settings')

import django
django.setup()

# FAKE POP SCRIPT
import random
from faker import Faker
from first_app.models import AccessRecord, WebPage, Topic

# Creating a fake value generator.
fakegen = Faker()
topics = ['Search', 'Social', 'Marketplace', 'News', 'Games']

def add_topic():
    """ Selects a random topic from topics list and creates a Topic
        object from our models module, saves the object & returns it."""

    t = Topic.objects.get_or_create(top_name=random.choice(topics))[0]
    t.save()
    return t

def populate(N=5):
    """populates the database with fake data."""

    for entry in range(N):

        # get a topic for entry as it is forign key to WebPage & acc_records.
        top = add_topic()

        # Create fake data for entry
        fake_url = fakegen.url()
        fake_date = fakegen.date()
        fake_company = fakegen.company()

        # Create the new webpage entry
        webpg = WebPage.objects.get_or_create(topic=top, name=fake_company, url=fake_url)[0]

        # Create fake data for access records
        acc_records = AccessRecord.objects.get_or_create(name=webpg, date=fake_date)[0]

if __name__ == "__main__":
    print("populating Scripts")
    # adding 20 fake records.
    populate(20)
    print("populating complete") 