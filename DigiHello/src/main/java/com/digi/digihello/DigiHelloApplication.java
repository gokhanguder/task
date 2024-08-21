package com.digi.digihello;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.digi.digihello.testdigi.config.Config;

@SpringBootApplication
public class DigiHelloApplication implements CommandLineRunner {
    
    @Autowired
    private Config config;  // Config sınıfı otomatik olarak enjekte edilir

    public static void main(String[] args) {
        SpringApplication.run(DigiHelloApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        config.sayHello();  // Config sınıfından metodu çağırıyoruz
    }
}
