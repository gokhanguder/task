package com.digi.digihello.testdigi.config;

import org.springframework.context.annotation.Configuration;

@Configuration
public class Config {
    
    public void sayHello() {
        System.out.println("Hello from Config");
    }
}
