
from django.utils import timezone
from django.db import models
from datetime import datetime , date
from django.dispatch import receiver
from django.contrib.auth.models import User
from jovena.gerer import generate_id
from django.db.models.signals import post_save

# Create your models here.
class UserProfile(models.Model ):
    choix_poste = (
        ('jovena', 'Jovena'),
        ('prestataire', 'Prestataire'),
        ('station_service', 'Station_service'),
        ('transporteur', 'Transporteur')
    )
    
    user = models.OneToOneField(User , on_delete=models.CASCADE)
    poste = models.CharField(max_length=50 , null=True , default=None, choices=choix_poste)
    id_poste = models.CharField(max_length=50 , blank=True , unique=True, null=True)
   
    def __str__(self):
        return self.user.username 
    
    def save(self, *args, **kwargs):
        if self.poste:
            
            if self.poste=="jovena":
                self.id_poste = "J-"+ str(generate_id()) 
                
            elif self.poste=="prestataire":
                self.id_poste = "P-"+ str(generate_id()) 
                
            elif self.poste=="transporteur":
                self.id_poste = "T-"+ str(generate_id()) 
                
            else:
                self.id_poste = "S-" + str(generate_id()) 
        else:
             self.id_poste = ""  
                    
        super(UserProfile, self).save(*args, **kwargs)     
    
@receiver(post_save , sender= User)
def create_user_profile(sender , instance , created , **kwargs):
     if created :
         UserProfile.objects.create(user = instance )





class Checklist_stat(models.Model):
    num_reclamation         = models.IntegerField(null = True , blank = True)
    panne_annoncee          = models.CharField(max_length=200 , null=True, blank=True)
    
    site                    = models.CharField(max_length=200, null=True)
    client                  = models.CharField(max_length=200, null=True)
    localite                = models.CharField(max_length=200, null=True)
    entreprise_intervenante = models.CharField(max_length=200, null=True)
    categorie_reclamation   = models.CharField(max_length=200, null=True)
    date_reclamation        = models.DateField(null=True, blank=True)
    echeance                = models.DateField(null=True, blank=True)
    
    date_diagnostic         = models.DateTimeField( null=True, blank=True)
    interlocuteur           = models.CharField(max_length=200, null=True, blank=True)
    fonction                = models.CharField(max_length=200, null=True, blank=True)
    panne_reel              = models.CharField(max_length=200, null=True, blank=True)
    
    permis_specifique       = models.BooleanField(default=False)
    information_personnel   = models.BooleanField(default=False)
    port_EPI                = models.BooleanField(default=False)
    balisage_perimetre      = models.BooleanField(default=False)
    extincteur_adapte       = models.BooleanField(default=False)
    interdiction_de_fumer   = models.BooleanField(default=False)
    
    livraison_carburant = models.DateTimeField(default=timezone.now)
    presence_zone           = models.CharField(max_length=200, null=True, blank=True)
    autre_travaux           = models.CharField(max_length=200, null=True, blank=True)
    
    
    travail_chaud           = models.BooleanField(default=False)
    percage_moulage_decoupage = models.BooleanField(default=False)
    chauffage_soudage       = models.BooleanField(default=False)
    grenaillage_sablage     = models.BooleanField(default=False)
    utilisation_equipement  = models.BooleanField(default=False)
    vidange_degazage        = models.BooleanField(default=False) 
    travaux_demolition      = models.BooleanField(default=False)
    travail_espace          = models.BooleanField(default=False)
    deplacement_site        = models.BooleanField(default=False)
    manutention_levage      = models.BooleanField(default=False)
    travail_hauteur         = models.BooleanField(default=False)
    travail_tuyauterie      = models.BooleanField(default=False)
    fouille_mannuelle       = models.BooleanField(default=False)
    travaux_excavation      = models.BooleanField(default=False)
    travail_equipement      = models.BooleanField(default=False)
    travail_engin           = models.BooleanField(default=False)
    operation_piste         = models.BooleanField(default=False)
    travaux_bruyant         = models.BooleanField(default=False)
    autre_nature            = models.CharField(max_length=100 , blank=True , null=True)
    
    
    emission_gaz            = models.BooleanField(default=False)
    incendie                = models.BooleanField(default=False)
    explosion               = models.BooleanField(default=False)
    projection_etincelle    = models.BooleanField(default=False)
    intoxication            = models.BooleanField(default=False)
    asphyxie                = models.BooleanField(default=False)
    brulure                 = models.BooleanField(default=False)
    blessure                = models.BooleanField(default=False)
    autre_lesion            = models.BooleanField(default=False)
    chute_plain_pied        = models.BooleanField(default=False)
    chute_objet             = models.BooleanField(default=False)
    chute_hauteur           = models.BooleanField(default=False)
    incident_reseau         = models.BooleanField(default=False)
    epandage                = models.BooleanField(default=False)
    eboulement              = models.BooleanField(default=False)
    electrocution           = models.BooleanField(default=False)
    incident_cable          = models.BooleanField(default=False)
    accident_circulation    = models.BooleanField(default=False)
    autre_lesion1            = models.CharField(max_length=200, null=True, blank=True)
    
    charge_station_service = models.BooleanField(default=False)
    arret_distribution_total = models.BooleanField(default=False)
    
    fermeture_station = models.BooleanField(default=False)
    arret_activite = models.CharField(max_length=200, null=True, blank=True)
    
    # A la charge de la / les entreprise(s) extérieure(s)
    
    
    test_gaz = models.BooleanField(default=False)
    arret_travaux_depotage = models.BooleanField(default=False)
    arret_autre_travaux = models.BooleanField(default=False)
    extincteur_adapte2 = models.BooleanField(default=False)
    mise_terre = models.BooleanField(default=False)
    appareil_respiratoire = models.BooleanField(default=False)
    outillage = models.BooleanField(default=False)
    port_EPI_2 = models.BooleanField(default=False)
    harnai = models.BooleanField(default=False)
    echaffaudage = models.BooleanField(default=False)
    renseignement_reseaux_enterre = models.BooleanField(default=False)
    consignation_equipement = models.BooleanField(default=False)
    consignation_electrique = models.BooleanField(default=False)
    renseignement_reseau_aerien = models.BooleanField(default=False)
    aide_circulation = models.BooleanField(default=False)




class checklist_permis_feu_prest(models.Model):
    
    date_entete     = models.DateField(null=True,blank=True)
    registre_entete = models.IntegerField(null = True , blank = True)
    
    site            = models.CharField(max_length=200 ,null=True , blank=True)
    client          = models.CharField(max_length=200,null=True , blank=True)
    localite        = models.CharField(max_length=200,null=True , blank=True)
    entreprise_intervenante = models.CharField(max_length=200,null=True , blank=True)
    
    # Descriptif du travail
    descriptif_travail = models.CharField(max_length=200,null=True , blank=True)
    
    date_debut          = models.DateField(null=True,blank=True)
    heure_debut         = models.TimeField(null=True,blank=True)
    heure_fin           = models.TimeField(null=True,blank=True)
    date_fin            = models.DateField(null=True,blank=True)
    
    # Risque particulier 
    proximite_zone_ATEX = models.BooleanField(default=False)
    autre_risque        = models.CharField(max_length=50,null=True , blank=True)
    # Nom des intervenants autorisés
    intervenant1 = models.CharField(max_length=50,null=True , blank=True)
    intervenant2 = models.CharField(max_length=50,null=True , blank=True)
    intervenant3 = models.CharField(max_length=50,null=True , blank=True)
    intervenant4 = models.CharField(max_length=50,null=True , blank=True)
    
    # Type de travaux par points chauds
    soudage     = models.BooleanField(default=False)
    tronconnage = models.BooleanField(default=False)
    decoupage   = models.BooleanField(default=False)
    meulage     = models.BooleanField(default=False)
    autre_type_travaux = models.CharField(max_length=50,null=True , blank=True)
    # Materiels utilises
    poste_souder    = models.BooleanField(default=False)
    chalumeau       = models.BooleanField(default=False)
    meuleuse        = models.BooleanField(default=False)
    tronconneuse    = models.BooleanField(default=False)
    autre_materiel_utilise = models.CharField(max_length=50,null=True , blank=True)
    # Document associés
    plan_prevention = models.BooleanField(default=False)
    ASET            = models.BooleanField(default=False)
    permis_entree_espace_confine = models.BooleanField(default=False)
    autre_document  = models.CharField(max_length=50,null=True , blank=True)
    
        
    evacuation_substance = models.CharField(max_length=10,null=True , blank=True)
    balisage_perimetre = models.CharField(max_length=10,null=True , blank=True)
    protection_element = models.CharField(max_length=10,null=True , blank=True)
    consignation_equipement = models.CharField(max_length=10,null=True , blank=True)
    vidange = models.CharField(max_length=10,null=True , blank=True)
    degazage = models.CharField(max_length=10,null=True , blank=True)
    isolation_tuyauterie = models.CharField(max_length=10,null=True , blank=True)
    demontage_tuyauterie = models.CharField(max_length=10,null=True , blank=True)
    
    
    # MOYENS DE PREVENTION
    ecran = models.CharField(max_length=10,null=True , blank=True)
    bache = models.CharField(max_length=10,null=True , blank=True)
    extincteur = models.CharField(max_length=10,null=True , blank=True)
    sable = models.CharField(max_length=10,null=True , blank=True)
    
    # VENTILATION FORCEE
    ventilation = models.CharField(max_length=10,null=True , blank=True)
    
    #TEST ATMOSPHERIQUE
    test_atmospherique = models.CharField(max_length=10,null=True , blank=True)
    
    teneur_oxygene = models.CharField(max_length=10,null=True , blank=True)
    teneur_LIE = models.CharField(max_length=10,null=True , blank=True)
    
    # Surveillance de sécurité pendant les travaux 
    nom_surveillance_pendant = models.CharField(max_length=100, null = True , blank = True)
    
    # Surveillance de sécurité après les travaux
    heure_debut_surveillance = models.TimeField(null=True,blank=True)
    heure_fin_surveillance = models.TimeField(null=True,blank=True)
    nom_surveillance_apres = models.CharField(max_length=100, null = True , blank = True)
    
    # ALERT EN CAS D'INCENDIE OU D'ACCIDENT
    alerte = models.CharField(max_length=200, null = True , blank = True)
    
    # NUMERO D'URGENCE 
    numero_pompier = models.CharField(max_length=50, null = True , blank = True)
    numero_site = models.CharField(max_length=50, null = True , blank = True)
    numero_jovena = models.CharField(max_length=50, null = True , blank = True)
    numero_ambulance = models.CharField(max_length=50, null = True , blank = True)
    
    # PERSONNES OU SERVICES CONCERNES
    nom_responsable_travaux = models.CharField(max_length=50, null = True , blank = True)
    qualite_responsable_travaux = models.CharField(max_length=50, null = True , blank = True)
    visa_responsable_travaux = models.CharField(max_length=50, null = True , blank = True)
    
    nom_responsable_HSE = models.CharField(max_length=50, null = True , blank = True)
    qualite_responsable_HSE = models.CharField(max_length=50, null = True , blank = True)
    visa_responsable_HSE = models.CharField(max_length=50, null = True , blank = True)
    
    nom_responsable_site = models.CharField(max_length=50, null = True , blank = True)
    qualite_responsable_site = models.CharField(max_length=50, null = True , blank = True)
    visa_responsable_site = models.CharField(max_length=50, null = True , blank = True)
    
    nom_responsable_autre = models.CharField(max_length=50, null = True , blank = True)
    qualite_responsable_autre = models.CharField(max_length=50, null = True , blank = True)
    visa_responsable_autre = models.CharField(max_length=50, null = True , blank = True)
    
    permis_feu_delivre = models.DateField(null=True,blank=True)
    

class checklist_excavation(models.Model):
    # ENTETE
    date_entete = models.DateField(default=date.today)
    Registre_entete = models.IntegerField(null = True , blank = True)
    
    # HEADER
    site = models.CharField(max_length=50,null = True , blank = True)
    localite = models.CharField(max_length=100,null = True , blank = True)
    client = models.CharField(max_length=50,null = True , blank = True)
    entreprise_intervenante = models.CharField(max_length=100)
    
    # Descriptif du travail
    descriptif = models.CharField(max_length=500, null = True , blank = True)
    profondeur_excavation = models.CharField(max_length=50,null = True , blank = True)
    zone = models.CharField(max_length=50,null = True , blank = True)
    
    type_excavation = models.CharField(max_length=10, null = True , blank = True)
    dessin1 = models.CharField(max_length=50, null = True , blank = True)
    dessin2 = models.CharField(max_length=50, null = True , blank = True)
    dessin3 = models.CharField(max_length=50, null = True , blank = True)
    dessin4 = models.CharField(max_length=50, null = True , blank = True)
    
    # Obstruction Souterraines
    eau_incendie = models.BooleanField(default=False)
    eau_pluviale = models.BooleanField(default=False)
    eau_riviere = models.BooleanField(default=False)
    effluent = models.BooleanField(default=False)
    eau_domestique = models.BooleanField(default=False)
    sanitaire = models.BooleanField(default=False)
    
    cable_communication = models.BooleanField(default=False)
    mise_terre = models.BooleanField(default=False)
    structure_adjacente = models.BooleanField(default=False)
    cable_cathodique = models.BooleanField(default=False)
    ligne_gaz = models.BooleanField(default=False)
    atre_obstruction = models.BooleanField(default=False)
    
    electrique_11kv = models.BooleanField(default=False)
    electrique_6kv = models.BooleanField(default=False)
    electrique_690v = models.BooleanField(default=False)
    electrique_690i = models.BooleanField(default=False)
    
    commentaire_obstruction1 = models.CharField(max_length=50, null = True , blank = True)
    commentaire_obstruction2 = models.CharField(max_length=50, null = True , blank = True)
    commentaire_obstruction3 = models.CharField(max_length=50, null = True , blank = True)
    commentaire_obstruction4 = models.CharField(max_length=50, null = True , blank = True)
    commentaire_obstruction5 = models.CharField(max_length=50, null = True , blank = True)
    commentaire_obstruction6 = models.CharField(max_length=50, null = True , blank = True)
    
    # Consideration Specifiques
    pente = models.BooleanField(default=False)
    banc = models.BooleanField(default=False)
    etayage = models.BooleanField(default=False)
    pretection_nuit = models.BooleanField(default=False)
    pretection_ouverture = models.BooleanField(default=False)
    permis_espace = models.BooleanField(default=False)
    pompage_eau = models.BooleanField(default=False)
    fermeture_route = models.BooleanField(default=False)
    
    mesure_securite_additionnel = models.CharField(max_length=100, null = True , blank = True)
    commentaire1 = models.CharField(max_length=50, null = True , blank = True)
    commentaire2 = models.CharField(max_length=50, null = True , blank = True)
    commentaire3 = models.CharField(max_length=50, null = True , blank = True)
    commentaire4 = models.CharField(max_length=50, null = True , blank = True)
    
    # DETECTION DES STRUCTURES ET SERVICES NON-APPARENTS
    effectuee = models.BooleanField(default=False)
    effectuer_nom = models.CharField(max_length=200, null = True , blank = True)
    effectuer_date = models.DateField(default=date.today)
    # effectuer_signature = models.CharField(max_length=200, null = True , blank = True)
    
    representant_contracant = models.BooleanField(default=False)
    representant_contracant_nom = models.CharField(max_length=200, null = True , blank = True)
    representant_contracant_date = models.DateField(default=date.today)
    # representant_contracant_signature = models.CharField(max_length=200, null = True , blank = True)
    
    # APPROBATION 
    superviseur_nom = models.CharField(max_length=200, null = True , blank = True)
    superviseur_date = models.DateField(default=date.today)
    
    representant_proprietaire_nom = models.CharField(max_length=200, null = True , blank = True)
    representant_proprietaire_date = models.DateField(default=date.today)
    # representant_proprietaire_signature = models.CharField(max_length=200, null = True , blank = True)
    
    # ACCORD
    superviseur_excavation_nom = models.CharField(max_length=200, null = True , blank = True)
    superviseur_excavation_date = models.DateField(default=date.today)
    # superviseur_signature = models.CharField(max_length=200, null = True , blank = True)
    
    # ACHIEVEMENT DE L'EXCAVATION
    date_achevement_excavation = models.DateField(default=date.today)
    # signature_achevement = models.CharField(max_length=200, null = True , blank = True)
    
    # FIN
    permis_excavation_delivre = models.DateField(default=date.today)
    # visa_responsable = models.CharField(max_length=200, null = True , blank = True)



class checklist_espace_confine(models.Model):
    
    # ENTETE
    date_entete = models.DateField(default=date.today)
    registre_entete = models.IntegerField(null = True , blank = True)
    
    # DESCRIPTION DU TRAVAIL
    site = models.CharField(max_length=200, null = True , blank = True)
    equipement = models.CharField(max_length=50, null = True , blank = True)
    entreprise_intervenante = models.CharField(max_length=50, null = True , blank = True)
    
    date_debut = models.DateField(default=date.today)
    heure_debut = models.TimeField(null=True,blank=True)
    heure_fin = models.TimeField(null=True,blank=True)
    date_fin = models.DateField(default=date.today)
    
    descriptif_travail = models.CharField(("Descriptif du travail"), max_length=50, null = True , blank = True)    
    
    # 2. PREPARATION DE L'INTERVENTION
    consignation_electique = models.BooleanField(default=False)
    consignation_fluidique = models.BooleanField(default=False)
    consignation_mecanique = models.BooleanField(default=False)
    ventilation = models.BooleanField(default=False)
    ventilation_forcee = models.BooleanField(default=False)
    plan_urgence = models.BooleanField(default=False)
    ASET = models.BooleanField(default=False)
    autre_intervention = models.CharField(max_length=200, null = True , blank = True)
    
    # 3. EQUIPEMENT DE SECURITE 
    detecteur_gaz = models.BooleanField(default=False)
    type_detecteur_gaz = models.CharField(max_length=50, null = True , blank = True)
    
    appareil_respiratoire_autonome = models.BooleanField(default=False)
    type_appareil_respiratoire_autonome = models.CharField(max_length=50, null = True , blank = True)
    
    appareil_respiratoire_isolant = models.BooleanField(default=False)
    type_appareil_respiratoire_isolant = models.CharField(max_length=50, null = True , blank = True)
    
    masque = models.BooleanField(default=False)
    type_masque = models.CharField(max_length=50, null = True , blank = True)
    
    harnais = models.BooleanField(default=False)
    type_harnais = models.CharField(max_length=50, null = True , blank = True)
    
    treuil = models.BooleanField(default=False)
    type_treuil = models.CharField(max_length=50, null = True , blank = True)
    
    corde_assurance = models.BooleanField(default=False)
    type_corde_assurance = models.CharField(max_length=50, null = True , blank = True)
    
    panneaux = models.BooleanField(default=False)
    type_panneaux = models.CharField(max_length=50, null = True , blank = True)
    
    balisage = models.BooleanField(default=False)
    type_balisage = models.CharField(max_length=50, null = True , blank = True)
    
    moyen_intervenant = models.CharField(max_length=200, null = True , blank = True)
    
    # 4. QUALITE DE L'AIR
    # O2
    o2_applicable = models.BooleanField(default=False)
    o2_date = models.DateField(default=date.today)
    o2_heure1 = models.TimeField(null=True,blank=True)
    o2_PPM1 = models.CharField(max_length=10, null = True , blank = True)
    o2_heure2 = models.TimeField(null=True,blank=True)
    o2_PPM2 = models.CharField(max_length=10, null = True , blank = True)
    o2_heure3 = models.TimeField(null=True,blank=True)
    o2_PPM3 = models.CharField(max_length=10, null = True , blank = True)
    
    # %LIE
    LIE_applicable = models.BooleanField(default=False)
    LIE_date = models.DateField(default=date.today)
    LIE_heure1 = models.TimeField(null=True,blank=True)
    LIE_PPM1 = models.CharField(max_length=10, null = True , blank = True)
    LIE_heure2 = models.TimeField(null=True,blank=True)
    LIE_PPM2 = models.CharField(max_length=10, null = True , blank = True)
    LIE_heure3 = models.TimeField(null=True,blank=True)
    LIE_PPM3 = models.CharField(max_length=10, null = True , blank = True)
    
    # Co
    Co_applicable = models.BooleanField(default=False)
    Co_date = models.DateField(default=date.today)
    Co_heure1 = models.TimeField(null=True,blank=True)
    Co_PPM1 = models.CharField(max_length=10, null = True , blank = True)
    Co_heure2 = models.TimeField(null=True,blank=True)
    Co_PPM2 = models.CharField(max_length=10, null = True , blank = True)
    Co_heure3 = models.TimeField(null=True,blank=True)
    Co_PPM3 = models.CharField(max_length=10, null = True , blank = True)
    
    # SO2
    SO_applicable = models.BooleanField(default=False)
    SO_date = models.DateField(default=date.today)
    SO_heure1 = models.TimeField(null=True,blank=True)
    SO_PPM1 = models.CharField(max_length=10, null = True , blank = True)
    SO_heure2 = models.TimeField(null=True,blank=True)
    SO_PPM2 = models.CharField(max_length=10, null = True , blank = True)
    SO_heure3 = models.TimeField(null=True,blank=True)
    SO_PPM3 = models.CharField(max_length=10, null = True , blank = True)
    
    # H2S
    H2S_applicable = models.BooleanField(default=False)
    H2S_date = models.DateField(default=date.today)
    H2S_heure1 = models.TimeField(null=True,blank=True)
    H2S_PPM1 = models.CharField(max_length=10, null = True , blank = True)
    H2S_heure2 = models.TimeField(null=True,blank=True)
    H2S_PPM2 = models.CharField(max_length=10, null = True , blank = True)
    H2S_heure3 = models.TimeField(null=True,blank=True)
    H2S_PPM3 = models.CharField(max_length=10, null = True , blank = True)
    
    # NH3
    NH3_applicable = models.BooleanField(default=False)
    NH3_date = models.DateField(default=date.today)
    NH3_heure1 = models.TimeField(null=True,blank=True)
    NH3_PPM1 = models.CharField(max_length=10, null = True , blank = True)
    NH3_heure2 = models.TimeField(null=True,blank=True)
    NH3_PPM2 = models.CharField(max_length=10, null = True , blank = True)
    NH3_heure3 = models.TimeField(null=True,blank=True)
    NH3_PPM3 = models.CharField(max_length=10, null = True , blank = True)
    
    nom_testeur = models.CharField(("Nom du testeur de Gaz"), max_length=50, null = True , blank = True)
    # signature_testeur = models.CharField(max_length=500, null = True , blank = True) 
     
    # 4. AUTORISATION (Responsable Jovena)
    nom_reponsable_jovena = models.CharField(max_length=100, null = True , blank = True)
    date_heure1 = models.DateTimeField(default=datetime.now)
    
    # 5. SURVEILLANT DE L'ESPACE CONFINE
    nom_surveillant = models.CharField(("Nom du surveillant"), max_length=50, null = True , blank = True)
    date_heure2 = models.DateTimeField(default=datetime.now)
    
    # 6. CLOTURE DU PERMIS (Responsable habilité de l'entreprise intervaenante)
    nom_cloture = models.CharField(("Nom du responsable habilité"), max_length=50, null = True , blank = True)
    date_heure3 = models.DateTimeField(default=datetime.now)
    
    # ALERTE EN CAS D'INCIDENT
    alerte = models.CharField(max_length=200, null = True , blank = True)
    
    # NUMERO D'URGENCE
    pompier = models.CharField(max_length=50, null = True , blank = True)
    ambulance = models.CharField(max_length=50, null = True , blank = True)
    responsable_site = models.CharField(max_length=50, null = True , blank = True)
    responsable_jovena = models.CharField(max_length=50, null = True , blank = True)
    
    # FIN
    permi_delivre = models.DateField(default=date.today)



class KPI(models.Model):
    date = models.DateField(default=date.today)
    Hommes = models.PositiveBigIntegerField(null = True , blank = True)
    Femmes =  models.PositiveBigIntegerField(null = True , blank = True)
    Effectif_total = models.PositiveBigIntegerField(null = True , blank = True)
    Heures_travail = models.PositiveBigIntegerField(null = True , blank = True)
    Fatalite = models.PositiveBigIntegerField(null = True , blank = True)
    Accident = models.PositiveBigIntegerField(null = True , blank = True)
    Poste_adapte = models.PositiveBigIntegerField(null = True , blank = True)
    soins_medicaux = models.PositiveBigIntegerField(null = True , blank = True)
    Premiers_secours = models.PositiveBigIntegerField(null = True , blank = True)
    Presq_accident = models.PositiveBigIntegerField(null = True , blank = True)
    Heures_perdues = models.PositiveBigIntegerField(null = True , blank = True)
    
    Km_parcourus = models.PositiveBigIntegerField(null = True , blank = True)
    nombre_incident = models.PositiveBigIntegerField(null = True , blank = True)
    Nombre_acceleration_brusque = models.PositiveBigIntegerField(null = True , blank = True)
    Nombre_freinage = models.PositiveBigIntegerField(null = True , blank = True)
    Nombre_limitation = models.PositiveBigIntegerField(null = True , blank = True)
    Vitesse = models.PositiveBigIntegerField(null = True , blank = True)
    
    Nombre_malade = models.PositiveBigIntegerField(null = True , blank = True)
    Declare = models.PositiveBigIntegerField(null = True , blank = True)
    violation_regles = models.PositiveBigIntegerField(null = True , blank = True)
    
    Nombre_deversement = models.PositiveBigIntegerField(null = True , blank = True)
    Volume_impacte = models.PositiveBigIntegerField(null = True , blank = True)
    Nombre_inspection = models.PositiveBigIntegerField(null = True , blank = True)
    Zone_dechets = models.PositiveBigIntegerField(null = True , blank = True)
    Zone_stockage = models.PositiveBigIntegerField(null = True , blank = True)
    
    Dechet_inertes = models.PositiveBigIntegerField(null = True , blank = True)
    Dechet_organique = models.PositiveBigIntegerField(null = True , blank = True)
    Dechet_plastique = models.PositiveBigIntegerField(null = True , blank = True)
    Dechet_hydrocarbure = models.PositiveBigIntegerField(null = True , blank = True)
    Dechet_D3E= models.PositiveBigIntegerField(null = True , blank = True)
    Eaux_use = models.PositiveBigIntegerField(null = True , blank = True)
    Consommation_eau = models.PositiveBigIntegerField(null = True , blank = True)
    Consommation_carburant = models.PositiveBigIntegerField(null = True , blank = True)
    Consommation_electricire = models.PositiveBigIntegerField(null = True , blank = True)
    
    Valeur_limite = models.PositiveBigIntegerField(null = True , blank = True)
    X_sur_site = models.PositiveBigIntegerField(null = True , blank = True)
    X_aux_recepteurs = models.PositiveBigIntegerField(null = True , blank = True)
    
    X_sources_emission = models.PositiveBigIntegerField(null = True , blank = True)
    X_qualite_air = models.PositiveBigIntegerField(null = True , blank = True)
    
    X_sante = models.PositiveBigIntegerField(null = True , blank = True)
    X_securite = models.PositiveBigIntegerField(null = True , blank = True)
    X_environnement = models.PositiveBigIntegerField(null = True , blank = True)
    X_social = models.PositiveBigIntegerField(null = True , blank = True)
    
    Aucun_incident = models.PositiveBigIntegerField(null = True , blank = True)
    Nombre_tavailleur_migrant = models.PositiveBigIntegerField(null = True , blank = True)
    Nombre_travailleur_locaux = models.PositiveBigIntegerField(null = True , blank = True)
    Pourcentage_main_oeuvre = models.PositiveBigIntegerField(null = True , blank = True)
    Hebrgement_travailleur = models.PositiveBigIntegerField(null = True , blank = True)
    Duree_moyenne_contrat = models.PositiveBigIntegerField(null = True , blank = True)
    
    Logement_travailleurs = models.PositiveBigIntegerField(null = True , blank = True)
    Approvisionnement_eau = models.PositiveBigIntegerField(null = True , blank = True)
    Nombre_activite = models.PositiveBigIntegerField(null = True , blank = True)
    Parties_prenantes = models.PositiveBigIntegerField(null = True , blank = True)
    Nombre_activite_public = models.PositiveBigIntegerField(null = True , blank = True)
    
    Induction_site = models.PositiveBigIntegerField(null = True , blank = True)
    exercice_urgence = models.PositiveBigIntegerField(null = True , blank = True)
    Toolbox = models.PositiveBigIntegerField(null = True , blank = True)
    Formation_specifique = models.PositiveBigIntegerField(null = True , blank = True)
    starter = models.PositiveBigIntegerField(null = True , blank = True)
    Nombre_outil = models.PositiveBigIntegerField(null = True , blank = True)
    # Nombre_inspection1 = models.PositiveBigIntegerField(null = True , blank = True)
    
    Taux_frequence = models.PositiveBigIntegerField(null = True , blank = True)
    Taux_gravite = models.PositiveBigIntegerField( blank = True)
    