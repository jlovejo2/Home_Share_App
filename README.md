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

### Back-end

- src folder
  - [database folder - contains an index.ts which has the code the creates the connection to the mongo database and returns the collections](/server/src/database)
  - [graphql folder - contains all the resolver function code for interacting with the database via graphql and the type definitions for those.](/server/src/graphql)
    - [resolvers folder - contains all the resolver function ](/server/src/graphql/resolver)
      - Booking - contains queries for booking id, booking listing, user that made booking. Then mutation for creating a booking. And types file with input argument interfaces for booking resolver functions
      - Listing - contains queries for listing info and all listings based on a location. Then mutation for a host creating a listing. As well as listing specific queries for id, host, bookingsIndex, and bookings. Also contains types file with input argument interfaces for listing resolver functions
      - User - contains query for all user information, and user specific queries for user id, user connected to stripe or not, user income, user bookings, and user listings. Also contains types file with input argument interfaces for user resolver functions
      - Viewer - contains query for authorization from google. Then mutations for logging in, logging out, connecting to Stripe, and disconnecting from Stripe. Then viewer specific queries for id and if viewer has connected to stripe or not. Also types file with input argument interfaces for viewer resolver functions
    - typeDefs.ts - contains input and type definitions for all resolver functions
  - [lib folder - contains code for interacting with apis and custom back-end functions ](/server/src/graphql/lib)
    - api folder
      - Cloudinary.ts - contains function for uploading photos to cloudinary api
      - Google.ts - creates authorization with google for the two apis used. Then contains function for parse address for search query, function for interacting with geocode Goolge API, and function for interacting with Google People Api
      - Stripe.ts - contains functions for connecting to Stripe, disconnecting from Stripe, and performing the charge with Stripe.
    - utils folder - contains custom back-end functions
    - types.ts - exports all typescript interfaces specific to functions in lib folder
  - temp folder - contains the files for seeding and clearing the database of development data
  - index.ts - contains the main code to create the server connection, interact with middleware, and direct server routes.

## Things To Improve On

- Add a chat for users to communicate with hosts of the listings once they've booked
- Add a contact administrator place for users to input request for any issues that are found
