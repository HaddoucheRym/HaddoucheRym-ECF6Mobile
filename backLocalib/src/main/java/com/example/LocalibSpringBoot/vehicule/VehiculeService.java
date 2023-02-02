package com.example.LocalibSpringBoot.vehicule;

import java.util.List;

public interface VehiculeService {

    /**
     * afficcher et recuperer la liste de tous les vehicules
     * @return la liste des vehicules
     */
    List<Vehicule> findAll();

    /**
     * Sauvegarde ou remplace un vehicule
     * si l'entity contient un id, elle remplacera les valeurs deja presantes;
     * sinon elle se sauvegardera
     * @param entity vehicule a sauvegarder ou modifier
     * @return entity dans l'etat de sauvegarde
     */
    Vehicule save(Vehicule entity);

    /**
     * Retourne un vehicule en fonction de son id
     * si aucun vehicule ne posséde cet id, retourne automatiquement un status 404
     * @param id du vehicule recherché
     * @return un vehicule
     */
    Vehicule findById(String id);

    /**
     * Supprime un vehicule en fonction de son id
     * @param id du vehicule à supprimer
     */
    void deleteById(String id);

    /**
     * methode qui permet de trouver des vehicules par marque
     * @param marque String, marque des vehicules recherchées
     * @return List<Vehicule>
     */
    List<Vehicule> findByMarque(String marque);

    /**
     * methode qui permet de trouver des vehicules par model
     * @param model String, model des vehicules recherchées
     * @return List<Vehicule>
     */
    List<Vehicule> findByModel(String model);

    /**
     * methode qui permet de trouver des vehicules par immatriculation
     * @param immatriculation String, immatriculation des vehicules recherchées
     * @return List<Vehicule>
     */
    List<Vehicule> findByImmatriculation(String immatriculation);

    /**
     * methode qui permet de trouver des vehicules par disponibilité
     * @param disponibilite Disponibilite, disponibilité des vehicules recherchées
     * @return List<Vehicule>
     */
    List<Vehicule> findByDisponibilite(Disponibilite disponibilite);

    /**
     * methode qui permet de trouver des vehicules par type de vehicule
     * @param typeVehicule TypeVehicule, typeVehicule des vehicules recherchées
     * @return List<Vehicule>
     */
    List<Vehicule> findByTypeVehicule(TypeVehicule typeVehicule);

    /**
     * methode qui permet de trouver tous les vehicules dont leurs prix journalier de location
     * est superieur ou egale a prix donné
     * @param prix double, prix des vehicules recherchées
     * @return List<Vehicule>
     */
    List<Vehicule> findAllVehiculePrixGreaterThan( double prix);

    /**
     * methode qui permet de trouver tous les vehicules dont leurs prix journalier de location
     * est inferieur ou egale a prix donné
     * @param prix double, prix des vehicules recherchées
     * @return List<Vehicule>
     */
    List<Vehicule> findAllVehiculePrixLessThan( double prix);
}
