import { ApolloServer } from "apollo-server-express";
import express from 'express';
import mongoose from 'mongoose';
import { resolvers } from "./resolvers";
import { typeDefs } from "./typeDefs";
import PostsAPI from "./datasources/post";
import {mongoUrl} from './contants';

const app = express();

const uri = mongoUrl;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('MongoDB Connected…')
})
.catch(err => console.log(err))


const dataSources = () => ({
  postAPI : new PostsAPI()
})

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources
});

server.applyMiddleware({app});  

app.listen({port: 5000} ,() => 
 console.log(`🚀 Server ready `)
)