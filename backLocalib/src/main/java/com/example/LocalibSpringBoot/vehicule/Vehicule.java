package com.example.LocalibSpringBoot.vehicule;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document
@AllArgsConstructor
@NoArgsConstructor
public class Vehicule {

    @Id
    private String id;
    private String marque;
    private String model;
    private String immatriculation;
    private EtatVehicule etat;
    private double prix;
    private Disponibilite disponibilite;
    private TypeVehicule typeVehicule;
    private String image;

}
