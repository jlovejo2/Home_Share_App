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

- The home page is described by the two images below.
  | Starting page of App Top Half | Start page of App Bottom Half |
  | :---------------------------: | :-------------------------------------: |
  | !["Starting page of App Image One"](/client/public/assets/images/readme/home_page_One.jpg)|!["Starting page of App Image Two"](/client/public/assets/images/readme/home_page_Two.png)|
  | This first shows the upper half the page consisting of the header and then four images that when clicked will automatically run a search for listings in the city shown by the images. The app header is within the green box and consists of a clickable logo(will take user back to home page), a search bar that will search for lisitings based on user's query, a host button which allows a logged in user to create a listing, and then a conditional button that allows user to sign in. Once user is signed in the conditional button will switch to a dropwdown menu that will either allow user to navigate to profile page or sign out. | The second image(above) shows the rest of the home page for the Home Share App. The first section displays a description explaining what the Home Share Apps goal is and has a button that allows that when clicked will run a search for all listings in the United States. The next section lists the Premium Listings(or four most expensive listings) currently on the App. |

- Listings Page is described below.
  | Listings Page |
  |:-------------:|
  |!["Listings"](/client/public/assets/images/readme/Listings_page.png) |
  |At any time throughout the app the user can type a search query into the search bar in the header and submit it. This will navigate the user to the listings page which displays all the listings that exist in the database based on that query. The listings are created in the database using Google geocode Api so they are searchable by city, state, or country.|

- The Login Page is described below.
  | Login Page |
  | :------------------: |
  | !["Login"](/client/public/assets/images/readme/Login_page.png) |
  | The above image shows the login page. User navigates here by clicking the "sign in" button. For this site google Oauth 2 was used to create and get user information. Therefore when the user clicks the "sign in with google" button they are navigated to Goole Oauth authorization page. Here they verify who they are using googles authorization api and then get navigated to their profile page for House Share App once House Share App receives verification from Google that they are who they say they are. |

- The Profile page is described by the two images below
  | Profile Page Top Half | Profile Page Bottom Half |
  |:----------------------: |:--------------------------: |
  |!["Profile One"](/client/public/assets/images/readme/Profile_page_1.png)|!["Profile Two"](/client/public/assets/images/readme/Profile_page_2.png)|
  | The above image shows the top half of the user profile page. Here the users avatar is displayed, as well as come basic info about their account. There is a button that allows the user to connect their stripe account. Once it is connected the button renders to be able to disconnect account. | The above page shows the bottom half the user page. Here all the listings the user has created are displayed as well as all the bookings the user has made. |

- The Listing page (shows details of listing) is described by the two images below.
  | Listing Page Top Half | Listing Page Bottom Half |
  |:--------------------: | :------------------------: |
  |!["Listing One"](/client/public/assets/images/readme/Listing_page_1.png)| !["Listing Two"](/client/public/assets/images/readme/Listing_page_2.png) |
  | On the left is the image of the listing and below that are the location and the title for the listing. On the left is the interface for checking available dates and proceeding to book a listing | If the user scrolls down there is more information for the listing including: some host info and descrition of the listing. |

- This set of images shows datepicker and booking interface for listing page
  | Listing Page Date Picker | Listing Page Booking Modal |
  | :-------------------------------------------------: |:------------------------------:|
  | !["Datepicker"](/client/public/assets/images/readme/Listing_page_datepicker.png) | !["Booking Modal"](/client/public/assets/images/readme/Listing_page_book-modal.png) |
  | The datepicker for the listing page has validation built into so no dates that are already booked can be selected, dates in the past can't be selected, and user can only book dates within 3 months of that day. User also must pick a check-in date first before picking a checkout date. This was done in order to aid validation that makes sure check-in date is before check-out. | Once dates are selected that are valid user can click the "Request to book" button which will render the book modal. It will display information for the user to verify is correct as well as show them the cost of their booking. User can then add credit card info and proceed to book the listing. At the very top of this image is a notification that will be displayed if an error occurs when the user tries to book the listing. |

- This images shows the page user is navigated to and notification that displays if booking is successful
  | Successful booking notification |
  | :-----------------------------------------------------------------------------: |
  | !["Success"](/client/public/assets/images/readme/successful_booking.png) |
  | When the User completes a successful booking the booking modal is closed and notification will render notifying them that their booking was successful. This notification is displayed in upper left corner. |

- User can't host a listing without connecting a Stripe Account
  | Can't Host without Stripe Account Connected |
  |:-------------------------------------------:|
  |!["No Stripe"](/client/public/assets/images/readme/host_no_stripe.jpg)|
  | The host button in the app header is highlighted by the green box in above image. If the user has not connected their stripe account then the host page will display the message above. |

- Host a listing page shown below
  | Host Page |
  | :-------------------------------------------------------------------: |
  | !["Host One"](/client/public/assets/images/readme/host_listing_1.png) !["Host Two"](/client/public/assets/images/readme/host_listing_2.png) |
  | The host page is where the user enters all the information that is displayed on the listing page. It is also used to perform the booking computations for per day rental. |

- How to Logout
  | Logging Out |
  |:-------------:|
  |!["Logging Out"](/client/public/assets/images/readme/Log-out_page.png)|
  | To log out a user will click on their avatar icon in the app header. This will display a menu with one of the options being "log out." Clicking this will log the user out and a notification will be displayed if the log out was successful. |

## Guest Login Info

- Guest:
  - email: codingGuestAcct.james.lovejoy2@gmail.com
  - password: g3u5tAcct!

## Coding Languages Used

- Typescript
- Javascript
- JSX
- CSS

## CSS Framework:

- Ant-design

## Apis Used:

- Stripe
- Google APIs people
- Google APIs Geocode
- Google APIs OAuth 2.0
- Cloudinary

## NPMs Used:

### Client-Side

- antd
- apollo-boost
- graphql
- moment
- react
- react-apollo
- react-dom
- react-router-dom
- react-scripts
- react-stripe-elements
- typescript
- @ant-design/compatible
- @ant-design/icons
- @testing-library/jest-dom
- @testing-library/react
- @testing-library/user-event
- @types/graphql
- @types/jest
- @types/node
- @types/react
- @types/react-dom
- @types/react-router-dom
- @types/react-stripe-elements

### BackEnd

- @google/maps
- @googlemaps/google-maps-services-js
- apollo-server-express
- body-parser
- cloudinary
- cookie-parser
- express
- googleapis
- graphql
- lodash.merge
- mongodb
- stripe
- dotenv
- eslint
- nodemon
- ts-node
- typescript
- @types/body-parser
- @types/cookie-parser
- @types/dotenv
- @types/express
- @types/google\_\_maps
- @types/googlemaps
- @types/graphql
- @types/lodash.merge
- @types/mongodb
- @types/node
- @typescript-eslint/eslint-plugin
- @typescript-eslint/parser

## Structure of Code and Functions

### Front-End - Client folder

- public folder
  - assets folder - contains images used in the readme file
  - index.html - with react does not contain much code but necessary external links for library sources. It interacts with App.js
- src folder - this is the meat of react and holds most of the front-end code

  - lib folder

    - [components folder - contains components that are used across multiple pages](/client/src/lib/components)
      - AppHeaderSkeleton - code for the creation of the skeleton for Appheader when page is loading
      - ErrorBanner - a component that displays a generic error banner
      - ListingCard - component for rendering the listing cards used on home page and listings page
      - PageSkeleton - component that creates a generic skeleton for when the entire page is loading
      - index.tsx - references and exports all these components
    - graphql folder

      - [mutations folder - contains all the client-side mutation code and type definitions used to access database through graphql](/client/src/lib/components/graphql/mutations)
        - ConnectStripe - contains the graphql code to access the corresponding connect to stripe mutation for server
        - ConnectBooking - contains the graphql code to access the corresponding connect to stripe and create booking mutation for server
        - DisconnectStripe - contains the graphql code to access the corresponding disconnect from stripe mutation for server
        - HostListing - contains the graphql code to access the corresponding create a listing mutation for server
        - LogIn - contains the graphql code to access the corresponding user log in mutation for server
        - LogOut - contains the graphql code to access the corresponding user log out mutation for server
      - [queries folder - contains all the client-side queries and type definitions used to access database through graphql](/client/src/lib/components/graphql/queries)
        - AuthUrl - contains the graphql query code to request user authorization from server(server then requests authorization from Google OAuth)
        - Listing - conatins the graphql query code to request information for a Listing based on its id
        - Listings - contains the graphql query code to request all listings and their info based on a given location
        - User - contains the graphql query code to request user information
      - [globalTypes.ts - contains all type and interface definitions for input information to graphql queries and mutations](/client/src/lib/components/graphql/globalTypes.ts)
      - [hooks folder - contains all custom client-side react hooks](/client/src/lib/components/hooks/)
        - useScrollToTop - a custom hook that sets the scroll to the top of the page when a user is navigated to it
      - [utils folder - contains all the custom functions used for client side formating, as well as error and success notification components ](/client/src/lib/components/utils)
      - types.ts - contains the type definition for the Viewer interface.

  - [sections folder - contains all the front-end code for each page and react functional components](/client/src/sections/)

    - AppHeader folder - code for AppHeader
      - index.tsx - contains all the code specific to rendering the page itself
      - components folder - contains any components that were created specific to this page
    - Home - code for Home Page
      - index.tsx - contains all the code specific to rendering the page itself
      - components folder - contains any components that were created specific to this page
    - Host - code for Hosting a listing Page
      - index.tsx - contains all the code specific to rendering the page itself
      - components folder - contains any components that were created specific to this page
    - Listing - code for Listing Page
      - index.tsx - contains all the code specific to rendering the page itself
      - components folder - contains any components that were created specific to this page
    - Listings - code for page that displays listings based on search criteria
      - index.tsx - contains all the code specific to rendering the page itself
      - components folder - contains any components that were created specific to this page
    - Login - code for page rendered when user attempts to sign in
      - index.tsx - contains all the code specific to rendering the page itself
      - components folder - contains any components that were created specific to this page
    - Notfound - code for page that renders when a url that doesn't exist is entered
      - index.tsx - contains all the code specific to rendering the page itself
      - components folder - contains any components that were created specific to this page
    - Stripe - code for page that renders when user connects stripe account
      - index.tsx - contains all the code specific to rendering the page itself
      - components folder - contains any components that were created specific to this page
    - User - code for profile page

      - index.tsx - contains all the code specific to rendering the page itself
      - components folder - contains any components that were created specific to this page

  - styles folder - contains all global css files
  - index.tsx - is the top most page for react-typescript code. This is where the user enters the client-side and then is routed to all the subsequent components from
  - react-app.env.d.ts - tells typescript where to look for the typescript definitions for react code
  - serviceWorker.ts


    - contains a jsx file that imports the createBrowserHistory function from the 'history' component of react. This is then imported in certain files inorder to navigate to various pages based on specific conditions

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

### Back-end

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
