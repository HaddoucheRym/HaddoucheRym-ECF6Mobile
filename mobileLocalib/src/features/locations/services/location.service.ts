import { LocationType } from "../location.type"

const url3: string = "http://localhost:8080/locations"

export class LocationService {

    /**
     * Methode pour recupérer toutes les locations
     * @returns une liste de locations
     */
    findAllLocations = (): Promise<LocationType[]> => {
        return fetch(url3).then((res) => res.json())
    }

    /**
     * Methode pour recuperer une location
     * @param id number, id de la location à recuperer
     * @returns une location
     */
    findLocation = (id: any): Promise<LocationType> => {
        return fetch(`${url3}/${id}`).then((res) => res.json())
    }

    /**
     * Metthode pour ajouter une location
     * @param location LocationType, la location à ajouter
     * @returns la location ajoutée
     */
    postLocation = (location: LocationType): Promise<LocationType> => {
        return fetch(url3, {
            method: "POST",
            body: JSON.stringify(location),
            headers: { "Content-type": "Application/json" }
        }).then((res) => res.json())
    }

    /**
     * Methode pour supprimer une location
     * @param id number, id de la location à supprimer
     * @returns la location supprimée
     */
    deleteLocation = (id: number): any => {
        return fetch(`${url3}/${id}`, {
            method: "DELETE"
        }).then(res => res.json())
    }

    /**
     * Methode pour modifier une location
     * @param element LocationType, la location à modifier
     * @returns location modifiée
     */
    putLocation = (element: LocationType): any => {
        return fetch(`${url3}/${element.id}`, {
            method: "PUT",
            body: JSON.stringify(element),
            headers: { "Content-type": "Application/json" }
        }).then(res => res.json())
    }
}

export const locationService = Object.freeze(new LocationService())