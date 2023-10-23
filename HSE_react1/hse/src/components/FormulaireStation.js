import React, { useState } from "react";

function FormulaireStation() { // Renommez le composant en PascalCase
    const [num_reclamation, setNumReclamation] = useState(0);
    const [panne_annoncee, setPanneAnnoncee] = useState("");
    const [site, setSite] = useState("");
    const [client, setClient] = useState("");
    const [localite, setLocalite] = useState("");
    const [entreprise_intervenante, setEntrepriseIntervenante] = useState("");
    const [categorie_reclamation, setCategorieReclamation] = useState("");
    // const [date_reclamation, setDateReclamation] = useState("");
    const [echeance, setEcheance] = useState("");
    const [date_diagnostic, setDateDiagnostic] = useState("");
    const [interlocuteur, setInterlocuteur] = useState("");
    const [fonction, setFonction] = useState("");
    const [panne_reel, setPanneReel] = useState("");
    const [permis_specifique, setPermisSpecifique] = useState("");
    const [information_personnel, setInformationPersonnel] = useState("");
    const [port_EPI, setPortEPI] = useState("");
    const [balisage_perimetre, setBalisagePerimetre] = useState("");
    const [extincteur_adapte, setExtincteurAdapte] = useState("");
    const [interdiction_de_fumer, setInterdictionDeFumer] = useState("");
    const [livraison_carburant, setLivraisonCarburant] = useState("");
    const [presence_zone, setPresenceZone] = useState("");
    const [autre_travaux, setAutreTravaux] = useState("");
    const [travail_chaud, setTravailChaud] = useState("");
    const [percage_moulage_decoupage, setPercageMoulageDecoupage] = useState("");
    const [chauffage_soudage, setChauffageSoudage] = useState("");
    const [utilisation_equipement, setUtilisationEquipement] = useState("");
    const [vidange_degazage, setVidangeDegazage] = useState("");
    const [travaux_demolition, setTravauxDemolition] = useState("");
    const [travail_espace, setTravailEspace] = useState("");
    const [deplacement_site, setDeplacementSite] = useState("");
    const [manutention_levage, setManutentionLevage] = useState("");
    const [travail_hauteur, setTravailHauteur] = useState("");
    const [travail_tuyauterie, setTravailTuyauterie] = useState("");
    const [fouille_mannuelle, setFouilleMannuelle] = useState("");
    const [travaux_excavation, setTravauxExcavation] = useState("");
    const [travail_equipement, setTravailEquipement] = useState("");
    const [travail_engin, setTravailEngin] = useState("");
    const [operation_piste, setOperationPiste] = useState("");
    const [travaux_bruyant, setTravauxBruyant] = useState("");
    const [autre_nature, setAutreNature] = useState("");
    const [emission_gaz, setEmissionGaz] = useState("");
    const [incendie, setIncendie] = useState("");
    const [explosion, setExplosion] = useState("");
    const [projection_etincelle, setProjectionEtincelle] = useState("");
    const [intoxication, setIntoxication] = useState("");
    const [asphyxie, setAsphyxie] = useState("");
    const [brulure, setBrulure] = useState("");
    const [blessure, setBlessure] = useState("");
    const [autre_lesion, setAutreLesion] = useState("");
    const [chute_plain_pied, setChutePlainPied] = useState("");
    const [chute_objet, setChuteObjet] = useState("");
    const [chute_hauteur, setChuteHauteur] = useState("");
    const [incident_reseau, setIncidentReseau] = useState("");
    const [epandage, setEpandage] = useState("");
    const [eboulement, setEboulement] = useState("");
    const [electrocution, setElectrocution] = useState("");
    const [incident_cable, setIncidentCable] = useState("");
    const [accident_circulation, setAccidentCirculation] = useState("");
    const [autre_lesion_char, setAutreLesionChar] = useState("");
    const [charge_station_service, setChargeStationService] = useState("");
    const [arret_distribution_total, setArretDistributionTotal] = useState("");
    const [fermeture_station, setFermetureStation] = useState("");
    const [arret_activite, setArretActivite] = useState("");
    const [test_gaz, setTestGaz] = useState("");
    const [arret_travaux_depotage, setArretTravauxDepotage] = useState("");
    const [arret_autre_travaux, setArretAutreTravaux] = useState("");
    const [extincteur_adapte2, setExtincteurAdapte2] = useState("");
    const [mise_terre, setMiseTerre] = useState("");
    const [appareil_respiratoire, setAppareilRespiratoire] = useState("");
    const [outillage, setOutillage] = useState("");
    const [port_EPI_2, setPortEPI_2] = useState("");
    const [harnai, setHarnai] = useState("");
    const [echaffaudage, setEchaffaudage] = useState("");
    const [renseignement_reseaux_enterre, setRenseignementReseauxEnterre] = useState("");
    const [consignation_equipement, setConsignationEquipement] = useState("");
    const [consignation_electrique, setConsignationElectrique] = useState("");
    const [renseignement_reseau_aerien, setRenseignementReseauAerien] = useState("");
    const [aide_circulation, setAideCirculation] = useState("");
    
    const BtnValider = async (e) => {
        e.preventDefault(); 
        const FormData = {
            num_reclamation: num_reclamation,
            panne_annoncee: panne_annoncee,
            site: site,
            client: client,
            localite: localite,
            entreprise_intervenante: entreprise_intervenante,
            categorie_reclamation : categorie_reclamation,
            // date_reclamation: date_reclamation ,
            echeance: echeance ,
            date_diagnostic: date_diagnostic ,
            interlocuteur: interlocuteur ,
            fonction : fonction ,
            panne_reel: panne_reel ,
            permis_specifique: permis_specifique ,
            information_personnel: information_personnel ,
            port_EPI: port_EPI ,
            balisage_perimetre:  balisage_perimetre ,
            extincteur_adapte : extincteur_adapte ,
            interdiction_de_fumer: interdiction_de_fumer ,
            livraison_carburant : livraison_carburant,
            presence_zone : presence_zone ,
            autre_travaux : autre_travaux ,
            travail_chaud : travail_chaud  ,
            percage_moulage_decoupage : percage_moulage_decoupage ,
            chauffage_soudage : chauffage_soudage  ,
            utilisation_equipement: utilisation_equipement , 
            vidange_degazage: vidange_degazage ,
            travaux_demolition: travaux_demolition ,
            travail_espace: travail_espace ,
            deplacement_site : deplacement_site ,
            manutention_levage :  manutention_levage ,
            travail_hauteur : travail_hauteur ,
            travail_tuyauterie : travail_tuyauterie ,
            fouille_mannuelle:  fouille_mannuelle ,
            travaux_excavation: travaux_excavation ,
            travail_equipement: travail_equipement ,
            travail_engin : travail_engin ,
            operation_piste : operation_piste ,
            travaux_bruyant:travaux_bruyant ,
            autre_nature  :  autre_nature ,
            emission_gaz  : emission_gaz ,
            incendie :  incendie ,
            explosion :  explosion ,
            projection_etincelle: projection_etincelle,
            intoxication : intoxication ,
            asphyxie : asphyxie ,
            brulure:  brulure ,
            blessure:  blessure ,
            autre_lesion: autre_lesion ,
            chute_plain_pied: chute_plain_pied ,
            chute_objet: chute_objet ,
            chute_hauteur: chute_hauteur ,
            incident_reseau: incident_reseau ,
            epandage: epandage ,
            eboulement:  eboulement ,
            electrocution: electrocution ,
            incident_cable : incident_cable,
            accident_circulation : accident_circulation,
            autre_lesion_char : autre_lesion_char  ,
            charge_station_service: charge_station_service ,
            arret_distribution_total: arret_distribution_total ,
            fermeture_station: fermeture_station ,
            arret_activite: arret_activite ,
            test_gaz: test_gaz ,
            arret_travaux_depotage: arret_travaux_depotage ,
            arret_autre_travaux: arret_autre_travaux ,
            extincteur_adapte2: extincteur_adapte2 ,
            mise_terre:  mise_terre ,
            appareil_respiratoire: appareil_respiratoire ,
            outillage: outillage ,
            port_EPI_2: port_EPI_2 ,
            harnai: harnai ,
            echaffaudage: echaffaudage ,
            renseignement_reseaux_enterre: renseignement_reseaux_enterre ,
            consignation_equipement: consignation_equipement,
            consignation_electrique:  consignation_electrique,
            renseignement_reseau_aerien:  renseignement_reseau_aerien,
            aide_circulation:  aide_circulation ,
        };
        await fetch("http://127.0.0.1:8000/jovena/Checklist_stat/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(FormData),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.error("Erreur lors de l'envoi de la requête", error);
        });
    };
    return (
        <div>
            <form onSubmit={BtnValider}>
                <div className="mb-3">
                    <label htmlFor="num_reclamation" className="form-label">Numero de réclamation:</label>
                    <input type="text" className="form-control" onChange={(e) => setNumReclamation(e.target.value)} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="panne_annoncee" className="form-label">Panne Annoncée:</label>
                    <input type="text" className="form-control" onChange={(e) => setPanneAnnoncee(e.target.value)} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="site" className="form-label">Site:</label>
                    <input type="text" className="form-control" onChange={(e) => setSite(e.target.value)} required></input>
                </div>
                <div>
                    <label htmlFor="client">Client:</label>
                    <input type="text" className="form-control" onChange={(e) =>setClient(e.target.value)} required />
                </div>

                <div>

                <label htmlFor="localite">Localité:</label>
                    <input type="text" name="localite" onChange={(e) =>setLocalite(e.target.value)} required /><br /><br />

                    <label htmlFor="entreprise_intervenante">Entreprise intervenante:</label>
                    <input type="text" name="entreprise_intervenante" onChange={(e) =>setEntrepriseIntervenante(e.target.value)} required /><br /><br />

                    <label htmlFor="categorie_reclamation">Catégorie de réclamation:</label>
                    <input type="text" name="categorie_reclamation" onChange={(e) =>setCategorieReclamation(e.target.value)}required /><br /><br />

                    <label htmlFor="echeance">Échéance:</label>
                    <input type="date" name="echeance" onChange={(e) =>setEcheance(e.target.value)} required /><br /><br />
                </div>
                <div>
                <label htmlFor="interlocuteur">Interlocuteur:</label>
                    <input type="text" name="interlocuteur" onChange={(e) =>setInterlocuteur(e.target.value)} required /><br /><br />

                    <label htmlFor="fonction">Fonction:</label>
                    <input type="text" name="fonction" onChange={(e) =>setFonction(e.target.value)} required /><br /><br />

                    <label htmlFor="panne_reel">Panne réelle:</label>
                    <input type="text" name="panne_reel" onChange={(e) =>setPanneReel(e.target.value)}required /><br /><br />

                    <label htmlFor="date_diagnostic">Date de diagnostic:</label>
                    <input type="date" name="date_diagnostic" onChange={(e) =>setDateDiagnostic(e.target.value)} /><br /><br />
                </div>
                <div>
                    <h1>B- PLAN DE PREVENTION HSE</h1>
                    <h3 className="h3_form">B-1 RISQUE D'INTERFERENCE AVEC L'INTERVENTION</h3>
                    <label htmlFor="livraison_carburant">Livraison de carburant (dépotage) prévue à:</label>
                    <input type="datetime-local" name="livraison_carburant" id="" onChange={(e) =>setLivraisonCarburant(e.target.value)} />
                    <br /><br />

                    <label htmlFor="presence_zone">Présence dans la zone de travail de: Bouteilles de Gaz, Futs</label><br />
                    <input type="text" name="presence_zone" id="" onChange={(e) =>setPresenceZone(e.target.value)}/>
                    <br />

                    <label htmlFor="autre_travaux">Autres travaux prévus ce jour:</label><br />
                    <input type="text" name="autre_travaux" id="" onChange={(e) =>setAutreTravaux(e.target.value)} />
                </div>
                <div>
                    <h3><strong>B-2 MESURES DE SECURITE  OBLIGATOIRES</strong></h3>
                    <input type="checkbox" name="permis_specifique" id="permis_specifique" onChange={(e) =>setPermisSpecifique(e.target.value)}/>
                    <label htmlFor="permis_specifique">Permis spécifique pour les travaux à chaud et entrée en espace confiné</label><br />

                    <input type="checkbox" name="information_personnel" id="information_personnel" onChange={(e) =>setInformationPersonnel(e.target.value)} />
                    <label htmlFor="information_personnel">Information du personnel et visiteurs présents sur le lieu d'intervention</label><br />

                    <input type="checkbox" name="port_EPI" id="port_EPI" onChange={(e) =>setPortEPI(e.target.value)}/>
                    <label htmlFor="port_EPI">Port d'Équipement de Protection Individuelle de base (casque, lunettes, chaussures de sécurité, habits à bande réfléchissante)</label><br />

                </div>
                <div>
                    <input type="checkbox" name="balisage_perimetre" id="balisage_perimetre" onChange={(e) =>setBalisagePerimetre(e.target.value)}/>
                    <label htmlFor="balisage_perimetre">Balisage du périmètre de sécurité du lieu d'intervention</label><br />

                    <input type="checkbox" name="extincteur_adapte" id="extincteur_adapte"onChange={(e) =>setExtincteurAdapte(e.target.value)} />
                    <label htmlFor="extincteur_adapte">Extincteurs adaptés</label><br />

                    <input type="checkbox" name="interdiction_de_fumer" id="interdiction_de_fumer" onChange={(e) =>setInterdictionDeFumer(e.target.value)}/>
                    <label htmlFor="interdiction_de_fumer">Interdiction de fumer et de téléphoner dans les zones à risque</label><br />
                </div>
                <div>
                    <h2>B-3 NATURE DU TRAVAIL</h2>
                    <table id="customers">
                        <tbody>
                            <tr>
                                <td>travail à chaud :</td>
                                <td>
                                    <input type="checkbox" name="travail_chaud" onChange={(e) =>setTravailChaud(e.target.value)}/> <br />
                                </td>
                                </tr>
                                <tr>
                                <td>Perçage, moulage, découpage :</td>
                                <td>
                                    <input type="checkbox" name="percage_moulage_decoupage" onChange={(e) =>setPercageMoulageDecoupage(e.target.value)}/> <br />
                                </td>
                            </tr>
                            <tr>
                                <td>Chauffage, soudage:</td>
                                <td>
                                    <input type="checkbox" name="chauffage_soudage" onChange={(e) =>setChauffageSoudage(e.target.value)}/> <br />
                                </td>
                            </tr>
                            <tr>
                                <td>Grenaillage, sablage :</td>
                                <td>
                                    <input type="checkbox" id="grenaillage_sablage" name="grenaillage_sablage" /> <br />
                                </td>
                            </tr>
                            <tr>
                                <td>Utilisation d'équipement électroportatif :</td>
                                <td>
                                    <input type="checkbox" name="utilisation_equipement" onChange={(e) =>setUtilisationEquipement(e.target.value)}/> <br />
                                </td>
                            </tr>
                            <tr>
                                <td>Vidange/ dégazage/ nettoyage :</td>
                                <td>
                                    <input type="checkbox" name="vidange_degazage" onChange={(e) =>setVidangeDegazage(e.target.value)}/> <br />
                                </td>
                            </tr>
                            <tr>
                                <td>Travaux de démolition :</td>
                                <td>
                                    <input type="checkbox" name="travaux_demolition" onChange={(e) =>setTravauxDemolition(e.target.value)}/> <br />
                                </td>
                            </tr>
                            <tr>
                                <td>Travail en espace confiné :</td>
                                <td>
                                    <input type="checkbox" name="travail_espace" onChange={(e) =>setTravailEspace(e.target.value)}/> <br />
                                </td>
                            </tr>
                            <tr>
                                <td>Déplacement sur site :</td>
                                <td>
                                    <input type="checkbox" name="deplacement_site" onChange={(e) =>setDeplacementSite(e.target.value)}/> <br />
                                </td>
                            </tr>
                            <tr>
                                <td>Manutention/levage :</td>
                                <td>
                                    <input type="checkbox" name="manutention_levage" onChange={(e) =>setManutentionLevage(e.target.value)}/> <br />
                                </td>
                            </tr>
                            <tr>
                                <td>Travail en hauteur plus 1,80m :</td>
                                <td>
                                    <input type="checkbox" name="travail_hauteur" onChange={(e) =>setTravailHauteur(e.target.value)}/> <br />
                                </td>
                            </tr>
                            <tr>
                                <td>Travail sur tuyauterie/ appareil de distribution :</td>
                                <td>
                                    <input type="checkbox" name="travail_tuyauterie" onChange={(e) =>setTravailTuyauterie(e.target.value)}/> <br />
                                </td>
                            </tr>
                            <tr>
                                <td>Fouille manuelle</td>
                                <td>
                                    <input type="checkbox" name="fouille_mannuelle" onChange={(e) =>setFouilleMannuelle(e.target.value)}/> <br />
                                </td>
                            </tr>
                            <tr>
                                <td>Travaux d'excavation:</td>
                                <td>
                                    <input type="checkbox" name="travaux_excavation" onChange={(e) =>setTravauxExcavation(e.target.value)}/> <br />
                                </td>
                            </tr>
                            <tr>
                                <td>Travail sur équipement électrique :</td>
                                <td>
                                    <input type="checkbox" name="travail_equipement" onChange={(e) =>setTravailEquipement(e.target.value)}/> <br />
                                </td>
                            </tr>
                            <tr>
                                <td>Travail avec engin de chantier :</td>
                                <td>
                                    <input type="checkbox" name="travail_engin" onChange={(e) =>setTravailEngin(e.target.value)}/> <br />
                                </td>
                            </tr>
                            <tr>
                                <td>Opérations sur piste :</td>
                                <td>
                                    <input type="checkbox" name="operation_piste" onChange={(e) =>setOperationPiste(e.target.value)}/> <br />
                                </td>
                            </tr>
                            <tr>
                                <td>Travaux bruyants :</td>
                                <td>
                                    <input type="checkbox" name="travaux_bruyant" onChange={(e) =>setTravauxBruyant(e.target.value)}/> <br />
                                </td>
                            </tr>
                            <tr>
                                <td>Autres (à préciser) :</td>
                                <td>
                                    <input type="text" name="autre_nature" onChange={(e) =>setAutreNature(e.target.value)}/> <br />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <h2>Nature des risques</h2>
                    <table id="customers">
                        <tbody>
                                <tr>
                                    <td>Emission de gaz toxiques :</td>
                                    <td><input type="checkbox" name="emission_gaz" id="" onChange={(e) =>setEmissionGaz(e.target.value)}/></td>
                                </tr>
                                <tr>
                                    <td>Incendie :</td>
                                    <td><input type="checkbox" name="incendie" id="" onChange={(e) =>setIncendie(e.target.value)}/></td>
                                </tr>
                                <tr>
                                    <td>Explosion :</td>
                                    <td><input type="checkbox" name="explosion" id="" onChange={(e) =>setExplosion(e.target.value)}/></td>
                                </tr>
                                <tr>
                                    <td>Projection d'étincelles/particul :</td>
                                    <td><input type="checkbox" name="projection_etincelle" id="" onChange={(e) =>setProjectionEtincelle(e.target.value)}/></td>
                                </tr>
                                <tr>
                                    <td>Intoxication :</td>
                                    <td><input type="checkbox" name="intoxication" id="" onChange={(e) =>setIntoxication(e.target.value)}/></td>
                                </tr>
                                <tr>
                                    <td>Asphyxie :</td>
                                    <td><input type="checkbox" name="asphyxie" id="" onChange={(e) =>setAsphyxie(e.target.value)}/></td>
                                </tr>
                                <tr>
                                    <td>Brulures :</td>
                                    <td><input type="checkbox" name="brulure" id="" onChange={(e) =>setBrulure(e.target.value)}/></td>
                                </tr>
                                <tr>
                                    <td>Blessures :</td>
                                    <td><input type="checkbox" name="blessure" id="" onChange={(e) =>setBlessure(e.target.value)}/></td>
                                </tr>
                                <tr>
                                    <td>Autres lésions :</td>
                                    <td><input type="checkbox" name="autre_lesion" id="" onChange={(e) =>setAutreLesion(e.target.value)}/></td>
                                </tr>
                                <tr>
                                    <td>Chute de plain-pied :</td>
                                    <td><input type="checkbox" name="chaute_plain_plied" id="" onChange={(e) =>setChutePlainPied(e.target.value)}/></td>
                                </tr>
                                <tr>
                                    <td>Chute d'objet :</td>
                                    <td><input type="checkbox" name="chute_objet" id="" onChange={(e) =>setChuteObjet(e.target.value)}/></td>
                                </tr>
                                <tr>
                                    <td>Chute de hauteur :</td>
                                    <td><input type="checkbox" name="chute_hauteur" id="" onChange={(e) =>setChuteHauteur(e.target.value)}/></td>
                                </tr>
                                <tr>
                                    <td>Incidents réseau enterré :</td>
                                    <td><input type="checkbox" name="incident_reseau" id="" onChange={(e) =>setIncidentReseau(e.target.value)}/></td>
                                </tr>
                                <tr>
                                    <td>Epandage: </td>
                                    <td><input type="checkbox" name="epandage" id="" onChange={(e) =>setEpandage(e.target.value)}/></td>
                                </tr>
                                <tr>
                                    <td>Eboulement/ensevelissement :</td>
                                    <td><input type="checkbox" name="eboulement" id="" onChange={(e) =>setEboulement(e.target.value)}/></td>
                                </tr>
                                <tr>
                                    <td>Electrocution/électricistion" :</td>
                                    <td><input type="checkbox" name="electrocution" id="" onChange={(e) =>setElectrocution(e.target.value)}/></td>
                                </tr>
                                <tr>
                                    <td>Incidents cables aériens :</td>
                                    <td><input type="checkbox" name="incident-cable" id="" onChange={(e) =>setIncidentCable(e.target.value)}/></td>
                                </tr>
                                <tr>
                                    <td>Accident lié à la circulation :</td>
                                    <td><input type="checkbox" name="accident_circulation" id="" onChange={(e) =>setAccidentCirculation(e.target.value)}/></td>
                                </tr>
                                <tr>
                                    <td>Autres lésions :</td>
                                    <td><input type="text" name="autre_lesion" id="" required onChange={(e) =>setAutreLesionChar(e.target.value)}/></td>
                                </tr>
                            </tbody>
                        </table>

                </div>

                <div>
                    <h4>MESURES PREVENTIVES</h4>
                    <label><strong><u>A la charge de la station-service</u> &nbsp; &nbsp; &nbsp; </strong></label>

                    <label>
                        Oui
                        <input type="radio" name="charge_station_service" value="True" onChange={(e) =>setChargeStationService(e.target.value)}/>
                    </label>

                    <label>
                        Non
                        <input type="radio" name="charge_station_service" value="False" onChange={(e) =>setChargeStationService(e.target.value)}/>
                    </label> 

                    <label>Arret de la distribution &nbsp;</label>
                    <label>Partiel...</label>
                    <input type="radio" name="arret_distribution_total" value="True" onChange={(e) =>setArretDistributionTotal(e.target.value)}/>

                    <label>Total...</label>
                    <input type="radio" name="arret_distribution_total" value="False" onChange={(e) =>setArretDistributionTotal(e.target.value)}/>

                    <label>fermeture de la station</label>
                    <input type="checkbox" name="fermeture_station" onChange={(e) =>setFermetureStation(e.target.value)}/>

                    <label>Arret d'une activité (précisez):</label>
                    <input type="text" name="arret_activite" required onChange={(e) =>setArretActivite(e.target.value)}/>

                    <p><strong><u>A la charge de la / les entreprise(s) extérieur(s)</u></strong></p>

                    <label>Test de gaz</label>
                    <input type="checkbox" name="test_gaz" onChange={(e) =>setTestGaz(e.target.value)}/>

                    <label>Arret des travaux pendant le dépotage</label>
                    <input type="checkbox" name="arret_travaux_depotage" onChange={(e) =>setArretTravauxDepotage(e.target.value)}/>

                    <label>Arret des autres travaux prévus</label>
                    <input type="checkbox" name="arret_autre_travaux" onChange={(e) =>setArretAutreTravaux(e.target.value)}/>

                    <label>Extincteurs adaptés</label>
                    <input type="checkbox" name="extincteur_adapte2" onChange={(e) =>setExtincteurAdapte2(e.target.value)}/>

                    <label>Mise à la terre correcte des équipements</label>
                    <input type="checkbox" name="mise_terre" onChange={(e) =>setMiseTerre(e.target.value)}/>

                    <label>Appareil respiratoire, ventilateur</label>
                    <input type="checkbox" name="appareil_respiratoire" onChange={(e) =>setAppareilRespiratoire(e.target.value)}/>

                    <label>Outillage/ éclairage/ ventilateur</label>
                    <input type="checkbox" name="outillage" onChange={(e) =>setOutillage(e.target.value)}/>

                    <label>Port EPI spécifiques (précisez)</label>
                    <input type="checkbox" name="port_EPI_2" onChange={(e) =>setPortEPI_2(e.target.value)}/>

                    <label>Harnais et dispositif anti-chute</label>
                    <input type="checkbox" name="harnai" onChange={(e) =>setHarnai(e.target.value)}/>

                    <label>Echaffaudage approprié</label>
                    <input type="checkbox" name="echaffaudage" onChange={(e) =>setEchaffaudage(e.target.value)}/>

                    <label>Renseignements sur réseaux enterrés</label>
                    <input type="checkbox" name="renseignement_reseaux_enterre" onChange={(e) =>setRenseignementReseauxEnterre(e.target.value)}/>

                    <label>Consignation équipement ou système</label>
                    <input type="checkbox" name="consignation_equipement" onChange={(e) =>setConsignationEquipement(e.target.value)}/>

                    <label>Consignation électrique</label>
                    <input type="checkbox" name="consignation_electrique" onChange={(e) =>setConsignationElectrique(e.target.value)}/>

                    <label>Renseignements sur réseau aérien</label>
                    <input type="checkbox" name="renseignement_reseau_aerien" onChange={(e) =>setRenseignementReseauAerien(e.target.value)}/>

                    <label>Aide à la circulation</label>
                    <input type="checkbox" name="aide_circulation" onChange={(e) =>setAideCirculation(e.target.value)}/>
                </div>
               

                <button type="submit" className="btn btn-primary">Enregistrer</button>
            </form>
        </div>
    );
}

export default FormulaireStation;
