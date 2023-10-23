import React, { useState } from "react"

function FormulaireExcavation() {
    const [date_entete, setDateEntete] = useState("");
    const [Registre_entete, setRegistreEntete] = useState(0); 
    const [site, setSite] = useState("");
    const [localite, setLocalite] = useState("");
    const [client,setClient] = useState("");
    const [entreprise_intervenante,] = useState("");
    const [descriptif,setDescriptif] = useState("");
    const [profondeur_excavation, setProfondeur] = useState("");
    const [zone, setZone] = useState("");
    const [type_excavation, setTypeExcavation] = useState("");
    const [dessin1, setDessin1] = useState("");
    const [dessin2, setDessin2] = useState("");
    const [dessin3, setDessin3] = useState("");
    const [dessin4,setDessin4] = useState("");
    const [eau_incendie, setEauIncendie] = useState("");
    const [eau_pluviale, setEauPluviale] = useState("");
    const [eau_riviere,setEauRiviere] = useState("");
    const [effluent, setEffluent] = useState("");
    const [eau_domestique, setEauDomestique] = useState("");
    const [sanitaire,setSanitaire] = useState("");
    const [cable_communication, setCableCommunication] = useState("");
    const [mise_terre,setMiseTerre] = useState("");
    const [structure_adjacente,setStructureAdjacente] = useState("");
    const [cable_cathodique, setCableCathodique] = useState("");
    const [ligne_gaz, setLigneGaz] = useState("");
    const [atre_obstruction, setAtreObstruction] = useState("");
    const [electrique_11kv,setElectrique11kv] = useState("");
    const [electrique_6kv, setElectrique6kv] = useState("");
    const [electrique_690v, setElectrique690v] = useState("");
    const [electrique_690i, setElectrique690i] = useState("");
    const [commentaire_obstruction1,setCommentaireObstruction1] = useState("");
    const [commentaire_obstruction2, setCommentaireObstruction2] = useState("");
    const [commentaire_obstruction3, setCommentaireObstruction3] = useState("");
    const [commentaire_obstruction4,setCommentaireObstruction4] = useState("");
    const [commentaire_obstruction5,setCommentaireObstruction5] = useState("");
    const [commentaire_obstruction6, setCommentaireObstruction6] = useState("");
    const [pente, setPente] = useState("");
    const [banc, setBanc] = useState("");
    const [etayage, setEtayage] = useState();
    const [pretection_nuit, setProtectionNuit] = useState("");
    const [pretection_ouverture, setProtectionOuverture] = useState("");
    const [permis_espace, setPermisEspace] = useState("");
    const [pompage_eau, setPompageEau] = useState("");
    const [fermeture_route, setFermetureRoute] = useState("");
    const [mesure_securite_additionnel, setMesureSecuriteAdditionnel] = useState("");
    const [commentaire1, setCommentaire1] = useState("");
    const [commentaire2, setCommentaire2] = useState("");
    const [commentaire3, setCommentaire3] = useState("");
    const [commentaire4, setCommentaire4] = useState("");
    const [effectuee, setEffectuee] = useState("");
    const [effectuer_nom, setEffectuerNom] = useState("");
    const [effectuer_date, setEffectuerDate] = useState("");
    const [representant_contracant, setRepresentantContract] = useState("");
    const [representant_contracant_nom, setRepresentantContractantNom] = useState("");
    const [representant_contracant_date, setRepresentantContractantDate] = useState("");
    const [superviseur_nom,setSuperviseurNom] = useState("");
    const [superviseur_date, setSuperviseurDate] = useState("");
    const [representant_proprietaire_nom, setRepresentantProprietaireNom] = useState("");
    const [representant_proprietaire_date, setRepresentantProproetaire] = useState("");
    const [superviseur_excavation_nom, setSuperviseurExcavationNom] = useState("");
    const [superviseur_excavation_date, setSuperviseurExcavationDate] = useState("");
    const [date_achevement_excavation, setDateAchevementExcavation] = useState("");
    const [permis_excavation_delivre, setPermisExcavationDelivre] = useState("");


    const BtnValider = async (e) => {
        e.preventDefault();
        const formData = {
            date_entete: date_entete,
            Registre_entete: Registre_entete,
            site: site,
            localite: localite,
            client: client,
            entreprise_intervenante: entreprise_intervenante,
            descriptif: descriptif,
            profondeur_excavation: profondeur_excavation,
            zone: zone,
            type_excavation: type_excavation,
            dessin1: dessin1,
            dessin2: dessin2,
            dessin3: dessin3,
            dessin4: dessin4,
            eau_incendie: eau_incendie,
            eau_pluviale: eau_pluviale,
            eau_riviere: eau_riviere,
            effluent: effluent,
            eau_domestique: eau_domestique,
            sanitaire: sanitaire,
            cable_communication: cable_communication,
            mise_terre: mise_terre,
            structure_adjacente: structure_adjacente,
            cable_cathodique: cable_cathodique,
            ligne_gaz: ligne_gaz,
            atre_obstruction: atre_obstruction,
            electrique_11kv: electrique_11kv,
            electrique_6kv: electrique_6kv,
            electrique_690v: electrique_690v,
            electrique_690i: electrique_690i,
            commentaire_obstruction1: commentaire_obstruction1,
            commentaire_obstruction2: commentaire_obstruction2,
            commentaire_obstruction3: commentaire_obstruction3,
            commentaire_obstruction4: commentaire_obstruction4,
            commentaire_obstruction5: commentaire_obstruction5,
            commentaire_obstruction6: commentaire_obstruction6,
            pente: pente,
            banc: banc,
            etayage: etayage,
            pretection_nuit: pretection_nuit,
            pretection_ouverture: pretection_ouverture,
            permis_espace: permis_espace,
            pompage_eau: pompage_eau,
            fermeture_route: fermeture_route,
            mesure_securite_additionnel: mesure_securite_additionnel,
            commentaire1: commentaire1,
            commentaire2: commentaire2,
            commentaire3: commentaire3,
            commentaire4: commentaire4,
            effectuee: effectuee,
            effectuer_nom: effectuer_nom,
            effectuer_date: effectuer_date,
            representant_contracant: representant_contracant,
            representant_contracant_nom: representant_contracant_nom,
            representant_contracant_date: representant_contracant_date,
            superviseur_nom: superviseur_nom,
            superviseur_date: superviseur_date,
            representant_proprietaire_nom: representant_proprietaire_nom,
            representant_proprietaire_date: representant_proprietaire_date,
            superviseur_excavation_nom: superviseur_excavation_nom,
            superviseur_excavation_date: superviseur_excavation_date,
            date_achevement_excavation: date_achevement_excavation,
            permis_excavation_delivre: permis_excavation_delivre
        };
        await fetch("", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(formData),
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
            <form onSubmit={BtnValider}>

                <div className="">
                    <label htmlFor="date_entete">Date:</label>
                    <input onChange={(e) =>set(e.target.value)}   type="date" name="date_entete" id="date_entete" />
                </div>
                <br />
                <div className="">
                    <label htmlFor="Registre_entete">Registre:</label>
                    <input onChange={(e) =>set(e.target.value)}   type="number" name="Registre_entete" id="Registre_entete" />
                </div>

                <div className="">
                    <label className="" htmlFor="site">Site :</label>
                    <input onChange={(e) =>set(e.target.value)}   type="text" name="site" /><br /><br />

                    <label htmlFor="localite">Localité :</label>
                    <input onChange={(e) =>set(e.target.value)}   type="text" name="localite" /><br /><br />
                </div>

                <div className="">
                    <label htmlFor="client">Client :</label>
                    <input onChange={(e) =>set(e.target.value)}   type="text" name="client" /><br /><br />

                    <label htmlFor="entreprise_intervenante">Entreprise intervenante :</label>
                    <input onChange={(e) =>set(e.target.value)}   type="text" name="entreprise_intervenante" /><br />
                </div>

                <div className="form_desciption">
                    <label htmlFor="descriptif">DESCRIPTION DU TRAVAIL :</label>
                    <input onChange={(e) =>set(e.target.value)}   type="text" name="descriptif" /><br /><br />
                </div>

                <div className="a">
                    <label htmlFor="profondeur_excavation">Profondeur et longueur de l'excavation</label>
                    <input onChange={(e) =>set(e.target.value)}   type="text" name="profondeur_excavation" />
                </div>
                <div className="">
                    <label htmlFor="zone">Zone</label>
                    <input onChange={(e) =>set(e.target.value)}   type="text" name="zone" />
                </div>

                <div className="form_type">
                    <div className="">
                        <label htmlFor="type_excavation">Type d'excavation :</label>
                    </div>
                    <div className="">
                        <label htmlFor="mecanique">Mécanique</label>
                        <input onChange={(e) =>set(e.target.value)}   type="radio" name="type_excavation" id="mecanique" value="mecanique" />
                    </div>
                    <div className="">
                        <label htmlFor="manuelle">Manuelle</label>
                        <input onChange={(e) =>set(e.target.value)}   type="radio" name="type_excavation" id="manuelle" value="manuelle" />
                    </div>
                    <div className="">
                        <label htmlFor="autre">Autre à préciser</label>
                        <input onChange={(e) =>set(e.target.value)}   type="radio" name="type_excavation" id="autre" value="autre" />
                    </div>
                </div>

                <div className="form_dessin">
                    <div className="">
                        <label>Liste de dessin :</label>
                    </div>
                    <div className="">
                        <input onChange={(e) =>set(e.target.value)}   type="text" name="dessin1" />
                    </div>
                    <div className="">
                        <input onChange={(e) =>set(e.target.value)}   type="text" name="dessin2" />
                    </div>
                    <div className="">
                        <input onChange={(e) =>set(e.target.value)}   type="text" name="dessin3" />
                    </div>
                    <div className="">
                        <input onChange={(e) =>set(e.target.value)}   type="text" name="dessin4" />
                    </div>
                </div>

                <div className="form_obstruction">
                    <h5>OBSTRUCTION SOUTERRAINES</h5>
                    <br />
                    <div className="form_eau">
                        <div className="">
                            <p>Ligne d'eau</p><br />
                        </div>
                        <div className="">
                            <label htmlFor="eau_inc">Eau d'incendie</label>
                            <input onChange={(e) =>set(e.target.value)}   type="checkbox" name="eau_incendie" id="eau_inc" />
                        </div>
                        <div className="">
                            <label htmlFor="eau_riv">Eau de rivière</label>
                            <input onChange={(e) =>set(e.target.value)}   type="checkbox" name="eau_riviere" id="eau_riv" />
                        </div>
                        <div className="">
                            <label htmlFor="eau_dom">Eau domestique</label>
                            <input onChange={(e) =>set(e.target.value)}   type="checkbox" name="eau_domestique" id="eau_dom" />
                        </div>
                        <div className="">
                            <label htmlFor="commentaire_obstruction1">Commentaire</label>
                            <input onChange={(e) =>set(e.target.value)}   type="text" name="commentaire_obstruction1" />
                        </div>
                    </div>
                    <hr />
                    <br />
                    <div className="form_egout">
                        <div className="">
                            <p>Egout</p><br />
                        </div>
                        <div className="">
                            <label htmlFor="eau_plu">Eaux pluviales</label>
                            <input onChange={(e) =>set(e.target.value)}   type="checkbox" name="eau_pluviale" id="eau_plu" />
                        </div>
                        <div className="">
                            <label htmlFor="effluent">Effluents</label>
                            <input onChange={(e) =>set(e.target.value)}   type="checkbox" name="effluent" id="effluent" />
                        </div>
                        <div className="">
                            <label htmlFor="sanitaire">Sanitaire</label>
                            <input onChange={(e) =>set(e.target.value)}   type="checkbox" name="sanitaire" id="sanitaire" />
                        </div>
                        <div className="">
                            <label htmlFor="commentaire_obstruction2">Commentaire</label>
                            <input onChange={(e) =>set(e.target.value)}   type="text" name="commentaire_obstruction2" />
                        </div>
                    </div>
                    <hr />
                    <br />
                    <div className="">
                        <div className="form_cable">
                            <div className="">
                                <label htmlFor="cable_com">Câble de communication</label>
                                <input onChange={(e) =>set(e.target.value)}   type="checkbox" name="cable_communication" id="cable_com" />
                            </div>
                            <div className="">
                                <label htmlFor="cable_cath">Câble cathodique</label>
                                <input onChange={(e) =>set(e.target.value)}   type="checkbox" name="cable_cathodique" id="cable_cath" />
                            </div>
                            <div className="">
                                <label htmlFor="commentaire_obstruction3">Commentaire</label>
                                <input onChange={(e) =>set(e.target.value)}   type="text" name="commentaire_obstruction3" />
                            </div>
                        </div>
                        <br />
                        <hr />
                        <br />
                        <div className="form_terre">
                            <div className="">
                                <label htmlFor="mise_terre">Mise a la terre</label>
                                <input onChange={(e) =>set(e.target.value)}   type="checkbox" name="mise_terre" id="mise_terre" />
                            </div>
                            <div className="">
                                <label htmlFor="ligne_gaz">Ligne de gaz</label>
                                <input onChange={(e) =>set(e.target.value)}   type="checkbox" name="ligne_gaz" id="ligne_gaz" />
                            </div>
                            <div className="">
                                <label htmlFor="commentaire_obstruction4">Commentaire</label>
                                <input onChange={(e) =>set(e.target.value)}   type="text" name="commentaire_obstruction4" />
                            </div>
                        </div>
                        <br />
                        <hr />
                        <br />
                        <div className="form_structure">
                            <div className="">
                                <label htmlFor="struct_adj">Structure adjacente</label>
                                <input onChange={(e) =>set(e.target.value)}   type="checkbox" name="structure_adjacente" id="struct_adj" />
                            </div>
                            <div className="">
                                <label htmlFor="atre_obstruction">Autre</label>
                                <input onChange={(e) =>set(e.target.value)}   type="text" name="atre_obstruction" id="atre_obstruction" />
                            </div>
                            <div className="">
                                <label htmlFor="commentaire_obstruction5">Commentaire</label>
                                <input onChange={(e) =>set(e.target.value)}   type="text" name="commentaire_obstruction5" />
                            </div>
                        </div>
                    </div>
                    <br />
                    <hr />
                    <br />
                    <div className="form_electrique">
                        <div className="">
                            <p>Electrique</p>
                        </div>
                        <div className="">
                            <label htmlFor="electrique_11kv">11 Kv</label>
                            <input onChange={(e) =>set(e.target.value)}   type="checkbox" name="electrique_11kv" id="electrique_11kv" />
                        </div>
                        <div className="">
                            <label htmlFor="electrique_6kv">6.6 Kv</label>
                            <input onChange={(e) =>set(e.target.value)}   type="checkbox" name="electrique_6kv" id="electrique_6kv" />
                        </div>
                        <div className="">
                            <label htmlFor="electrique_690v">690 V</label>
                            <input onChange={(e) =>set(e.target.value)}   type="checkbox" name="electrique_690v" id="electrique_690v" />
                        </div>
                        <div className="">
                            <label htmlFor="electrique_690i">690 V</label>
                            <input onChange={(e) =>set(e.target.value)}   type="checkbox" name="electrique_690i" id="electrique_690i" />
                        </div>
                        <div className="">
                            <label htmlFor="commentaire_obstruction6">Commentaire</label>
                            <input onChange={(e) =>set(e.target.value)}   type="text" name="commentaire_obstruction6" />
                        </div>
                    </div>
                </div>


                <div className="form_consideration">
                    <h5>Considérations spécifiques</h5><br />

                    <div className="form_pente">
                        <div className="">
                            <label htmlFor="pente">Pente</label>
                            <input onChange={(e) =>set(e.target.value)}   type="checkbox" name="pente" id="pente" />
                        </div>

                        <div className="">
                            <label htmlFor="banc">Banc</label>
                            <input onChange={(e) =>set(e.target.value)}   type="checkbox" name="banc" id="banc" />
                        </div>

                        <div className="">
                            <label htmlFor="etayage">Etayage</label>
                            <input onChange={(e) =>set(e.target.value)}   type="checkbox" name="etayage" id="etayage" />
                        </div>

                        <div className="">
                            <label htmlFor="commentaire1">Commentaire</label>
                            <input onChange={(e) =>set(e.target.value)}   type="text" name="commentaire1" />
                        </div>
                    </div>
                    <br />
                    <hr />
                    <br />

                    <div className="form_protection">
                        <div className="">
                            <label htmlFor="protect_night">Protection nuit</label>
                            <input onChange={(e) =>set(e.target.value)}   type="checkbox" name="protection_nuit" id="protect_night" />
                        </div>
                        <div className="">
                            <label htmlFor="protect_ouv">Protection des ouvertures (Barricade)</label>
                            <input onChange={(e) =>set(e.target.value)}   type="checkbox" name="protection_ouverture" id="protect_ouv" />
                        </div>
                        <div className="">
                            <label htmlFor="commentaire2">Commentaire</label>
                            <input onChange={(e) =>set(e.target.value)}   type="text" name="commentaire2" />
                        </div>
                    </div>
                    <hr />
                    <br />

                    <div className="form_protection">
                        <div className="">
                            <label htmlFor="permis">Permis d'entrée en espace confiné</label>
                            <input onChange={(e) =>set(e.target.value)}   type="checkbox" name="permis_espace" id="permis" />
                        </div>
                        <div className="">
                            <label htmlFor="pompage">Pompage d'eau</label>
                            <input onChange={(e) =>set(e.target.value)}   type="checkbox" name="pompage_eau" id="pompage" />
                        </div>
                        <div className="">
                            <label htmlFor="commentaire3">Commentaire</label>
                            <input onChange={(e) =>set(e.target.value)}   type="text" name="commentaire3" />
                        </div>
                    </div>
                    <hr />
                    <br />

                    <div className="form_protection">
                        <div className="">
                            <label htmlFor="fermeture">Fermeture de route</label>
                            <input onChange={(e) =>set(e.target.value)}   type="checkbox" name="fermeture_route" id="fermeture" />
                        </div>
                        <div className="">
                            <label htmlFor="mesure_securite_additionnel">Mesure de sécurité additionnelle</label>
                            <input onChange={(e) =>set(e.target.value)}   type="text" name="mesure_securite_additionnel" />
                        </div>
                        <div className="">
                            <label htmlFor="commentaire4">Commentaire</label>
                            <input onChange={(e) =>set(e.target.value)}   type="text" name="commentaire4" />
                        </div>
                    </div>
                </div>

                <br />
                <div className="form_detection">
                    <h5>Détection des Structures et Services Non-Apparents</h5>
                    <br />
                    <div className="form_protection">
                        <div className="">
                            <label htmlFor="effectuee">Effectué</label>
                            <input onChange={(e) =>set(e.target.value)}   type="checkbox" name="effectuee" id="effectuee" />
                        </div>
                        <div className="">
                            <label htmlFor="effectuer_nom">Nom</label>
                            <input onChange={(e) =>set(e.target.value)}   type="text" name="effectuer_nom" />
                        </div>
                        <div className="">
                            <label htmlFor="effectuer_date">Date</label>
                            <input onChange={(e) =>set(e.target.value)}   type="date" name="effectuer_date" />
                        </div>
                    </div>
                    <hr />
                    <br />
                    <div className="form_protection">
                        <div className="">
                            <label htmlFor="representant_contracant">Représentant / Contractant</label>
                            <input onChange={(e) =>set(e.target.value)}   type="checkbox" name="representant_contracant" id="representant_contracant" />
                        </div>
                        <div className="">
                            <label htmlFor="representant_contracant_nom">Nom</label>
                            <input onChange={(e) =>set(e.target.value)}   type="text" name="representant_contracant_nom" />
                        </div>
                        <div className="">
                            <label htmlFor="representant_contracant_date">Date</label>
                            <input onChange={(e) =>set(e.target.value)}   type="date" name="representant_contracant_date" />
                        </div>
                    </div>
                </div>

                
                <div className="form_approbation">
                    <h5>Approbation</h5>
                    <br />
                    <div className="form_protection">
                        <div className="">
                            <p>SUPERVISEUR DES DESSINATEURS</p>
                        </div>
                        <div className="">
                            <label htmlFor="superviseur_nom">Nom</label>
                            <input onChange={(e) =>set(e.target.value)}   type="text" name="superviseur_nom" id="superviseur_nom" />
                        </div>
                        <div className="">
                            <label htmlFor="superviseur_date">Date</label>
                            <input onChange={(e) =>set(e.target.value)}   type="date" name="superviseur_date" id="superviseur_date" />
                        </div>
                    </div>
                    <hr />
                    <br />
                    <div className="form_protection">
                        <div className="">
                            <p>REPRÉSENTANT DU PROPRIÉTAIRE</p>
                        </div>
                        <div className="">
                            <label htmlFor="representant_proprietaire_nom">Nom</label>
                            <input onChange={(e) =>set(e.target.value)}   type="text" name="representant_proprietaire_nom" id="representant_proprietaire_nom" />
                        </div>
                        <div className="">
                            <label htmlFor="representant_proprietaire_date">Date</label>
                            <input onChange={(e) =>set(e.target.value)}   type="date" name="representant_proprietaire_date" id="representant_proprietaire_date" />
                        </div>
                    </div>
                </div>
                <br />
                <small>JE COMPRENDS LA NATURE ET L'ÉTENDUE DES TRAVAUX ET JE ME CONFORMERAI À TOUTES LES CONDITIONS ET LES PRÉCAUTIONS À SUIVRE POUR ACHEVER LE TRAVAIL.</small>
                <br />
                <br />
                <div className="form_protection">
                    <div className="">
                        <label htmlFor="superviseur_excavation">SUPERVISEUR D'EXCAVATION</label>
                    </div>
                    <div className="">
                        <label htmlFor="superviseur_excavation_nom">Nom</label>
                        <input onChange={(e) =>set(e.target.value)}   type="text" name="superviseur_excavation_nom" id="superviseur_excavation_nom" />
                    </div>
                    <div className="">
                        <label htmlFor="superviseur_excavation_date">Date</label>
                        <input onChange={(e) =>set(e.target.value)}   type="date" name="superviseur_excavation_date" id="superviseur_excavation_date" />
                    </div>
                </div>
                <br />
                <small>À LA FIN DES TRAVAUX, LE SUPERVISEUR D'EXCAVATION SIGNERA EN DESSOUS ET INDICAT LA DATE D'ACHÈVEMENT DES TRAVAUX PUIS ENVERRA AU SUPERVISEUR DES DESSINATEURS ACCOMPAGNÉ DES DESSINS TOUTES MODIFICATIONS/ADDITIONS OU SUPPRESSIONS.</small>
                
                
                <div className="form_protection">
                    <div className="">
                        <label htmlFor="superviseur_achevement">SUPERVISEUR D'EXCAVATION</label>
                    </div>
                    <div className="">
                        <label htmlFor="date_achevement_excavation">Date d'achèvement des travaux d'excavation</label>
                        <input onChange={(e) =>set(e.target.value)}   type="date" name="date_achevement_excavation" id="date_achevement_excavation" />
                    </div>
                    <div className=""></div>
                </div>
                <br />
                <br />
                <label htmlFor="permis_excavation_delivre">Permis d'excavation délivré le:</label>
                <input onChange={(e) =>set(e.target.value)}   type="date" name="permis_excavation_delivre" id="permis_excavation_delivre" />
                &nbsp;&nbsp;&nbsp;&nbsp; Visa du Responsable
                <input onChange={(e) =>set(e.target.value)}   type="hidden" value="{{user}}" name="user_profile_excavation" />
                <br />
                <br />
                <button type="submit" className="btn_confine">Enregistrer</button>
                


            </form>
        </div>
    )
}