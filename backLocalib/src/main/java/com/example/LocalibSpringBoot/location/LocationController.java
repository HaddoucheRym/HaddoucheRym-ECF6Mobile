package com.example.LocalibSpringBoot.location;

import com.example.LocalibSpringBoot.locataire.Locataire;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/locations")
public class LocationController {

    private final LocationService locationService;

    public LocationController(LocationService locationService) {
        this.locationService = locationService;
    }

    @GetMapping("")
    public List<Location> findAll() {
        return this.locationService.findAll();
    }

    @PostMapping("")
    public Location save(@RequestBody Location entity) {
        return this.locationService.save(entity);
    }

    @GetMapping("{id}")
    public Location findById(@PathVariable String id) {
        return this.locationService.findById(id);
    }

    @DeleteMapping("{id}")
    public void deleteById(@PathVariable String id) {
        this.locationService.deleteById(id);
    }

    @PutMapping("{id}")
    public Location updateLocation(@PathVariable String id, @RequestBody Location location) {
        return this.locationService.update(location, id);
    }
}
