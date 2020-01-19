const fs = require('fs');

/**
 * Adds some lines to the output that exports a parsed DocumentNode for passing to ApolloServer.
 */
module.exports = {
    plugin: (schema, documents, config) => {
        const schemaText = fs.readFileSync('./src/graphql/schema.graphql').toString('utf8');

        return `
            import {gql} from 'apollo-server';
            export const typeDefs = gql\`${schemaText}\`;
        `;
    }
};
