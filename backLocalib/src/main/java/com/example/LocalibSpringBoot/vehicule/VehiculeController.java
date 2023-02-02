package com.example.LocalibSpringBoot.vehicule;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/vehicules")
public class VehiculeController {

    private final VehiculeService vehiculeService;

    public VehiculeController(VehiculeService vehiculeService) {
        this.vehiculeService = vehiculeService;
    }

    @GetMapping("")
    @ResponseStatus(code = HttpStatus.OK)
    public List<Vehicule> findAll() {
        return this.vehiculeService.findAll();
    }

    @PostMapping("")
    @ResponseStatus(code = HttpStatus.CREATED)
    public Vehicule save(@RequestBody Vehicule entity) {
        return this.vehiculeService.save(entity);
    }

    @GetMapping("{id}")
    @ResponseStatus(code = HttpStatus.OK)
    public Vehicule findById(@PathVariable String id) {
        return this.vehiculeService.findById(id);
    }

    @DeleteMapping("{id}")
    @ResponseStatus(code=HttpStatus.ACCEPTED)
    public void deleteById(@PathVariable String id) {
        this.vehiculeService.deleteById(id);
    }

    @GetMapping("marque/{marque}")
    @ResponseStatus(code = HttpStatus.OK)
    public List<Vehicule> findByMarque(@PathVariable String marque) {
        return this.vehiculeService.findByMarque(marque);
    }

    @GetMapping("model/{model}")
    @ResponseStatus(code = HttpStatus.OK)
    public List<Vehicule> findByModel(@PathVariable String model) {
        return this.vehiculeService.findByModel(model);
    }

    @GetMapping("immatriculation/{immatriculation}")
    @ResponseStatus(code = HttpStatus.OK)
    public List<Vehicule> findByImmatriculation(@PathVariable String immatriculation) {
        return this.vehiculeService.findByImmatriculation(immatriculation);
    }

    @GetMapping("disponibilite/{disponibilite}")
    @ResponseStatus(code = HttpStatus.OK)
    public List<Vehicule> findByDisponibilite(@PathVariable Disponibilite disponibilite) {
        return this.vehiculeService.findByDisponibilite(disponibilite);
    }

    @GetMapping("typeVehicule/{typeVehicule}")
    @ResponseStatus(code = HttpStatus.OK)
    public List<Vehicule> findByTypeVehicule(@PathVariable TypeVehicule typeVehicule) {
        return this.vehiculeService.findByTypeVehicule(typeVehicule);
    }

    @GetMapping("prixSup")
    public List<Vehicule> findAllVehiculePrixGreaterThan(@RequestParam double prix) {
        return this.vehiculeService.findAllVehiculePrixGreaterThan(prix);
    }

    @GetMapping("prixInf")
    public List<Vehicule> findAllVehiculePrixLessThan(@RequestParam double prix) {
        return this.vehiculeService.findAllVehiculePrixLessThan(prix);
    }
}
