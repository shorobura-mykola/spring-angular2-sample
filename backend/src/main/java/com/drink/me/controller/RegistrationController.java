package com.drink.me.controller;

import com.drink.me.model.User;
import com.drink.me.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController("/registration")
public class RegistrationController {

    private UserService userService;

    public RegistrationController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping
    public @ResponseBody
    HttpStatus registration(@RequestBody User user){
        userService.save(user);
        return HttpStatus.OK;
    }

}
