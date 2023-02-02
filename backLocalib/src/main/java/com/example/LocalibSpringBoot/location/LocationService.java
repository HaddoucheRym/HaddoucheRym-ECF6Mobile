package com.example.LocalibSpringBoot.location;

import com.example.LocalibSpringBoot.locataire.Locataire;

import java.util.List;

public interface LocationService {

    /**
     * afficher et recuperer la liste de toutes les locations
     * @return la liste des locations
     */
    List<Location> findAll();

    /**
     * Sauvegarde ou remplace une location dont le vehicule est disponible
     * et la date de debut de location est inferieure à la date de fin de location
     * si l'entity contient un id, elle remplacera les valeurs deja presantes;
     * sinon elle se sauvegardera
     * @param entity location a sauvegarder ou modifier
     * @return entity dans l'etat de sauvegarde
     */
    Location save(Location entity);

    /**
     * Retourne une location en fonction de son id
     * si aucune location ne posséde cet id, retourne automatiquement un status 404
     * @param id du location recherchée
     * @return une location
     */
    Location findById(String id);

    /**
     * Supprime une location en fonction de son id
     * @param id du location à supprimer
     */
    void deleteById(String id);


}
