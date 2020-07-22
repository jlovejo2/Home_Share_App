require("dotenv").config();

// const express = require("express");
//typeScript supports import
import express, { Application } from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import { ApolloServer } from "apollo-server-express";
import { connectDatabase } from "./database";
import { typeDefs, resolvers } from "./graphql";

// import bodyParser from "body-parser";
// import { listings } from "./listings";

//makes database connection more apparent
//the app has type that is the Application imported from express
//mount function excepts the express app instance
const mount = async (app: Application) => {
  const db = await connectDatabase();

  app.use(bodyParser.json({ limit: "2mb" }));
  app.use(cookieParser(process.env.SECRET));
  //creating instance of ApolloServer
  //passing in options needed to instantiate the apolloServer instance
  //ApolloSever expects an existing schema or object with typeDefs and resolvers to be passed into it
  //context option allows all resolvers to have access to connecting to the db
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req, res }) => ({ db, req, res }),
  });
  //specify middleware to work alongisde existing server middleware
  //passing in express app instance and where graphql api should live
  server.applyMiddleware({ app, path: "/api" });

  app.listen(process.env.PORT);

  console.log(`[app]: http://localhost:${process.env.PORT}`);

  //The below two lines of code are used to check that the connection to the database is made and the data is then console logged
  // const listings = await db.listings.find({}).toArray();
  // console.log(listings);
};

//dismount function runs the express()
mount(express());

//______________________________________________
//-------Saved Code from Previous Lessons -------
//_______________________________________________

//had to use gitBash for curl to work properly
//curl -X POST http://localhost:9000/delete-listing -H 'Content-Type: application/json' -d '{"id": "001"}'

//use for middleware
// app.use(bodyParser.json());

//declares the type of the variable to be checked
// const one = 1;
// const two = 2;
// null, any, boolean, other types as well

// "_" before the req tells vscode we are aware of the error but need it to be there at this time
// app.get("/", (_req, res) => res.send(`1 + 2 = ${one + two}`));

//get listing route
// app.get("/listings", (_req, res) => {
//   return res.send(listings);
// });

//delete listing
// app.post("/delete-listing", (req, res) => {
//   const id: string = req.body.id;

//   for (let i = 0; i < listings.length; i++) {
//     if (listings[i].id === id) {
//       return res.send(listings.splice(i, 1));
//     }
//   }

//   return res.send("failed to delete listing");
// });
