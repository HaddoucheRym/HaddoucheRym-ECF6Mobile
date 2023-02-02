package com.example.LocalibSpringBoot.vehicule;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class VehiculeConfigurationn {

    @Bean
    public VehiculeService voitureService(VehiculeRepository vehiculeRepository) {
        return new VehiculeServiceImpl(vehiculeRepository);
    }
}
