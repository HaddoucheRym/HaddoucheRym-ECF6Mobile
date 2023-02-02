import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import LocationList from '../layouts/LocationList';
import { LocationType } from '../location.type';


import { locationService } from '../services/location.service';

const LocationPage = () => {
    const [locations, setLocations] = useState<LocationType[]>([]);

    /**
     * Fonction qui appelle le service location pour afficher 
     * toutes les locations
    */
    const findAllLocations = () => {
        locationService.findAllLocations().then(data => setLocations(data))
    }

    /**
     * Fonction qui appelle le service location pour supprimer une location
     * @param id number, id du location à supprimer
    */
    const deleteLocations = (id: number) => {
        locationService.deleteLocation(id).then(() => {
            findAllLocations()
        })
    }

    /**
     * Mise à jour et recuperation de la liste des locations
     */
    useEffect(() => {
        findAllLocations()
    }, [deleteLocations])

    /**
     * Fonction qui appelle le service locationn pour modifier une location
     * @param location LocationType, location à modifier
     */
    const modifiedLocation = (location: LocationType) => {
        locationService.putLocation(location).then(() => {
            findAllLocations()
        })
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Liste des locations</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Blank</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <LocationList locations={locations} modifiedLocation={modifiedLocation} deleteLocation={deleteLocations} />
            </IonContent>
        </IonPage>
    )
}

export default LocationPage