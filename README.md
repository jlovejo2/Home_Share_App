# House_Share_App

This App is an app simulating a rental property booking app similar to VrBo and AirBnB. The goal of this App was to learn how to integrate users, creating listings of properties to be viewed, and then allow users to search for listings based on location and book them.

This App uses graphql, apollo, and mongoDb on the back-end to create a server, api, and allow that api to be queried easily. Most of the client-side work is down by react with the aid of Ant-design as a framework.

the link to github is shown below:
https://github.com/jlovejo2/Home_Share_App

the link to the functional app is shown below:
https://

## Table of Contents

- [User Story](#user-story)
- [Version 1.0](#version-1.0)
- [How To Use](#how-to-use)
- [Guest Login Info](#guest-login-info)
- [Coding Languages Used](#coding-languages-used)
- [NPMs Used](#npms-used)
- [CSS Framework](#css-framework)
- [Structure of Code and Functions](#structure-of-code-and-functions)
- [Things To Improve On](#things-to-improve-on)

## User Story

As a User I either have a desire to make money renting out some property or I just want to find a nice property rent for vacation. Or maybe I want to do both? If I was going to host a property I would want to be able to list it online based on location so that it is easier for people find my listings and book them. Vice-versa if I am someone looking for a property for vacation I'd also like to be to search the properties available based on location. Depending on the use of the app I would like it to keep track of the listings I am hosting and the bookings I have made.

## Version 1.0

- The backend of this app is powered by grapqhl, apollo, and mongoDb
- The frontend is powered by react with ant-design as a front-end framework
- It is deployed on heroku.
- This app has 7 pages: Home Page, Host Page, Listing Page, Listings Page, Login Page, 404 page, Profile Page,
- Home page - is the start page. It shows some of the premium listings, with some images and button that will run some listing searches for the user when clicked on.
- Host page - Allows the user to create a listing to host. This page is only accessible if the user has logged in and synced their stripe account.
- Listing page - Is the page that displays all the listing information to the user. This page has the interactivity that allows the user to book a lisitng.
- Listings page - This page displays all the listings that are listed for the searched location.
- Login page - This page allows the user to login into the website. The page itself has a button that will route the user to Google Oauth and allow them to login with their google account.
- 404 page - This is a generic 404 page that will catch any route that doesn't exist for this site and let the user know the url was incorrect.
- Profile page - This page displays all the info of the site specific to that user. It displays whether they have their Stripe account connected or disconnected, shows all the listings the user has created, and all the bookings they have made.

## How To Use

See the layout of the app below.

- The home page is shown by the two images below.

  |                               Starting page of App Top Half                                |
  | :----------------------------------------------------------------------------------------: |
  | !["Starting page of App Image One"](/client/public/assets/images/readme/home_page_One.jpg) |

- This first shows the upper half the page consisting of the header and then four images that when clicked will automatically run a search for listings in the city shown by the images. The app header is within the green box and consists of a clickable logo(will take user back to home page), a search bar that will search for lisitings based on user's query, a host button which allows a logged in user to create a listing, and then a conditional button that allows user to sign in. Once user is signed in the conditional button will switch to a dropwdown menu that will either allow user to navigate to profile page or sign out.

|                               Start page of App Bottom Half                                |
| :----------------------------------------------------------------------------------------: |
| !["Starting page of App Image Two"](/client/public/assets/images/readme/home_page_Two.png) |

- The second image(above) shows the rest of the home page for the Home Share App. The first section displays a description explaining what the Home Share Apps goal is and has a button that allows that when clicked will run a search for all listings in the United States. The next section lists the Premium Listings(or four most expensive listings) currently on the App.

|                           Login Page                           |
| :------------------------------------------------------------: |
| !["Login"](/client/public/assets/images/readme/Login_page.png) |

- The above image shows the login page. User navigates here by clicking the "sign in" button. For this site google Oauth 2 was used to create and get user information. Therefore when the user clicks the "sign in with google" button they are navigated to Goole Oauth authorization page. Here they verify who they are using googles authorization api and then get navigated to their profile page for House Share App once House Share App receives verification from Google that they are who they say they are.

!["Profile One"](/client/public/assets/images/readme/Profile_page_1.png)

-

!["Profile Two"](/client/public/assets/images/readme/Profile_page_2.png)

-

!["Comment on Announcement"](/client/public/assets/images/readme/comment.png)

- The teacher has access to an additional page known as the gradebook. The gradebook has an assigments and gradebook tab. The assignments tab is where the teacher can create an assignment and save it to the database. The gradebook automatically lists all the students that have joined the class and will automatically render a column for any assignment the teacher creates.

|                      Teacher Gradebook Page                       |
| :---------------------------------------------------------------: |
| !["GradeBook"](/client/public/assets/images/readme/gradeBook.png) |

- If the teacher clicks on the assignments tab towards the top of the gradebook page. Another table is shown for the class which is the assignments table. In this location the teacher can create an assignment for her class. Once the assignment is created it will automatically be a new new column in the gradebook where the teacher can add grades to it for each student.

|                    Teacher Assignment Tab on Gradebook Page                     |
| :-----------------------------------------------------------------------------: |
| !["Assignments"](/client/public/assets/images/readme/addHomeworkAssignment.png) |

## Guest Login Info

- Guest:
  - email: codingGuestAcct.james.lovejoy2@gmail.com
  - password: g3u5tAcct!

## Coding Languages Used

- HTML
- CSS
- Javascript
- React.js
- JSX
- Node.js

## NPMs Used:

# Client-Side

- @material-ui/core
- @material-ui/icons
- @testing-library/jest-dom
- @testing-library/react
- @testing-library/user-event
- animate.css
- material-table
- mdbreact
- react
- react-app-polyfill
- react-dom
- react-router-dom
- react-scripts
- react-toastify
- styled-components

# Back-end

- @date-io/date-fns
- @material-ui/core
- axios
- bcrypt
- bcryptjs
- body-parser
- chance
- cookie-parser
- cors
- dotenv
- express
- if-env
- is-empty
- jsonwebtoken
- moment
- mongodb
- mongoose
- morgan
- multer
- nodemailer - for version 2.0
- passport
- passport-http-bearer
- passport-jwt
- path
- socket.io - didn't implement for version 2.0
- validator"

## CSS Framework:

- Material UI
- MdbReact

## Structure of Code and Functions

# Front-End - Client folder

- public folder
  - assets folder - contains images used in the readme file
  - index.html - with react does not contain much code but necessary external links for library sources. It interacts with App.js
- src folder - this is the meat of react and holds most of the front-end code
  - components folder - all the html components that require some custom props and sometimes custom css have their own folder. Folders will sometimes contain multipled components. In each folder is a jsx file. These components are set-up this way so that they can be imported and used in whatever page requires them.
  - history folder - contains a jsx file that imports the createBrowserHistory function from the 'history' component of react. This is then imported in certain files inorder to navigate to various pages based on specific conditions
  - images folder - this folder contains the logo images.
  - pages folder - Contains all the jsx files for each page in the app
    - pageStyle folder - contains two css files one for login and one for the search
    - utils folder
      - api.js - contains all the client side axios calls to the api.
      - customFunctions.js - contains any custom function that is used on the client side such as date formatting and image conversion to base64 string. These functions are then imported when necessary
      - RootContext.js - this is a necessary file when using useContext hook in react. App was initial designed with it but proved uneccassry. File left in as a reminded of where it can go in structure when using useContext.
  - App.jsx - where routes of the single page app are declared. Also where history is imported and passed in as prop to router. This page establishes all the routing for user and react.
  - index.css - contains all css that is global to the app
  - Index.jsx - beginning of the app. App.jsx is imported into it and a react render is created.

# Back-end

- controllers folder
  - classroomController.js - contains all server methods that interact with the classroom, announcement, assignment, comment schemas in the database
  - functions.js - contains all customer functions that are used in the controllers
  - purgatoryController.js - contains custom functions used specifically with user validation and security.
  - userController.js - contains all server methods that interact with the user schema in the database. Deals with creating JWT tokens for the user login sessions, hashing the password into database, user verification, etc.
- models folder
  - announcement.js - code for monggoDb to create announcement schema. This is a many to one relationship with announcements and register
  - assignment.js - code to create assignment schema. Many to one relationship with classrooms.
  - classrooms.js - code to create classroom schema. One to many relationship with Users and Assignments.
  - comments.js - code to create comments schema. This is many to one relationship with announcements.
  - index.js - file that exports all the schemas to be received by root server index.js file
  - register.js code to create the users schema. This is a one to many with classrooms.
- routes folder - this folder has two different formats for creating server code to received the client side routes.
  - classRoutes folder
    - index.js - class related routes are received here and sent to classRoomRoutes.js
    - classRoomRoutes.js - routes are broken out here and specific classRoomController method that is needed is called in this file under the specific route.
  - index.js - all user routes are received here and taken directly to the userController. Classroom routes are received here and taken into classRoutes folder
- scripts folder - contains seed data used during development

## Things To Improve On

- Add ability for comment value to be emptied upon submitting it
- Add Ability to save attachments for assignments
- Add ability for students to submit work for assignments
- Add ability to remove and edit assignments
- Add ability to remove & edit grades
- Add default value for select button
- Add a search by course discipline instead of search by subject
- Using react-scheduler to add a schedule page for the teacher to create a class schedule
- Breaking down server side set-up with routes and controllers to be more schema specific and therefore easier to find desired code in files

MERN
heroku repo created
username and password for mLab also created
connection with remote database established via robo3T

- https://socket.io/
- https://www.npmjs.com/package/jsonwebtoken
- https://www.npmjs.com/package/bcrypt
- http://www.npmjs.com/package/morgan
  - HTTP request logger middleware for node

## Security Considerations

### Authentication vs Authorization

- Authentication

  - Who are you?
  - Login with email and password

- Authorization
  - What are you allowed to do?
  - Check user rights

### JSON Web Tokens (JWTs)

- Access Token Standard
- Structured and Stateless
- Used for authorization and secure info exchange
- Statelessly handle user authentication
  - Renders need to reference a session or database obsolete
- Base64 encoded
- Pronounced "JOT"
- Cryptographically signed
  - If tampering occurs authorized status immediately revoked; signature invalid if modified in any way
- Always encoded, can be encrypted
- Open standard (RFC 7519) defining a compact and self-contained method for securely transmitting info between parties as a JSON object

### Anatomy of a JWT - Three Parts

- Header
  - Describes the token
  - Specifies type of token and hash algorithm used to create token's content
- Body
  - Payload
  - Contains user information known as "claims"
  - Information that JWT claiming to be true about user
  - Commonly includes name and timestamp reflecting JWT issue time
  - Token expiration time
- Signature (cryptographically signed in this app)
  - Verifies integrity of token
  - Ensures content is uncompromised (hasn't been tampered with)

### Base64 Encoded

- JWT is compact
- Header, Body, and Signature are each Base64 encoded
  - Then separated by dots
  - https://en.wikipedia.org/wiki/Base64
  - https://www.base64encode.net/
  - Base64 Index table (values 0-63)
  - values 0-25 -> uppercase A-Z
  - values 26-51 -> lowercase a-z
  - values 52-61 -> numbers 0-9
  - value 62 -> \_
  - value 63 -> -

#### JWT Example (Header.Body.Signature)

- Encoded (ASCII--American Standard Code for Information Interchange)
  - Header:
    - eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
  - Payload (Body):
    - eyJfaWQiOiI1ZThhMzFmZDRiMmQ0NTE2NjQ2YTFkYzUiLCJ0eXBlIjoidGVhY2hlciIsImZpcnN0TmFtZSI6Ikt5bGllIiwibGFzdE5hbWUiOiJNb25zdGVyIiwiZW1haWwiOiJLeWxlQGdtYWlsLmNvbSIsIklEIjoia21vbnN0ZXdvbWUxIiwiY3JlYXRlRGF0ZSI6IjIwMjAtMDQtMDVUMTk6MzE6MDkuMjk3WiIsIl9fdiI6MCwiaWF0IjoxNTg2MTczMDU4LCJleHAiOjIxOTA5NzMwNTh9.
  - Signature:
    - 9m0_s_N7T6WE9JfN9gZbQ_k8sEmPvIXszQlLvVk7WUU

### Cookies vs Local Storage -- JWTs on Client Side

- Local storage vulnerable to cross-site-scripting (XSS) attacks
  - Attacker can inject malicious javascript into app
  - Larger attack surface area
  - Can impact all application users on successful attack
- Cookies vulnerable to cross-site request forgery (CSRF)
  - Attacker can perform actions via an authenticated user
  - Similar to how viruses use capsids to infiltrate immune system undetected
- This React app has a dedicated server so JWTs are stored in an HttpOnly Cookie w/ secure flag enabled
  - protects from cross-site scripting (XSS)
  - secure flag ensures cookie only sent over https
  - such cookies cannot be accessed by JavaScript
  - Hence, why they're generated on a server
  - Can make CSRF protection stateless by including a xsrfToken JWT claim

### Password Hashing

- Bcryptjs was used for password hashing
  - Implemented when a new user is created
  - 10 rounds of salting
  - Unhashed password is never stored in the database
  - all objects performing res.json have hashed passwords deliberately deleted from clones

### Generating environmental secrets

- open terminal in vscode
  - type: node
  - hit: enter
- this opens up node terminal
  - type: require('crypto').randomBytes(64).toString('hex')
  - hit: enter
- this returns a 122 character string in hexadecimal
  - 1 Byte = 8 bits;
  - 512 random bits (64 Bytes) used in crypto secret generation
  - example:
    - 'ed3797711bd78a72186fae8b8200bca2e9e14bce3eba46a5797b3bb34f6e23ccac398ffc82fc4bf57d4afab2ffb1aa4a3357aede9f27bbb69d1150dd35'

| Decimal | 8-bit Binary | Hexadecimal |
| ------- | ------------ | ----------- |
| 0       | 0000 0000    | 00          |
| 1       | 0000 0001    | 01          |
| 2       | 0000 0010    | 02          |
| 3       | 0000 0011    | 03          |
| 4       | 0000 0100    | 04          |
| 5       | 0000 0101    | 05          |
| 6       | 0000 0110    | 06          |
| 7       | 0000 0111    | 07          |
| 8       | 0000 1000    | 08          |
| 9       | 0000 1001    | 09          |
| 10      | 0000 1010    | 0A          |
| 11      | 0000 1011    | 0B          |
| 12      | 0000 1100    | 0C          |
| 13      | 0000 1101    | 0D          |
| 14      | 0000 1110    | 0E          |
| 15      | 0000 1111    | 0F          |
| 16      | 0001 0000    | 10          |
| 17      | 0001 0001    | 11          |
| 18      | 0001 0010    | 12          |
| 19      | 0001 0011    | 13          |
| 20      | 0001 0100    | 14          |
| 21      | 0001 0101    | 15          |
| 22      | 0001 0110    | 16          |
| 23      | 0001 0111    | 17          |
| 24      | 0001 1000    | 18          |
| 25      | 0001 1001    | 19          |
| 26      | 0001 1010    | 1A          |
| 27      | 0001 1011    | 1B          |
| 28      | 0001 1100    | 1C          |
| 29      | 0001 1101    | 1D          |
| 30      | 0001 1110    | 1E          |
| 31      | 0001 1111    | 1F          |
| 32      | 0010 0000    | 20          |
| 33      | 0010 0001    | 21          |
| 34      | 0010 0010    | 22          |
| 35      | 0010 0011    | 23          |
| 36      | 0010 0100    | 24          |
| 37      | 0010 0101    | 25          |
| 38      | 0010 0110    | 26          |
| 39      | 0010 0111    | 27          |
| 40      | 0010 1000    | 28          |
| 41      | 0010 1001    | 29          |
| 42      | 0010 1010    | 2A          |
| 43      | 0010 1011    | 2B          |
| 44      | 0010 1100    | 2C          |
| 45      | 0010 1101    | 2D          |
| 46      | 0010 1110    | 2E          |
| 47      | 0010 1111    | 2F          |
| 48      | 0011 0000    | 30          |
| 49      | 0011 0001    | 31          |
| 50      | 0011 0010    | 32          |
| 51      | 0011 0011    | 33          |
| 52      | 0011 0100    | 34          |
| 53      | 0011 0101    | 35          |
| 54      | 0011 0110    | 36          |
| 55      | 0011 0111    | 37          |
| 56      | 0011 1000    | 38          |
| 57      | 0011 1001    | 39          |
| 58      | 0011 1010    | 3A          |
| 59      | 0011 1011    | 3B          |
| 60      | 0011 1100    | 3C          |
| 61      | 0011 1101    | 3D          |
| 62      | 0011 1110    | 3E          |
| 63      | 0011 1111    | 3F          |
| 64      | 0100 0000    | 40          |

- https://introcs.cs.princeton.edu/java/61data/

* Note: can delete node_modules from terminal via rm -rf node_modules/
