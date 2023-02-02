import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonList, IonPage, IonSelect, IonSelectOption, IonTitle, IonToolbar } from '@ionic/react';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import uuid from 'react-uuid';

import { vehiculeService } from '../services/vehicule.service';
import { VehiculeType } from '../vehicule.type'

const AddVehicule = () => {
    const [vehs, setVehs] = useState<VehiculeType[]>([]);
    const [newVeh, setNewVeh] = useState<VehiculeType>({
        id: uuid(),
        marque: "",
        model: "",
        immatriculation: "",
        etat: "",
        prix: 0,
        disponibilite: "",
        typeVehicule: "",
        image: ""
    })

    /**
     * Mise à jour et recuperation de tous les vehicules
     */
    useEffect(() => {
        trouverTousVehicules()
    }, [])

    /**
     * Fonction qui applle le service vahicule pour recuperer tous les vehicule
     */
    const trouverTousVehicules = (): void => {
        vehiculeService.findAllVehicules().then(data => setVehs(data))
    }

    /**
     * Fonction qui appelle le service vehicule pour ajouter un vehicule
     * @param newVehicule VehiculeType, vehicule à ajouter
     */
    const ajoutVehicule = (newVehicule: VehiculeType): void => {
        vehiculeService.postVehicule(newVehicule).then(() => {
            trouverTousVehicules()
        })
    }

    /**
     * Fonction pour ajouter le model du vehicule
     * @param event string, model du vehicule à ajouter
     */
    const handleChangeModel = (event: any) => {
        setNewVeh({ ...newVeh, model: event.target.value, })
    }

    /**
     * Fonction pour ajouter la marque du vehicule
     * @param event string, marque du vehicule à ajouter
     */
    const handleChangeMarque = (event: any) => {
        setNewVeh({ ...newVeh, marque: event.target.value, })
    }

    /**
     * Fonction pour ajouter une immatriculation du vehicule
     * @param event string, immatriculationn à ajouter
     */
    const handleChangeImmatriculation = (event: any) => {
        setNewVeh({ ...newVeh, immatriculation: event.target.value, })
    }

    /**
     * Fonction pour ajouter l'etat au vehicule
     * @param event string, etat du vehicule à ajouter
     */
    const handleChangeEtat = (event: any) => {
        setNewVeh({ ...newVeh, etat: event.target.value, })
    }

    /**
     * Fonction pour ajouter le prix journalier du location au vehicule
     * @param event number, prix du vehicule a ajouter
     */
    const handleChangePrix = (event: any) => {
        setNewVeh({ ...newVeh, prix: event.target.value, })
    }

    /**
     * Fonctioon pourr ajouter une disponibilite au vehicule
     * @param event string, disponibilite à ajouter
     */
    const handleChangeDisponibilite = (event: any) => {
        setNewVeh({ ...newVeh, disponibilite: event.target.value, })
    }

    /**
     * Fonction pour ajouter un type au vehicule 
     * @param event string, type du vehicule à ajouter
     */
    const handleChangeTypeVehicule = (event: any) => {
        setNewVeh({ ...newVeh, typeVehicule: event.target.value })
    }

    /**
     * Fonction pour enregistrer le nouveau vehicule dans la base
     * de donnée en cliquant sur le bouton ajouter
     */
    const handleClickSave = (): void => {
        ajoutVehicule(newVeh)
    }

    return (
        <>
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonBackButton defaultHref="/locataires"></IonBackButton>
                        </IonButtons>
                        <IonTitle>Ajouter Vehicule</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent fullscreen>
                    <IonItem counter={true}>
                        <IonLabel position="floating">Marque du vehicule</IonLabel>
                        <IonInput type='text' maxlength={20} value={newVeh.marque} onIonChange={(event: any) => handleChangeMarque(event)}></IonInput>
                    </IonItem>

                    <IonItem counter={true}>
                        <IonLabel position="floating">Model du vehicule</IonLabel>
                        <IonInput type='text' maxlength={20} value={newVeh.model} onIonChange={(event: any) => handleChangeModel(event)}></IonInput>
                    </IonItem>
                    <IonItem counter={true}>
                        <IonLabel position="floating">Immatriculation du vehicule</IonLabel>
                        <IonInput type='text' maxlength={20} value={newVeh.immatriculation} onIonChange={(event: any) => handleChangeImmatriculation(event)}></IonInput>
                    </IonItem>
                    <IonList  >
                        <IonItem>
                            <IonSelect placeholder="choisir l'etat du Vehicule" onIonChange={(event: any) =>
                                handleChangeEtat(event)}>
                                <IonSelectOption value="A">A</IonSelectOption>
                                <IonSelectOption value="B">B</IonSelectOption>
                                <IonSelectOption value="C">C</IonSelectOption>
                            </IonSelect>
                        </IonItem>
                    </IonList>
                    <IonItem counter={true}>
                        <IonLabel position="floating">Prix du vehicule</IonLabel>
                        <IonInput type='text' maxlength={20} value={newVeh.prix} onIonChange={(event: any) => handleChangePrix(event)}></IonInput>
                    </IonItem>
                    <IonList  >
                        <IonItem>
                            <IonSelect placeholder="choisir la disponibilite du Vehicule" onIonChange={(event: any) =>
                                handleChangeDisponibilite(event)}>
                                <IonSelectOption value="Disponible">Disponible</IonSelectOption>
                                <IonSelectOption value="Indisponible">Indisponible</IonSelectOption>

                            </IonSelect>
                        </IonItem>
                    </IonList>
                    <IonList  >
                        <IonItem>
                            <IonSelect placeholder="choisir le type du Vehicule" onIonChange={(event: any) =>
                                handleChangeTypeVehicule(event)}>
                                <IonSelectOption value="Voiture">Voiture</IonSelectOption>
                                <IonSelectOption value="Camion">Camion</IonSelectOption>
                                <IonSelectOption value="Moto">Moto</IonSelectOption>
                            </IonSelect>
                        </IonItem>
                    </IonList>
                    <NavLink to="/vehicules">
                        <IonButton onClick={handleClickSave}>Ajouter</IonButton>
                    </NavLink>
                </IonContent>
            </IonPage>
        </>
    )
}

export default AddVehicule