# Real-Time Event Ticketing System

This repository hosts a Real-Time Event Ticketing System with a modular structure comprising a frontend, backend, and a command-line interface (CLI). The system enables dynamic configuration, real-time ticket operations, and vendor-customer interactions using a multithreaded approach.

## **Technologies Used**

## Frontend

- React 18

- Vite

- Tailwind CSS

- React Router DOM

- Axios

- Material UI

## Backend

- Spring Boot 3.4.0

- Java 21

- MySQL

- Maven

## CLI

- Java 21

- Gson Library (for JSON handling)

- Multithreading

## Project Structure

**Frontend**
```txt
src/
├── components/     # Reusable UI components
├── pages/          # Page-level components
├── App.jsx         # Main application component
├── index.css       # Global styles
├── main.jsx        # Application entry point
```
**Backend**
```txt
src/
├── main/
│   ├── java/
│   │   └── com/example/ticketing/system_backend/
│   │       ├── controller/   # Controllers for HTTP requests
│   │       ├── model/        # Entity classes
│   │       ├── repository/   # JPA Repositories
│   │       ├── service/      # Business logic
│   │       └── utils/        # Utility classes
│   └── resources/
│       ├── application.properties  # Configuration
└── test/
```
**CLI**
```txt
  ├── Configuration.java         # Handles system configuration
  ├── Customer.java              # Defines customer behavior
  ├── Logger.java                # Logs system activities
  ├── TicketingSystem.java       # Main ticketing system logic
  ├── TicketingSystemCLI.java    # Command-Line Interface
  ├── TicketPool.java            # Manages ticket availability
  ├── Vendor.java                # Defines vendor behavior
├── pom.xml                    # Maven configuration
└── system.log                 # Log file (auto-generated)
```
## Installation

**Frontend**

1. Clone the repository and navigate to the frontend directory:

  ```
  git clone https://github.com/dula089/Real-Time-Event-Ticketing-System--Reactjs-vite-tailwindcss-springboot.git
  cd Frontend
  ```
2. Install dependencies:

  ```npm install```

3. Start the development server:

  ```npm run dev```

4. Open your browser and navigate to ```http://localhost:5173.```

**Backend**

1. Clone the repository and navigate to the backend directory:

  ```
  git clone https://github.com/dula089/Real-Time-Event-Ticketing-System--Reactjs-vite-tailwindcss-springboot.git
  cd ticketing-system_backend```

2. Configure the database in application.properties:
```
spring.datasource.url=jdbc:mysql://localhost:3306/ticketsystem?createDatabaseIfNotExist=true
spring.datasource.username=root
spring.datasource.password=<your_password>```

3. Build and run the application:
```
mvn clean install
mvn spring-boot:run```

4. The server will start on   ```
http://localhost:8081.
```

**CLI**

1. Clone the repository and navigate to the CLI directory:
  ```
  git clone https://github.com/dula089/Real-Time-Event-Ticketing-System--Reactjs-vite-tailwindcss-springboot.git
  cd w2052016_OOPCW_JavaCLI-Real_event_ticketing_system
   ```
2. Build the project:
  ```
  mvn clean install
  ```
3. Run the CLI application:
  ```
 java -cp   target/<artifact_name>.jar  TicketingSystemCLI
```
4. Replace <artifact_name> with the generated JAR file name.

## Features

**Frontend**

- Dynamic UI: Built with React and Tailwind CSS for rapid UI development.

- Routing: Easy navigation with React Router DOM.

- API Integration: Simplified API calls using Axios.

**Backend**

- RESTful API: Endpoints for ticket operations, configuration, and logs.

- Persistence: Data stored in a MySQL database.

- Scalable Architecture: Modular services and repositories.

**CLI**

- Dynamic Configuration: Real-time setup of ticketing parameters.

- Multithreaded Operations: Simulates vendor-customer interactions.

- Persistence: Save and load configurations in JSON or text format.

- Logging: Logs system activities to a system.log file.

## Endpoints

- Configuration Endpoints

- Save Configuration

- POST /api/configuration
```txt
Request Body:

{
  "totalTickets": 1000,
  "ticketReleaseRate": 10,
  "customerRetrievalRate": 5,
  "maxTicketCapacity": 500
}
```
- Response: Created configuration object.

- Get Configuration

- GET /api/configuration/{id}

- Response: Configuration object or ```404 Not Found```.

## Log Endpoints

- Create Log

- POST /api/logs
```txt
Request Body:

{
  "saleId": "1234",
  "dateTime": "2024-01-01T10:00:00",
  "message": "Ticket sale successful"
}
```
- Response: Created log object.

- CLI Menu Options

 1. Configure the system.

 2. Start ticketing operations.

 3. Stop ticketing operations.

 4. Save configuration to JSON.

 5. Load configuration from JSON.

 6. Save configuration to text.

 7. Load configuration from text.

 8. Exit.

## License

This project is licensed under the MIT License. Feel free to use and adapt it as needed.
