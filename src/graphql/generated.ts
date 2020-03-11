export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
   __typename?: 'Mutation';
  createUser: User;
};


export type MutationCreateUserArgs = {
  email: Scalars['String'];
  name: Scalars['String'];
  phoneNumber: Scalars['String'];
};

export type Query = {
   __typename?: 'Query';
  getUser: User;
};


export type QueryGetUserArgs = {
  name: Scalars['String'];
};

export type User = {
   __typename?: 'User';
  id: Scalars['ID'];
  email: Scalars['String'];
  name: Scalars['String'];
};


            import {gql} from 'apollo-server';
            export const typeDefs = gql`type Mutation {
  createUser(email: String!, name: String!, phoneNumber: String!): User!
}

type User {
  id: ID!
  email: String!
  name: String!
}

type Query {
  getUser(name: String!): User!
}`;
        