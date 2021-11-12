# Assignment 6

## TODO App
A Js app for todo items:

Create a simple Todo application using JavaScript. 
User Requirements:

- As a user, I should be able to see all to-do items fetched using an XHR call from a JSON file.
- As a user, I should be able to click a to-do item and able to see its detailed view.
- As a user, I should be able to open add a new to-do item view by clicking the add button and this need not be persisted.
- As a user, I should be able to add a to-do item by entering the title, description, due date, and time.
- As a user, I should be able to mark a to-do item as complete.
- As a developer, I should be able to build the app using Webpack.

## Technical Requirements:
The goal of this assignment is to learn about JavaScript & WebpackShould use SCSS for styles.
- Should use webpack for building the app including styles.
- Should use webpack-dev-server for running the project.
- Should document your code extensively.
- Should have .gitignore, ReadMe.md files.ReadMe.md file should have the project description and the instructions to run the project.
- No JavaScript & CSS libraries should be used for this assignment.
- You do not need to save the changes made on UI to JSON file.

## Execution
- Clone the repo using the "git clone" command.
- Convert it to a npm project, run "npm init" command. 
- Install using the "npm install" command.
- Now the project can be run using the "npm run" command.
- SASS creation--> npx sass scss/main.scss dist/main.css 
- Setup webpack and node js
- npm i -y
- In package.json, add private:true and add dev dependencies for sass, "html-webpack-plugin", "mini-css-extract-plugin"
- npm install webpack webpack-cli sass css-loader sass-loader --save-dev
- npm i mini-css-extract-plugin html-webpack-plugin --save-dev

- npx webpack --config webpack.config.js
                                                            
- npm install webpack-dev-server --save-dev

- Run using - npx webpack serve
## License

Copyright 2020 Aditi Jain