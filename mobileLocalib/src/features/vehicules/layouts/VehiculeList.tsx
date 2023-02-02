import { type } from 'os'
import React, { useState } from 'react'
import EditeVehicule from '../components/EditeVehicule'
import Vehicule from '../Vehicule'
import { VehiculeType } from '../vehicule.type'

export type VehiculeListProps = {
    vehicules: VehiculeType[],
    modifiedVehicule: Function,
    deleteVehicule: Function
}

const VehiculeListe = (props: VehiculeListProps) => {
    const [selectId, setSelectId] = useState<any>();

    /**
     * Fonction qui utilise les props pour modifier un vehicule
     * @param vehicule VehiculeType, le vehicule à modifier
     */
    const modifierVehicule = (vehicule: VehiculeType) => {
        props.modifiedVehicule(vehicule)
        setSelectId(0)
    }

    return (
        <>
            {props.vehicules && props.vehicules.map((vehicule: VehiculeType,
                index: number) => {
                if (vehicule.id === selectId) {
                    return <EditeVehicule vehicule={vehicule}
                        key={index} modifVehicule={modifierVehicule} />
                } else {
                    return <Vehicule key={index}
                        vehicule={vehicule}
                        suprrimeVehicule={props.deleteVehicule}
                        handleClickEdit={setSelectId} />
                }
            })}
        </>
    )
}

export default VehiculeListe