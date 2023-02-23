Backend Deployed Api:-

API = "https://jolly-gray-sun-hat.cyclic.app/"

API Documentation:-

registers user :=> (POST) => https://jolly-gray-sun-hat.cyclic.app/register

registers login :=> (POST) => https://jolly-gray-sun-hat.cyclic.app/login

Get all flight :=> (GET) => https://jolly-gray-sun-hat.cyclic.app/flights

Get specific flight :=> (GET) => https://jolly-gray-sun-hat.cyclic.app/flights/id   => add id as flight id

Add new flight :=> (POST) => https://jolly-gray-sun-hat.cyclic.app/flights

Change data of specific flight :=> (PATCH) => https://jolly-gray-sun-hat.cyclic.app/flights/id   => add id as flight id

Delete specific flight :=> (DELETE) =>https://jolly-gray-sun-hat.cyclic.app/flights/id =>  add id as flight id

Users book flights :=>(POST) :=> https://jolly-gray-sun-hat.cyclic.app/booking  => add login token in headers as "Authorization" key and add flightId as "flightId" as key in req.body

Get All Booked flight :=> (POST)=> https://jolly-gray-sun-hat.cyclic.app/dashboard
