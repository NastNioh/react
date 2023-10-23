from .models import *
from rest_framework import serializers

class Checklist_stat_serializer(serializers.ModelSerializer):
    charge_station_service = serializers.ChoiceField(choices=[('Yes', 'Oui'), ('No', 'Non')])
    arret_distribution_total = serializers.ChoiceField(choices=[('Yes', 'Oui'), ('No', 'Non')])
    class Meta:
        model = Checklist_stat
        #fields = ['num_reclamation', 'panne_annoncee']
        fields = '__all__'

class Checklist_permis_feu_serializer(serializers.ModelSerializer):
    evacuation_substance = serializers.ChoiceField(choices=[('Yes','Oui'),('No','Non'),('Fait','Fait')])
    balisage_perimetre = serializers.ChoiceField(choices=[('Yes','Oui'),('No','Non'),('Fait','Fait')])
    protection_element = serializers.ChoiceField(choices=[('Yes','Oui'),('No','Non'),('Fait','Fait')])
    consignation_equipement = serializers.ChoiceField(choices=[('Yes','Oui'),('No','Non'),('Fait','Fait')])
    vidange = serializers.ChoiceField(choices=[('Yes','Oui'),('No','Non'),('Fait','Fait')])
    degazage = serializers.ChoiceField(choices=[('Yes','Oui'),('No','Non'),('Fait','Fait')])
    isolation_tuyauterie = serializers.ChoiceField(choices=[('Yes','Oui'),('No','Non'),('Fait','Fait')])
    demontage_tuyauterie = serializers.ChoiceField(choices=[('Yes','Oui'),('No','Non'),('Fait','Fait')])
    ecran = serializers.ChoiceField(choices=[('Yes','Oui'),('No','Non'),('Fait','Fait')])
    bache = serializers.ChoiceField(choices=[('Yes','Oui'),('No','Non'),('Fait','Fait')])
    extincteur = serializers.ChoiceField(choices=[('Yes','Oui'),('No','Non'),('Fait','Fait')])
    sable = serializers.ChoiceField(choices=[('Yes','Oui'),('No','Non'),('Fait','Fait')])
    ventilation = serializers.ChoiceField(choices=[('Yes','Oui'),('No','Non'),('Fait','Fait')])
    test_atmospherique = serializers.ChoiceField(choices=[('Yes','Oui'),('No','Non'),('Fait','Fait')])
    teneur_oxygene = serializers.ChoiceField(choices=[('Yes','Oui'),('No','Non'),('Fait','Fait')])
    teneur_LIE = serializers.ChoiceField(choices=[('Yes','Oui'),('No','Non'),('Fait','Fait')])
    
    class Meta:
        model = checklist_permis_feu_prest
        fields = '__all__'
        
class Checklist_excavation_serializer(serializers.ModelSerializer):
    type_excavation = serializers.ChoiceField(
        choices=[('mecanique', 'MECANIQUE'), ('manuelle', 'MANUELLE'), ('autre', 'AUTRE')]
    )

    class Meta:
        model = checklist_excavation
        fields = '__all__'
        
        
class Checklist_espace_confine_serializer(serializers.ModelSerializer):
    
    class Meta:
        model = checklist_espace_confine
        fields = '__all__'
        
class KPI_serializer(serializers.ModelSerializer):
    class Meta:
        model = KPI
        fields = '__all__'       


