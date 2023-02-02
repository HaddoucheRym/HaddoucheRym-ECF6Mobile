import { IonBackButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import CardDetail from '../../../shared/CardDetail';
import { LocationType } from '../location.type';
import voiture from '../../../assets/voiture.jpg'
import { locationService } from '../services/location.service';

const DetailLocation = () => {
  const [loc, setLoc] = useState<LocationType>();
  const { id } = useParams<any>();
  const [selectedVehId, setSelectedVehId] = useState(id);

  /**
   * Mise à jour et recuperation des données d'une location
   */
  useEffect(() => {
    trouveLocation()
  }, [selectedVehId])

  /**
   * Fonction qui appelle le service location pour recuperer les données d'une location
   */
  const trouveLocation = (): void => {
    locationService.findLocation(selectedVehId).then(data => setLoc(data))
  }

  return (
    <>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton defaultHref="/locations"></IonBackButton>
            </IonButtons>
            <IonTitle>detail location</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <CardDetail titre={loc?.locataire.name}
            sousTitre={loc?.vehicule.marque}
            source={voiture}
            children={loc?.prixt}
            children2={loc?.dateDebut}
            children3={loc?.dateFin}
            children4={loc?.vehicule.model}
            children5={loc?.vehicule.typeVehicule} />
        </IonContent>
      </IonPage>
    </>
  )
}

export default DetailLocation
