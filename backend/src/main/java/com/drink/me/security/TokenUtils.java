package com.drink.me.security;

import com.drink.me.model.User;
import com.drink.me.properties.JWTProperties;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Component
public class TokenUtils {

    public static final String SUB = "sub";
    public static final String CREATED = "created";
    public static final String ROLE = "role";
    public static final String EXPIRATION = "expiration";

    @Autowired
    private JWTProperties jwtProperties;

    public String getUsernameFromToken(String token) {
        return (String) this.getClaimsFromToken(token).get(SUB);
    }

    public Date getCreatedDateFromToken(String token) {
        return new Date((Long)this.getClaimsFromToken(token).get(CREATED));
    }

    public Date getExpirationDateFromToken(String token) {
        return this.getClaimsFromToken(token).getExpiration();
    }

    private Claims getClaimsFromToken(String token) {
        return Jwts.parser().setSigningKey(jwtProperties.getSecret()).parseClaimsJws(token).getBody();
    }

    private Date generateCurrentDate() {
        return new Date(System.currentTimeMillis());
    }

    private Date generateExpirationDate() {
        return new Date(System.currentTimeMillis() + jwtProperties.getExpiration() * 1000);
    }

    private Boolean isTokenExpired(String token) {
        final Date expiration = this.getExpirationDateFromToken(token);
        return expiration.before(this.generateCurrentDate());
    }

    private Boolean isCreatedBeforeLastPasswordReset(Date created, Date lastPasswordReset) {
        return (lastPasswordReset != null && created.before(lastPasswordReset));
    }

    public String generateToken(UserDetails userDetails) {
        Map<String, Object> claims = new HashMap<>();
        claims.put(SUB, userDetails.getUsername());
        claims.put(CREATED, this.generateCurrentDate().getTime());
        claims.put(ROLE, userDetails.getAuthorities().iterator().next());
        claims.put(EXPIRATION, this.generateExpirationDate().getTime());
        return this.generateToken(claims);
    }

    private String generateToken(Map<String, Object> claims) {
        return Jwts.builder().setClaims(claims).setExpiration(this.generateExpirationDate())
                .signWith(SignatureAlgorithm.HS512, jwtProperties.getSecret()).compact();
    }

    public Boolean canTokenBeRefreshed(String token, Date lastPasswordReset) {
        final Date created = this.getCreatedDateFromToken(token);
        return (!(this.isCreatedBeforeLastPasswordReset(created, lastPasswordReset)) && (!(this.isTokenExpired(token))));
    }

    public String refreshToken(String token) {
        final Claims claims = this.getClaimsFromToken(token);
        claims.put(CREATED, this.generateCurrentDate());
        claims.put(EXPIRATION, this.generateExpirationDate().getTime());
        return this.generateToken(claims);
    }

    public Boolean validateToken(String token, UserDetails userDetails) {
        User user = (User) userDetails;
        final String username = this.getUsernameFromToken(token);
        final Date created = this.getCreatedDateFromToken(token);
        final Date expiration = this.getExpirationDateFromToken(token);
        return (username.equals(user.getName()) && !(this.isTokenExpired(token)));
    }

}
