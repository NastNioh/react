from distutils.util import strtobool
from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from rest_framework import status
from rest_framework.response import Response
from django.db import IntegrityError
from jovena.models import *
from jovena.serializers import *
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from datetime import datetime , date
from rest_framework.views import APIView
from django.contrib.auth import authenticate, login
from django.http import HttpResponseRedirect
from django.urls import reverse
from dj_rest_auth.views import ObtainJSONWebToken


class LoginView(ObtainJSONWebToken):
    pass





# Create your views here.
class  Checklist_stat_viewset(ModelViewSet):
    http_method_names = ['get','post','patch', 'delete', 'head', 'options']
    
    queryset =  Checklist_stat.objects.all()
    serializer_class = Checklist_stat_serializer
    
    def create(self, request, *args, **kwargs):
        try:
            
            
            def convertion(value):
                if value is not None:
                    return "True" if str(value).lower() == "true" else "False"
                return "False"
            # Récupérez les données du formulaire React depuis la requête POST
            num_reclamation = request.data.get('num_reclamation')
            panne_annoncee = request.data.get('panne_annoncee')
            
            site  = request.data.get('site ')
            client = request.data.get('client')
            localite  = request.data.get('localite ')
            entreprise_intervenante = request.data.get('entreprise_intervenante')
            categorie_reclamation = request.data.get('categorie_reclamation')
            date_reclamation = request.data.get('date_reclamation')
            echeance = request.data.get('echeance')
            date_diagnostic = request.data.get('date_diagnostic')
            interlocuteur = request.data.get('interlocuteur')
            fonction = request.data.get('fonction')
            panne_reel = request.data.get('panne_reel')
            permis_specifique = convertion(request.data.get('permis_specifique'))
            information_personnel = convertion(request.data.get('information_personnel')) 
            port_EPI = convertion(request.data.get('port_EPI'))
            balisage_perimetre = convertion(request.data.get('balisage_perimetre'))
            extincteur_adapte = convertion(request.data.get('extincteur_adapte'))
            interdiction_de_fumer = convertion(request.data.get('interdiction_de_fumer'))
            livraison_carburant = request.data.get('livraison_carburant')
            presence_zone = request.data.get('presence_zone')
            autre_travaux = request.data.get('autre_travaux')
            travail_chaud = convertion(request.data.get('travail_chaud'))
            percage_moulage_decoupage = convertion(request.data.get('percage_moulage_decoupage '))
            chauffage_soudage = convertion(request.data.get('chauffage_soudage'))
            grenaillage_sablage = convertion(request.data.get('grenaillage_sablage'))
            utilisation_equipement = convertion(request.data.get('utilisation_equipement'))
            vidange_degazage = convertion(request.data.get('vidange_degazage'))
            travaux_demolition = convertion(request.data.get('travaux_demolition'))
            travail_espace = convertion(request.data.get('travail_espace'))
            deplacement_site = convertion(request.data.get('deplacement_site'))
            manutention_levage = convertion(request.data.get('manutention_levage '))
            travail_hauteur = convertion(request.data.get('travail_hauteur'))
            travail_tuyauterie = convertion(request.data.get('travail_tuyauterie'))
            fouille_mannuelle = convertion(request.data.get('fouille_mannuelle'))
            travaux_excavation = convertion(request.data.get('travaux_excavation'))
            travail_equipement = convertion(request.data.get('travail_equipement'))
            travail_engin = convertion(request.data.get('travail_engin '))
            operation_piste = convertion(request.data.get('operation_piste'))
            travaux_bruyant = convertion(request.data.get('travaux_bruyant'))
            autre_nature = request.data.get('autre_nature')
            emission_gaz = convertion(request.data.get('emission_gaz'))
            incendie = convertion(request.data.get('incendie'))
            explosion = convertion(request.data.get('explosion'))
            projection_etincelle = convertion(request.data.get('projection_etincelle'))
            intoxication = convertion(request.data.get('intoxication'))
            asphyxie = convertion(request.data.get('asphyxie'))
            brulure = convertion(request.data.get('brulure'))
            blessure = convertion(request.data.get('blessure'))
            autre_lesion = convertion(request.data.get('autre_lesion '))
            chute_plain_pied = convertion(request.data.get('chute_plain_pied '))
            chute_objet = convertion(request.data.get('chute_objet '))
            chute_hauteur = convertion(request.data.get('chute_hauteur '))
            incident_reseau = convertion(request.data.get('incident_reseau'))
            epandage = convertion(request.data.get('epandage'))
            eboulement = convertion(request.data.get('eboulement'))
            electrocution = convertion(request.data.get('electrocution'))
            incident_cable = convertion(request.data.get('incident_cable'))
            accident_circulation = convertion(request.data.get('accident_circulation'))
            autre_lesion1 = request.data.get('autre_lesion')
            charge_station_service = convertion(request.data.get('charge_station_service'))
            arret_distribution_total = convertion(request.data.get('arret_distribution_total'))
            fermeture_station = convertion(request.data.get('fermeture_station'))
            arret_activite = request.data.get('arret_activite')
            test_gaz = convertion(request.data.get('test_gaz'))
            arret_travaux_depotage = convertion(request.data.get('arret_travaux_depotage'))
            arret_autre_travaux = convertion(request.data.get('arret_autre_travaux'))
            extincteur_adapte2 = convertion(request.data.get('extincteur_adapte2'))
            mise_terre = convertion(request.data.get('mise_terre'))
            appareil_respiratoire = convertion(request.data.get('appareil_respiratoire'))
            outillage = convertion(request.data.get('outillage'))
            port_EPI_2 = convertion(request.data.get('port_EPI_2'))
            harnai = convertion(request.data.get('harnai'))
            echaffaudage = convertion(request.data.get('echaffaudage'))
            renseignement_reseaux_enterre = convertion(request.data.get('renseignement_reseaux_enterre'))
            consignation_equipement = convertion(request.data.get('consignation_equipement'))
            consignation_electrique = convertion(request.data.get('consignation_electrique '))
            renseignement_reseau_aerien = convertion(request.data.get('renseignement_reseau_aerien'))
            aide_circulation = convertion(request.data.get('aide_circulation'))
           
            # Créez une nouvelle instance de ClientGuest avec les données
            jovena = Checklist_stat(num_reclamation=num_reclamation, panne_annoncee=panne_annoncee, site=site, client=client, localite=localite, entreprise_intervenante=entreprise_intervenante, categorie_reclamation=categorie_reclamation, date_reclamation=date_reclamation, echeance=echeance, date_diagnostic=date_diagnostic, interlocuteur=interlocuteur, fonction=fonction, panne_reel=panne_reel, permis_specifique=permis_specifique, information_personnel=information_personnel, port_EPI=port_EPI, balisage_perimetre=balisage_perimetre, extincteur_adapte=extincteur_adapte, interdiction_de_fumer=interdiction_de_fumer, livraison_carburant=livraison_carburant, presence_zone=presence_zone, autre_travaux=autre_travaux, travail_chaud=travail_chaud, percage_moulage_decoupage=percage_moulage_decoupage, chauffage_soudage=chauffage_soudage, grenaillage_sablage=grenaillage_sablage, utilisation_equipement=utilisation_equipement, vidange_degazage=vidange_degazage, travaux_demolition=travaux_demolition, travail_espace=travail_espace, deplacement_site=deplacement_site, manutention_levage=manutention_levage, travail_hauteur=travail_hauteur, travail_tuyauterie=travail_tuyauterie, fouille_mannuelle=fouille_mannuelle, travaux_excavation=travaux_excavation, travail_equipement=travail_equipement, travail_engin=travail_engin, operation_piste=operation_piste, travaux_bruyant=travaux_bruyant, autre_nature=autre_nature, emission_gaz=emission_gaz, incendie=incendie, explosion=explosion, projection_etincelle=projection_etincelle, intoxication=intoxication, asphyxie=asphyxie, brulure=brulure, blessure=blessure, autre_lesion=autre_lesion, chute_plain_pied=chute_plain_pied, chute_objet=chute_objet, chute_hauteur=chute_hauteur, incident_reseau=incident_reseau, epandage=epandage, eboulement=eboulement, electrocution=electrocution, incident_cable=incident_cable, accident_circulation=accident_circulation, autre_lesion1=autre_lesion1, charge_station_service=charge_station_service, arret_distribution_total=arret_distribution_total, fermeture_station=fermeture_station, arret_activite=arret_activite, test_gaz=test_gaz, arret_travaux_depotage=arret_travaux_depotage, arret_autre_travaux=arret_autre_travaux, extincteur_adapte2=extincteur_adapte2, mise_terre=mise_terre, appareil_respiratoire=appareil_respiratoire, outillage=outillage, port_EPI_2=port_EPI_2, harnai=harnai, echaffaudage=echaffaudage, renseignement_reseaux_enterre=renseignement_reseaux_enterre, consignation_equipement=consignation_equipement, consignation_electrique=consignation_electrique, renseignement_reseau_aerien=renseignement_reseau_aerien, aide_circulation=aide_circulation)

            # Enregistrez l'instance dans la base de données
            jovena.save()

            # Répondez avec une confirmation de succès
            serializer = Checklist_stat_serializer(jovena)  # Vous pouvez utiliser un sérialiseur pour représenter l'objet dans la réponse
            return Response(serializer.data, status=status.HTTP_201_CREATED)
    
        except IntegrityError as e:
            # Gérez l'erreur d'intégrité
            return Response({'detail': 'Erreur d\'intégrité: ' + str(e)}, status=status.HTTP_400_BAD_REQUEST)

class checklist_permis_feu_prest_viewset(ModelViewSet):
    http_method_names = ['get','post','patch', 'delete', 'head', 'options']
    queryset = checklist_permis_feu_prest.objects.all()
    serializer_class = Checklist_permis_feu_serializer
    
    
    
    def create(self,request,*args,**kwargs):
        def convertion(value):
                if value is not None:
                    return "True" if str(value).lower() == "true" else "False"
                return "False"
        
        try:
            date_entete = request.data.get('data_entete')
            registre_entete = request.data.get('registre_entete')
            site = request.data.get('site')
            client = request.data.get('client')
            localite = request.data.get('localite')
            entreprise_intervenante = request.data.get('entreprise_intervenante')
            descriptif_travail = request.data.get('descriptif_travail')
            date_debut = request.data.get('date_debut')
            heure_debut = request.data.get('heure_debut')
            heure_fin = request.data.get('heure_fin')
            date_fin = request.data.get('date_fin')
            proximite_zone_ATEX = convertion(request.data.get('proximite_zone_ATEX'))
            autre_risque = request.data.get('autre_risque')
            intervenant1 = request.data.get('intervenant1')
            intervenant2 = request.data.get('intervenant2')
            intervenant3 = request.data.get('intervenant3')
            intervenant4 = request.data.get('intervenant4')
            soudage = convertion(request.data.get('soudage'))
            tronconnage = convertion(request.data.get('tronconnage'))
            decoupage = convertion(request.data.get('decoupage'))
            meulage = convertion(request.data.get('meulage'))
            autre_type_travaux = request.data.get('autre_type_travaux')
            poste_souder = convertion(request.data.get('poste_souder'))
            chalumeau = convertion(request.data.get('chalumeau'))
            meuleuse = convertion(request.data.get('meuleuse'))
            tronconneuse = convertion(request.data.get('tronconneuse'))
            autre_materiel_utilise = request.data.get('autre_materiel_utilise')
            plan_prevention = convertion(request.data.get('plan_prevention'))
            ASET = convertion(request.data.get('ASET'))
            permis_entree_espace_confine = convertion(request.data.get('permis_entree_espace_confine'))
            autre_document = request.data.get('autre_document')
            evacuation_substance =  request.data.get('evacuation_substance')
            balisage_perimetre = request.data.get('balisage_perimetre')
            protection_element = request.data.get('protection_element')
            consignation_equipement = request.data.get('consignation_equipement')
            vidange = request.data.get('vidange')
            degazage = request.data.get('degazage')
            isolation_tuyauterie = request.data.get('isolation_tuyauterie')
            demontage_tuyauterie = request.data.get('demontage_tuyauterie')
            ecran  = request.data.get('ecran')
            bache = request.data.get('bache')
            extincteur = request.data.get('extincteur')
            sable = request.data.get('sable')
            ventilation = request.data.get('ventilation')
            test_atmospherique = request.data.get('test_atmospherique')
            teneur_oxygene = request.data.get('teneur_oxygene')
            teneur_LIE = request.data.get('teneur_LIE')
            nom_surveillance_pendant = request.data.get('nom_surveillance_pendant')
            heure_debut_surveillance = request.data.get('heure_debut_surveillance')
            alerte = request.data.get('alerte')
            numero_pompier = request.data.get('numero_pompier')
            numero_site = request.data.get('numero_site')
            numero_jovena = request.data.get('numero_jovena ')
            numero_ambulance = request.data.get('numero_ambulance')
            nom_responsable_travaux = request.data.get('nom_responsable_travaux')
            qualite_responsable_travaux = request.data.get('qualite_responsable_travaux')
            visa_responsable_travaux = request.data.get('visa_responsable_travaux')
            nom_responsable_HSE = request.data.get('nom_responsable_HSE')
            qualite_responsable_HSE = request.data.get('qualite_responsable_HSE')
            visa_responsable_HSE = request.data.get('visa_responsable_HSE')
            nom_responsable_site = request.data.get('nom_responsable_site')
            qualite_responsable_site = request.data.get('qualite_responsable_site')
            visa_responsable_site = request.data.get('visa_responsable_site')
            nom_responsable_autre = request.data.get('nom_responsable_autre')
            qualite_responsable_autre = request.data.get('qualite_responsable_autre')
            visa_responsable_autre = request.data.get('visa_responsable_autre')
            permis_feu_delivre = request.data.get('permis_feu_delivre')
            
            feu = checklist_permis_feu_prest(date_entete=date_entete,registre_entete = registre_entete,site =site , client = client ,localite=localite,entreprise_intervenante=entreprise_intervenante,descriptif_travail=descriptif_travail,date_debut=date_debut, heure_debut= heure_debut,heure_fin=heure_fin,date_fin=date_fin,proximite_zone_ATEX=proximite_zone_ATEX,autre_risque=autre_risque, intervenant1 = intervenant1 , intervenant2= intervenant2,intervenant3 =intervenant3 ,intervenant4 =intervenant4 ,soudage=soudage, tronconnage = tronconnage , decoupage = decoupage , meulage = meulage , autre_type_travaux = autre_type_travaux , poste_souder= poste_souder, chalumeau = chalumeau , meuleuse = meuleuse ,tronconneuse=tronconneuse,autre_materiel_utilise=autre_materiel_utilise, plan_prevention = plan_prevention , ASET = ASET , permis_entree_espace_confine = permis_entree_espace_confine , autre_document = autre_document , evacuation_substance = evacuation_substance , balisage_perimetre = balisage_perimetre , protection_element = protection_element , consignation_equipement = consignation_equipement , vidange = vidange , degazage = degazage , isolation_tuyauterie = isolation_tuyauterie , demontage_tuyauterie = demontage_tuyauterie , ecran = ecran , bache = bache , extincteur = extincteur , sable = sable , ventilation = ventilation , test_atmospherique = test_atmospherique , teneur_oxygene = teneur_oxygene , teneur_LIE = teneur_LIE , nom_surveillance_pendant = nom_surveillance_pendant ,  heure_debut_surveillance = heure_debut_surveillance ,  alerte = alerte , numero_pompier= numero_pompier, numero_site = numero_site , numero_jovena = numero_jovena , numero_ambulance = numero_ambulance,nom_responsable_travaux=nom_responsable_travaux, qualite_responsable_travaux=qualite_responsable_travaux,  visa_responsable_travaux= visa_responsable_travaux, nom_responsable_HSE = nom_responsable_HSE ,qualite_responsable_HSE=qualite_responsable_HSE,visa_responsable_HSE=visa_responsable_HSE,nom_responsable_site=nom_responsable_site,qualite_responsable_site=qualite_responsable_site, visa_responsable_site= visa_responsable_site, nom_responsable_autre = nom_responsable_autre ,qualite_responsable_autre=qualite_responsable_autre,visa_responsable_autre=visa_responsable_autre,permis_feu_delivre=permis_feu_delivre)
            feu.save()
            
            serializer =Checklist_permis_feu_serializer(feu)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
            
            
        except IntegrityError as e:
            return Response({'detail':'Erreur d\'intgrétité: ' + str(e)},status=status.HTTP_400_BAD_REQUEST)
        
        
class checklist_excavation_viewset(ModelViewSet):
    http_method_names = ['get','post','patch', 'delete', 'head', 'options']
    queryset = checklist_excavation.objects.all()
    serializer_class = Checklist_excavation_serializer
    
    def create(self,request,*args,**kwargs):
        def convertion(value):
                if value is not None:
                    return "True" if str(value).lower() == "true" else "False"
                return "False"
            
        try:
            date_entete = request.data.get('date_entete')
            Registre_entete = request.data.get('Registre_entete')
            site = request.data.get('site')
            localite = request.data.get('localite')
            client = request.data.get('client')
            entreprise_intervenante = request.data.get('entreprise_intervenante')
            descriptif = request.data.get('descriptif')
            profondeur_excavation = request.data.get('profondeur_excavation')
            zone = request.data.get('zone')
            type_excavation = request.data.get('type_excavation')
            dessin1 = request.data.get('dessin1')
            dessin2 = request.data.get('dessin2')
            dessin3 = request.data.get('dessin3')
            dessin4 = request.data.get('dessin4')
            eau_incendie = convertion(request.data.get('eau_incendie'))
            eau_pluviale = convertion(request.data.get('eau_pluviale'))
            eau_riviere = convertion(request.data.get('eau_riviere'))
            effluent = convertion(request.data.get('effluent'))
            eau_domestique = convertion(request.data.get('eau_domestique'))
            sanitaire = convertion(request.data.get('sanitaire'))
            cable_communication = convertion(request.data.get('cable_communication'))
            mise_terre = convertion(request.data.get('mise_terre'))
            structure_adjacente = convertion(request.data.get('structure_adjacente'))
            cable_cathodique = convertion(request.data.get('cable_cathodique'))
            ligne_gaz = convertion(request.data.get('ligne_gaz'))
            atre_obstruction = convertion(request.data.get('atre_obstruction'))
            electrique_11kv = convertion(request.data.get('electrique_11kv'))
            electrique_6kv = convertion(request.data.get('electrique_6kv'))
            electrique_690v = convertion(request.data.get('electrique_690v'))
            electrique_690i = convertion(request.data.get('electrique_690i'))
            commentaire_obstruction1 = request.data.get('commentaire_obstruction1')
            commentaire_obstruction2 = request.data.get('commentaire_obstruction2')
            commentaire_obstruction3 = request.data.get('commentaire_obstruction3')
            commentaire_obstruction4 = request.data.get('commentaire_obstruction4')
            commentaire_obstruction5 = request.data.get('commentaire_obstruction5')
            commentaire_obstruction6 = request.data.get('commentaire_obstruction6')
            pente = convertion(request.data.get('pente'))
            banc = convertion(request.data.get('banc'))
            etayage = convertion(request.data.get('etayage'))
            pretection_nuit = convertion(request.data.get('pretection_nuit'))
            pretection_ouverture = convertion(request.data.get('pretection_ouverture'))
            permis_espace = convertion(request.data.get('permis_espace'))
            pompage_eau = convertion(request.data.get('pompage_eau'))
            fermeture_route = convertion(request.data.get('fermeture_route'))
            mesure_securite_additionnel = request.data.get('mesure_securite_additionnel')
            commentaire1 = request.data.get('commentaire1')
            commentaire2 = request.data.get('commentaire2')
            commentaire3 = request.data.get('commentaire3')
            commentaire4 = request.data.get('commentaire4')
            effectuee = convertion(request.data.get('effectuee'))
            effectuer_nom = request.data.get('effectuer_nom')
            effectuer_date = request.data.get('effectuer_date')
            representant_contracant = convertion(request.data.get('representant_contracant'))
            representant_contracant_nom = request.data.get('representant_contracant_nom ')
            representant_contracant_date = request.data.get('representant_contracant_date')
            superviseur_nom = request.data.get('superviseur_nom')
            superviseur_date = request.data.get('superviseur_date')
            representant_proprietaire_nom = request.data.get('representant_proprietaire_nom')
            representant_proprietaire_date = request.data.get('representant_proprietaire_date')
            superviseur_excavation_nom = request.data.get('superviseur_excavation_nom')
            superviseur_excavation_date = request.data.get('superviseur_excavation_date')
            date_achevement_excavation = request.data.get('date_achevement_excavation')
            permis_excavation_delivre = request.data.get('permis_excavation_delivre')
            
            excavation = checklist_excavation(date_entete=date_entete,Registre_entete=Registre_entete,site=site,localite=localite,client=client,entreprise_intervenante=entreprise_intervenante,descriptif=descriptif,profondeur_excavation=profondeur_excavation,zone=zone,type_excavation=type_excavation,dessin1=dessin1,dessin2=dessin2,dessin3=dessin3,dessin4=dessin4,eau_incendie=eau_incendie,eau_pluviale=eau_pluviale,eau_riviere=eau_riviere,effluent=effluent,eau_domestique=eau_domestique,sanitaire=sanitaire,cable_communication=cable_communication,mise_terre=mise_terre,structure_adjacente=structure_adjacente,cable_cathodique=cable_cathodique,ligne_gaz=ligne_gaz,atre_obstruction=atre_obstruction,electrique_11kv=electrique_11kv, electrique_6kv= electrique_6kv,electrique_690v=electrique_690v,electrique_690i=electrique_690i,commentaire_obstruction1=commentaire_obstruction1,commentaire_obstruction2=commentaire_obstruction2,commentaire_obstruction3=commentaire_obstruction3,commentaire_obstruction4=commentaire_obstruction4,commentaire_obstruction5=commentaire_obstruction5,commentaire_obstruction6=commentaire_obstruction6,pente=pente,banc=banc,etayage=etayage,pretection_nuit=pretection_nuit,pretection_ouverture=pretection_ouverture,permis_espace=permis_espace,pompage_eau=pompage_eau,fermeture_route=fermeture_route,mesure_securite_additionnel=mesure_securite_additionnel,commentaire1=commentaire1,commentaire2=commentaire2,commentaire3=commentaire3,commentaire4=commentaire4,effectuee=effectuee,effectuer_nom=effectuer_nom,effectuer_date=effectuer_date,representant_contracant=representant_contracant,representant_contracant_nom=representant_contracant_nom,representant_contracant_date=representant_contracant_date,superviseur_nom=superviseur_nom,superviseur_date=superviseur_date,representant_proprietaire_nom=representant_proprietaire_nom,representant_proprietaire_date=representant_proprietaire_date,superviseur_excavation_nom=superviseur_excavation_nom,superviseur_excavation_date=superviseur_excavation_date,date_achevement_excavation=date_achevement_excavation,permis_excavation_delivre=permis_excavation_delivre)
            excavation.save()
            
            serializer = Checklist_excavation_serializer(excavation)
        
            return Response(serializer.data, status=status.HTTP_201_CREATED)
            
            
        except IntegrityError as e:
            return Response({'detail':'Erreur d\'intgrétité: ' + str(e)},status=status.HTTP_400_BAD_REQUEST)
            
            
class checklist_espace_confine_viewset(ModelViewSet):
    http_method_names=['get','post','patch', 'delete', 'head', 'options']
    queryset = checklist_espace_confine.objects.all()
    serializer_class = Checklist_espace_confine_serializer
    
    def create(self,request,*args,**kwargs):
        def convertion(value):
                if value is not None:
                    return "True" if str(value).lower() == "true" else "False"
                return "False"
    
        try:
            date_entete = request.data.get('date_entete')
            registre_entete = request.data.get('registre_entete')
            site = request.data.get('site')
            equipement = request.data.get('equipement')
            entreprise_intervenante = request.data.get('entreprise_intervenante')
            date_debut = request.data.get('date_debut')
            heure_debut = request.data.get('heure_debut')
            heure_fin = request.data.get('heure_fin')
            date_fin = request.data.get('date_fin')
            descriptif_travail = request.data.get('descriptif_travail')
            consignation_electique = convertion(request.data.get('consignation_electique'))
            consignation_fluidique = convertion(request.data.get('consignation_fluidique'))
            consignation_mecanique = convertion(request.data.get('consignation_mecanique'))
            ventilation = convertion(request.data.get('ventilation'))
            ventilation_forcee = convertion(request.data.get('ventilation_forcee'))
            plan_urgence = convertion(request.data.get('plan_urgence'))
            ASET = convertion(request.data.get('ASET'))
            autre_intervention = request.data.get('autre_intervention')
            detecteur_gaz = convertion(request.data.get('detecteur_gaz'))
            type_detecteur_gaz = request.data.get('type_detecteur_gaz')
            appareil_respiratoire_autonome = convertion(request.data.get('appareil_respiratoire_autonome'))
            type_appareil_respiratoire_autonome = request.data.get('type_appareil_respiratoire_autonome')
            appareil_respiratoire_isolant = convertion(request.data.get('appareil_respiratoire_isolant'))
            type_appareil_respiratoire_isolant = request.data.get('type_appareil_respiratoire_isolant')
            masque = convertion(request.data.get('masque'))
            type_masque = request.data.get('type_masque')
            harnais = convertion(request.data.get('harnais'))
            type_harnais = request.data.get('type_harnais')
            treuil = convertion(request.data.get('treuil'))
            type_treuil = request.data.get('type_treuil')
            corde_assurance = convertion(request.data.get('corde_assurance'))
            type_corde_assurance = request.data.get('type_corde_assurance')
            panneaux = convertion(request.data.get('panneaux'))
            type_panneaux = request.data.get('type_panneaux')
            balisage = convertion(request.data.get('balisage'))
            type_balisage = request.data.get('type_balisage')
            moyen_intervenant = request.data.get('moyen_intervenant')
            o2_applicable = convertion(request.data.get('o2_applicable'))
            o2_date = request.data.get('o2_date')
            o2_heure1 = request.data.get('o2_heure1')
            o2_PPM1 = request.data.get('o2_PPM1')
            o2_heure2 = request.data.get('o2_heure2')
            o2_PPM2 = request.data.get('o2_PPM2')
            o2_heure3 = request.data.get('o2_heure3')
            o2_PPM3 = request.data.get('o2_PPM3')
            LIE_applicable = convertion(request.data.get('LIE_applicable'))
            LIE_date = request.data.get('LIE_date')
            LIE_heure1 = request.data.get('LIE_heure1')
            LIE_PPM1 = request.data.get('LIE_PPM1')
            LIE_heure2 = request.data.get('LIE_heure2')
            LIE_PPM2 = request.data.get('LIE_PPM2')
            LIE_heure3 = request.data.get(' LIE_heure3')
            LIE_PPM3 = request.data.get('LIE_PPM3')
            Co_applicable = convertion(request.data.get('Co_applicable'))
            Co_date = request.data.get('Co_date')
            Co_heure1 = request.data.get('Co_heure1')
            Co_PPM1 = request.data.get('Co_PPM1')
            Co_heure2 = request.data.get('Co_heure2')
            Co_PPM2 = request.data.get('Co_PPM2')
            Co_heure3 = request.data.get('Co_heure3')
            Co_PPM3 = request.data.get('Co_PPM3')
            SO_applicable = convertion(request.data.get('SO_applicable'))
            SO_date = request.data.get('SO_date')
            SO_heure1 = request.data.get('SO_heure1')
            SO_PPM1 = request.data.get('SO_PPM1')
            SO_heure2 = request.data.get('SO_heure2')
            SO_PPM2 = request.data.get('SO_PPM2')
            SO_heure3 = request.data.get('SO_heure3')
            SO_PPM3 = request.data.get('SO_PPM3')
            H2S_applicable = convertion(request.data.get('H2S_applicable'))
            H2S_date = request.data.get('H2S_date')
            H2S_heure1 = request.data.get('H2S_heure1')
            H2S_PPM1 = request.data.get('H2S_PPM1')
            H2S_heure2 = request.data.get('H2S_heure2')
            H2S_PPM2 = request.data.get('H2S_PPM2')
            H2S_heure3 = request.data.get('H2S_heure3')
            H2S_PPM3 = request.data.get('H2S_PPM3')
            NH3_applicable = convertion(request.data.get('NH3_applicable'))
            NH3_date = request.data.get('NH3_date')
            NH3_heure1 = request.data.get('NH3_heure1')
            NH3_PPM1 = request.data.get('NH3_PPM1')
            NH3_heure2 = request.data.get('NH3_heure2')
            NH3_PPM2 = request.data.get('NH3_PPM2')
            NH3_heure3 = request.data.get(' NH3_heure3')
            NH3_PPM3 = request.data.get('NH3_PPM3')
            nom_testeur = request.data.get('nom_testeur')
            nom_reponsable_jovena = request.data.get('nom_reponsable_jovena')
            date_heure1 = request.data.get('date_heure1')
            nom_surveillant = request.data.get('nom_surveillant')
            date_heure2 = request.data.get('date_heure2')
            nom_cloture = request.data.get('nom_cloture')
            date_heure3 = request.data.get('date_heure3')
            alerte = request.data.get('alerte')
            pompier = request.data.get('pompier')
            ambulance = request.data.get('ambulance')
            responsable_site = request.data.get('responsable_site')
            responsable_jovena = request.data.get('responsable_jovena')
            permi_delivre = request.data.get('permi_delivre')
            
            
            espace = checklist_espace_confine(date_entete=date_entete,registre_entete=registre_entete,site=site,equipement=equipement,entreprise_intervenante=entreprise_intervenante,date_debut=date_debut,heure_debut=heure_debut,heure_fin=heure_fin,date_fin=date_fin,descriptif_travail=descriptif_travail,consignation_electique=consignation_electique,consignation_fluidique=consignation_fluidique,consignation_mecanique=consignation_mecanique,ventilation=ventilation,ventilation_forcee=ventilation_forcee,plan_urgence=plan_urgence,ASET=ASET,autre_intervention=autre_intervention,detecteur_gaz=detecteur_gaz,type_detecteur_gaz=type_detecteur_gaz,appareil_respiratoire_autonome=appareil_respiratoire_autonome,type_appareil_respiratoire_autonome=type_appareil_respiratoire_autonome,appareil_respiratoire_isolant=appareil_respiratoire_isolant,type_appareil_respiratoire_isolant=type_appareil_respiratoire_isolant,masque=masque,type_masque=type_masque,harnais=harnais,type_harnais=type_harnais,treuil=treuil,type_treuil=type_treuil,corde_assurance=corde_assurance,type_corde_assurance=type_corde_assurance,panneaux=panneaux,type_panneaux=type_panneaux,balisage=balisage,type_balisage=type_balisage,moyen_intervenant=moyen_intervenant,o2_applicable=o2_applicable,o2_date=o2_date,o2_heure1=o2_heure1,o2_PPM1=o2_PPM1,o2_heure2=o2_heure2,o2_PPM2=o2_PPM2,o2_heure3=o2_heure3,o2_PPM3=o2_PPM3,LIE_applicable=LIE_applicable,LIE_date=LIE_date,LIE_heure1=LIE_heure1,LIE_PPM1=LIE_PPM1,LIE_heure2=LIE_heure2,LIE_PPM2=LIE_PPM2,LIE_heure3=LIE_heure3,LIE_PPM3=LIE_PPM3,Co_applicable=Co_applicable,Co_date=Co_date,Co_heure1=Co_heure1,Co_PPM1=Co_PPM1,Co_heure2=Co_heure2,Co_PPM2=Co_PPM2,Co_heure3=Co_heure3,Co_PPM3=Co_PPM3,SO_applicable=SO_applicable,SO_date=SO_date,SO_heure1=SO_heure1,SO_PPM1=SO_PPM1,SO_heure2=SO_heure2,SO_PPM2=SO_PPM2,SO_heure3=SO_heure3,SO_PPM3=SO_PPM3,H2S_applicable=H2S_applicable,H2S_date=H2S_date,H2S_heure1=H2S_heure1,H2S_PPM1=H2S_PPM1,H2S_heure2=H2S_heure2,H2S_PPM2=H2S_PPM2,H2S_heure3=H2S_heure3,H2S_PPM3=H2S_PPM3,NH3_applicable=NH3_applicable,NH3_date=NH3_date,NH3_heure1=NH3_heure1,NH3_PPM1=NH3_PPM1,NH3_heure2=NH3_heure2,NH3_PPM2=NH3_PPM2,NH3_heure3=NH3_heure3,NH3_PPM3=NH3_PPM3,nom_testeur=nom_testeur,nom_reponsable_jovena=nom_reponsable_jovena,date_heure1=date_heure1,nom_surveillant=nom_surveillant,date_heure2=date_heure2,nom_cloture=nom_cloture,date_heure3=date_heure3,alerte=alerte,pompier=pompier,ambulance=ambulance,responsable_site=responsable_site,responsable_jovena=responsable_jovena,permi_delivre=permi_delivre)
            espace.save()
            serializer = Checklist_espace_confine_serializer(espace)             
            
            return Response(serializer.data, status=status.HTTP_201_CREATED)
                
                
        except IntegrityError as e:
            return Response({'detail':'Erreur d\'intgrétité: ' + str(e)},status=status.HTTP_400_BAD_REQUEST)
        
        
class KPI_viewset(ModelViewSet):
    http_method_names=['get','post','patch', 'delete', 'head', 'options']
    queryset = KPI.objects.all()
    serializer_class = KPI_serializer
    
    def create(self,request,*args,**kwargs):
        def calcul1(accident, poste, soin, secour, presque, heure):
            if isinstance(accident, (int, float)) and isinstance(poste, (int, float)) and isinstance(soin, (int, float)) and isinstance(secour, (int, float)) and isinstance(presque, (int, float))  and isinstance(heure, (int, float)):
            
                taux_frequence = (((int(accident) + int(poste) + int(soin) + int(secour) + int(presque) ) * 1000000) / int(heure))
                return taux_frequence
            else:
                return None
        
            
        def calcul2(accident, poste, soin, secour, presque ,heure):
            if isinstance(accident, (int, float)) and isinstance(poste, (int, float)) and isinstance(soin, (int, float)) and isinstance(secour, (int, float)) and isinstance(presque, (int, float))  and isinstance(heure, (int, float)):
                taux_frequence = (((int(accident) + int(poste) + int(soin) + int(secour )+ int(presque) ) * 1000) / int(heure))
                return taux_frequence
            else:
                return None
            
        def calcul3(perdue , travail):
            if isinstance(perdue,(int,float)) and isinstance(travail,(int,float)):
                taux_gravite = (((int(perdue) * 1000)/int(travail)))
                return taux_gravite  
            else:
                return None
                    
        try:
       
                
            date_str = request.data.get('date')  
            Hommes = request.data.get('Hommes')
            Femmes = request.data.get('Femmes')
            Effectif_total = request.data.get('Effectif_total')
            Heures_travail = request.data.get('Heures_travail')
            Fatalite = request.data.get('Fatalite')
            Accident = request.data.get('Accident')
            Poste_adapte = request.data.get('Poste_adapte')
            soins_medicaux = request.data.get('soins_medicaux')
            Premiers_secours = request.data.get('Premiers_secours')
            Presq_accident = request.data.get('Presq_accident')
            Heures_perdues = request.data.get('Heures_perdues')
            Km_parcourus = request.data.get('Km_parcourus')
            nombre_incident = request.data.get('nombre_incident')
            Nombre_acceleration_brusque = request.data.get('Nombre_acceleration_brusque')
            Nombre_freinage = request.data.get('Nombre_freinage')
            Nombre_limitation = request.data.get('Nombre_limitation')
            Vitesse = request.data.get('Vitesse')
            Nombre_malade = request.data.get('Nombre_malade')
            Declare = request.data.get('Declare')
            violation_regles = request.data.get('violation_regles ')
            Nombre_deversement = request.data.get('Nombre_deversement')
            Volume_impacte = request.data.get('Volume_impacte')
            Nombre_inspection = request.data.get('Nombre_inspection')
            Zone_dechets = request.data.get('Zone_dechets')
            Zone_stockage = request.data.get('Zone_stockage')
            Dechet_inertes = request.data.get('Dechet_inertes')
            Dechet_organique = request.data.get('Dechet_organique')
            Dechet_plastique = request.data.get('Dechet_plastique')
            Dechet_hydrocarbure = request.data.get('Dechet_hydrocarbure')
            Dechet_D3E = request.data.get('Dechet_D3E')
            Eaux_use = request.data.get('Eaux_use')
            Consommation_eau = request.data.get('Consommation_eau')
            Consommation_carburant = request.data.get('Consommation_carburant')
            Consommation_electricire = request.data.get('Consommation_electricire')
            Valeur_limite = request.data.get('Valeur_limite')
            X_sur_site = request.data.get('X_sur_site')
            X_aux_recepteurs = request.data.get('X_aux_recepteurs')
            X_sources_emission = request.data.get('X_sources_emission')
            X_qualite_air = request.data.get('X_qualite_air')
            X_sante = request.data.get('X_sante')
            X_securite = request.data.get('X_securite')
            X_environnement = request.data.get('X_environnement')
            X_social = request.data.get('X_socia')
            Aucun_incident = request.data.get('Aucun_incident')
            Nombre_tavailleur_migrant = request.data.get('Nombre_tavailleur_migrant')
            Nombre_travailleur_locaux = request.data.get('Nombre_travailleur_locaux')
            Pourcentage_main_oeuvre = request.data.get('Pourcentage_main_oeuvre')
            Hebrgement_travailleur = request.data.get('Hebrgement_travailleur')
            Duree_moyenne_contrat = request.data.get('Duree_moyenne_contrat')
            Logement_travailleurs = request.data.get('Logement_travailleurs')
            Approvisionnement_eau = request.data.get('Approvisionnement_eau')
            Nombre_activite = request.data.get('Nombre_activite')
            Parties_prenantes = request.data.get('Parties_prenantes')
            Nombre_activite_public = request.data.get('Nombre_activite_public')
            Induction_site = request.data.get('Induction_site')
            exercice_urgence = request.data.get('exercice_urgence')
            Toolbox = request.data.get('Toolbox')
            Formation_specifique = request.data.get('Formation_specifique')
            starter = request.data.get('starter')
            Nombre_outil = request.data.get('Nombre_outil')
            # Nombre_inspection1 = request.data.get('Nombre_inspection1')
            
            
            
            try:
                date_conv = datetime.strptime(date_str, '%Y-%m-%d').date()
            except ValueError:
                return Response({'detail': 'Format de date invalide'}, status=status.HTTP_400_BAD_REQUEST)
            
            
            mois = date_conv.strftime('%B').lower()
            print("mois:" , mois)
            
            print("Poste_adapte",Poste_adapte)
            print("soins_medicaux",soins_medicaux)
            print("Premier_secours",Premiers_secours)
            print("Presq_accident",Presq_accident)
            print("Heures_travail",Heures_travail)
            
            if mois == 'january' :
                Taux_frequence = calcul1(int(Accident),int(Poste_adapte),int(soins_medicaux),int(Premiers_secours),int(Presq_accident),int(Heures_travail))
            else:
                Taux_frequence = calcul2(int(Accident),int(Poste_adapte),int(soins_medicaux),int(Premiers_secours),int(Presq_accident),int(Heures_travail))
            
            print(Taux_frequence)
            if mois =='january':
                Taux_gravite = 0
            else:
                Taux_gravite = calcul3(int(Heures_perdues),int(Heures_travail))
            
            
            KPIS= KPI(date=date_str,Hommes=Hommes,Femmes=Femmes,Effectif_total=Effectif_total,Heures_travail=Heures_travail,Fatalite=Fatalite,Accident=Accident,Poste_adapte=Poste_adapte,soins_medicaux=soins_medicaux,Premiers_secours=Premiers_secours,Presq_accident=Presq_accident,Heures_perdues=Heures_perdues,Km_parcourus=Km_parcourus,nombre_incident=nombre_incident,Nombre_acceleration_brusque=Nombre_acceleration_brusque,Nombre_freinage=Nombre_freinage,Nombre_limitation=Nombre_limitation,Vitesse=Vitesse,Nombre_malade=Nombre_malade,Declare=Declare,violation_regles=violation_regles,Nombre_deversement=Nombre_deversement,Volume_impacte=Volume_impacte,Nombre_inspection=Nombre_inspection,Zone_dechets=Zone_dechets,Zone_stockage=Zone_stockage,Dechet_inertes=Dechet_inertes,Dechet_organique=Dechet_organique,Dechet_plastique=Dechet_plastique,Dechet_hydrocarbure=Dechet_hydrocarbure,Dechet_D3E=Dechet_D3E,Eaux_use=Eaux_use,Consommation_eau=Consommation_eau,Consommation_carburant=Consommation_carburant,Consommation_electricire=Consommation_electricire,Valeur_limite=Valeur_limite,X_sur_site=X_sur_site,X_aux_recepteurs=X_aux_recepteurs,X_sources_emission=X_sources_emission,X_qualite_air=X_qualite_air,X_sante=X_sante,X_securite=X_securite,X_environnement=X_environnement,X_social=X_social,Aucun_incident=Aucun_incident,Nombre_tavailleur_migrant=Nombre_tavailleur_migrant,Nombre_travailleur_locaux=Nombre_travailleur_locaux,Pourcentage_main_oeuvre=Pourcentage_main_oeuvre,Hebrgement_travailleur=Hebrgement_travailleur,Duree_moyenne_contrat=Duree_moyenne_contrat,Logement_travailleurs=Logement_travailleurs,Approvisionnement_eau=Approvisionnement_eau,Nombre_activite=Nombre_activite,Parties_prenantes=Parties_prenantes,Nombre_activite_public=Nombre_activite_public,Induction_site=Induction_site,exercice_urgence=exercice_urgence,Toolbox=Toolbox,Formation_specifique=Formation_specifique,starter=starter,Nombre_outil=Nombre_outil ,Taux_frequence=Taux_frequence ,Taux_gravite=Taux_gravite)
            KPIS.save()
            serializer = KPI_serializer(KPIS)
            
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        except IntegrityError as e:
            return Response({'detail':'Erreur d\'intgrétité: ' + str(e)},status=status.HTTP_400_BAD_REQUEST)
        
        
# class KPIListView(APIView):
#     def get(self, request):
#         queryset = KPI.objects.all()
#         serializer = KPI_serializer(queryset, many=True)
#         return Response(serializer.data)