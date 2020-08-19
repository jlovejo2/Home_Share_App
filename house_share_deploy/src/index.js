"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
// const express = require("express");
//typeScript supports import
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const compression_1 = __importDefault(require("compression"));
const apollo_server_express_1 = require("apollo-server-express");
const database_1 = require("./database");
const graphql_1 = require("./graphql");
//makes database connection more apparent
//the app has type that is the Application imported from express
//mount function excepts the express app instance
const mount = (app) => __awaiter(void 0, void 0, void 0, function* () {
    const db = yield database_1.connectDatabase();
    app.use(body_parser_1.default.json({ limit: "2mb" }));
    app.use(cookie_parser_1.default(process.env.SECRET));
    app.use(compression_1.default());
    //express method for serving static files
    app.use(express_1.default.static(`${__dirname}/client`));
    //tells every route user enters to serve same index.html file
    app.get("/*", (_req, res) => res.sendFile(`${__dirname}/client/index.html`));
    //creating instance of ApolloServer
    //passing in options needed to instantiate the apolloServer instance
    //ApolloSever expects an existing schema or object with typeDefs and resolvers to be passed into it
    //context option allows all resolvers to have access to connecting to the db
    const server = new apollo_server_express_1.ApolloServer({
        typeDefs: graphql_1.typeDefs,
        resolvers: graphql_1.resolvers,
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
});
//dismount function runs the express()
mount(express_1.default());
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
