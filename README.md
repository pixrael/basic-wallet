# Test wallet
This project is a small balance historical app, the user can:
- See the history of transactions.
- Search by amount.
- Filter by date range.
- Increase current balance by adding an amount.
- Decrease current balance by extracting an amount.
  
This project no uses db but a file in the server that contains all the operations of the user, so the user can add new operations but once the server is restarted the new operations will be erased.

The language in the UI is in spanish.
This project contains the client and the server


## To install and run the server project
Once cloned, there are two folders one for the server "backend-test-wallet" and one for the client "frontend-test-wallet".

1-go to inside /backend-test-wallet and run
### `npm install`
### `npm start`

In the console should show the message: "Server running at port 8080"
The available endpoints are:
GET http://localhost:8080/health-check  to check if the server is running.
GET http://localhost:8080/movements  to fetch the historical of movements
POST http://localhost:8080/movements Body{ "amount": number,    "concept": 1|0 }  to make an operation to add/extract amounts. (1 is to extract, 0 to add)

2-Open a browser and go to the url http://localhost:8080/health-check and should return "ok"

## To install and run the client project
Once cloned, there are two folders one for the server "backend-test-wallet" and one for the client "frontend-test-wallet".

In order to make the client point to the server:
1-Rewrite the name of the file "/frontend-test-wallet/.env.sample" to  "/frontend-test-wallet/.env"

2-Go inside folder "/frontend-test-wallet"
and run
### `npm install`
### `npm start`
3-Open the browser in "http://localhost:3000/", should show the UI showing the historical of the transactions


## Changing the historical in the server
You can change the initial historical of the transactions in the file "backend-test-wallet\src\assets\data.ts"


## Some of the used tecnologies 
Client:
* React library
* Redux toolkit and Redux toolkit query
* Material UI
* MomentJs used to manage dates

Server:
* NodeJS
* Express