import { GraphQLServer } from 'graphql-yoga';
import resolvers from './resolvers';
import { createConnection } from "typeorm";

const DATBASE_URL = process.env.DATABASE_URL;
const SYNCHRONIZE: boolean = process.env.TYPEORM_SYNCHRONIZE === "true" ? true : false;
const LOGGING: boolean = process.env.TYPEORM_LOGGING === "true" ? true : false;
// Create Database Connection

createConnection({
  type: 'postgres',
  synchronize: SYNCHRONIZE,
  url: DATBASE_URL,
  logging: LOGGING,
  entities: ["./src/models/*{.ts,.js}"],
}).then(() => { console.log('connected to db'); })
  .catch((err) => { console.log('error connecting to db ', err); });

const server = new GraphQLServer({
  typeDefs: './src/graphql/schema.graphql',
  resolvers,
  context: request => ({
    ...request,
  }),
});
server.start(() => console.log(`Server is running on http://localhost:4000`));
