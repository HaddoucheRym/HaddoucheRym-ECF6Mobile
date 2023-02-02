package com.example.LocalibSpringBoot.location;

import com.example.LocalibSpringBoot.vehicule.Disponibilite;
import com.example.LocalibSpringBoot.vehicule.Vehicule;
import com.example.LocalibSpringBoot.vehicule.VehiculeService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDate;
import java.util.List;

public class LocationServiceImpl implements LocationService{

    private static final Logger logger = LoggerFactory.getLogger(LocationServiceImpl.class);

    private final LocationRepository locationRepository;
    private final VehiculeService vehiculeService;


    public LocationServiceImpl(LocationRepository locationRepository, VehiculeService vehiculeService) {
        this.locationRepository = locationRepository;
        this.vehiculeService = vehiculeService;
    }

    @Override
    public List<Location> findAll() {
        return this.locationRepository.findAll();
    }



    @Override
    public Location  save(Location entity) {
        if (entity.getDateDebut().isAfter(entity.getDateFin())|| entity.getVehicule().getDisponibilite()
              .equals(Disponibilite.Indisponible) || entity.getDateFin().isBefore(LocalDate.now()) ) {
            logger.info("La date de debut de location est invalide: " + entity.getDateDebut() +
                    " car la date de fin de location est:  " + entity.getDateFin()+
                    " ou bien le vehicule est indisponible " +
                    "la date de debut de location est deja passé" +
                    LocalDate.now());
            throw new ResponseStatusException(HttpStatus.NOT_ACCEPTABLE,
                    "La date de debut de location est superieure à la date de fin de location" +
                            " ou bien le vehicule est indisponible" +
                            " ou bien la date de debut de location est deja passé: absurde!!");
        }else{
            return this.locationRepository.save(entity);
        }
      }

    @Override
    public Location findById(String id) {
        return this.locationRepository.findById(id).orElseThrow(() ->{
            logger.warn("findById Invalide: "+ id);
            return  new ResponseStatusException(HttpStatus.NOT_FOUND);
        });

    }

    @Override
    public void deleteById(String id) {
        this.locationRepository.deleteById(id);
    }

}
