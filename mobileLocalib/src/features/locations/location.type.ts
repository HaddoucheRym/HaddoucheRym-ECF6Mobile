import { type } from "os";
import { LocataireType } from "../locataires/locataire.type";
import { VehiculeType } from "../vehicules/vehicule.type";

export type LocationType = {
    id: string,
    locataire: LocataireType,
    vehicule: VehiculeType,
    dateDebut: any,
    dateFin: any,
    prixt: number
}

