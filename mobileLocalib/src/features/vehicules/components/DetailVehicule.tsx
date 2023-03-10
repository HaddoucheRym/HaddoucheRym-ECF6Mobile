import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { NavLink } from 'react-router-dom'
import CardDetail from '../../../shared/CardDetail'

import { vehiculeService } from '../services/vehicule.service'
import { VehiculeType } from '../vehicule.type'
import voiture from '../../../assets/voiture.jpg'

const DetailVehicule = () => {
  const [veh, setVeh] = useState<VehiculeType>()
  const { id } = useParams<any>();
  const [selectedVehId, setSelectedVehId] = useState(id);

  /**
   * Mise à jour et recuperation des données d'un vehicule
   */
  useEffect(() => {
    trouveVehicule()
    // console.log(veh?.marque);
  }, [selectedVehId])

  /**
   * Fonction qui appelle le service vehicule pour recuperer les données d'un vehicule
   */
  const trouveVehicule = (): void => {
    vehiculeService.findVehicule(selectedVehId).then(data => setVeh(data))
  }

  return (
    <>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton defaultHref="/vehicules"></IonBackButton>
            </IonButtons>
            <IonTitle>Detail du vehicule</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <CardDetail titre={"Marque : " + veh?.marque}
            sousTitre={"Model : " +veh?.model}
            source={voiture}
            children={"Etat : " + veh?.etat}
            children2={"Immatriculation : " + veh?.immatriculation}
            children3={"Disponibilité : " + veh?.disponibilite}
            children4={"Type de vehicule : " +veh?.typeVehicule}
            children5={"Le prix est : " +veh?.prix}
          />
          {veh?.disponibilite === "Disponible" ?
            <NavLink to={'/ajoutLocation/' + veh?.id} >
              <IonButton >Louer</IonButton>
            </NavLink> : <p>{veh?.disponibilite}</p>
          }
        </IonContent>
      </IonPage>
    </>
  )
}

export default DetailVehicule