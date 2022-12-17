/

    - src/
        index.js // server
        models
        controllers/
        middleware/
        services/
        utils/
        config/
        repository/
    - tests/ [later]
    - static/
    - temp/

# Welcome to FLight Service

## Project Setup

    - clone the project on your local
    - Execute  `npm install` on the same path as of your root directory of that downloaded project
    - Create a `.env` file in the root directory and add the following environment variable
        -PORT=3000
    - Inside the `src/config` folder create a new file config.json and then add the following piece of json

    {
        "development": {
            "username": "root",
            "password": "root",
            "database": "Flights_Search_DB_DEV",
            "host": "127.0.0.1",
            "dialect": "mysql"
        },
    }
    - Once you have added your db config as listed above, go to the src folder from your terminal and execute `npx sequelize db:create`

## DB Design

    - Airplane Table
    - Flight
    - Airport
    - City

    - A flight belongs to an airplane but one   airplane can be used in multiple flights

    - A city has many airports but one airport belongs to a city

    - One airport can have many flights, but a flight belongs to one airport

## Tables

### City -> id, name , created_at,updated_at

### Airport -> id,name,address,city_id,created_at,updated_at

    Relationship -> City has many airports and Airport belongs to a city (one to many)

    Command to create Airport Model -> `npx sequelize model:generate --name Airport --attributes name:String,address:String,cityId:Integer`

    Set up association in the models
