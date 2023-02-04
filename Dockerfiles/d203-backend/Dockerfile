FROM openjdk:11
ARG JAR_FILE=*.jar
COPY ${JAR_FILE} osws.jar
ENTRYPOINT ["java","-jar","/osws.jar"]

EXPOSE 8080