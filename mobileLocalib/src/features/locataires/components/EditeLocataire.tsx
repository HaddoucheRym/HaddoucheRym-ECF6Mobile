import { IonButton, IonInput, IonItem, IonLabel } from '@ionic/react'
import { type } from 'os'
import React, { useState } from 'react'
import { LocataireType } from '../locataire.type'

export type EditeLocataireProps = {
    locataire: LocataireType,
    modifLocataire: Function
}

const EditeLocataire = (props: EditeLocataireProps) => {
    const [utili, setUtili] = useState(props.locataire)

    /**
     * Fonction pour modifier le nom du locataire
     * @param event string, nom du locataire à modifier
     */
    const handleChangeNom = (event: any) => {
        setUtili({ ...utili, name: event.target.value, })
    }

    /**
     * Fonction pour modifier la date de naissance du locataire
     * @param event Date, date à modifier
     */
    const handleChangeDate = (event: any) => {
        setUtili({ ...utili, date: event.target.value, })
    }

    /**
     * Fonction pour modifier le email du locataire
     * @param event string, email à modifier
     */
    const handleChangeEmail = (event: any) => {
        setUtili({ ...utili, email: event.target.value, })
    }

    /**
     * Fonction pour modifier le telephone du locataire
     * @param event string, telephone à modifier
     */
    const handleChangeTelephone = (event: any) => {
        setUtili({ ...utili, phone: event.target.value, })
    }

    /**
     * Fonction qui utilise les props pour modifier un locataire
     */
    const modifUtili = () => {
        props.modifLocataire(utili)
    }

    return (
        <>
            <IonItem counter={true}>
                <IonLabel position="floating">le nom de l'utilisateur</IonLabel>
                <IonInput type='text' maxlength={20} value={utili.name} onIonChange={(event: any) => handleChangeNom(event)}></IonInput>
            </IonItem>
            <IonItem counter={true} counterFormatter={(inputLength, maxLength) => `${maxLength - inputLength} characters remaining`}>
                <IonLabel position="floating">la date de l'utilisateur</IonLabel>
                <IonInput type='text' maxlength={150} value={utili.date} onIonChange={(event: any) =>
                    handleChangeDate(event)}></IonInput>
            </IonItem>
            <IonItem counter={true} counterFormatter={(inputLength, maxLength) => `${maxLength - inputLength} characters remaining`}>
                <IonLabel position="floating">le mail de l'utilisateur</IonLabel>
                <IonInput type='text' maxlength={150} value={utili.email} onIonChange={(event: any) =>
                    handleChangeEmail(event)}></IonInput>
            </IonItem>
            <IonItem counter={true} counterFormatter={(inputLength, maxLength) => `${maxLength - inputLength} characters remaining`}>
                <IonLabel position="floating">le telephone de l'utilisateur</IonLabel>
                <IonInput type='text' maxlength={150} value={utili.phone} onIonChange={(event: any) =>
                    handleChangeTelephone(event)}></IonInput>
            </IonItem>
            <IonButton color="success" onClick={() => modifUtili()}>Valider</IonButton>
        </>
    )
}

export default EditeLocataire