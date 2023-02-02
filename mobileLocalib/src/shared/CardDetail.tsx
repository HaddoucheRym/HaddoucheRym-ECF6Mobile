import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react'
import React from 'react'

interface Props {
    titre: any,
    children: any, 
    source: any,
    sousTitre: any,
    children2: any,
    children3: any,
    children4: any,
    children5: any

}

const CardDetail = (props: Props) => {
  return (
    <IonCard>
    <img alt="Silhouette of mountains" src={props.source} />
    <IonCardHeader>
      <IonCardTitle>{props.titre}</IonCardTitle>
      <IonCardSubtitle>{props.sousTitre}</IonCardSubtitle>
    </IonCardHeader>

    <IonCardContent>
     {props.children} <br />
     {props.children2} <br />
     {props.children3} <br />
     {props.children4} <br />
     {props.children5}
    </IonCardContent>
  </IonCard>
  )
}

export default CardDetail