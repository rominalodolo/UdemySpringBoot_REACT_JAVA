package com.in28minutes.rest.services.restfulwebservices;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloWorldController {

    //GET
    //URI - /hello-world
    //Method - "Hello World"
    @GetMapping(path = "hello-world")
    public String helloWorld() {
        return "Hello World";
    }

    // Hello world bean
    @GetMapping String(path = "/hello-world-bean")
        public HelloWorldBean helloWorldBean(){
        return new HelloWorldBean("Hello World");
    }
}
