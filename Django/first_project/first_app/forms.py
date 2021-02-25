from django import forms
from django.core import validators

# adding custom validator
# the parameter for custom validators should always be named 'value'.
def check_for_z(value):
    if value[0].lower() != 'z':         # checking if first letter is z.

        raise forms.ValidationError("Names need to start with Z!")

class FormName(forms.Form):

    name = forms.CharField(validators=[check_for_z,])                                # using custom validator.
    email = forms.EmailField()
    verify_email = forms.EmailField(label="Reenter email: ")
    text = forms.CharField(widget=forms.Textarea)
    # A hidden field to check for bots.
    botField = forms.CharField(required=False,
                                widget=forms.HiddenInput,
                                validators=[validators.MaxLengthValidator(0)])     # using built-in validators.

    # Using a clean method for form field validation
    """When using a validator in views, one way of creating a simple validation
    is to add a clean_ method. Add the exact field name of the field you want
    to validate after the underscore ie. 'clear_fieldName' """

    def clean_botField(self):
        """If a bot fills the hidden field(botField) raises an error"""

        botCatcher = self.cleaned_data['botField']      # getting the content in botField.

        if len(botCatcher) > 0:
            raise forms.ValidationError("Gottcha Bot!")

        return False

    # Validator That can validate all the fields at once.
    def clean(self):

        # Grabbing all form data
        all_clean_data = super().clean()
        email = all_clean_data['email']
        vmail = all_clean_data['verify_email']

        if email != vmail:
            raise forms.ValidationError("Emails do not match!")