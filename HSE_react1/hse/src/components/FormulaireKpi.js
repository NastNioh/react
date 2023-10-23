import React, { useState } from "react"

function FormulaireKpi() {
    const [date,setDate] = useState("");
    const [Hommes,setHommes] = useState("");
    const [Femmes,setFemmes] = useState("");
    const [Effectif_total,setEffectifTotal] = useState("");
    const [Heures_travail,setHeuresTravail] = useState("");
    const [Fatalite,setFacilite] = useState("");
    const [Accident,setAccident] = useState("");
    const [Poste_adapte,setPosteAdapte] = useState("");
    const [soins_medicaux,setSoindsMedicaux] = useState("");
    const [Premiers_secours,setPremiersSercours] = useState("");
    const [Presq_accident,setPresqAccident] = useState("");
    const [Heures_perdues,setHeuresPerdues] = useState("");
    const [Km_parcourus,setKmParcourus] = useState("");
    const [nombre_incident,setNombreIncident] = useState("");
    const [Nombre_acceleration_brusque,setNombreAccelerationBrusque] = useState("");
    const [Nombre_freinage,setNombreFreinage] = useState("");
    const [Nombre_limitation,setNombreLimitation] = useState("");
    const [Vitesse,setVitesse] = useState("");
    const [Nombre_malade,setNombreMalade] = useState("");
    const [Declare,setDeclare] = useState("");
    const [violation_regles,setViolationRegles] = useState("");
    const [Nombre_deversement,setNombreDeversement] = useState("");
    const [Volume_impacte,setVolumeImpacte] = useState("");
    const [Nombre_inspection,setNombreInspection] = useState("");
    const [Zone_dechets,setZoneDechets] = useState("");
    const [Zone_stockage,setZoneStockage] = useState("");
    const [Dechet_inertes,setDechetInertes] = useState("");
    const [Dechet_organique,setDechetOrganique] = useState("");
    const [Dechet_plastique,setDechePlastique] = useState("");
    const [Dechet_hydrocarbure,setDechetHydrocarbure] = useState("");
    const [Dechet_D3E,setDechetD3E] = useState("");
    const [Eaux_use,setEauxUse] = useState("");
    const [Consommation_eau,setConsommationEau] = useState("");
    const [Consommation_carburant,setConsommationCarburant] = useState("");
    const [Consommation_electricite,setConsommationElectricite] = useState("");
    const [Valeur_limite,setValeurLimite] = useState("");
    const [X_sur_site,setXSurSite] = useState("");
    const [X_aux_recepteurs,setXAuxRecepteurs] = useState("");
    const [X_sources_emission,setXSourcesEmission] = useState("");
    const [X_qualite_air,setXQualiteAir] = useState("");
    const [X_sante,setXSante] = useState("");
    const [X_securite,setXSecurite] = useState("");
    const [X_environnement,setXEnvironnement] = useState("");
    const [X_social,setXSocial] = useState("");
    const [Aucun_incident,setAucunIncident] = useState("");
    const [Nombre_travailleur_migrant,setNombreTravailleurMigrant] = useState("");
    const [Nombre_travailleur_locaux,setNombreTravailleurLocaux] = useState("");
    const [Pourcentage_main_oeuvre,setPourcentageMainOeuvre] = useState("");
    const [Hebergement_travailleur,setHebergementTravailleur] = useState("");
    const [Duree_moyenne_contrat,setDureeMoyenneContrat] = useState("");
    const [Logement_travailleurs,setLogementTravailleurs] = useState("");
    const [Approvisionnement_eau,setApprovisoinnementtEau] = useState("");
    const [Nombre_activite,setNombreActivite] = useState("");
    const [Parties_prenantes,setPartiePrenantes] = useState("");
    const [Nombre_activite_public,setNombreActivitePublic] = useState("");
    const [Induction_site,setInductionSite] = useState("");
    const [exercice_urgence,setExerciceUrgence] = useState("");
    const [Toolbox,setToolbox] = useState("");
    const [Formation_specifique,setFormationSpecifique] = useState("");
    const [starter,setStarter] = useState("");
    const [Nombre_outil,setNombreOutil] = useState("");
    const [Nombre_inspection1,setNombreInspection1] = useState("");
    const [Taux_frequence,setTauxFrequence] = useState("");
    const [Taux_gravite, setTauxGravite] = useState("");
    
    const BtnValider = async (e) => {
        e.preventDefault();
        const FormData = {
            date:date,
            Hommes:Hommes,
            Femmes:Femmes,
            Effectif_total:Effectif_total,
            Heures_travail:Heures_travail,
            Fatalite:Fatalite,
            Accident:Accident,
            Poste_adapte:Poste_adapte,
            soins_medicaux:soins_medicaux,
            Premiers_secours:Premiers_secours,
            Presq_accident:Presq_accident,
            Heures_perdues:Heures_perdues,
            Km_parcourus:Km_parcourus,
            nombre_incident:nombre_incident,
            Nombre_acceleration_brusque:Nombre_acceleration_brusque,
            Nombre_freinage:Nombre_freinage,
            Nombre_limitation:Nombre_limitation,
            Vitesse:Vitesse,
            Nombre_malade:Nombre_malade,
            Declare:Declare,
            violation_regles:violation_regles,
            Nombre_deversement:Nombre_deversement,
            Volume_impacte:Volume_impacte,
            Nombre_inspection:Nombre_inspection,
            Zone_dechets:Zone_dechets,
            Zone_stockage:Zone_stockage,
            Dechet_inertes:Dechet_inertes,
            Dechet_organique:Dechet_organique,
            Dechet_plastique:Dechet_plastique,
            Dechet_hydrocarbure:Dechet_hydrocarbure,
            Dechet_D3E:Dechet_D3E,
            Eaux_use:Eaux_use,
            Consommation_eau:Consommation_eau,
            Consommation_carburant:Consommation_carburant,
            Consommation_electricire:Consommation_electricire,
            Valeur_limite: Valeur_limite,
            X_sur_site:X_sur_site,
            X_aux_recepteurs:X_aux_recepteurs,
            X_sources_emission:X_sources_emission,
            X_qualite_air:X_qualite_air,
            X_sante:X_sante,
            X_securite:X_securite,
            X_environnement:X_environnement,
            X_social:X_social,
            Aucun_incident:Aucun_incident,
            Nombre_tavailleur_migrant:Nombre_tavailleur_migrant,
            Nombre_travailleur_locaux:Nombre_travailleur_locaux,
            Pourcentage_main_oeuvre:Pourcentage_main_oeuvre,
            Hebrgement_travailleur:Hebrgement_travailleur,
            Duree_moyenne_contrat:Duree_moyenne_contrat,
            Logement_travailleurs:Logement_travailleurs,
            Approvisionnement_eau:Approvisionnement_eau,
            Nombre_activite:Nombre_activite,
            Parties_prenantes:Parties_prenantes,
            Nombre_activite_public:Nombre_activite_public,
            Induction_site:Induction_site,
            exercice_urgence:exercice_urgence,
            Toolbox:Toolbox,
            Formation_specifique:Formation_specifique,
            starter:starter,
            Nombre_outil:Nombre_outil,
            Nombre_inspection1:Nombre_inspection1,
            Taux_frequence: Taux_frequence,
            Taux_gravite:Taux_gravite,
        }
        await fetch("", {
            method: "POST",
            headers: {
                "Content-Type":"application/json",
            },
            body: JSON.stringify(FormData),
        })
            .then((response) => responsse.json())
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.error("Erreur lors de l'envoi de la requête", error);
            })
    };

    return (
        <div>
                <input onChange={(e) =>set(e.target.value)}   type="text" name="" id="" />
        </div>
    )

}