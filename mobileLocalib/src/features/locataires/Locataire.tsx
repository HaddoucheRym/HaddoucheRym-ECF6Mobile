import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/react'
import { type } from 'os'
import React from 'react'
import { NavLink } from 'react-router-dom'
import Card from '../../shared/Card'
import { LocataireType } from './locataire.type'

export type LocataireProps = {
    locataire: LocataireType,
    suprrimeLocataire: Function,
    handleClickEdit: Function
}

const Locataire = (props: LocataireProps) => {

    /**
     *Fonction qui utilise les props pour supprimer un locataire 
     */
    const suprimerLocataire = () => {
        props.suprrimeLocataire(props.locataire.id)
    }

    return (
        <>
            <Card titre={props.locataire.name}
                titre2={"Email : " + props.locataire.email}
                nom="locataire" id={props.locataire.id}
                fonction={suprimerLocataire} fonction2={props.handleClickEdit}
                children={"Date de naissance : " + props.locataire.date} />
        </>
    )
}

export default Locataire