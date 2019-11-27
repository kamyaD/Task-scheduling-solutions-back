# Task-scheduling-solutions-back

#### How to manually test the application:

Requirements:
- git bash
- visual studio code (vscode)
- Postman
- MySQL
- nodejs

testing:
- ensure above mentioned requirements are installed. 
- clone the repository from `https://github.com/kamyaD/Task-scheduling-solutions-back.git`
- Run vscode and open terminal and change directory to `Task-scheduling-solutions-back` and ensure you are on master branch
- Run `npm install` to install dependencies
- create database on MySql 
- on gitbash run `source .env` to run the env file.
- to create tables on the database, change directory to `server` and run `npx sequelize-cli db:migrate`
- to add data to database, run `npx sequelize-cli db:seed:all`
- to run the application run 'npm start'
- on Postman send `Post` request to `http://localhost:3000/login` to with the provided username and password
- send a `Get` request to `http://localhost:3000/tasks` and add the token you obtained during login under `authorization`, `type : Bearer token`
- click send to see all the tasks.
