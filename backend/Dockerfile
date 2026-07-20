# Use an official lightweight Java runtime
FROM eclipse-temurin:21-jdk-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the built jar file into the container (assuming Maven)
COPY target/*.jar app.jar

# Expose the port Spring Boot runs on
EXPOSE 8080

# Run the jar file
ENTRYPOINT ["java", "-jar", "app.jar"]