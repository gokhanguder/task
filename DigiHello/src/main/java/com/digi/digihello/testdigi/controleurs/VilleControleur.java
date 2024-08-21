package com.digi.digihello.testdigi.controleurs;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.digi.digihello.testdigi.service.Ville;

import java.util.Arrays;
import java.util.List;

@RestController
// Mapping de la classe sur l'URL /villes
public class VilleControleur {

    @GetMapping("/villes")
    public List<Ville> getVilles() {
        // Retourner une liste statique de villes pour le moment
        return Arrays.asList(
            new Ville("Istanbul", 15636243),
            new Ville("Ankara", 5310000),
            new Ville("Izmir", 3056000)
        );
    }
}