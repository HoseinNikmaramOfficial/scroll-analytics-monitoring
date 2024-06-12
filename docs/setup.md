# Setup Instructions

## Backend

1. Install dependencies:
    ```bash
    cd backend
    npm install axios pg

2. Set up the database:
    psql -f src/database/setup.sql

3. Run the data collection script:
    node src/data-collection/collect-metrics.js

## Frontend

1. Install dependencies:
    cd frontend
    npm install vue vue-chartjs chart.js
    
2. Run the development server:
    npm run serve