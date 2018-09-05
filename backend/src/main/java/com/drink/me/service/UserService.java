package com.drink.me.service;

import com.drink.me.model.User;

import java.util.List;

public interface UserService {
    void save(User user);
    List<User> getAll();
}
