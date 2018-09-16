package com.drink.me;

import com.drink.me.properties.JWTProperties;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Configuration;

@Configuration
@EnableConfigurationProperties({JWTProperties.class})
public class ApplicationConfiguration {
}
