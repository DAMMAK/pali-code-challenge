# Pali Code Challenge

A simple Web Service that accept Array of Recipe ID from https://themealdb.com and return the Recipe ID with the least Ingredient



How to Use 

Run following command
``docker-compose build``

after docker image has been successfully built

Run following command
``docker-compose up``

navigate to address:PORT

 e.g 127.0.0.1:4000
 
 endpoint address
 http://localhost:4000/getid
 
 Request Method=POST
 
Request Data={
 "id":[45,674,89]
 }

