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

    /**
     * Fonction qui utilise les props pour supprimer un vehicule
     */
    const suprimerVehicule = () => {
        props.suprrimeVehicule(props.vehicule.id)
    }

    return (
        <>
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