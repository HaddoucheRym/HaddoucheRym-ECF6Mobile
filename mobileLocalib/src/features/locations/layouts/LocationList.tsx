import { type } from 'os'
import React, { useState } from 'react'
import EditeLocation from '../components/EditeLocation'
import Location from '../Location'
import { LocationType } from '../location.type'

export type LocationListProps = {
    locations: LocationType[],
    modifiedLocation: Function,
    deleteLocation: Function
}

const LocationList = (props: LocationListProps) => {
    const [selecId, setSelectId] = useState<any>()

    /**
     * Fonction qui utilise les props pour modifier une location
     * @param location LocationType, location à modifier
     */
    const modifierLocation = (location: LocationType) => {
        props.modifiedLocation(location)
        setSelectId(0)
    }

    return (
        <>
            {props.locations && props.locations.map((location: LocationType,
                index: number) => {
                if (location.id === selecId) {
                    return <EditeLocation location={location}
                        key={index} modifLocation={modifierLocation} />
                } else {
                    return <Location key={index}
                        location={location}
                        suprrimeLocation={props.deleteLocation}
                        handleClickEdit={setSelectId} />
                }
            })}
        </>
    )
}

export default LocationList