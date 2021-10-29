Hi, Carlos here 👋 . Let's look at how you can run the project.


## Running the project

There are 2 modes you can run the project: development and production. 

### Running the project in development
-------------------------------------

Let's look at development first. To start the project you can run:

```
npm install
npm run start
```

Note that in development the data is in-memory. There is no database involved. This enables a quick validation of the tariff calculation process.

The API has a single endpoint. It takes the consumption as kWh/year and returns the list of products and their annual cost.

```
curl --request GET --url 'http://localhost:4000/api/tariffs?consumption=3500' 
```

### Running the project in production
-------------------------------------

In production mode, a docker container with PostgreSQL is used.

```
npm run start:db
npm run start:production
```

This will pull a PostgreSQL docker image (~300MB) and run a container with a `verivox` database. At startup, a sample `products`table is created and seeded.

## Running the tests
-------------------------------------
```
npm run test
```