import { GraphQLServer } from 'graphql-yoga';
import resolvers from './resolvers';
import { createConnection } from "typeorm";
import * as firebase from "firebase/app";
const cors = require('cors');

const DATBASE_URL = process.env.DATABASE_URL;
const SYNCHRONIZE: boolean = process.env.TYPEORM_SYNCHRONIZE === "true" ? true : false;
const LOGGING: boolean = process.env.TYPEORM_LOGGING === "true" ? true : false;
const serviceAccount = require("./config/web-spawn-platform.json");

firebase.initializeApp(serviceAccount);

createConnection({
  type: 'postgres',
  synchronize: SYNCHRONIZE,
  url: DATBASE_URL,
  logging: LOGGING,
  entities: ["./src/models/*{.ts,.js}"],
}).then(() => { console.log('connected to db'); })
  .catch((err) => {
    console.log('error connecting to db ', err);
    process.exit(1);
  });

const server = new GraphQLServer({
  typeDefs: './src/graphql/schema.graphql',
  resolvers,
  context: request => ({
    ...request,
  }),
});

server.express.get('/health', function(req, res) {
  res.send('OK');
});
server.use(cors());

server.start(() => console.log(`Server is running on http://localhost:4000`));
