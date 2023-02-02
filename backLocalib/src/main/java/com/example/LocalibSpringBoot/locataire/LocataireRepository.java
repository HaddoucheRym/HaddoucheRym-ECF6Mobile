package com.example.LocalibSpringBoot.locataire;

import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface LocataireRepository extends MongoRepository<Locataire, String> {

    List<Locataire> findByName(String name);

    List<Locataire> findByUsername(String username);

    List<Locataire> findByEmail(String email);

    List<Locataire> findByPhone(String phone);

}
