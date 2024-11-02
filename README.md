"# Hygieia-Nutrition_tracker" 
 Hygieia is a nutrition-tracking web application built with a React frontend (`nutrify-frontend`), Node.js backend (`hygieia`), and MongoDB as the database. The app enables users to search for food items, view detailed nutritional information, and track daily intake.

#Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

#Features

- Food Search: Search for various food items and get nutritional details.
- Nutrition Tracking: Add food items to daily logs and track nutrient intake.
- Date Selection: View nutritional intake for specific dates.
- User Authentication: Secure login and logout functionality.

#Installation

#Prerequisites

- [Node.js](https://nodejs.org/) (v14 or above)
- [MongoDB](https://www.mongodb.com/) (Local or MongoDB Atlas instance)

#Steps

1. Clone the Repository
   
   git clone https://github.com/your-username/nutrify.git
   cd nutrify
   
2. Frontend Setup (nutrify-frontend)

  cd nutrify-frontend
  npm install
  
3. Backend Setup (hygieia)
  Open a new terminal and navigate to the backend directory:

    cd hygieia
    npm install
   
  Create a .env file in the hygieia folder with the following configuration:

    MONGODB_URI=<your-mongodb-connection-string>
    PORT=8000
    JWT_SECRET=<your-secret-key>
    
4. Running the Application

Frontend: In the nutrify-frontend directory, start the frontend:
  npm start
Backend: In the hygieia directory, start the backend:
  npm start

5. Access the App Open your browser and go to http://localhost:3000 to use Nutrify.

#Usage

  Log in: Authenticate using your credentials.
  Search Food: Enter a food item name to retrieve nutrition details.
  Track Food: Add selected food items to the daily log.
  View by Date: Go to the Diet section, select a date, and view your intake for that day.

#License

This project is licensed under the MIT License - see the LICENSE file for details.

  This README is aligned with the folder names (`nutrify-frontend` for frontend and `hygieia` for backend) and includes detailed installation, usage, and troubleshooting sections to get your app running smoothly. Let me know if further customization is needed!


