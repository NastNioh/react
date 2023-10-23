import React, { useState } from "react";

function FormulaireFeu() {
    const [date_entete,setDateEntete] = useState("");
    const [registre_entete,setRegistreEntete] = useState(0);
    const [site,setSite] = useState("");
    const [client,setClient] = useState("");
    const [entreprise_intervenante,setEntrepriseIntervenante] = useState("");
    const [descriptif_travail,setDescriptifTravail] = useState("");
    const [date_debut,setDateDebut] = useState("");
    const [heure_debut,setHeureDebut] = useState("");
    const [heure_fin,setHeureFin] = useState("");
    const [date_fin,setDateFin] = useState("");
    const [proximite_zone_ATEX ,setProximiteZoneAtex] = useState("");
    const [autre_risque,setAutreRisque] = useState("");
    const [intervenant1,setIntervenant1] = useState("");
    const [intervenant2,setIntervenant2] = useState("");
    const [intervenant3,setIntervenant3] = useState("");
    const [intervenant4,setIntervenant4] = useState("");
    const [soudage,setSoudage] = useState("");
    const [tronconnage,setTrnconnage] = useState("");
    const [decoupage,setDecoupage] = useState("");
    const [meulage,setMeulage] = useState("");
    const [autre_type_travaux,setAutreTypeTravaux] = useState("");
    const [poste_souder,setPosteSouder] = useState("");
    const [chalumeau,setChalumeau] = useState("");
    const [meuleuse,setMeuleuse] = useState("");
    const [tronconneuse,setTronconmeuse] = useState("");
    const [autre_materiel_utilise,setAutreMaterielUtilise] = useState("");
    const [plan_prevention,setPlanPrevention] = useState("");
    const [ASET,setAset] = useState("");
    const [permis_entree_espace_confine,setPermisEntreeEspaceConfine] = useState("");
    const [autre_document,setAutreDocument] = useState("");
    const [evacuation_substance,setEvacuationSubstance] = useState("");
    const [balisage_perimetre,setBalisagePerimetre] = useState("");
    const [protection_element,setProtectionElement] = useState("");
    const [ consignation_equipement,setConsignationEquipement] = useState("");
    const [vidange,setVidange] = useState("");
    const [degazage,setVidangeDegazage] = useState("");
    const [isolation_tuyauterie,setIsolationTuyauterie] = useState("");
    const [demontage_tuyauterie,setDemontageTuyauterie] = useState("");
    const [ecran,setEcran] = useState("");
    const [bache,setBache] = useState("");
    const [extincteur,setExtincteur] = useState("");
    const [sable,setSable] = useState("");
    const [ventilation,setVentilation] = useState("");
    const [test_atmospherique,setTestAtmospherique] = useState("");
    const [teneur_oxygene,setTeneurOxygene] = useState("");
    const [teneur_LIE,setTeneurLie] = useState("");
    const [nom_surveillance_pendant,setNonSurveillancePendant] = useState("");
    const [heure_debut_surveillance,setHeureDebutSurveillance] = useState("");
    const [heure_fin_surveillance,setHeureFinSurveillance] = useState("");
    const [nom_surveillance_apres,setNomSurveillanceApres] = useState("");
    const [alerte,setAlerte] = useState("");
    const [numero_pompier,setNumeroPompier] = useState("");
    const [numero_site,setNumeroSite] = useState("");
    const [numero_jovena,SetNumeroJovena] = useState("");
    const [numero_ambulance,setNumeroAmbulance] = useState("");
    const [nom_responsable_travaux,setNomResponsableTravaux] = useState("");
    const [qualite_responsable_travaux,setQualiteResponsableTravaux] = useState("");
    const [visa_responsable_travaux,setVisaResponsableTravaux] = useState("");
    const [nom_responsable_HSE,setNomResponsableHse] = useState("");
    const [qualite_responsable_HSE,setQualiteResponsableHse] = useState("");
    const [visa_responsable_HSE,setVisaResponsableHse] = useState("");
    const [nom_responsable_site,setNomResponsableSite] = useState("");
    const [qualite_responsable_site,setQualiteResponsableSite] = useState("");
    const [visa_responsable_site,setVisaResponsableSite] = useState("");
    const [nom_responsable_autre,setResponsableAutre] = useState("");
    const [qualite_responsable_autre,setQualiteResponsableAutre] = useState("");
    const [visa_responsable_autre,setVisaResponsableAutre] = useState("");
    const [permis_feu_delivre, setPermisFeuDelivre] = useState("");
    
    const BtnValider = async (e) => {
        e.preventDefault();
        const FormData = {
            date_entete: date_entete,
            registre_entete: registre_entete,
            site: site,
            client: client,
            entreprise_intervenante: entreprise_intervenante,
            descriptif_travail: descriptif_travail,
            date_debut: date_debut,
            heure_debut: heure_debut,
            heure_fin: heure_fin,
            date_fin: date_fin,
            proximite_zone_ATEX: proximite_zone_ATEX,
            autre_risque: autre_risque,
            intervenant1: intervenant1,
            intervenant2: intervenant2,
            intervenant3: intervenant3,
            intervenant4: intervenant4,
            soudage: soudage,
            tronconnage: tronconnage,
            decoupage: decoupage,
            meulage: meulage,
            autre_type_travaux: autre_type_travaux,
            poste_souder: poste_souder,
            chalumeau: chalumeau,
            meuleuse: meuleuse,
            tronconneuse: tronconneuse,
            autre_materiel_utilise: autre_materiel_utilise,
            plan_prevention: plan_prevention,
            ASET: ASET,
            permis_entree_espace_confine: permis_entree_espace_confine,
            autre_document: autre_document,
            evacuation_substance: evacuation_substance,
            balisage_perimetre: balisage_perimetre,
            protection_element: protection_element,
            consignation_equipement: consignation_equipement,
            vidange: vidange,
            degazage: degazage,
            isolation_tuyauterie: isolation_tuyauterie,
            demontage_tuyauterie: demontage_tuyauterie,
            ecran: ecran,
            bache: bache,
            extincteur: extincteur,
            sable: sable,
            ventilation: ventilation,
            test_atmospherique: test_atmospherique,
            teneur_oxygene: teneur_oxygene,
            teneur_LIE: teneur_LIE,
            nom_surveillance_pendant: nom_surveillance_pendant,
            heure_debut_surveillance: heure_debut_surveillance,
            heure_fin_surveillance: heure_fin_surveillance,
            nom_surveillance_apres: nom_surveillance_apres,
            alerte: alerte,
            numero_pompier: numero_pompier,
            numero_site: numero_site,
            numero_jovena: numero_jovena,
            numero_ambulance: numero_ambulance,
            nom_responsable_travaux: nom_responsable_travaux,
            qualite_responsable_travaux: qualite_responsable_travaux,
            visa_responsable_travaux: visa_responsable_travaux,
            nom_responsable_HSE: nom_responsable_HSE,
            qualite_responsable_HSE: qualite_responsable_HSE,
            visa_responsable_HSE: visa_responsable_HSE,
            nom_responsable_site: nom_responsable_site,
            qualite_responsable_site: qualite_responsable_site,
            visa_responsable_site: visa_responsable_site,
            nom_responsable_autre: nom_responsable_autre,
            qualite_responsable_autre: qualite_responsable_autre,
            visa_responsable_autre: visa_responsable_autre,
            permis_feu_delivre: permis_feu_delivre
                
        };
        await fetch("", {
            method: "POST",
            headers: {
                "content-Type": "application/json",
            },
            body: JSON.stringify(FormData),

        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
            })
            .catch((error) => {
                console.error("Erreur lors de l'envoi de la requête", error)
            });
        
    };
    return (
        <div>
            <form onSubmit={BtnValider}>
                <div className="">
                    <label htmlFor="">Date: </label>
                    <input onChange={(e) =>setDateEntete(e.target.value)}   type="date" name="date_entete" id="" />
                </div>
                    
                <div className="">
                    <label htmlFor="">Registre: </label>
                    <input onChange={(e) =>setRegistreEntete(e.target.value)}   type="number" name="registre_entete" id="" /><br />
                </div>
                <div className="">
                    <label htmlFor="">Site: </label>
                    <input onChange={(e) =>setSite(e.target.value)}   type="text" name="site" id="" />
                </div>
                <div className="">
                    <label htmlFor="">Client: </label>
                    <input onChange={(e) =>setClient(e.target.value)}   type="text" name="client" id="" /><br />
                </div>

                <div className="">
                    <label htmlFor="">Localité: </label>
                    <input onChange={(e) =>set(e.target.value)}   type="text" name="localite" id="" />
                </div>
                <div className="">
                    <label htmlFor="">Entreprise intervenante: </label>
                    <input onChange={(e) =>setEntrepriseIntervenante(e.target.value)}   type="text" name="entreprise_intervenante" id="" /><br />
                </div>

                <div className="form_feu_descriptif">
                    <label htmlFor="">DESCRIPTIF DU TRAVAIL: </label>
                    <input onChange={(e) =>setDescriptifTravail(e.target.value)}   type="text" name="descriptif_travail" id="" />
                </div>

                <div className="">
                    <label htmlFor="">Date de début: </label>
                    <input onChange={(e) =>setDateDebut(e.target.value)}   type="date" name="date_debut" id="" />&nbsp;
                </div>
                <div className="">
                    <label htmlFor="">Heure de début: </label>
                    <input onChange={(e) =>setHeureDebut(e.target.value)}   type="time" name="heure_debut" id="" />&nbsp;
                </div>
                <div className="">
                    <label htmlFor="">Heure de fin: </label>
                    <input onChange={(e) =>setHeureFin(e.target.value)}   type="time" name="heure_fin" id="" />&nbsp;
                </div>
                <div className="">
                    <label htmlFor="">Date de fin: </label>
                    <input onChange={(e) =>setDateFin(e.target.value)}   type="date" name="date_fin" id="" />
                </div>

                <div className="">
                    <h3>Risque particulier</h3><br />
                    <input onChange={(e) =>setProximiteZoneAtex(e.target.value)}   type="checkbox" name="proximite_zone_ATEX" id="" />
                    <label htmlFor="">Proximité de zone ATEX</label><br /><br />

                    <label htmlFor="">Autre(s) à préciser</label>
                    <input onChange={(e) =>setAutreRisque(e.target.value)}   type="text" name="autre_risque" id="" value="N/A" /><br /><br />
                </div>

                <div className="">
                    <h3>Nom des Intervenants autorisés</h3><br />
                    <div className="">
                        <label htmlFor="">1-: </label>
                        <input onChange={(e) =>setIntervenant1(e.target.value)}   type="text" name="intervenant1" value="tsanta" id="" /><br /><br />
                    </div>
                    <div className="">
                        <label htmlFor="">2-: </label>
                        <input onChange={(e) =>setIntervenant2(e.target.value)}   type="text" name="intervenant2" id="" value="Yonih" /><br /><br />
                    </div>
                    <div className="">
                        <label htmlFor="">3-: </label>
                        <input onChange={(e) =>setIntervenant3(e.target.value)}   type="text" name="intervenant3" id="" value="Nicky" /><br /><br />
                    </div>
                    <div className="">
                        <label htmlFor="">4-: </label>
                        <input onChange={(e) =>setIntervenant4(e.target.value)}   type="text" name="intervenant4" id="" value="Kal" /><br /><br />
                    </div>
                </div>

                <div className="">
                    <h3>Type de travaux par points chauds</h3><br />
                    <input onChange={(e) =>setSoudage(e.target.value)}   type="checkbox" name="soudage" id="" />
                    <label htmlFor="soudage">Soudage</label><br /><br />
                    <input onChange={(e) =>setTrnconnage(e.target.value)}   type="checkbox" name="tonconnage" id="" />
                    <label htmlFor="tonconnage">Tronçonnage</label><br /><br />
                    <input onChange={(e) =>setDecoupage(e.target.value)}   type="checkbox" name="decoupage" id="" />
                    <label htmlFor="decoupage">Découpage</label><br /><br />
                    <input onChange={(e) =>setMeulage(e.target.value)}   type="checkbox" name="meulage" id="" />
                    <label htmlFor="meulage">Meulage</label><br /><br />

                    <label htmlFor="autre_type_travaux">Autre(s) à préciser</label><br />
                    <input onChange={(e) =>setAutreTypeTravaux(e.target.value)}   type="text" name="autre_type_travaux" id="" value="N/A" /><br /><br />
                </div>

                <div className="">
                    <h3>Matériels utilisés</h3><br />
                    <input onChange={(e) =>setPosteSouder(e.target.value)}   type="checkbox" name="poste_souder" id="" />
                    <label htmlFor="poste_souder">Poste à souder</label><br /><br />
                    <input onChange={(e) =>setChalumeau(e.target.value)}   type="checkbox" name="chalumeau" id="" />
                    <label htmlFor="chalumeau">Chalumeau</label><br /><br />
                    <input onChange={(e) =>setMeuleuse(e.target.value)}   type="checkbox" name="meuleuse" id="" />
                    <label htmlFor="meuleuse">Meuleuse</label><br /><br />
                    <input onChange={(e) =>setTronconmeuse(e.target.value)}   type="checkbox" name="tronconneuse" id="" />
                    <label htmlFor="tronconneuse">Tronçonneuse</label><br /><br />

                    <label htmlFor="autre_materiel_utilise">Autre(s) à préciser</label><br />
                    <input onChange={(e) =>setAutreMaterielUtilise(e.target.value)}   type="text" name="autre_materiel_utilise" id="" value="N/A" /><br /><br />
                </div>

                <div className="">
                    <h3>Documents associés</h3><br />
                    <input onChange={(e) =>setPlanPrevention(e.target.value)}   type="checkbox" name="plan_prevention" id="" />
                    <label htmlFor="plan_prevention">Plan de prévention</label><br /><br />
                    <input onChange={(e) =>setAset(e.target.value)}   type="checkbox" name="ASET" id="" />
                    <label htmlFor="ASET">ASET</label><br /><br />
                    <input onChange={(e) =>setPermisEntreeEspaceConfine(e.target.value)}   type="checkbox" name="permis_entree_espace_confine" id="" />
                    <label htmlFor="permis_entree_espace_confine">Pemis d'entrée en espace confiné</label><br /><br />

                    <label htmlFor="autre_document">Autre(s) à préciser</label><br />
                    <input onChange={(e) =>setAutreDocument(e.target.value)}   type="text" name="autre_document" id="" value="N/A" /><br /><br />
                </div>

                <div className="">
                    <h1>MISE EN SECURITE</h1><br />
                    <label htmlFor="">Evacuation des substances combustibles: </label>
                    &nbsp;&nbsp; Non:
                    <input onChange={(e) =>setEvacuationSubstance(e.target.value)}   type="radio" name="evacuation_substance" id="" value="Non" />
                    &nbsp;&nbsp; Oui:
                    <input onChange={(e) =>setEvacuationSubstance(e.target.value)}   type="radio" name="evacuation_substance" id="" value="Oui" />
                    &nbsp;&nbsp; Fait: 
                    <input onChange={(e) =>setEvacuationSubstance(e.target.value)}   type="radio" name="evacuation_substance" id="" value="Fait" /><br />
                    <br /><hr /><br />
                    <label htmlFor="">Balisage du périmètre de sécurité:</label>
                    &nbsp;&nbsp; Non:
                    <input onChange={(e) =>setBalisagePerimetre(e.target.value)}   type="radio" name="balisage_perimetre" id="" value="Non" />
                    &nbsp;&nbsp; Oui:
                    <input onChange={(e) =>setBalisagePerimetre(e.target.value)}   type="radio" name="balisage_perimetre" id="" value="Oui" />
                    &nbsp;&nbsp; Fait: 
                    <input onChange={(e) =>setBalisagePerimetre(e.target.value)}   type="radio" name="balisage_perimetre" id="" value="Fait" /><br />
                    <br /><hr /><br />
                    <label htmlFor="">Protection des éléments non déplaçables:</label>
                    &nbsp;&nbsp; Non:
                    <input onChange={(e) =>setProtectionElement(e.target.value)}   type="radio" name="protection_element" id="" value="Non" />
                    &nbsp;&nbsp; Oui:
                    <input onChange={(e) =>setProtectionElement(e.target.value)}   type="radio" name="protection_element" id="" value="Oui" />
                    &nbsp;&nbsp; Fait: 
                    <input onChange={(e) =>setProtectionElement(e.target.value)}   type="radio" name="protection_element" id="" value="Fait" /><br />
                    <br /><hr /><br />
                    <label htmlFor="">Consignation équipement/élctrique:</label>
                    &nbsp;&nbsp; Non:
                    <input onChange={(e) =>setConsignationEquipement(e.target.value)}   type="radio" name="consignation_equipement" id="" value="Non" />
                    &nbsp;&nbsp; Oui:
                    <input onChange={(e) =>setConsignationEquipement(e.target.value)}   type="radio" name="consignation_equipement" id="" value="Oui" />
                    &nbsp;&nbsp; Fait: 
                    <input onChange={(e) =>setConsignationEquipement(e.target.value)}   type="radio" name="consignation_equipement" id="" value="Fait" /><br />
                    <br /><hr /><br />
                    <label htmlFor="">Vidange - nettoyage - dépoussiérage:</label>
                    &nbsp;&nbsp; Non:
                    <input onChange={(e) =>setVidange(e.target.value)}   type="radio" name="vidange" id="" value="Non" />
                    &nbsp;&nbsp; Oui:
                    <input onChange={(e) =>setVidange(e.target.value)}   type="radio" name="vidange" id="" value="Oui" />
                    &nbsp;&nbsp; Fait: 
                    <input onChange={(e) =>setVidange(e.target.value)}   type="radio" name="vidange" id="" value="Fait" /><br />
                    <br /><hr /><br />
                    <label htmlFor="">Dégazage (tuyauterie, cuve, citerne, ...):</label>
                    &nbsp;&nbsp; Non:
                    <input onChange={(e) =>setVidangeDegazage(e.target.value)}   type="radio" name="degazage" id="" value="Non" />
                    &nbsp;&nbsp; Oui:
                    <input onChange={(e) =>setVidangeDegazage(e.target.value)}   type="radio" name="degazage" id="" value="Oui" />
                    &nbsp;&nbsp; Fait: 
                    <input onChange={(e) =>setVidangeDegazage(e.target.value)}   type="radio" name="degazage" id="" value="Fait" /><br />
                    <br /><hr /><br />
                    <label htmlFor="">Isolation des tuyauteries:</label>
                    &nbsp;&nbsp; Non:
                    <input onChange={(e) =>setIsolationTuyauterie(e.target.value)}   type="radio" name="isolation_tuyauterie" id="" value="Non" />
                    &nbsp;&nbsp; Oui:
                    <input onChange={(e) =>setIsolationTuyauterie(e.target.value)}   type="radio" name="isolation_tuyauterie" id="" value="Oui" />
                    &nbsp;&nbsp; Fait: 
                    <input onChange={(e) =>setIsolationTuyauterie(e.target.value)}   type="radio" name="isolation_tuyauterie" id="" value="Fait" /><br />
                    <br /><hr /><br />
                    <label htmlFor="">Démontage de tuyauterie:</label>
                    &nbsp;&nbsp; Non:
                    <input onChange={(e) =>setDemontageTuyauterie(e.target.value)}   type="radio" name="demontage_tuyauterie" id="" value="Non" />
                    &nbsp;&nbsp; Oui:
                    <input onChange={(e) =>setDemontageTuyauterie(e.target.value)}   type="radio" name="demontage_tuyauterie" id="" value="Oui" />
                    &nbsp;&nbsp; Fait: 
                    <input onChange={(e) =>setDemontageTuyauterie(e.target.value)}   type="radio" name="demontage_tuyauterie" id="" value="Fait" /><br /><br />
                </div>

                <div className="">
                    <h1>MOYENS DE PREVENTION</h1><br />
                    <label htmlFor="">Ecrans, panneaux:</label>
                    &nbsp;&nbsp; Non:
                    <input onChange={(e) =>setEcran(e.target.value)}   type="radio" name="ecran" id="" value="Non" />
                    &nbsp;&nbsp; Oui:
                    <input onChange={(e) =>setEcran(e.target.value)}   type="radio" name="ecran" id="" value="Oui" />
                    &nbsp;&nbsp; Fait: 
                    <input onChange={(e) =>setEcran(e.target.value)}   type="radio" name="ecran" id="" value="Fait" /><br />
                    <br /><hr /><br />
                    <label htmlFor="">baches ignifugées:</label>
                    &nbsp;&nbsp; Non:
                    <input onChange={(e) =>setBache(e.target.value)}   type="radio" name="bache" id="" value="Non" />
                    &nbsp;&nbsp; Oui:
                    <input onChange={(e) =>setBache(e.target.value)}   type="radio" name="bache" id="" value="Oui" />
                    &nbsp;&nbsp; Fait: 
                    <input onChange={(e) =>setBache(e.target.value)}   type="radio" name="bache" id="" value="Fait" /><br />
                    <br /><hr /><br />
                    <label htmlFor="">Extincteurs adaptés:</label>
                    &nbsp;&nbsp; Non:
                    <input onChange={(e) =>setExtincteur(e.target.value)}   type="radio" name="extincteur" id="" value="Non" />
                    &nbsp;&nbsp; Oui:
                    <input onChange={(e) =>setExtincteur(e.target.value)}   type="radio" name="extincteur" id="" value="Oui" />
                    &nbsp;&nbsp; Fait: 
                    <input onChange={(e) =>setExtincteur(e.target.value)}   type="radio" name="extincteur" id="" value="Fait" /><br />
                    <br /><hr /><br />
                    <label htmlFor="">Sable</label>
                    &nbsp;&nbsp; Non:
                    <input onChange={(e) =>setSable(e.target.value)}   type="radio" name="sable" id="" value="Non" />
                    &nbsp;&nbsp; Oui:
                    <input onChange={(e) =>setSable(e.target.value)}   type="radio" name="sable" id="" value="Oui" />
                    &nbsp;&nbsp; Fait: 
                    <input onChange={(e) =>setSable(e.target.value)}   type="radio" name="sable" id="" value="Fait" /><br /><br />
                    <br /><hr /><br />
                    <label htmlFor=""><strong>VENTILATION FORCEE:</strong></label>
                    &nbsp;&nbsp; Non:
                    <input onChange={(e) =>setVentilation(e.target.value)}   type="radio" name="ventilation" id="" value="Non" />
                    &nbsp;&nbsp; Oui:
                    <input onChange={(e) =>setVentilation(e.target.value)}   type="radio" name="ventilation" id="" value="Oui" />
                    &nbsp;&nbsp; Fait: 
                    <input onChange={(e) =>setVentilation(e.target.value)}   type="radio" name="ventilation" id="" value="Fait" /><br /><br />
                    <br /><hr /><br />
                    <label htmlFor=""><strong>TEST ATMOSPHERIQUE:</strong></label>
                    &nbsp;&nbsp; Non:
                    <input onChange={(e) =>setTestAtmospherique(e.target.value)}   type="radio" name="test_atmospherique" id="" value="Non" />
                    &nbsp;&nbsp; Oui:
                    <input onChange={(e) =>setTestAtmospherique(e.target.value)}   type="radio" name="test_atmospherique" id="" value="Oui" />
                    &nbsp;&nbsp; Fait: 
                    <input onChange={(e) =>setTestAtmospherique(e.target.value)}   type="radio" name="test_atmospherique" id="" value="Fait" /><br />
                    <br /><hr /><br />
                    <label htmlFor="">Teneur en oxygène:</label>
                    &nbsp;&nbsp; Non:
                    <input onChange={(e) =>setTeneurOxygene(e.target.value)}   type="radio" name="teneur_oxygene" id="" value="Non" />
                    &nbsp;&nbsp; Oui:
                    <input onChange={(e) =>setTeneurOxygene(e.target.value)}   type="radio" name="teneur_oxygene" id="" value="Oui" />
                    &nbsp;&nbsp; Fait: 
                    <input onChange={(e) =>setTeneurOxygene(e.target.value)}   type="radio" name="teneur_oxygene" id="" value="Fait" />
                    <br /><hr /><br />
                    <label htmlFor="">Teneur LIE:</label>
                    &nbsp;&nbsp; Non:
                    <input onChange={(e) =>setTeneurLie(e.target.value)}   type="radio" name="teneur_LIE" id="" value="Non" />
                    &nbsp;&nbsp; Oui:
                    <input onChange={(e) =>setTeneurLie(e.target.value)}   type="radio" name="teneur_LIE" id="" value="Oui" />
                    &nbsp;&nbsp; Fait: 
                    <input onChange={(e) =>setTeneurLie(e.target.value)}   type="radio" name="teneur_LIE" id="" value="Fait" /><br /><br />
                </div>

                <div className="">
                    <strong>Surveillance de sécurité pendant les travaux</strong><br />
                    Nom et Signature: 
                    <input onChange={(e) =>setNonSurveillancePendant(e.target.value)}   type="text" name="nom_surveillance_pendant" id="" />
                    <br /><br />
                    <strong>Surveillance de sécurité après les travaux</strong><br />
                    A partir de &nbsp;
                    <input onChange={(e) =>setHeureDebutSurveillance(e.target.value)}   type="time" name="heure_debut_surveillance" id="" />
                    jusqu'à &nbsp;
                    <input onChange={(e) =>setHeureFinSurveillance(e.target.value)}   type="time" name="heure_fin_surveillance" id="" /><br />
                    Nom et signature: 
                    <input onChange={(e) =>setNomSurveillanceApres(e.target.value)}   type="text" name="nom_surveillance_apres" id="" />
                    <br /><br />
                    <strong>ALERTE EN CAS D'INCENDIE OU D'ACCIDENT</strong><br />
                    <input onChange={(e) =>setAlerte(e.target.value)}   type="text" name="alerte" id="" />
                    <br /><br />
                    <strong>NUMERO D'URGENCE</strong><br />
                    Pompier: 
                    <input onChange={(e) =>setNumeroPompier(e.target.value)}   type="text" name="numero_pompier" id="" /><br />
                    Responsable du site: 
                    <input onChange={(e) =>setNumeroSite(e.target.value)}   type="text" name="numero_site" id="" /><br />
                    Responsable Jovena: 
                    <input onChange={(e) =>SetNumeroJovena(e.target.value)}   type="text" name="numero_jovena" id="" /><br />
                    Ambulance: 
                    <input onChange={(e) =>setNumeroAmbulance(e.target.value)}   type="text" name="numero_ambulance" id="" /><br /><br />
                </div>

                <table>
                    <thead>
                        <tr>
                            <th>Personnes ou services concernés</th>
                            <th>Nom</th>
                            <th>Qualité</th>
                            <th>Visa</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Responsable des travaux</td>
                            <td><input onChange={(e) =>setNomResponsableTravaux(e.target.value)}   type="text" name="nom_responsable_travaux" id="" /></td>
                            <td><input onChange={(e) =>setQualiteResponsableTravaux(e.target.value)}   type="text" name="qualite_responsable_travaux" id="" /></td>
                            <td><input onChange={(e) =>setVisaResponsableTravaux(e.target.value)}   type="text" name="visa_responsable_travaux" id="" /></td>
                        </tr>
                        <tr>
                            <td>Responsable HSE</td>
                            <td><input onChange={(e) =>setNomResponsableHse(e.target.value)}   type="text" name="nom_responsable_HSE" id="" /></td>
                            <td><input onChange={(e) =>setQualiteResponsableHse(e.target.value)}   type="text" name="qualite_responsable_HSE" id="" /></td>
                            <td><input onChange={(e) =>setVisaResponsableHse(e.target.value)}   type="text" name="visa_responsable_HSE" id="" /></td>
                        </tr>
                        <tr>
                            <td>Responsable du site</td>
                            <td><input onChange={(e) =>setNomResponsableSite(e.target.value)}   type="text" name="nom_responsable_site" id="" /></td>
                            <td><input onChange={(e) =>setQualiteResponsableSite(e.target.value)}   type="text" name="qualite_responsable_site" id="" /></td>
                            <td><input onChange={(e) =>setVisaResponsableSite(e.target.value)}   type="text" name="visa_responsable_site" id="" /></td>
                        </tr>
                        <tr>
                            <td>Autre</td>
                            <td><input onChange={(e) =>setResponsableAutre(e.target.value)}   type="text" name="nom_responsable_autre" id="" /></td>
                            <td><input onChange={(e) =>setQualiteResponsableAutre(e.target.value)}   type="text" name="qualite_responsable_autre" id="" /></td>
                            <td><input onChange={(e) =>setVisaResponsableAutre(e.target.value)}   type="text" name="visa_responsable_autre" id="" /></td>
                        </tr>
                    </tbody>
                </table>

                Permis de feu délivré le:
                <input onChange={(e) =>setPermisFeuDelivre(e.target.value)}   type="date" name="permis_feu_delivre" id="" />
                &nbsp;&nbsp; Visa du Responsable

                <button type="submit" className="btn btn-primary">Enregistrer</button>

            </form>
            
            

        </div>
    )
    
}