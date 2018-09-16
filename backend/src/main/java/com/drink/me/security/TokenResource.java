package com.drink.me.security;

public class TokenResource {
    private String token;

    public TokenResource(String token) {
        this.token = token;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }
}