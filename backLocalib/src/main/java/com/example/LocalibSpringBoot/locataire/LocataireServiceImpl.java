package com.example.LocalibSpringBoot.locataire;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

public class LocataireServiceImpl implements LocataireService{

    private static final Logger logger = LoggerFactory.getLogger(LocataireServiceImpl.class);
    private final LocataireRepository locataireRepository;

    public LocataireServiceImpl(LocataireRepository locataireRepository) {
        this.locataireRepository = locataireRepository;
    }

    @Override
    public List<Locataire> findAll() {
        return this.locataireRepository.findAll();
    }

    @Override
    public Locataire save(Locataire entity) {
        if (entity.getAge() < 18) {
            logger.info("age de locataire est invalide: " + entity.getAge() + " ans");
            throw new ResponseStatusException(HttpStatus.NOT_ACCEPTABLE,
                    "le locataire n'est pas majeur");
        }
        return  this.locataireRepository.save(entity);
    }

    @Override
    public Locataire findById(String id) {
        return locataireRepository.findById(id).orElseThrow(() ->{
            logger.warn("findByIdInvalide: "+ id);
            return  new ResponseStatusException(HttpStatus.NOT_FOUND);
        });
    }

    @Override
    public void deleteById(String id) {
        this.locataireRepository.deleteById(id);
    }


    @Override
    public List<Locataire> findByName(String name) {
        return this.locataireRepository.findByName(name);
    }

    @Override
    public List<Locataire> findByUsername(String username) {
        return this.locataireRepository.findByUsername(username);
    }

    @Override
    public List<Locataire> findByEmail(String email) {
        return this.locataireRepository.findByEmail(email);
    }


    @Override
    public List<Locataire> findByPhone(String phone) {
        return this.locataireRepository.findByPhone(phone);
    }
}
