package com.ssafy.osws.config;


import java.util.Arrays;
import java.util.Collections;
import java.util.List;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.ApiKey;
import springfox.documentation.service.AuthorizationScope;
import springfox.documentation.service.SecurityReference;
import springfox.documentation.service.Server;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spi.service.contexts.SecurityContext;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger.web.SecurityConfiguration;
import springfox.documentation.swagger.web.SecurityConfigurationBuilder;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@EnableSwagger2 
@Configuration
public class SwaggerConfig {
    @Bean
    public Docket api() {
    	Server serverLocal = new Server("local", "http://localhost:5000", "for local usages", Collections.emptyList(), Collections.emptyList());
        Server testServer = new Server("test", "https://i8d203.p.ssafy.io/api", "for testing", Collections.emptyList(), Collections.emptyList());
        return new Docket(DocumentationType.OAS_30)
        		.servers(serverLocal, testServer)
                .apiInfo(apiInfo())
                .select()
                .apis(RequestHandlerSelectors.any())
                .paths(PathSelectors.any())
                .build()
                .securitySchemes(Arrays.asList(apiKey()))
                .securityContexts(Arrays.asList(securityContext()));
    }
    
    
    public ApiInfo apiInfo() {
        return new ApiInfoBuilder()
                .title("SSAFY D203 Online Silver Welfare Service Rest API")
                .description("SSAFY D203 Online Silver Welfare Service Rest API implementation.")
                .version("1.0")
                .build();
    }
    
    // 헤더에 키 추가
    private ApiKey apiKey() {
    	return new ApiKey("X-ACCESS-TOKEN", "X-ACCESS-TOKEN", "header");
    }
    
    private SecurityContext securityContext() {
    	return SecurityContext.builder()
    			.securityReferences(defaultAuth())
    			.build();
    }

    
    // authorization 범위 설정
	private List<SecurityReference> defaultAuth() {
		AuthorizationScope authorizationScope = new AuthorizationScope("global", "accessEverything");
		AuthorizationScope[] authorizationScopes = new AuthorizationScope[1];
		authorizationScopes[0] = authorizationScope;
		return Arrays.asList(new SecurityReference("X-ACCESS-TOKEN", authorizationScopes));
	}
    
	// 시큐리티 문서 설정
	@Bean
	public SecurityConfiguration security() {
			return SecurityConfigurationBuilder.builder()
					.clientId("test-app-client-id")
					.clientSecret("test-app-client-secret")
					.realm("test-app-realm")
					.appName("test-app")
					.scopeSeparator(",")
					.additionalQueryStringParams(null)
					.useBasicAuthenticationWithAccessCodeGrant(false)
					.build();
	}
    
}