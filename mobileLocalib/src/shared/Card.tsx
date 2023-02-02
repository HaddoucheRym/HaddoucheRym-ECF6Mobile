import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonIcon } from '@ionic/react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { trashOutline } from 'ionicons/icons'

interface Props {
    titre: any,
    titre2: any,
    children: any,
    nom: string,
    id: string,
    fonction: Function,
    fonction2: Function
}
const Card = (props: Props) => {
    return (
        <IonCard>
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
            <IonButton color="danger" onClick={(e) => { e.preventDefault(); props.fonction() }}> <IonIcon icon={trashOutline} /></IonButton>
            <IonButton color="success" onClick={() => props.fonction2(props.id)}>Modifier</IonButton>
        </IonCard>
    )
}

export default Card