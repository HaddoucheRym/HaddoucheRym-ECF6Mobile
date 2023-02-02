package com.example.LocalibSpringBoot.location;

import com.example.LocalibSpringBoot.vehicule.Vehicule;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface LocationRepository extends MongoRepository<Location, String> {

//List<Vehicule> findByVehicule()
}
