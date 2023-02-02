package com.example.LocalibSpringBoot.location;

import com.example.LocalibSpringBoot.locataire.Locataire;
import com.example.LocalibSpringBoot.vehicule.Vehicule;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateDeserializer;
import com.fasterxml.jackson.datatype.jsr310.ser.LocalDateSerializer;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;

@Data
@Document
@AllArgsConstructor
@NoArgsConstructor
public class Location {

    @Id
    private String id;
   @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate dateDebut;
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate dateFin;

    @DBRef
    private Locataire locataire;

    @DBRef
    private Vehicule vehicule;

    /**
     * pouvoir calculer le prix total de location d'un vehicule par rapport
     * aux nombres de jour de location
     * @return prixt: le prix total d'une location de vehicule
     */
    public double getPrixt() {
        double prixt = (ChronoUnit.DAYS.between(this.dateDebut,this.dateFin))*this.vehicule.getPrix();
        return prixt ;
    }
}
