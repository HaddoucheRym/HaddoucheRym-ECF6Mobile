import { IonButton, IonDatetime, IonInput, IonItem, IonLabel, IonList, IonSelect, IonSelectOption } from '@ionic/react'
import { type } from 'os'
import React, { useEffect, useState } from 'react'
import { LocataireType } from '../../locataires/locataire.type'
import { LocationType } from '../location.type'

import { VehiculeType } from '../../vehicules/vehicule.type'
import { vehiculeService } from '../../vehicules/services/vehicule.service'
import { locataireService } from '../../locataires/services/locataire.service'

export type EditeLocationProps = {
    location: LocationType,
    modifLocation: Function
}

const EditeLocation = (props: EditeLocationProps) => {
    const [loc, setLoc] = useState(props.location);
    const [locataires, setLocataires] = useState<LocataireType[]>([]);
    const [vehicules, setVehicules] = useState<VehiculeType[]>([]);

    /**
     * Mise à jour et recuperation de tous les vehicules
     */
    useEffect(() => {
        findAllVehicule()
    }, [])

    /**
     * Fonction qui appelle le service vehicule pour recuperer et afficher tous les vehicules
     */
    const findAllVehicule = () => {
        vehiculeService.findAllVehicules().then(data => setVehicules(data))
    }

    /**
     * Mise à ajour et recuperation de tous les locataires
     */
    useEffect(() => {
        findAlllocataire()
    }, [])

    /**
     * Fonction qui appelle le service locataire pour recuperer et afficher tous les locataires
     */
    const findAlllocataire = () => {
        locataireService.findAllLocataire().then(data => setLocataires(data))
    }

    /**
     * Fonction qui utilise les props pour modifier une loaction
     */
    const modifLoca = () => {
        props.modifLocation(loc)
    }

    /**
     * Fonction pour modifier la marque du vehicule
     * @param event string, marque du vehicule à modifier
     */
    // const handleChangeVehiculeMarque = (event: any) => {
    //     setLoc({ ...loc, vehicule: event.target.value, })
    // }

    /**
     * Fonction pour modifier la date du debut de location
     * @param event Date, date debut de location à modifier
     */
    const handleChangeDateD = (event: any) => {
        let date1 = event.target.value
        date1 = date1.substring(0, 10);
        setLoc({ ...loc, dateDebut: date1 })
    }

    /**
     * Fonctioon pour modifier la date de fin du location
     * @param event Date, date fin de location à modifier
     */
    const handleChangeDateF = (event: any) => {
        let date = event.target.value
        date = date.substring(0, 10);
        setLoc({ ...loc, dateFin: date })
    }

    /**
     * Fonction pour modifier le prix Total du location
     * @param event number, prix total à modifier
     */
    const handleChangePrixT = (event: any) => {
        setLoc({ ...loc, prixt: event.target.value, })
    }

    return (
        <>
            {/* <IonList>
                <IonItem>
                    <IonSelect placeholder="choisir la marque du vehicule" multiple={true} onIonChange={(event: any) =>
                        handleChangeVehiculeMarque(event)}>
                        {vehicules.map((vehicule: VehiculeType, index: number) => (
                            <IonSelectOption key={index} value={loc.vehicule}>{vehicule.marque}
                            </IonSelectOption>
                        ))}
                    </IonSelect>
                </IonItem>
            </IonList> */}
            <IonItem counter={true} counterFormatter={(inputLength, maxLength) => `${maxLength - inputLength} characters remaining`}>
                <IonLabel position="floating">la date de debut du location</IonLabel>
                <IonDatetime presentation="date" value={loc.dateDebut} onIonChange={(event: any) =>
                    handleChangeDateD(event)}></IonDatetime>
            </IonItem>
            <IonItem counter={true} counterFormatter={(inputLength, maxLength) => `${maxLength - inputLength} characters remaining`}>
                <IonLabel position="floating">la date de fin du location</IonLabel>
                <IonDatetime presentation="date" value={loc.dateFin} onIonChange={(event: any) =>
                    handleChangeDateF(event)}></IonDatetime>
            </IonItem>
            <IonItem counter={true} counterFormatter={(inputLength, maxLength) => `${maxLength - inputLength} characters remaining`}>
                <IonLabel position="floating">la prix totale du location</IonLabel>
                {/* <IonInput type='text' maxlength={150} value={props.location.prixt} onIonChange={(event: any) =>
                    handleChangePrixT(event)}></IonInput> */}
                <p>{props.location.prixt}</p>
            </IonItem>

            <IonButton color="success" onClick={() => modifLoca()}>Valider</IonButton>
        </>
    )
}

export default EditeLocation