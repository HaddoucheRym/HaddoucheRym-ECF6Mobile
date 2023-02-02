import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonIcon } from '@ionic/react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { trashOutline } from 'ionicons/icons'

interface Props {
    titre: string,
    titre2: string,
    children: any,
    nom: string,
    id: number,
    fonction: Function,
    fonction2: Function
}
const Card = (props: Props) => {
    return (
        <IonCard>
            {/* <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" /> */}
            <IonCardHeader>
                <IonCardTitle>{props.titre}</IonCardTitle>
                <IonCardSubtitle>{props.titre2}</IonCardSubtitle>
            </IonCardHeader>

            <IonCardContent>
               {props.children} <br />
            </IonCardContent>
            <NavLink to={`/${props.nom}/` + props.id}>
                <IonButton color="secondary">Detail</IonButton>
            </NavLink>
            <IonButton color="danger" onClick={() => props.fonction()}> <IonIcon icon={trashOutline} /></IonButton>
            <IonButton color="success" onClick={() => props.fonction2(props.id)}>Modifier</IonButton>
        </IonCard>
    )
}

export default Card