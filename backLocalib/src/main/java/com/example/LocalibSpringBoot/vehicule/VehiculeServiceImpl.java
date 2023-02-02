package com.example.LocalibSpringBoot.vehicule;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

public class VehiculeServiceImpl implements VehiculeService{

    private static final Logger logger = LoggerFactory.getLogger(VehiculeServiceImpl.class);
    private final VehiculeRepository vehiculeRepository;

    public VehiculeServiceImpl(VehiculeRepository vehiculeRepository) {
        this.vehiculeRepository = vehiculeRepository;
    }

    @Override
    public List<Vehicule> findAll() {
        return this.vehiculeRepository.findAll();
    }


    @Override
    public Vehicule  save(Vehicule entity) {
        return this.vehiculeRepository.save(entity);
    }


    @Override
    public Vehicule findById(String id) {
        return this.vehiculeRepository.findById(id).orElseThrow(() ->{
            logger.warn("findByIdInvalide: "+ id);
            return  new ResponseStatusException(HttpStatus.NOT_FOUND);
        });
    }

    @Override
    public void deleteById(String id) {
        this.vehiculeRepository.deleteById(id);
    }

    @Override
    public List<Vehicule> findByMarque(String marque) {
        return this.vehiculeRepository.findByMarque(marque);
    }

    @Override
    public List<Vehicule> findByModel(String model) {
        return this.vehiculeRepository.findByModel(model);
    }

    @Override
    public List<Vehicule> findByImmatriculation(String immatriculation) {
        return this.vehiculeRepository.findByImmatriculation(immatriculation);
    }

    @Override
    public List<Vehicule> findByDisponibilite(Disponibilite disponibilite) {
        return this.vehiculeRepository.findByDisponibilite(disponibilite);
    }

    @Override
    public List<Vehicule> findByTypeVehicule(TypeVehicule typeVehicule) {
        return this.vehiculeRepository.findByTypeVehicule(typeVehicule);
    }

    @Override
    public List<Vehicule> findAllVehiculePrixGreaterThan(double prix) {
        return this.vehiculeRepository.findAllVehiculePrixGreaterThan(prix);
    }


    @Override
    public List<Vehicule> findAllVehiculePrixLessThan(double prix) {
        return this.vehiculeRepository.findAllVehiculePrixLessThan(prix);
    }
}
