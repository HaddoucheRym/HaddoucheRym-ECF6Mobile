import { type } from 'os'
import React, { useState } from 'react'
import EditeLocataire from '../components/EditeLocataire'
import Locataire from '../Locataire'
import { LocataireType } from '../locataire.type'

export type LocataireListProps = {
    locataires: LocataireType[],
    modifiedLocataire: Function,
    deleteLocataires: Function
}

const LocataireList = (props: LocataireListProps) => {
    const [selecId, setSelectId] = useState<any>()

    /**
     * Fonction qui utilise les props pour modifier un locataire
     * @param locataire LocataireType, locataire à modifier
     */
    const modifierLocataire = (locataire: LocataireType) => {
        props.modifiedLocataire(locataire)
        setSelectId(0)
    }

    return (
        <>
            {props.locataires && props.locataires.map((locataire: LocataireType,
                index: number) => {
                if (locataire.id === selecId) {
                    return <EditeLocataire locataire={locataire}
                        key={index} modifLocataire={modifierLocataire} />
                } else {
                    return <Locataire key={index}
                        locataire={locataire}
                        suprrimeLocataire={props.deleteLocataires}
                        handleClickEdit={setSelectId} />
                }
            })}
        </>
    )
}

export default LocataireList