package com.in28minutes.rest.services.restfulwebservices.helloworld;

public class HelloWorldBean {

    private String message;

    public void setMessage(String message) {
        this.message = message;
    }

    @Override
    public String toString() {
        return "HelloWorldBean{" +
                "message='" + message + '\'' +
                '}';
    }

    public String getMessage() {
        return message;
    }

    public HelloWorldBean(String message) {
        this.message = message;

    }
}



//public class HelloWorldBean {
//
//    private String message;
//
//    public HelloWorldBean(String message) {
//        this.message = message;
//    }
//
//    public String getMessage() {
//        return message;
//    }
//
//    public void setMessage(String message) {
//        this.message = message;
//    }
//
//    @Override
//    public String toString() {
//        return String.format("HelloWorldBean [message=%s]", message);
//    }
//
//}