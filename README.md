# Model View Controller - Tech Blog
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developersâ€™ posts as well. This app follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.
<br /><br />

![](public/images/mvcTechBlog.png)
<br />

## Table of Contents
- [Installation](#installation)
- [License](#license)
- [Contributing](#contributing)


## User Story

```md
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
```

## Acceptance Criteria

- [x] GIVEN a CMS-style blog site
- [x] WHEN I visit the site for the first time
- [x] THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
- [x] WHEN I click on the homepage option
- [x] THEN I am taken to the homepage
- [x] WHEN I click on any other links in the navigation
- [x] THEN I am prompted to either sign up or sign in
- [x] WHEN I choose to sign up
- [x] THEN I am prompted to create a username and password
- [x] WHEN I click on the sign-up button
- [x] THEN my user credentials are saved and I am logged into the site
- [x] WHEN I revisit the site at a later time and choose to sign in
- [x] THEN I am prompted to enter my username and password
- [x] WHEN I am signed in to the site
- [x] THEN I see navigation links for the homepage, the dashboard, and the option to log out
- [x] WHEN I click on the homepage option in the navigation
- [x] THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
- [x] WHEN I click on an existing blog post
- [x] THEN I am presented with the post title, contents, post creatorâ€™s username, and date created for that post and have the option to leave a comment
- [x] WHEN I enter a comment and click on the submit button while signed in
- [x] THEN the comment is saved and the post is updated to display the comment, the comment creatorâ€™s username, and the date created
- [x] WHEN I click on the dashboard option in the navigation
- [x] THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
- [x] WHEN I click on the button to add a new blog post
- [x] THEN I am prompted to enter both a title and contents for my blog post
- [x] WHEN I click on the button to create a new blog post
- [x] THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
- [x] WHEN I click on one of my existing posts in the dashboard
- [x] THEN I am able to delete or update my post and taken back to an updated dashboard
- [x] WHEN I click on the logout option in the navigation
- [x] THEN I am signed out of the site
- [x] WHEN I am idle on the page for more than a set time
- [x] THEN I am automatically signed out of the site 
  

## Installation
Clone the repo to your local development environment.

```md
git clone git@github.com:mbeaner/mvc-tech-blog.git
```
Navigate to the primitive-notion folder directory using the command prompt.

Run `npm install` to install all dependencies. in terminal or bash
<br><br>
Run `node seeds/index.js` to seed the data
<br><br>
Run `npm start` to run the application in terminal or bash
<br><br>
Use http://localhost:3001 [or whatever terminal port you have specified] in your browser


## Licence
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
<br />

## Contributing
[Mark Beaner](https://github.com/mbeaner)
<br />

## Built with
- [Javascript](https://www.w3schools.com/jsref/default.asp)
- [Node.js](https://nodejs.org/en/)
- [Express.js](https://expressjs.com/)
- [Sequelize](https://sequelize.org/)
- [mySQL](https://www.mysql.com/)
- [JSON](https://www.json.org/json-en.html)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [MySQL2](https://www.npmjs.com/package/mysql2)
- [InsomniaCore](https://insomnia.rest/products/insomnia)
- [Handlebars.js](https://handlebarsjs.com/)
- [Heroku](https://heroku.com/)



