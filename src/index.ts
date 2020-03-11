import { GraphQLServer } from 'graphql-yoga';
import resolvers from './resolvers';
import { createConnection } from 'typeorm';

// Create Database Connection
createConnection();

const server = new GraphQLServer({
  typeDefs: './src/graphql/schema.graphql',
  resolvers,
  context: request => ({
    ...request,
  }),
});
server.start(() => console.log(`Server is running on http://localhost:4000`));
