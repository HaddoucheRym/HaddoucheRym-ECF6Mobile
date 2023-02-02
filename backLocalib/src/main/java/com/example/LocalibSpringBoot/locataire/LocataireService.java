package com.example.LocalibSpringBoot.locataire;

import java.util.List;

public interface LocataireService {

    /**
     * afficher et recuperer la liste de tous les locataires
     * @return une liste des locataires
     */
    List<Locataire> findAll();

    /**
     * Sauvegarde ou remplace un locataire
     * si l'entity contient un id, elle remplacera les valeurs deja presantes;
     * sinon elle se sauvegardera
     * si le locataire a moins de 18 ans, retourne automatiquement un status 406
     * @param entity locataire a sauvegarder ou modifier
     * @return entity dans l'etat de sauvegarde
     */
    Locataire save(Locataire entity);

    /**
     * Retourne un locataire en fonction de son id
     * si aucun locataire ne posséde cet id, retourne automatiquement un status 404
     * @param id du locataire recherché
     * @return un locataire
     */
    Locataire findById(String id);

    /**
     * Supprime un locataire en fonction de son id
     * @param id du locataire à supprimer
     */
    void deleteById(String id);

    /**
     * methode qui permet de trouver des locataires par nom
     * @param name String, nom des locataires recherchées
     * @return List<Locataire>
     */
    List<Locataire> findByName(String name);

    /**
     * methode qui permet de trouver des locataires par username
     * @param username String, surnom des locataires recherchées
     * @return List<Locataire>
     */
    List<Locataire> findByUsername(String username);

    /**
     * methode qui permet de trouver des locataires par email
     * @param email String, email des locataires recherchées
     * @return List<Locataire>
     */
    List<Locataire> findByEmail(String email);

    /**
     * methode qui permet de trouver des locataires par phone
     * @param phone String, phone des locataires recherchées
     * @return List<Locataire>
     */
    List<Locataire> findByPhone(String phone);
}
