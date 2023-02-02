package com.example.LocalibSpringBoot.locataire;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;

@Data
@Document
@AllArgsConstructor
@NoArgsConstructor
public class Locataire {

    @Id
    private String id;
    private String name;
    private String username;
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate date = LocalDate.now();
    private String email;
    private String phone;

    /**
     * methode qui permet de calculer l'age du locataire
     * @return age de l'ocataire en integer
     */
    public Integer getAge() {
        LocalDate currentDate = LocalDate.now();
        return (int) ChronoUnit.YEARS.between(this.date,currentDate);
    }
}
