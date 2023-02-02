import { IonBackButton, IonButton, IonButtons, IonContent, IonDatetime, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom';
import { LocataireType } from '../locataire.type';

import uuid from 'react-uuid';
import { locataireService } from '../services/locataire.service';

const AddLocataire = () => {
    const [locataires, setLocataires] = useState<LocataireType[]>([]);
    const [newPer, setNewPer] = useState<LocataireType>({
        id: uuid(),
        name: "",
        username: "",
        date: "",
        email: "",
        phone: "",
        age: 0

    })

    /**
     * Mise à jour et recuperation de la liste des locataires
     */
    useEffect(() => {
        trouverTousUtilisateurs()
    }, [])

    /**
     * Fonction qui appelle le service locataire pour afficher 
     * tous les locataires
     */
    const trouverTousUtilisateurs = (): void => {
        locataireService.findAllLocataire().then(data => setLocataires(data))
    }

    /**
     * Fonction qui appelle le service locataire pour ajouter un locataire
     * @param newPersonne LocataireType, locataire à ajouter
     */
    const ajoutPersonne = (newPersonne: LocataireType): void => {
        locataireService.postLocataire(newPersonne).then(() => {
            trouverTousUtilisateurs()
        })
    }

    /**
     * Fonction pour ajouter un nom au locataire
     * @param event string, nom du locataire à ajouter
     */
    const handleChangeNom = (event: any) => {
        setNewPer({ ...newPer, name: event.target.value, })
    }

    /**
     * Fonction pour ajouter une date de naissance au locataire
     * @param event Date, date de naissance du locataire à ajouter
     */
    const handleChangeDate = (event: any) => {
        let date2 = event.target.value
        date2 = date2.substring(0, 10);
        setNewPer({ ...newPer, date: date2 })
    }

    /**
     * Fonction pour ajouter un eamil au locataire
     * @param event string, email du locataire à ajouter
     */
    const handleChangeEmail = (event: any) => {
        setNewPer({ ...newPer, email: event.target.value, })
    }

    /**
     * Fonction pour ajouter un telephone au locataire
     * @param event string, telephone du locataire à ajouter
     */
    const handleChangeTelephone = (event: any) => {
        setNewPer({ ...newPer, phone: event.target.value, })
    }

    /**
     * Fonction pour enregistrer le nouveau locataire dans la base
     * de donnée en cliquant sur le bouton ajouter
     */
    const handleClickSave = (): void => {
        ajoutPersonne(newPer)
    }
    return (
        <>
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonBackButton defaultHref="/locataires"></IonBackButton>
                        </IonButtons>
                        <IonTitle>Ajouter Locataire</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent fullscreen>
                    <IonItem counter={true}>
                        <IonLabel position="floating">Nom de la personne</IonLabel>
                        <IonInput type='text' maxlength={20} value={newPer.name} onIonChange={(event: any) => handleChangeNom(event)}></IonInput>
                    </IonItem>
                    <IonItem counter={true} counterFormatter={(inputLength, maxLength) => `${maxLength - inputLength} characters remaining`}>
                        <IonLabel position="floating">la date de la personne</IonLabel>
                        <IonDatetime presentation="date" value={newPer.date} onIonChange={(event: any) =>
                            handleChangeDate(event)}></IonDatetime>;
                    </IonItem>
                    <IonItem counter={true} counterFormatter={(inputLength, maxLength) => `${maxLength - inputLength} characters remaining`}>
                        <IonLabel position="floating">l'email de la personne</IonLabel>
                        <IonInput type='text' maxlength={150} value={newPer.email} onIonChange={(event: any) =>
                            handleChangeEmail(event)}></IonInput>
                    </IonItem>
                    <IonItem counter={true} counterFormatter={(inputLength, maxLength) => `${maxLength - inputLength} characters remaining`}>
                        <IonLabel position="floating">le telephone de la personne</IonLabel>
                        <IonInput type='text' maxlength={150} value={newPer.phone} onIonChange={(event: any) =>
                            handleChangeTelephone(event)}></IonInput>
                    </IonItem>
                    <NavLink to="/locataires">
                        <IonButton onClick={handleClickSave}>Ajouter</IonButton>
                    </NavLink>
                </IonContent>
            </IonPage>
        </>
    )
}

export default AddLocataire


