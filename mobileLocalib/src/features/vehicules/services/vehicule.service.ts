import { VehiculeType } from "../vehicule.type"

const url2 : string = "http://localhost:3000/vehicules"

export class VehiculeService {

     
    

    findAllVehicules = (): Promise<VehiculeType[]> => {
        return fetch(url2).then((res) => res.json())
    }

    

    
    findVehicule = (id: any): Promise<VehiculeType> => {
        return fetch(`${url2}/${id}`).then((res) => res.json())
    }

    

    
    postVehicule = (vehicule: VehiculeType): Promise<VehiculeType> => {
        return fetch(url2, {
            method: "POST",
            body: JSON.stringify(vehicule),
            headers: { "Content-type": "Application/json" }
        }).then((res) => res.json())
    }

    

    
    deleteVehicule = (id: number): any => {
        return fetch(`${url2}/${id}`, {
            method: "DELETE"
        }).then(res => res.json())
    }

    

    

    putVehicule = (element: VehiculeType): any => {
        return fetch(`${url2}/${element.id}`, {
            method: "PUT",
            body: JSON.stringify(element),
            headers: { "Content-type": "Application/json" }
        }).then(res => res.json())
    }

   
}

export const vehiculeService = Object.freeze(new VehiculeService())