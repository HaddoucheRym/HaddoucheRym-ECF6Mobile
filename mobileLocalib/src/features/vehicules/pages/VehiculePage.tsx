import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';



import { VehiculeType } from '../vehicule.type';
import { vehiculeService } from '../services/vehicule.service';
import VehiculeListe from '../layouts/VehiculeList';

const VehiculePage = () => {
    const [vehicules, setVehicules] = useState<VehiculeType[]>([]);

    useEffect(() => {
        findAllVehicule ()
    }, [])


    const findAllVehicule = () => {
        vehiculeService.findAllVehicules().then(data => setVehicules(data))
    }

    const deleteVehicule = (id: number) => {
        vehiculeService.deleteVehicule(id).then(() => {
          findAllVehicule()
        })
      }
    
      const modifiedVehicule = (vehicule:VehiculeType) => {
        vehiculeService.putVehicule(vehicule).then(() => {
          findAllVehicule()
        })
      }

  return (
    <>
     <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Liste des voitures</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Blank</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <VehiculeListe vehicules={vehicules} modifiedVehicule={modifiedVehicule} deleteVehicule={deleteVehicule} />
                <NavLink to="/ajoutVehicule" >
                    <IonButton >Ajouter</IonButton>
                </NavLink>
            </IonContent>
        </IonPage>
    </>
  )
}

export default VehiculePage