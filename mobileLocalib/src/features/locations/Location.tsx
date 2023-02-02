import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react'
import { type } from 'os'
import React from 'react'
import { NavLink } from 'react-router-dom'
import Card from '../../shared/Card'
import { LocationType } from './location.type'

export type LocationProps = {
    location: LocationType,
    suprrimeLocation: Function,
    handleClickEdit: Function
}

const Location = (props: LocationProps) => {

    /**
     * Fonction qui utilise les props pour supprimer une location
     */
    const suprimerLocation = () => {
        props.suprrimeLocation(props.location.id)
    }

  return (
    <>
            <Card titre={props.location.locataire.name}
            nom="location" id={props.location.id}
            fonction={suprimerLocation}
            fonction2={props.handleClickEdit}
            titre2={props.location.vehicule.marque }
            children={props.location.prixt}
            />
        </>
  )
}

export default Location