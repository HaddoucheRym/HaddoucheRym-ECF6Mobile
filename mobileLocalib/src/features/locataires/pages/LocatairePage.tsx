import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import LocataireList from '../layouts/LocataireList';
import { LocataireType } from '../locataire.type';

import { locataireService } from '../services/locataire.service';

const LocatairePage = () => {
    const [locataires, setLocataires] = useState<LocataireType[]>([]);

    /**
     * Fonction qui appelle le service locataire pour afficher 
     * tous les locataires
    */
    const findAlllocataire = () => {
        locataireService.findAllLocataire().then(data => setLocataires(data))
    }

    /**
     * Fonction qui appelle le service locataire pour supprimer un locataire
     * @param id number, du locataire à supprimer
    */
    const deleteLocataires = (id: string) => {
        locataireService.deleteLocataire(id).then(() => {
            findAlllocataire()

        })
    }
    /**
     * Mise à jour et recuperation de la liste des locataires
     */
    useEffect(() => {
        findAlllocataire()
    }, [deleteLocataires])

    /**
     * Fonction qui appelle le service locataire pour modifier 
     * un locataire
     * @param locataire LocataireType, le locataire à modifier
     */
    const modifiedLocataire = (locataire: LocataireType) => {
        locataireService.putLocataire(locataire).then(() => {
            findAlllocataire()
        })
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Liste des locataires</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Blank</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <LocataireList locataires={locataires} modifiedLocataire={modifiedLocataire} deleteLocataires={deleteLocataires} />
                <NavLink to="/ajoutLocataire" >
                    <IonButton >Ajouter</IonButton>
                </NavLink>
            </IonContent>
        </IonPage>
    )
}

export default LocatairePage