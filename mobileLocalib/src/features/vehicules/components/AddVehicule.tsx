import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonList, IonPage, IonSelect, IonSelectOption, IonTitle, IonToolbar } from '@ionic/react';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

import { vehiculeService } from '../services/vehicule.service';
import { VehiculeType } from '../vehicule.type'

const AddVehicule = () => {
    const [vehs, setVehs] = useState<VehiculeType[]>([]);
    const [newVeh, setNewVeh] = useState<VehiculeType>({
        id: 0,
        marque: "",
        model:"",
        immatriculation: "",
        etat: "",
        prix: 0,
        disponibilite: "",
        typeVehicule: "",
        image: ""
    })

    useEffect(() => {
        trouverTousVehicules()
    }, [])

    const trouverTousVehicules = (): void => {
        vehiculeService.findAllVehicules().then(data => setVehs(data))
    }

    const ajoutVehicule = (newVehicule: VehiculeType): void => {
        vehiculeService.postVehicule(newVehicule).then(() => {
            trouverTousVehicules()
        })
    }

    const handleChangeModel = (event: any) => {
        setNewVeh({ ...newVeh, model: event.target.value, })
    }

    const handleChangeMarque = (event: any) => {
        setNewVeh({ ...newVeh, marque: event.target.value, })
    }

    const handleChangeImmatriculation = (event: any) => {
        setNewVeh({ ...newVeh, immatriculation: event.target.value, })
    }

    const handleChangeEtat = (event: any) => {
        setNewVeh({ ...newVeh, etat: event.target.value, })
    }

    const handleChangePrix = (event: any) => {
        setNewVeh({ ...newVeh, prix: event.target.value, })
    }

    const handleChangeDisponibilite = (event: any) => {
        setNewVeh({ ...newVeh, disponibilite: event.target.value, })
    }

    const handleChangeTypeVehicule = (event: any) => {
        setNewVeh({ ...newVeh, model: event.target.value, })
    }

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