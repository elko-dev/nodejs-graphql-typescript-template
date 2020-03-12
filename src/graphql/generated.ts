export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Error = {
   __typename?: 'Error';
  message: Scalars['String'];
};

export type Mutation = {
   __typename?: 'Mutation';
  createUser: User;
};


export type MutationCreateUserArgs = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  phoneNumber: Scalars['String'];
};

export type Query = {
   __typename?: 'Query';
  getUser: UserQueryResponse;
};


export type QueryGetUserArgs = {
  id: Scalars['String'];
};

export type User = {
   __typename?: 'User';
  id: Scalars['ID'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  phoneNumber: Scalars['String'];
};

export type UserQueryResponse = {
   __typename?: 'UserQueryResponse';
  user?: Maybe<User>;
  errors: Array<Maybe<Error>>;
};
