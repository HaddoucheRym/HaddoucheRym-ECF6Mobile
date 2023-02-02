package com.example.LocalibSpringBoot.locataire;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/locataires")
public class LocataireController {

    private final LocataireService locataireService;

    public LocataireController(LocataireService locataireService) {
        this.locataireService = locataireService;
    }

    @GetMapping("")
    public List<Locataire> findAll() {
        return this.locataireService.findAll();
    }

    @PostMapping("")
    public Locataire save(@RequestBody Locataire entity) {
        return this.locataireService.save(entity);
    }

    @GetMapping("{id}")
    public Locataire findById(@PathVariable String id) {
        return this.locataireService.findById(id);
    }

    @DeleteMapping("{id}")
    public void deleteById(@PathVariable String id) {
        this.locataireService.deleteById(id);
    }

    @GetMapping("name/{name}")
    public List<Locataire> findByName(@PathVariable String name) {
        return this.locataireService.findByName(name);
    }

    @GetMapping("username/{username}")
    public List<Locataire> findByUsername(@PathVariable String username) {
        return this.locataireService.findByUsername(username);
    }

    @GetMapping("email/{email}")
    public List<Locataire> findByEmail(@PathVariable String email) {
        return this.locataireService.findByEmail(email);
    }

    @GetMapping("phone/{phone}")
    public List<Locataire> findByPhone(@PathVariable String phone) {
        return this.locataireService.findByPhone(phone);
    }
}
