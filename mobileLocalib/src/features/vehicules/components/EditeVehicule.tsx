import { IonButton, IonInput, IonItem, IonLabel, IonSelect, IonSelectOption } from '@ionic/react'
import React, { useState } from 'react'
import { VehiculeType } from '../vehicule.type'

export type EditeVehiculeProps = {
    vehicule: VehiculeType,
    modifVehicule: Function
}

const EditeVehicule = (props: EditeVehiculeProps) => {
    const [veh, setVeh] = useState(props.vehicule)

    /**
     * Fonction pour modifier la marque du vehicule
     * @param event string, marque du vehicule à modifier
     */
    const handleChangeMarque = (event: any) => {
        setVeh({ ...veh, marque: event.target.value, })
    }

    /**
     * Fonction pour modifier le model du vehicule
     * @param event string, model à modifier
     */
    const handleChangeModel = (event: any) => {
        setVeh({ ...veh, model: event.target.value, })
    }

    /**
     * Fonction pour modifier l'immatriculation du vehicule
     * @param event string, immatriculation du vehicule à modifier
     */
    const handleChangeImmatriculation = (event: any) => {
        setVeh({ ...veh, immatriculation: event.target.value, })
    }

    /**
     * Fonction pour modifier l'etat du vehicule
     * @param event string, etat du veehicule à modifier
     */
    const handleChangeEtat = (event: any) => {
        setVeh({ ...veh, etat: event.target.value, })
    }

    /**
     * Fonction pour modifier le prix journalier du location
     * du vehicule
     * @param event number, le prix du vehicule à modifier
     */
    const handleChangePrix = (event: any) => {
        setVeh({ ...veh, prix: event.target.value, })
    }

    /**
     * Fonction pour modifier la disponibilite du vehicule
     * @param event string, disponibilite du vehicule à modifier
     */
    const handleChangeDisponibilite = (event: any) => {
        setVeh({ ...veh, disponibilite: event.target.value, })
    }

    /**
     * Fonction pour modifier le type du vehicule
     * @param event string, type du vehicule à modifier
     */
    const handleChangeTypeVehicule = (event: any) => {
        setVeh({ ...veh, typeVehicule: event.target.value, })
    }

    /**
     * Fonction pour modifier l'image du vehicule
     * @param event string, image du vehecule à modifier
     */
    const handleChangeImage = (event: any) => {
        setVeh({ ...veh, image: event.target.value, })
    }


    /**
     * Fonction qui utilise les props pour modifier un vehicule
     */
    const modifVeh = () => {
        props.modifVehicule(veh)
    }

    return (
        <>
            <IonItem counter={true}>
                <IonLabel position="floating">la marque du vehicule</IonLabel>
                <IonInput type='text' maxlength={20} value={veh.marque} onIonChange={(event: any) => handleChangeMarque(event)}></IonInput>
            </IonItem>
            <IonItem counter={true}>
                <IonLabel position="floating">le model du vehicule</IonLabel>
                <IonInput type='text' maxlength={20} value={veh.model} onIonChange={(event: any) => handleChangeModel(event)}></IonInput>
            </IonItem>
            <IonItem counter={true}>
                <IonLabel position="floating">l'immatriculation du vehicule</IonLabel>
                <IonInput type='text' maxlength={20} value={veh.immatriculation} onIonChange={(event: any) => handleChangeImmatriculation(event)}></IonInput>
            </IonItem>
            <IonItem counter={true}>
                <IonSelect placeholder="choisir l'etat" onIonChange={(event: any) =>
                    handleChangeEtat(event)}>
                    <IonSelectOption value="A">A</IonSelectOption>
                    <IonSelectOption value="B">B</IonSelectOption>
                    <IonSelectOption value="C">C</IonSelectOption>
                </IonSelect>
            </IonItem>
            <IonItem counter={true}>
                <IonSelect placeholder="choisir la disponibilite" onIonChange={(event: any) =>
                    handleChangeDisponibilite(event)}>
                    <IonSelectOption value="Disponible">Disponible</IonSelectOption>
                    <IonSelectOption value="Indisponible">Indisponible</IonSelectOption>
                </IonSelect>
            </IonItem>
            <IonItem counter={true}>
                <IonSelect placeholder="choisir le type du vehicule" onIonChange={(event: any) =>
                    handleChangeTypeVehicule(event)}>
                    <IonSelectOption value="Voiture">Voiture</IonSelectOption>
                    <IonSelectOption value="Camion">Camion</IonSelectOption>
                    <IonSelectOption value="Moto">Moto</IonSelectOption>
                </IonSelect>
            </IonItem>
            <IonItem counter={true}>
                <IonLabel position="floating">l'image du vehicule</IonLabel>
                <IonInput type='text' maxlength={20} value={veh.image} onIonChange={(event: any) => handleChangeImage(event)}></IonInput>
            </IonItem>
            <IonItem counter={true}>
                <IonLabel position="floating">le prix du vehicule</IonLabel>
                <IonInput type='text' maxlength={20} value={veh.prix} onIonChange={(event: any) => handleChangePrix(event)}></IonInput>
            </IonItem>
            <IonButton color="success" onClick={() => modifVeh()}>Valider</IonButton>
        </>
    )
}

export default EditeVehicule