package com.digi.digihello.testdigi.service;

import org.springframework.stereotype.Service;

@Service  // Cette annotation indique que HelloService est un bean Spring
public class HelloService {

    public String salutations() {
        return "Je suis la classe de service et je vous dis Bonjour";
    }
}
