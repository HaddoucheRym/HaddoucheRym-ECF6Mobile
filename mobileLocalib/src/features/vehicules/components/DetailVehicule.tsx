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
  
  useEffect(() => {
    trouveVehicule()
    // console.log(veh?.marque);
  }, [selectedVehId])

  const trouveVehicule = (): void => {
    vehiculeService.findVehicule(selectedVehId).then(data => setVeh(data))
    // console.log(selectedVehId);
    
    // console.log(veh?.marque);
    
    
  }



  
  
  return (
    <>
    <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton defaultHref="/vehicules"></IonBackButton>
            </IonButtons>
            <IonTitle>Profil</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          {/* <IonCard>
            <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
            <IonCardHeader>
              <IonCardTitle>{veh?.marque}</IonCardTitle>
              <IonCardSubtitle>{veh?.model}</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
              {veh?.etat} <br />
              {veh?.prix}
              {veh?.immatriculation} <br />
              {veh?.disponibilite} <br />
              {veh?.typeVehicule}
            </IonCardContent>
          </IonCard> */}
          <CardDetail titre={veh?.marque}
          sousTitre={veh?.model}
          source={voiture}
          children={veh?.etat}
          children2={veh?.immatriculation}
          children3={veh?.disponibilite}
          children4={veh?.typeVehicule}
          children5={veh?.prix}
          />
          {veh?.disponibilite === "Disponible"?
          <NavLink to={'/ajoutLocation/' + veh?.id} >
            <IonButton >Ajouter</IonButton>
        </NavLink>: <p>{veh?.disponibilite}</p>
}
        </IonContent>

      </IonPage>
    </>
  )
}

export default DetailVehicule