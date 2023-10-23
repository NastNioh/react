# Generated by Django 4.2.6 on 2023-10-18 09:50

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('jovena', '0021_checklist_espace_confine'),
    ]

    operations = [
        migrations.CreateModel(
            name='KPI',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateField(default=datetime.date.today)),
                ('Hommes', models.PositiveBigIntegerField()),
                ('Femmes', models.PositiveBigIntegerField()),
                ('Effectif_total', models.PositiveBigIntegerField()),
                ('Heures_travail', models.PositiveBigIntegerField()),
                ('Fatalite', models.PositiveBigIntegerField()),
                ('Accident', models.PositiveBigIntegerField()),
                ('Poste_adapte', models.PositiveBigIntegerField()),
                ('soins_medicaux', models.PositiveBigIntegerField()),
                ('Premiers_secours', models.PositiveBigIntegerField()),
                ('Presq_accident', models.PositiveBigIntegerField()),
                ('Heures_perdues', models.PositiveBigIntegerField()),
                ('Km_parcourus', models.PositiveBigIntegerField()),
                ('nombre_incident', models.PositiveBigIntegerField()),
                ('Nombre_acceleration_brusque', models.PositiveBigIntegerField()),
                ('Nombre_freinage', models.PositiveBigIntegerField()),
                ('Nombre_limitation', models.PositiveBigIntegerField()),
                ('Vitesse', models.PositiveBigIntegerField()),
                ('Nombre_malade', models.PositiveBigIntegerField()),
                ('Declare', models.PositiveBigIntegerField()),
                ('violation_regles', models.PositiveBigIntegerField()),
                ('Nombre_deversement', models.PositiveBigIntegerField()),
                ('Volume_impacte', models.PositiveBigIntegerField()),
                ('Zone_dechets', models.PositiveBigIntegerField()),
                ('Zone_stockage', models.PositiveBigIntegerField()),
                ('Dechet_inertes', models.PositiveBigIntegerField()),
                ('Dechet_organique', models.PositiveBigIntegerField()),
                ('Dechet_plastique', models.PositiveBigIntegerField()),
                ('Dechet_hydrocarbure', models.PositiveBigIntegerField()),
                ('Dechet_D3E', models.PositiveBigIntegerField()),
                ('Eaux_use', models.PositiveBigIntegerField()),
                ('Consommation_eau', models.PositiveBigIntegerField()),
                ('Consommation_carburant', models.PositiveBigIntegerField()),
                ('Consommation_electricire', models.PositiveBigIntegerField()),
                ('Valeur_limite', models.PositiveBigIntegerField()),
                ('X_sur_site', models.PositiveBigIntegerField()),
                ('X_aux_recepteurs', models.PositiveBigIntegerField()),
                ('X_sources_emission', models.PositiveBigIntegerField()),
                ('X_qualite_air', models.PositiveBigIntegerField()),
                ('X_sante', models.PositiveBigIntegerField()),
                ('X_securite', models.PositiveBigIntegerField()),
                ('X_environnement', models.PositiveBigIntegerField()),
                ('X_social', models.PositiveBigIntegerField()),
                ('Aucun_incident', models.PositiveBigIntegerField()),
                ('Nombre_tavailleur_migrant', models.PositiveBigIntegerField()),
                ('Nombre_travailleur_locaux', models.PositiveBigIntegerField()),
                ('Pourcentage_main_oeuvre', models.PositiveBigIntegerField()),
                ('Hebrgement_travailleur', models.PositiveBigIntegerField()),
                ('Duree_moyenne_contrat', models.PositiveBigIntegerField()),
                ('Logement_travailleurs', models.PositiveBigIntegerField()),
                ('Approvisionnement_eau', models.PositiveBigIntegerField()),
                ('Parties_prenantes', models.PositiveBigIntegerField()),
                ('Nombre_activite', models.PositiveBigIntegerField()),
                ('Induction_site', models.PositiveBigIntegerField()),
                ('exercice_urgence', models.PositiveBigIntegerField()),
                ('Toolbox', models.PositiveBigIntegerField()),
                ('Formation_specifique', models.PositiveBigIntegerField()),
                ('starter', models.PositiveBigIntegerField()),
                ('Nombre_outil', models.PositiveBigIntegerField()),
                ('Nombre_inspection', models.PositiveBigIntegerField()),
                ('Taux_frequence', models.PositiveBigIntegerField()),
                ('Taux_gravite', models.PositiveBigIntegerField()),
            ],
        ),
        migrations.DeleteModel(
            name='janvier',
        ),
    ]