package com.in28minutes.rest.services.restfulwebservices;

import org.springframework.web.bind.annotation.*;

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
    @GetMapping (path = "/hello-world-bean")
    public HelloWorldBean helloWorldBean(){
        return new HelloWorldBean("Hello World");
    }

    @GetMapping(path = "/hello-world/path-variable/{name}")
    public HelloWorldBean helloWorldPathVariable(@PathVariable String name) {
        return new HelloWorldBean(String.format("Hello World, %s", name));
    }
}
