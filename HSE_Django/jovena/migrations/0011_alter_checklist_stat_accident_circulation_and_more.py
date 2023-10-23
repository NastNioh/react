# Generated by Django 4.2.6 on 2023-10-17 09:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('jovena', '0010_alter_checklist_stat_panne_annoncee'),
    ]

    operations = [
        migrations.AlterField(
            model_name='checklist_stat',
            name='accident_circulation',
            field=models.BooleanField(default=False, null=True),
        ),
        migrations.AlterField(
            model_name='checklist_stat',
            name='aide_circulation',
            field=models.BooleanField(default=False, null=True),
        ),
        migrations.AlterField(
            model_name='checklist_stat',
            name='appareil_respiratoire',
            field=models.BooleanField(default=False, null=True),
        ),
        migrations.AlterField(
            model_name='checklist_stat',
            name='arret_autre_travaux',
            field=models.BooleanField(default=False, null=True),
        ),
        migrations.AlterField(
            model_name='checklist_stat',
            name='arret_distribution_total',
            field=models.BooleanField(default=False, null=True),
        ),
        migrations.AlterField(
            model_name='checklist_stat',
            name='arret_travaux_depotage',
            field=models.BooleanField(default=False, null=True),
        ),
        migrations.AlterField(
            model_name='checklist_stat',
            name='asphyxie',
            field=models.BooleanField(default=False, null=True),
        ),
        migrations.AlterField(
            model_name='checklist_stat',
            name='autre_lesion',
            field=models.BooleanField(default=False, null=True),
        ),
        migrations.AlterField(
            model_name='checklist_stat',
            name='balisage_perimetre',
            field=models.BooleanField(default=False, null=True),
        ),
        migrations.AlterField(
            model_name='checklist_stat',
            name='blessure',
            field=models.BooleanField(default=False, null=True),
        ),
        migrations.AlterField(
            model_name='checklist_stat',
            name='brulure',
            field=models.BooleanField(default=False, null=True),
        ),
        migrations.AlterField(
            model_name='checklist_stat',
            name='categorie_reclamation',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='checklist_stat',
            name='charge_station_service',
            field=models.BooleanField(default=False, null=True),
        ),
        migrations.AlterField(
            model_name='checklist_stat',
            name='chauffage_soudage',
            field=models.BooleanField(default=False, null=True),
        ),
        migrations.AlterField(
            model_name='checklist_stat',
            name='chute_hauteur',
            field=models.BooleanField(default=False, null=True),
        ),
        migrations.AlterField(
            model_name='checklist_stat',
            name='chute_objet',
            field=models.BooleanField(default=False, null=True),
        ),
        migrations.AlterField(
            model_name='checklist_stat',
            name='chute_plain_pied',
            field=models.BooleanField(default=False, null=True),
        ),
        migrations.AlterField(
            model_name='checklist_stat',
            name='client',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='checklist_stat',
            name='consignation_electrique',
            field=models.BooleanField(default=False, null=True),
        ),
        migrations.AlterField(
            model_name='checklist_stat',
            name='consignation_equipement',
            field=models.BooleanField(default=False, null=True),
        ),
        migrations.AlterField(
            model_name='checklist_stat',
            name='deplacement_site',
            field=models.BooleanField(default=False, null=True),
        ),
        migrations.AlterField(
            model_name='checklist_stat',
            name='eboulement',
            field=models.BooleanField(default=False, null=True),
        ),
        migrations.AlterField(
            model_name='checklist_stat',
            name='echaffaudage',
            field=models.BooleanField(default=False, null=True),
        ),
        migrations.AlterField(
            model_name='checklist_stat',
            name='electrocution',
            field=models.BooleanField(default=False, null=True),
        ),
        migrations.AlterField(
            model_name='checklist_stat',
            name='emission_gaz',
            field=models.BooleanField(default=False, null=True),
        ),
        migrations.AlterField(
            model_name='checklist_stat',
            name='entreprise_intervenante',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='checklist_stat',
            name='epandage',
            field=models.BooleanField(default=False, null=True),
        ),
        migrations.AlterField(
            model_name='checklist_stat',
            name='explosion',
            field=models.BooleanField(default=False, null=True),
        ),
        migrations.AlterField(
            model_name='checklist_stat',
            name='extincteur_adapte',
            field=models.BooleanField(default=False, null=True),
        ),
        migrations.AlterField(
            model_name='checklist_stat',
            name='extincteur_adapte2',
            field=models.BooleanField(default=False, null=True),
        ),
        migrations.AlterField(
            model_name='checklist_stat',
            name='fermeture_station',
            field=models.BooleanField(default=False, null=True),
        ),
        migrations.AlterField(
            model_name='checklist_stat',
            name='fouille_mannuelle',
            field=models.BooleanField(default=False, null=True),
        ),
        migrations.AlterField(
            model_name='checklist_stat',
            name='grenaillage_sablage',
            field=models.BooleanField(default=False, null=True),
        ),
        migrations.AlterField(
            model_name='checklist_stat',
            name='harnai',
            field=models.BooleanField(default=False, null=True),
        ),
        migrations.AlterField(
            model_name='checklist_stat',
            name='incendie',
            field=models.BooleanField(default=False, null=True),
        ),
        migrations.AlterField(
            model_name='checklist_stat',
            name='incident_cable',
            field=models.BooleanField(default=False, null=True),
        ),
        migrations.AlterField(
            model_name='checklist_stat',
            name='incident_reseau',
            field=models.BooleanField(default=False, null=True),
        ),
        migrations.AlterField(
            model_name='checklist_stat',
            name='information_personnel',
            field=models.BooleanField(default=False, null=True),
        ),
        migrations.AlterField(
            model_name='checklist_stat',
            name='interdiction_de_fumer',
            field=models.BooleanField(default=False, null=True),
        ),
        migrations.AlterField(
            model_name='checklist_stat',
            name='intoxication',
            field=models.BooleanField(default=False, null=True),
        ),
        migrations.AlterField(
            model_name='checklist_stat',
            name='localite',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='checklist_stat',
            name='manutention_levage',
            field=models.BooleanField(default=False, null=True),
        ),
        migrations.AlterField(
            model_name='checklist_stat',
            name='mise_terre',
            field=models.BooleanField(default=False, null=True),
        ),
        migrations.AlterField(
            model_name='checklist_stat',
            name='operation_piste',
            field=models.BooleanField(default=False, null=True),
        ),
        migrations.AlterField(
            model_name='checklist_stat',
            name='outillage',
            field=models.BooleanField(default=False, null=True),
        ),
        migrations.AlterField(
            model_name='checklist_stat',
            name='percage_moulage_decoupage',
            field=models.BooleanField(default=False, null=True),
        ),
        migrations.AlterField(
            model_name='checklist_stat',
            name='permis_specifique',
            field=models.BooleanField(default=False, null=True),
        ),
        migrations.AlterField(
            model_name='checklist_stat',
            name='port_EPI',
            field=models.BooleanField(default=False, null=True),
        ),
        migrations.AlterField(
            model_name='checklist_stat',
            name='port_EPI_2',
            field=models.BooleanField(default=False, null=True),
        ),
        migrations.AlterField(
            model_name='checklist_stat',
            name='projection_etincelle',
            field=models.BooleanField(default=False, null=True),
        ),
        migrations.AlterField(
            model_name='checklist_stat',
            name='renseignement_reseau_aerien',
            field=models.BooleanField(default=False, null=True),
        ),
        migrations.AlterField(
            model_name='checklist_stat',
            name='renseignement_reseaux_enterre',
            field=models.BooleanField(default=False, null=True),
        ),
        migrations.AlterField(
            model_name='checklist_stat',
            name='site',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='checklist_stat',
            name='test_gaz',
            field=models.BooleanField(default=False, null=True),
        ),
        migrations.AlterField(
            model_name='checklist_stat',
            name='travail_chaud',
            field=models.BooleanField(default=False, null=True),
        ),
        migrations.AlterField(
            model_name='checklist_stat',
            name='travail_engin',
            field=models.BooleanField(default=False, null=True),
        ),
        migrations.AlterField(
            model_name='checklist_stat',
            name='travail_equipement',
            field=models.BooleanField(default=False, null=True),
        ),
        migrations.AlterField(
            model_name='checklist_stat',
            name='travail_espace',
            field=models.BooleanField(default=False, null=True),
        ),
        migrations.AlterField(
            model_name='checklist_stat',
            name='travail_hauteur',
            field=models.BooleanField(default=False, null=True),
        ),
        migrations.AlterField(
            model_name='checklist_stat',
            name='travail_tuyauterie',
            field=models.BooleanField(default=False, null=True),
        ),
        migrations.AlterField(
            model_name='checklist_stat',
            name='travaux_bruyant',
            field=models.BooleanField(default=False, null=True),
        ),
        migrations.AlterField(
            model_name='checklist_stat',
            name='travaux_demolition',
            field=models.BooleanField(default=False, null=True),
        ),
        migrations.AlterField(
            model_name='checklist_stat',
            name='travaux_excavation',
            field=models.BooleanField(default=False, null=True),
        ),
        migrations.AlterField(
            model_name='checklist_stat',
            name='utilisation_equipement',
            field=models.BooleanField(default=False, null=True),
        ),
        migrations.AlterField(
            model_name='checklist_stat',
            name='vidange_degazage',
            field=models.BooleanField(default=False, null=True),
        ),
    ]
