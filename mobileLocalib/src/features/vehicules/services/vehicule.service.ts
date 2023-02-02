import { VehiculeType } from "../vehicule.type"

const url2: string = "http://localhost:8080/vehicules"

export class VehiculeService {

    /**
     * Methode pour recuperer tous les vehicules
     * @returns liste des vehicules
     */
    findAllVehicules = (): Promise<VehiculeType[]> => {
        return fetch(url2).then((res) => res.json())
    }

    /**
     * Methode pour recuperer un vehiculee
     * @param id number, id du vehicule à recupérer
     * @returns le vehicule
     */
    findVehicule = (id: any): Promise<VehiculeType> => {
        return fetch(`${url2}/${id}`).then((res) => res.json())
    }

    /**
     * Methode pour ajouter un vehicule
     * @param vehicule VehiculeType, vehicule à ajouter
     * @returns le vehicule ajouté
     */
    postVehicule = (vehicule: VehiculeType): Promise<VehiculeType> => {
        return fetch(url2, {
            method: "POST",
            body: JSON.stringify(vehicule),
            headers: { "Content-type": "Application/json" }
        }).then((res) => res.json())
    }

    /**
     * Methode pour supprimer un vehicule
     * @param id number, id du vehicule à supprimé
     * @returns le vehicule supprimé
     */
    deleteVehicule = (id: number): any => {
        return fetch(`${url2}/${id}`, {
            method: "DELETE"
        }).then(res => res.json())
    }

    /**
     * Methode pour modifier un vehicule
     * @param element VehiculeType, le vehicule à modifier
     * @returns vehicule modifié
     */
    putVehicule = (element: VehiculeType): any => {
        return fetch(`${url2}/${element.id}`, {
            method: "PUT",
            body: JSON.stringify(element),
            headers: { "Content-type": "Application/json" }
        }).then(res => res.json())
    }
}

export const vehiculeService = Object.freeze(new VehiculeService())