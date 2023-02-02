import { IonBackButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonItem, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import CardDetail from '../../../shared/CardDetail';
import { LocataireType } from '../locataire.type';
import profil from '../../../assets/profil.jpg'

import { locataireService } from '../services/locataire.service';

const DetailLocataire = () => {
  const [personne, setPersonne] = useState<LocataireType>()
  const { id } = useParams<any>();
  const [selectedPerId, setSelectedPerId] = useState(id);

  /**
   * Mise à jour et recupperation des données dd'un locataire
   */
  useEffect(() => {
    trouvPersonne()
  }, [selectedPerId])

  /**
   * Fonction qui appelle le service locataire pour afficher un locataire
   */
  const trouvPersonne = (): void => {
    locataireService.findLocataire(selectedPerId).then(data =>
      setPersonne(data))
  }
  return (
    <>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton defaultHref="/locataires"></IonBackButton>
            </IonButtons>
            <IonTitle>Profil</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <CardDetail titre={personne?.name}
            sousTitre={personne?.date}
            children={personne?.email}
            children2={personne?.phone}
            source={profil}
            children3=""
            children4=""
            children5="" />
        </IonContent>
      </IonPage>
    </>
  )
}

export default DetailLocataire