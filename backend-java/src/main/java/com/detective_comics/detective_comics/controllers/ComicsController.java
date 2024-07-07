package com.detective_comics.detective_comics.controllers;

import com.detective_comics.detective_comics.models.Comics;
import com.detective_comics.detective_comics.repositores.ComicsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import javax.print.attribute.standard.Media;
import java.util.List;

@RestController
@RequestMapping("/comics")
@CrossOrigin(origins = "http://localhost:4200")
public class ComicsController {
    @Autowired
    ComicsRepository comicsRepository;

    @GetMapping(value = "/all", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Comics> getAllComics() {
        return comicsRepository.findAll();
    }

    @GetMapping(value = "/all/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public Comics getComicsById(@PathVariable Long id) {
        return comicsRepository.findById(id).orElseThrow();
    }

    @PostMapping(value = "/createComics", produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    public Comics createNewComics(@RequestBody Comics comics) {

        Comics createComics = new Comics();

        createComics.setName(comics.getName());
        createComics.setAuthor(comics.getAuthor());
        createComics.setDate_of_publication(comics.getDate_of_publication());
        createComics.setUrl_image(comics.getUrl_image());

        return comicsRepository.save(createComics);
    }

    @PutMapping(value = "/updateComics", produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    public Comics updatedComics(@RequestBody Comics comics) {
        Comics getComics = comicsRepository.findById(comics.getId()).orElseThrow();

        Comics updatedComics = new Comics();

        updatedComics.setId(comics.getId());
        updatedComics.setName(comics.getName());
        updatedComics.setAuthor(comics.getAuthor());
        updatedComics.setUrl_image(comics.getUrl_image());
        updatedComics.setDate_of_publication(comics.getDate_of_publication());

        return comicsRepository.save(updatedComics);
    }

    @DeleteMapping(value = "/deleteComics/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public Comics deleteComics(@PathVariable Long id) {
        Comics getComics = comicsRepository.findById(id).orElseThrow();
        comicsRepository.delete(getComics);
        return getComics;
    }
}
