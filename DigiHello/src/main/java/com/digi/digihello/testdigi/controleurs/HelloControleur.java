package com.digi.digihello.testdigi.controleurs;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.digi.digihello.testdigi.service.HelloService;

@RestController
@RequestMapping("/hello")
public class HelloControleur {

    // Injection du bean HelloService
    @Autowired
    private HelloService helloService;

    // Cette méthode retourne le message du service
    @GetMapping
    public String direHello() {
        return helloService.salutations();
    }
}