package com.ssafy.osws.user.auth;

import java.util.Collection;
import java.util.Map;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.oauth2.core.user.DefaultOAuth2User;

import lombok.Getter;

@Getter
public class AuthUser extends DefaultOAuth2User {
    private String email;
    private String role;
    private String phone;

    /**
     * Constructs a {@code DefaultOAuth2User} using the provided parameters.
     *
     * @param authorities      the authorities granted to the user
     * @param attributes       the attributes about the user
     * @param nameAttributeKey the key used to access the user's &quot;name&quot; from
     *                         {@link #getAttributes()}
     */
    public AuthUser(
        Collection<? extends GrantedAuthority> authorities,
        Map<String, Object> attributes, String nameAttributeKey, String role, String email, String phone) {
        super(authorities, attributes, nameAttributeKey);
        @SuppressWarnings("unchecked")
		Map<String, Object> account = (Map<String, Object>) attributes.get("kakao_account");
        this.role = role;
        this.email = (String) account.get("email");
        this.phone = phone;
    }
}
