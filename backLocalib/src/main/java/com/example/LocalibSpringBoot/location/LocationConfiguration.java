package com.example.LocalibSpringBoot.location;

import com.example.LocalibSpringBoot.vehicule.VehiculeService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class LocationConfiguration {

    @Bean
    public LocationService locationService(LocationRepository locationRepository, VehiculeService vehiculeService) {
        return new LocationServiceImpl(locationRepository, vehiculeService);
    }
}
