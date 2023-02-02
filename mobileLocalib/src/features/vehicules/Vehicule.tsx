import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/react'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Card from '../../shared/Card'
import { VehiculeType } from './vehicule.type'

export type VehiculeProps = {
    vehicule: VehiculeType,
    suprrimeVehicule: Function,
    handleClickEdit: Function
}

const Vehicule = (props: VehiculeProps) => {
    const suprimerVehicule = () => {
        props.suprrimeVehicule(props.vehicule.id)
    }

  return (
    <>
    
    {/* <IonCard>
                <IonCardHeader>
                    <IonCardTitle>{props.vehicule.marque}</IonCardTitle>
                    {/* <IonCardSubtitle>Card Subtitle</IonCardSubtitle> 
                </IonCardHeader>

                <IonCardContent>
                    {props.vehicule.model}
                </IonCardContent>
                <Link to={'/vehicule/' + props.vehicule.id} >
                    <IonButton color="secondary">Detail</IonButton>
                    </Link>
               
                <IonButton color="danger" onClick={() => suprimerVehicule()}>X</IonButton>
                <IonButton color="success" onClick={() => props.handleClickEdit(props.vehicule.id)}>Modifier</IonButton>
            </IonCard> */}

            <Card titre={props.vehicule.marque}
             nom="vehicule"
            titre2={props.vehicule.model}
             id={props.vehicule.id} fonction={suprimerVehicule}
            fonction2={props.handleClickEdit}
            children={props.vehicule.prix} />
        
    </>
  )
}

export default Vehicule