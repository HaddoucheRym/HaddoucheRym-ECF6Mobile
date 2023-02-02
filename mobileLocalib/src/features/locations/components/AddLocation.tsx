import { IonBackButton, IonButton, IonButtons, IonContent, IonDatetime, IonHeader, IonInput, IonItem, IonLabel, IonList, IonPage, IonSelect, IonSelectOption, IonTitle, IonToolbar, useIonAlert } from '@ionic/react';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import { LocataireType } from '../../locataires/locataire.type';
import { LocationType } from '../location.type';

import { VehiculeType } from '../../vehicules/vehicule.type';
import { locataireService } from '../../locataires/services/locataire.service';
import { locationService } from '../services/location.service';
import { vehiculeService } from '../../vehicules/services/vehicule.service';
import uuid from 'react-uuid';

const AddLocation = () => {
    const [locations, setLocations] = useState<LocationType[]>([]);
    const [locataires, setLocataires] = useState<LocataireType[]>([]);
    const [vehicules, setVehicules] = useState<VehiculeType>();


    const { id } = useParams<any>();
    const [selectedVehiculeIdV, setSelectedVehiculeIdV] = useState(id);
    const [newLocation, setNewLocation] = useState<LocationType>({
        id: uuid(),
        locataire: { id: "", name: "", email: "", date: "", phone: "", age:0 },
        vehicule: { id: "", marque: "", model: "", immatriculation: "", etat: "", prix: 0, typeVehicule: "", image: "", disponibilite: "" },
        dateDebut: "",
        dateFin: "",
        prixt: 0
    })

    /**
     * Mise à jour et recuuperation de tous les locataires
     */
    useEffect(() => {
        findAlllocataire()
    }, [])

    /**
     * Fonction qui appelle le service location pour recuperer tous les locataires
     */
    const findAlllocataire = () => {
        locataireService.findAllLocataire().then(data => setLocataires(data))
    }

    /**
     * Mise à jour et recuperation de toutes les locations
     */
    useEffect(() => {
        findAllLocations()
    }, [])

    /**
     * Fonction qui appelle le service location pour recuperer toutes les locations
     */
    const findAllLocations = () => {
        locationService.findAllLocations().then(data => setLocations(data))
    }

    /**
     * Mise à jour et recuperation des données d'un vehicule
     */
    useEffect(() => {
        findVehicule()
        // setNewLocation({...newLocation, vehicule:vehicules.marque})
    }, [selectedVehiculeIdV])

    /**
     * Fonction qui appelle le service vehicule pour recuperer les données d'un vehicule
     */
    const findVehicule = () => {
        vehiculeService.findVehicule(selectedVehiculeIdV).then(data => setVehicules(data))
    }

    /**
     * Fonction qui appelle le service location pour ajouter une location
     * @param newLocation LocationType, location à ajouter
     */
    const addLocation = (newLocation: LocationType) => {
        locationService.postLocation(newLocation).then(() => {
            findAllLocations()
        })
    }

    /**
     * Fonction qui ajoute un nom du locataire à la loocation
     * @param event String, locataire à ajouter
     */
    const handleChangeLocataire = (event: any) => {
        setNewLocation({ ...newLocation, locataire: event.target.value })
    }

    /**
     * Fonction qui ajout une marque du vehicule a la location
     * @param event string, marque du vehicule à ajouter
     */
    const handleChangeVehiculeMarque = (event: any) => {
        setNewLocation({ ...newLocation, vehicule: event.target.value })
    }

    /**
     * Fonction pour ajouter une date de debhut de location
     * @param event DATE, DATE DEBUT à AJOUTER
     */
    const handleChangeDateDebut = (event: any) => {
        let date = event.target.value
        date = date.substring(0, 10);
        setNewLocation({ ...newLocation, dateDebut: date })
    }

    /**
     * Fonction pour ajouter une date de fin a la location
     * @param event Date, date fin à ajouter
     */
    const handleChangeDateFin = (event: any) => {
        let date = event.target.value
        date = date.substring(0, 10);
        setNewLocation({ ...newLocation, dateFin: date })
    }

    /**
     * Fonction pour calculer at ajouter un prix total de location d'un vehicule a la 
     * location
     * @param event number, prix total à ajouter
     */
    const handleChangePrixTotal = (event: any) => {
        let date1 = new Date(newLocation.dateDebut);
        let date2 = new Date(newLocation.dateFin);
        let Diff_temps = date2.getTime() - date1.getTime();
        let Diff_jours = Diff_temps / (1000 * 3600 * 24);
        console.log("Le nombre de jours entre les deux dates est de " + Math.round(Diff_jours) + " jours");
        let prix: any = vehicules?.prix
        let prixF = Math.round(Diff_jours * prix * 100) / 100;
        console.log(prixF);
        event.target.value = prixF;
        setNewLocation({ ...newLocation, prixt: prixF, })
    }

    /**
     * Fonction pour enregistrer la nouvelle location dans la base
     * de donnée en cliquant sur le bouton ajouter
     */
    const handleClickSave = (): void => {
        addLocation(newLocation)
    }

    return (
        <>
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonBackButton defaultHref="/locations"></IonBackButton>
                        </IonButtons>
                        <IonTitle>Ajouter Location</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent fullscreen>
                    <IonList>
                        <IonItem>
                            <IonSelect placeholder="choisir le nom du locataire" onIonChange={(event: any) =>
                                handleChangeLocataire(event)}>
                                {locataires.map((locataire: LocataireType, index: number) => (
                                    <IonSelectOption key={index} value={locataire}>{locataire.name}

                                    </IonSelectOption>
                                ))}
                            </IonSelect>
                        </IonItem>
                    </IonList>
                    <IonItem>
                        <IonSelect placeholder="choisir la marque du vehicule" onIonChange={(event: any) =>
                            handleChangeVehiculeMarque(event)}>

                            <IonSelectOption value={vehicules}>{vehicules?.marque}

                            </IonSelectOption>
                        </IonSelect>
                    </IonItem>
                    <IonItem counter={true} counterFormatter={(inputLength, maxLength) => `${maxLength - inputLength} characters remaining`}>
                        <IonLabel position="floating">la date de debut du location</IonLabel>
                        <IonDatetime presentation="date" value={newLocation.dateDebut} onIonChange={(event: any) =>
                            handleChangeDateDebut(event)}></IonDatetime>;
                    </IonItem>

                    <IonItem counter={true} counterFormatter={(inputLength, maxLength) => `${maxLength - inputLength} characters remaining`}>
                        <IonLabel position="floating">la date de fin du location</IonLabel>
                        <IonDatetime presentation="date" value={newLocation.dateFin} onIonChange={(event: any) =>
                            handleChangeDateFin(event)}></IonDatetime>;
                    </IonItem>

                    <IonList>
                        <IonItem>
                            <IonSelect placeholder="le prix total du vehicule" multiple={true} onIonChange={(event: any) =>
                                handleChangePrixTotal(event)}>
                                <IonSelectOption value={newLocation.prixt}>{newLocation.prixt}
                                </IonSelectOption>

                            </IonSelect>
                        </IonItem>
                    </IonList>

                    {newLocation.dateDebut <= newLocation.dateFin ?
                        <NavLink to="/locations">
                            <IonButton onClick={handleClickSave} >Ajouter</IonButton>
                        </NavLink> : <p>ce n'est pas valide, verifiez les dates!</p>}
                </IonContent>
            </IonPage>
        </>
    )
}

export default AddLocation