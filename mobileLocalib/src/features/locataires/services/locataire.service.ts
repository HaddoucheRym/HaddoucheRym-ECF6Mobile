import { LocataireType } from "../locataire.type"

const url: string = "http://localhost:8080/locataires"

export class LocataireService {

    /**
     * Methode pour recupérer tous les locataires
     * @returns LocataireType[], liste des locataires
     */
    findAllLocataire = async (): Promise<LocataireType[]> => {
        const res = await fetch(url)
        return await res.json()
    }

    /**
     * Methode pour recupérer un locataire
     * @returns LocataireType, un locataire
     */
    findLocataire = (id: any): Promise<LocataireType> => {
        return fetch(`${url}/${id}`).then((res) => res.json())
    }

    /**
     * Methode pour ajouter un locataire
     * @param locataire LocataireType, un locataire à ajouter
     * @returns le locataire ajouté
     */
    postLocataire = (locataire: LocataireType): Promise<LocataireType> => {
        return fetch(url, {
            method: "POST",
            body: JSON.stringify(locataire),
            headers: { "Content-type": "Application/json" }
        }).then((res) => res.json())
    }

    /**
     * Methode pour supprimer un locataire
     * @param id number, id du locataire à suprimer
     * @returns locataire supprimé
     */
    deleteLocataire = (id: string): any => {
        return fetch(`${url}/${id}`, {
            method: "DELETE"
        }).then(res => res.json())
    }

    /**
     * Methode pour modifier un locataire
     * @param element LocataireType, locataire à modifier
     * @returns locataire modifié
     */
    putLocataire = (element: LocataireType): any => {
        return fetch(`${url}/${element.id}`, {
            method: "PUT",
            body: JSON.stringify(element),
            headers: { "Content-type": "Application/json" }
        }).then(res => res.json())
    }
}

export const locataireService = new LocataireService()