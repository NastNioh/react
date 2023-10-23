import React, { useState } from "react"

function FormulaireConfine() {
    const [date_entete,setDateEntete] = useState(); 
    const [registre_entete,setRegistreEntete] = useState(); 
    const [site,setSite] = useState(); 
    const [equipement,setEquipement] = useState(); 
    const [entreprise_intervenante,setEntrepriseIntervenante] = useState(); 
    const [date_debut,setDateDebut] = useState(); 
    const [heure_debut,setHeureDebut] = useState(); 
    const [heure_fin,setHeureFin] = useState(); 
    const [date_fin,setDateFin] = useState(); 
    const [descriptif_travail,setDescriptifTravail] = useState(); 
    const [consignation_electique,setConsignationElectrique] = useState(); 
    const [consignation_fluidique,setConsignationFluidique] = useState(); 
    const [consignation_mecanique,setConsignationMecanique] = useState(); 
    const [ventilation,setVentilation] = useState(); 
    const [ventilation_forcee,setVentilationForcee] = useState(); 
    const [plan_urgence,setPlanUrgence] = useState(); 
    const [ASET,setAset] = useState(); 
    const [autre_intervention,setAutreIntervention] = useState(); 
    const [detecteur_gaz,setDetecteurGaz] = useState(); 
    const [type_detecteur_gaz,setTypeDetecteurGaz] = useState(); 
    const [appareil_respiratoire_autonome,setAppareilRespiratoireAutonome] = useState(); 
    const [type_appareil_respiratoire_autonome,setTypeAppareilRespiratoireAutonome] = useState(); 
    const [appareil_respiratoire_isolant,setAppareilRespiratoireIsolant] = useState(); 
    const [type_appareil_respiratoire_isolant,setTypeAppareilRespiratoireIsolant] = useState(); 
    const [masque,setMasque] = useState(); 
    const [type_masque,setTypeMasque] = useState(); 
    const [harnais,setHarnais] = useState(); 
    const [type_harnais,setTypeHarnais] = useState(); 
    const [treuil,setTreuil] = useState(); 
    const [type_treuil,setTypeTreuil] = useState(); 
    const [corde_assurance,setCordeAssurance] = useState(); 
    const [type_corde_assurance,setTypeCordeAssurance] = useState(); 
    const [panneaux,setPanneaux] = useState(); 
    const [type_panneaux,setTypePanneaux] = useState(); 
    const [balisage,setBalisage] = useState(); 
    const [type_balisage,setTypeBalisage] = useState(); 
    const [moyen_intervenant,setMoyenIntervenant] = useState(); 
    const [o2_applicable,setO2Applicable] = useState(); 
    const [o2_date,setO2Date] = useState(); 
    const [o2_heure1,setO2Heure1] = useState(); 
    const [o2_PPM1,setO2Ppm1] = useState(); 
    const [o2_heure2,setO2Heure2] = useState(); 
    const [o2_PPM2,setO2Ppm2] = useState(); 
    const [o2_heure3,setO2Heure3] = useState(); 
    const [o2_PPM3,setO2Ppm3] = useState(); 
    const [LIE_applicable,setLieApplicable] = useState(); 
    const [LIE_date,setLieDate] = useState(); 
    const [LIE_heure1,setLieHeure1] = useState(); 
    const [LIE_PPM1,setLiePpm1] = useState(); 
    const [LIE_heure2,setLieHeure2] = useState(); 
    const [LIE_PPM2,setLiePpm2] = useState(); 
    const [LIE_heure3,setLieHeure3] = useState(); 
    const [LIE_PPM3,setLiePpm3] = useState(); 
    const [Co_applicable,setCoApplicable] = useState(); 
    const [Co_date,setCoDate] = useState(); 
    const [Co_heure1,setCoHeure1] = useState(); 
    const [Co_PPM1,setCoPpm1] = useState(); 
    const [Co_heure2,setCoHeure2] = useState(); 
    const [Co_PPM2,setCoPpm2] = useState(); 
    const [Co_heure3,setCoHeure3] = useState(); 
    const [Co_PPM3,setCoPpm3] = useState(); 
    const [SO_applicable,setSoApplicable] = useState(); 
    const [SO_date,setSoDate] = useState(); 
    const [SO_heure1,setSoHeure1] = useState(); 
    const [SO_PPM1,setSoPpm1] = useState(); 
    const [SO_heure2,setSoHeure2] = useState(); 
    const [SO_PPM2,setSoPpm2] = useState(); 
    const [SO_heure3,setSoHeure3] = useState(); 
    const [SO_PPM3,setSoPpm3] = useState(); 
    const [H2S_applicable,setH2sApplicable] = useState(); 
    const [H2S_date,setH2sDate] = useState(); 
    const [H2S_heure1,setH2sHeure1] = useState(); 
    const [H2S_PPM1,setH2sPpm1] = useState(); 
    const [H2S_heure2,setH2sHeure2] = useState(); 
    const [H2S_PPM2,setH2sPpm2] = useState(); 
    const [H2S_heure3,setH2sHeure3] = useState(); 
    const [H2S_PPM3,setH2sPpm3] = useState(); 
    const [NH3_applicable,setNh3Applicable] = useState(); 
    const [NH3_date,setNh3Date] = useState(); 
    const [NH3_heure1,setNh3Heure1] = useState(); 
    const [NH3_PPM1,setNh3Ppm1] = useState(); 
    const [NH3_heure2,setNh3Heure2] = useState(); 
    const [NH3_PPM2,setNh3Ppm2] = useState(); 
    const [NH3_heure3,setNh3Heure3] = useState(); 
    const [NH3_PPM3,setNh3Ppm3] = useState(); 
    const [nom_testeur,setNomTesteur] = useState(); 
    const [nom_reponsable_jovena,setNomResponsable] = useState(); 
    const [date_heure1,setDateHeure1] = useState(); 
    const [nom_surveillant,setNomSurveillant] = useState(); 
    const [date_heure2,setDateHeure2] = useState(); 
    const [nom_cloture,setNomCloture] = useState(); 
    const [date_heure3,setDateHeure3] = useState(); 
    const [alerte,setAlerte] = useState(); 
    const [pompier,setPompier] = useState(); 
    const [ambulance,setAmbulance] = useState(); 
    const [responsable_site,setResponsableSite] = useState(); 
    const [responsable_jovena,setResponsableJovena] = useState(); 
    const [permi_delivre, setPermisDelivre] = useState();
    
    const BtnValider = async (e) => {
        e.preventDefault()
        const FormData = {
            date_entete: date_entete,
            registre_entete: registre_entete,
            site: site,
            equipement: equipement,
            entreprise_intervenante: entreprise_intervenante,
            date_debut: date_debut,
            heure_debut: heure_debut,
            heure_fin: heure_fin,
            date_fin: date_fin,
            descriptif_travail: descriptif_travail,
            consignation_electique: consignation_electique,
            consignation_fluidique: consignation_fluidique,
            consignation_mecanique: consignation_mecanique,
            ventilation: ventilation,
            ventilation_forcee: ventilation_forcee,
            plan_urgence: plan_urgence,
            ASET: ASET,
            autre_intervention: autre_intervention,
            detecteur_gaz: detecteur_gaz,
            type_detecteur_gaz: type_detecteur_gaz,
            appareil_respiratoire_autonome: appareil_respiratoire_autonome,
            type_appareil_respiratoire_autonome: type_appareil_respiratoire_autonome,
            appareil_respiratoire_isolant: appareil_respiratoire_isolant,
            type_appareil_respiratoire_isolant: type_appareil_respiratoire_isolant,
            masque: masque,
            type_masque: type_masque,
            harnais: harnais,
            type_harnais: type_harnais,
            treuil: treuil,
            type_treuil: type_treuil,
            corde_assurance: corde_assurance,
            type_corde_assurance: type_corde_assurance,
            panneaux: panneaux,
            type_panneaux: type_panneaux,
            balisage: balisage,
            type_balisage: type_balisage,
            moyen_intervenant: moyen_intervenant,
            o2_applicable: o2_applicable,
            o2_date: o2_date,
            o2_heure1: o2_heure1,
            o2_PPM1: o2_PPM1,
            o2_heure2: o2_heure2,
            o2_PPM2: o2_PPM2,
            o2_heure3: o2_heure3,
            o2_PPM3: o2_PPM3,
            LIE_applicable: LIE_applicable,
            LIE_date: LIE_date,
            LIE_heure1: LIE_heure1,
            LIE_PPM1: LIE_PPM1,
            LIE_heure2: LIE_heure2,
            LIE_PPM2: LIE_PPM2,
            LIE_heure3: LIE_heure3,
            LIE_PPM3: LIE_PPM3,
            Co_applicable: Co_applicable,
            Co_date: Co_date,
            Co_heure1: Co_heure1,
            Co_PPM1: Co_PPM1,
            Co_heure2: Co_heure2,
            Co_PPM2: Co_PPM2,
            Co_heure3: Co_heure3,
            Co_PPM3: Co_PPM3,
            SO_applicable: SO_applicable,
            SO_date: SO_date,
            SO_heure1: SO_heure1,
            SO_PPM1: SO_PPM1,
            SO_heure2: SO_heure2,
            SO_PPM2: SO_PPM2,
            SO_heure3: SO_heure3,
            SO_PPM3: SO_PPM3,
            H2S_applicable: H2S_applicable,
            H2S_date: H2S_date,
            H2S_heure1: H2S_heure1,
            H2S_PPM1: H2S_PPM1,
            H2S_heure2: H2S_heure2,
            H2S_PPM2: H2S_PPM2,
            H2S_heure3: H2S_heure3,
            H2S_PPM3: H2S_PPM3,
            NH3_applicable: NH3_applicable,
            NH3_date: NH3_date,
            NH3_heure1: NH3_heure1,
            NH3_PPM1: NH3_PPM1,
            NH3_heure2: NH3_heure2,
            NH3_PPM2: NH3_PPM2,
            NH3_heure3: NH3_heure3,
            NH3_PPM3: NH3_PPM3,
            nom_testeur: nom_testeur,
            nom_reponsable_jovena: nom_reponsable_jovena,
            date_heure1: date_heure1,
            nom_surveillant: nom_surveillant,
            date_heure2: date_heure2,
            nom_cloture: nom_cloture,
            date_heure3: date_heure3,
            alerte: alerte,
            pompier: pompier,
            ambulance: ambulance,
            responsable_site: responsable_site,
            responsable_jovena: responsable_jovena,
            permi_delivre: permi_delivre,
        };
        await fetch("", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringfy(FormData),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
            })
            .catch((error) => {
                console.error("Erreur lors de l'envoi de la requête", error)
            })
    };
    return (
        <div>
            <div className="from_registre_confine">
                <div className="">
                    <label>Date:</label>
                    <input onChange={(e) =>setDateEntete(e.target.value)}    type="date" name="date_entete" />
                </div>
                <br />
                <div className="">
                    <label htmlFor="registre_entete">Register</label>
                    <input onChange={(e) =>setRegistreEntete(e.target.value)}   type="number" name="registre_entete" />
                </div>
            </div>
            <br />
            <div className="form_confine_description">
                <h2>1.DESCRIPTION DU TRAVAIL</h2>
                <br />
                <div className="form_confine_site">
                    <div className="">
                        <label htmlFor="site">Site:</label>
                        <input onChange={(e) =>setSite(e.target.value)}   type="text" name="site" value="JOVENA.com" />
                    </div>

                    <div className="">
                        <label htmlFor="equipement">Equipement:</label>
                        <input onChange={(e) =>setEquipement(e.target.value)}   type="text" name="equipement" value="None" />
                    </div>

                    <div className="">
                        <label htmlFor="entreprise_intervenante">Entreprise intervenante</label>
                        <input onChange={(e) =>setEntrepriseIntervenante(e.target.value)}   type="text" name="entreprise_intervenante" value="HSE" />
                    </div>
                </div>
                <br />
                <div className="form_confine_site">
                    <div className="">
                        <label htmlFor="date_debut">Date de début:</label>
                        <input onChange={(e) =>setDateDebut(e.target.value)}   type="date" name="date_debut" />
                    </div>
                    <div className="">
                        <label htmlFor="heure_debut">Heure de début:</label>
                        <input onChange={(e) =>setHeureDebut(e.target.value)}   type="time" name="heure_debut" />
                    </div>
                    <div className="">
                        <label htmlFor="heure_fin">Heure de fin:</label>
                        <input onChange={(e) =>setHeureFin(e.target.value)}   type="time" name="heure_fin" />
                    </div>
                    <div className="">
                        <label htmlFor="date_fin">Date de fin</label>
                        <input onChange={(e) =>setDateFin(e.target.value)}   type="date" name="date_fin" />
                    </div>
                </div>
                <br />
                <hr />
                <br />
                <div className="">
                    <label htmlFor="descriptif_travail">Descriptif du travail</label>
                    <input onChange={(e) =>setDescriptifTravail(e.target.value)}   type="text" name="descriptif_travail" value="Stagiaire" />
                </div>
            </div>

            <br />

            <div className="form_confine_intervention">
                <div className="">
                    <h2>2.Preparation de l'intervention</h2>
                    <br />
                    <div className="">
                        <label htmlFor="consignation_electique">Consignation électrique:</label>
                        &nbsp;&nbsp;
                        <label>oui:</label>
                        <input onChange={(e) =>setConsignationElectrique(e.target.value)}   type="radio" name="consignation_electique" value="oui" />
                        &nbsp;&nbsp;
                        <label htmlFor="consignation_electique">non:</label>
                        <input onChange={(e) =>setConsignationElectrique(e.target.value)}   type="radio" name="consignation_electique" value="non" />
                    </div>
                    <br />
                    <hr />
                    <br />
                    <div className="">
                        <label htmlFor="consignation_fluidique">Consignation fluidique:</label>
                        &nbsp;&nbsp;
                        <label>oui:</label>
                        <input onChange={(e) =>setConsignationFluidique(e.target.value)}   type="radio" name="consignation_fluidique" value="oui" />
                        &nbsp;&nbsp;
                        <label htmlFor="consignation_fluidique">non:</label>
                        <input onChange={(e) =>setConsignationFluidique(e.target.value)}   type="radio" name="consignation_fluidique" value="non" />
                    </div>
                    <br />
                    <hr />
                    <br />
                    <div className="">
                        <label htmlFor="consignation_mecanique">Consignation mécanique:</label>
                        &nbsp;&nbsp;
                        <label>oui:</label>
                        <input onChange={(e) =>setConsignationMecanique(e.target.value)}   type="radio" name="consignation_mecanique" value="oui" />
                        &nbsp;&nbsp;
                        <label htmlFor="consignation_mecanique">non:</label>
                        <input onChange={(e) =>setConsignationMecanique(e.target.value)}   type="radio" name="consignation_mecanique" value="non" />
                    </div>
                    <br />
                    <hr />
                    <br />
                    <div className="">
                        <label htmlFor="ventilation">Ventilation:</label>
                        &nbsp;&nbsp;
                        <label>oui:</label>
                        <input onChange={(e) =>setVentilation(e.target.value)}   type="radio" name="ventilation" value="oui" />
                        &nbsp;&nbsp;
                        <label htmlFor="ventilation">non:</label>
                        <input onChange={(e) =>setVentilation(e.target.value)}   type="radio" name="ventilation" value="non" />
                    </div>
                    <br />
                    <hr />
                    <br />
                    <div className="">
                        <label htmlFor="ventilation_forcee">Ventilation forcée:</label>
                        &nbsp;&nbsp;
                        <label>oui:</label>
                        <input onChange={(e) =>setVentilationForcee(e.target.value)}   type="radio" name="ventilation_forcee" value="oui" />
                        &nbsp;&nbsp;
                        <label htmlFor="ventilation_forcee">non:</label>
                        <input onChange={(e) =>setVentilationForcee(e.target.value)}   type="radio" name="ventilation_forcee" value="non" />
                    </div>
                    <br />
                    <hr />
                    <br />
                    <div className="">
                        <label htmlFor="plan_urgence">Plan d'urgence:</label>
                        &nbsp;&nbsp;
                        <label>oui:</label>
                        <input onChange={(e) =>setPlanUrgence(e.target.value)}   type="radio" name="plan_urgence" value="oui" />
                        &nbsp;&nbsp;
                        <label htmlFor="plan_urgence">non:</label>
                        <input onChange={(e) =>setPlanUrgence(e.target.value)}   type="radio" name="plan_urgence" value="non" />
                    </div>
                    <br />
                    <hr />
                    <br />
                    <div className="">
                        <label htmlFor="ASET">ASET:</label>
                        &nbsp;&nbsp;
                        <label>oui:</label>
                        <input onChange={(e) =>setAset(e.target.value)}   type="radio" name="ASET" value="oui" />
                        &nbsp;&nbsp;
                        <label htmlFor="ASET">non:</label>
                        <input onChange={(e) =>setAset(e.target.value)}   type="radio" name="ASET" value="non" />
                    </div>
                    <br />
                    <hr />
                    <br />
                    <div className="">
                        <label htmlFor="autre_intervention">Autre préparation à préciser</label>
                        <input onChange={(e) =>setAutreIntervention(e.target.value)}   type="text" name="autre_intervention" />
                    </div>
                </div>
                <br />
                <div className="">
                    <h2>3.Equipement de securité</h2>
                    <br />
                    <div className="">
                        <label htmlFor="detecteur_gaz">Détecteur de gaz</label>
                        &nbsp;&nbsp;
                        <label>oui:</label>
                        <input onChange={(e) =>setDetecteurGaz(e.target.value)}   type="radio" name="detecteur_gaz" value="oui" />
                        &nbsp;&nbsp;
                        <label htmlFor="detecteur_gaz">non:</label>
                        <input onChange={(e) =>setDetecteurGaz(e.target.value)}   type="radio" name="detecteur_gaz" value="non" />
                        &nbsp;&nbsp;
                        <label htmlFor="type_detecteur_gaz">Type</label>
                        <input onChange={(e) =>setTypeDetecteurGaz(e.target.value)}   type="text" name="type_detecteur_gaz" value="N/A" />
                    </div>
                    <br />
                    <hr />
                    <br />
                    <div className="">
                        <label htmlFor="appareil_respiratoire_autonome">Appareil respiratoire autonome</label>
                        &nbsp;&nbsp;
                        <label>oui:</label>
                        <input onChange={(e) =>setAppareilRespiratoireAutonome(e.target.value)}   type="radio" name="appareil_respiratoire_autonome" value="oui" />
                        &nbsp;&nbsp;
                        <label htmlFor="appareil_respiratoire_autonome">non:</label>
                        <input onChange={(e) =>setAppareilRespiratoireAutonome(e.target.value)}   type="radio" name="appareil_respiratoire_autonome" value="non" />
                        &nbsp;&nbsp;
                        <label htmlFor="type_appareil_respiratoire_autonome">Type</label>
                        <input onChange={(e) =>setTypeAppareilRespiratoireAutonome(e.target.value)}   type="text" name="type_appareil_respiratoire_autonome" value="N/A" />
                    </div>
                    <br />
                    <hr />
                    <br />
                    <div className="">
                        <label htmlFor="appareil_respiratoire_isolant">Appareil respiratoire isolant</label>
                        &nbsp;&nbsp;
                        <label>oui:</label>
                        <input onChange={(e) =>setAppareilRespiratoireIsolant(e.target.value)}   type="radio" name="appareil_respiratoire_isolant" value="oui" />
                        &nbsp;&nbsp;
                        <label htmlFor="appareil_respiratoire_isolant">non:</label>
                        <input onChange={(e) =>setAppareilRespiratoireIsolant(e.target.value)}   type="radio" name="appareil_respiratoire_isolant" value="non" />
                        &nbsp;&nbsp;
                        <label htmlFor="type_appareil_respiratoire_isolant">Type</label>
                        <input onChange={(e) =>setTypeAppareilRespiratoireIsolant(e.target.value)}   type="text" name="type_appareil_respiratoire_isolant" value="N/A" />
                    </div>
                    <br />
                    <hr />
                    <br />
                    <div className="">
                        <label htmlFor="masque">Masque filtrant</label>
                        &nbsp;&nbsp;
                        <label>oui:</label>
                        <input onChange={(e) =>setMasque(e.target.value)}   type="radio" name="masque" value="oui" />
                        &nbsp;&nbsp;
                        <label htmlFor="masque">non:</label>
                        <input onChange={(e) =>setMasque(e.target.value)}   type="radio" name="masque" value="non" />
                        &nbsp;&nbsp;
                        <label htmlFor="type_masque">Type</label>
                        <input onChange={(e) =>setMasque(e.target.value)}   type="text" name="type_masque" value="N/A" />
                    </div>
                    <br />
                    <hr />
                    <br />
                    <div className="">
                        <label htmlFor="harnais">Harnais de sécurité</label>
                        &nbsp;&nbsp;
                        <label>oui:</label>
                        <input onChange={(e) =>setHarnais(e.target.value)}   type="radio" name="harnais" value="oui" />
                        &nbsp;&nbsp;
                        <label htmlFor="type_harnais">non:</label>
                        <input onChange={(e) =>setHarnais(e.target.value)}   type="radio" name="type_harnais" value="non" />
                        &nbsp;&nbsp;
                        <label htmlFor="type_harnais">Type</label>
                        <input onChange={(e) =>setHarnais(e.target.value)}   type="text" name="type_harnais" value="N/A" />
                    </div>
                    <br />
                    <hr />
                    <br />
                    <div className="">
                        <label htmlFor="treuil">Treuil et protection antichute</label>
                        &nbsp;&nbsp;
                        <label>oui:</label>
                        <input onChange={(e) =>setTreuil(e.target.value)}   type="radio" name="treuil" value="oui" />
                        &nbsp;&nbsp;
                        <label htmlFor="treuil">non:</label>
                        <input onChange={(e) =>setTreuil(e.target.value)}   type="radio" name="treuil" value="non" />
                        &nbsp;&nbsp;
                        <label htmlFor="type_treuil">Type</label>
                        <input onChange={(e) =>setTypeTreuil(e.target.value)}   type="text" name="type_treuil" value="N/A" />
                    </div>
                    <br />
                    <hr />
                    <br />
                    <div className="">
                        <label htmlFor="corde_assurance">Corde assurance</label>
                        &nbsp;&nbsp;
                        <label>oui:</label>
                        <input onChange={(e) =>setCordeAssurance(e.target.value)}   type="radio" name="corde_assurance" value="oui" />
                        &nbsp;&nbsp;
                        <label htmlFor="corde_assurance">non:</label>
                        <input onChange={(e) =>setCordeAssurance(e.target.value)}   type="radio" name="corde_assurance" value="non" />
                        &nbsp;&nbsp;
                        <label htmlFor="type_corde_assurance">Type</label>
                        <input onChange={(e) =>setTypeCordeAssurance(e.target.value)}   type="text" name="type_corde_assurance" value="N/A" />
                    </div>
                    <br />
                    <hr />
                    <br />
                    <div className="">
                        <label htmlFor="panneaux">Panneaux de signalisation</label>
                        &nbsp;&nbsp;
                        <label>oui:</label>
                        <input onChange={(e) =>setPanneaux(e.target.value)}   type="radio" name="panneaux" value="oui" />
                        &nbsp;&nbsp;
                        <label htmlFor="panneaux">non:</label>
                        <input onChange={(e) =>setPanneaux(e.target.value)}   type="radio" name="panneaux" value="non" />
                        &nbsp;&nbsp;
                        <label htmlFor="type_panneaux">Type</label>
                        <input onChange={(e) =>setTypePanneaux(e.target.value)}   type="text" name="type_panneaux" value="N/A" />
                    </div>
                    <br />
                    <hr />
                    <br />
                    <div className="">
                        <label htmlFor="balisage">
                            Moyen de communication surveillant et intervenant(s) à préciser:
                        </label>
                        <input onChange={(e) =>setMoyenIntervenant(e.target.value)}   type="text" name="moyen_intervenant" value="N/A" />
                    </div>
                </div>
                <br />
                <div className="">
                    <h2>4.Qualite de l'air</h2>
                    <br />
                    <table>
                    <thead>
                        <tr>
                            <th>Substance &nbsp; &nbsp;</th>
                            <th>Applicable</th>
                            <th>Date</th>
                            <th>Heure</th>
                            <th>PPM/%</th>
                            <th>Heure</th>
                            <th>PPM/%</th>
                            <th>Heure</th>
                            <th>PPM/%</th>
                            <th>Limite</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>O2</td>
                            <td>
                                <input onChange={(e) =>setO2Applicable(e.target.value)}   type="checkbox" name="o2_applicable" />
                            </td>
                            <td>
                                <input onChange={(e) =>setO2Date(e.target.value)}   type="date" name="o2_date" />
                            </td>
                            <td>
                                <input onChange={(e) =>setO2Heure1(e.target.value)}   type="time" name="o2_heure1" />
                            </td>
                            <td>
                                <input onChange={(e) =>setO2Ppm1(e.target.value)}   type="text" name="o2_PPM1" value="N/A" />
                            </td>
                            <td>
                                <input onChange={(e) =>setO2Heure2(e.target.value)}   type="time" name="o2_heure2" />
                            </td>
                            <td>
                                <input onChange={(e) =>setO2Ppm2(e.target.value)}   type="text" name="o2_PPM2" value="N/A" />
                            </td>
                            <td>
                                <input onChange={(e) =>setO2Heure3(e.target.value)}   type="time" name="o2_heure3" />
                            </td>
                            <td>
                                <input onChange={(e) =>setO2Ppm3(e.target.value)}   type="text" name="o2_PPM3" value="N/A" />
                            </td>
                            <td>19.5 - 21.5%</td>
                        </tr>
                        <tr>
                            <td>%LIE</td>
                            <td>
                                <input onChange={(e) =>setLieApplicable(e.target.value)}   type="checkbox" name="LIE_applicable" />
                            </td>
                            <td>
                                <input onChange={(e) =>setLieDate(e.target.value)}   type="date" name="LIE_date" />
                            </td>
                            <td>
                                <input onChange={(e) =>setLieHeure1(e.target.value)}   type="time" name="LIE_heure1" />
                            </td>
                            <td>
                                <input onChange={(e) =>setLiePpm1(e.target.value)}   type="text" name="LIE_PPM1" value="N/A" />
                            </td>
                            <td>
                                <input onChange={(e) =>setLieHeure2(e.target.value)}   type="time" name="LIE_heure2" />
                            </td>
                            <td>
                                <input onChange={(e) =>setLiePpm2(e.target.value)}   type="text" name="LIE_PPM2" value="N/A" />
                            </td>
                            <td>
                                <input onChange={(e) =>setLieHeure3(e.target.value)}   type="time" name="LIE_heure3" />
                            </td>
                            <td>
                                <input onChange={(e) =>setLiePpm3(e.target.value)}   type="text" name="LIE_PPM3" value="N/A" />
                            </td>
                            <td>inferieur 5%</td>
                        </tr>
                        <tr>
                            <td>CO</td>
                            <td>
                                <input onChange={(e) =>setCoApplicable(e.target.value)}   type="checkbox" name="Co_applicable" />
                            </td>
                            <td>
                                <input onChange={(e) =>setCoDate(e.target.value)}   type="date" name="Co_date" />
                            </td>
                            <td>
                                <input onChange={(e) =>setCoHeure1(e.target.value)}   type="time" name="Co_heure1" />
                            </td>
                            <td>
                                <input onChange={(e) =>setCoPpm1(e.target.value)}   type="text" name="Co_PPM1" value="N/A" />
                            </td>
                            <td>
                                <input onChange={(e) =>setCoHeure2(e.target.value)}   type="time" name="Co_heure2" />
                            </td>
                            <td>
                                <input onChange={(e) =>setCoPpm2(e.target.value)}   type="text" name="Co_PPM2" value="N/A" />
                            </td>
                            <td>
                                <input onChange={(e) =>setCoHeure3(e.target.value)}   type="time" name="Co_heure3" />
                            </td>
                            <td>
                                <input onChange={(e) =>setCoPpm3(e.target.value)}   type="text" name="Co_PPM3" value="N/A" />
                            </td>
                            <td>19.5 - 21.5%</td>
                        </tr>
                        <tr>
                            <td>SO2</td>
                            <td>
                                <input onChange={(e) =>setSoApplicable(e.target.value)}   type="checkbox" name="SO_applicable" />
                            </td>
                            <td>
                                <input onChange={(e) =>setSoDate(e.target.value)}   type="date" name="SO_date" />
                            </td>
                            <td>
                                <input onChange={(e) =>setSoHeure1(e.target.value)}   type="time" name="SO_heure1" />
                            </td>
                            <td>
                                <input onChange={(e) =>setSoPpm1(e.target.value)}   type="text" name="SO_PPM1" value="N/A" />
                            </td>
                            <td>
                                <input onChange={(e) =>setSoHeure2(e.target.value)}   type="time" name="SO_heure2" />
                            </td>
                            <td>
                                <input onChange={(e) =>setSoPpm2(e.target.value)}   type="text" name="SO_PPM2" value="N/A" />
                            </td>
                            <td>
                                <input onChange={(e) =>setSoHeure3(e.target.value)}   type="time" name="SO_heure3" />
                            </td>
                            <td>
                                <input onChange={(e) =>setSoPpm3(e.target.value)}   type="text" name="SO_PPM3" value="N/A" />
                            </td>
                            <td>19.5 - 21.5%</td>
                        </tr>
                        <tr>
                            <td>H2S</td>
                            <td>
                                <input onChange={(e) =>setH2sApplicable(e.target.value)}   type="checkbox" name="H2S_applicable" />
                            </td>
                            <td>
                                <input onChange={(e) =>setH2sDate(e.target.value)}   type="date" name="H2S_date" />
                            </td>
                            <td>
                                <input onChange={(e) =>setH2sHeure1(e.target.value)}   type="time" name="H2S_heure1" />
                            </td>
                            <td>
                                <input onChange={(e) =>setH2sPpm1(e.target.value)}   type="text" name="H2S_PPM1" value="N/A" />
                            </td>
                            <td>
                                <input onChange={(e) =>setH2sHeure2(e.target.value)}   type="time" name="H2S_heure2" />
                            </td>
                            <td>
                                <input onChange={(e) =>setH2sPpm2(e.target.value)}   type="text" name="H2S_PPM2" value="N/A" />
                            </td>
                            <td>
                                <input onChange={(e) =>setH2sHeure3(e.target.value)}   type="time" name="H2S_heure3" />
                            </td>
                            <td>
                                <input onChange={(e) =>setH2sPpm3(e.target.value)}   type="text" name="H2S_PPM3" value="N/A" />
                            </td>
                            <td>19.5 - 21.5%</td>
                        </tr>
                        <tr>
                            <td>NH3</td>
                            <td>
                                <input onChange={(e) =>setNh3Applicable(e.target.value)}   type="checkbox" name="NH3_applicable" />
                            </td>
                            <td>
                                <input onChange={(e) =>setNh3Date(e.target.value)}   type="date" name="NH3_date" />
                            </td>
                            <td>
                                <input onChange={(e) =>setNh3Heure1(e.target.value)}   type="time" name="NH3_heure1" />
                            </td>
                            <td>
                                <input onChange={(e) =>setNh3Ppm1(e.target.value)}   type="text" name="NH3_PPM1" value="N/A" />
                            </td>
                            <td>
                                <input onChange={(e) =>setNh3Heure2(e.target.value)}   type="time" name="NH3_heure2" />
                            </td>
                            <td>
                                <input onChange={(e) =>setNh3Ppm2(e.target.value)}   type="text" name="NH3_PPM2" value="N/A" />
                            </td>
                            <td>
                                <input onChange={(e) =>setNh3Heure3(e.target.value)}   type="time" name="NH3_heure3" />
                            </td>
                            <td>
                                <input onChange={(e) =>setNh3Ppm3(e.target.value)}   type="text" name="NH3_PPM3" value="N/A" />
                            </td>
                            <td>25 ppm</td>
                        </tr>
                        <tr>
                            <td>Autres gaz:</td>
                            <td>
                                <input onChange={(e) =>setAutreGaz(e.target.value)}   type="checkbox" name="autres_gaz_applicable" />
                            </td>
                            <td>
                                <input onChange={(e) =>set(e.target.value)}   type="date" name="autres_gaz_date" />
                            </td>
                            <td>
                                <input onChange={(e) =>set(e.target.value)}   type="time" name="autres_gaz_heure1" />
                            </td>
                            <td>
                                <input onChange={(e) =>set(e.target.value)}   type="text" name="autres_gaz_PPM1" value="N/A" />
                            </td>
                            <td>
                                <input onChange={(e) =>set(e.target.value)}   type="time" name="autres_gaz_heure2" />
                            </td>
                            <td>
                                <input onChange={(e) =>set(e.target.value)}   type="text" name="autres_gaz_PPM2" value="N/A" />
                            </td>
                            <td>
                                <input onChange={(e) =>set(e.target.value)}   type="time" name="autres_gaz_heure3" />
                            </td>
                            <td>
                                <input onChange={(e) =>set(e.target.value)}   type="text" name="autres_gaz_PPM3" value="N/A" />
                            </td>
                            <td>Concentration à définir</td>
                        </tr>
                    </tbody>
                </table>
                    <br />
                    <hr />
                </div>
            </div>

            <br />

            <div className="form_confine_intervention">
                <div className="">
                    <h2>5.Conduite à tenir en cas d'alarme ou d'incident:</h2>
                    <input onChange={(e) =>set(e.target.value)}   type="text" name="conduite_a_tenir" />
                </div>
                <br />
                <div className="">
                    <h2>6.Consignes de sécurité</h2>
                    <table>
                        <tr>
                            <th>Consignes</th>
                            <th>Applicable</th>
                        </tr>
                        <tr>
                            <td>Port des EPI</td>
                            <td>
                                <input onChange={(e) =>set(e.target.value)}   type="checkbox" name="EPI_applicable" />
                            </td>
                        </tr>
                        <tr>
                            <td>Entretien et vérification du matériel</td>
                            <td>
                                <input onChange={(e) =>set(e.target.value)}   type="checkbox" name="entretien_materiel_applicable" />
                            </td>
                        </tr>
                        <tr>
                            <td>Non-fumeurs</td>
                            <td>
                                <input onChange={(e) =>set(e.target.value)}   type="checkbox" name="non_fumeurs_applicable" />
                            </td>
                        </tr>
                        <tr>
                            <td>Possibilité d'appeler les secours</td>
                            <td>
                                <input onChange={(e) =>set(e.target.value)}   type="checkbox" name="appeler_secours_applicable" />
                            </td>
                        </tr>
                        <tr>
                            <td>Respect des limites de temps</td>
                            <td>
                                <input onChange={(e) =>set(e.target.value)}   type="checkbox" name="limites_temps_applicable" />
                            </td>
                        </tr>
                        <tr>
                            <td>Moyens d'alerte et de communication</td>
                            <td>
                                <input onChange={(e) =>set(e.target.value)}   type="checkbox" name="alerte_communication_applicable" />
                            </td>
                        </tr>
                    </table>
                </div>
            </div>

        </div>
    )
}