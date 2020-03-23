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
  signUpUser?: Maybe<UserResponse>;
};


export type MutationSignUpUserArgs = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  phoneNumber: Scalars['String'];
  password: Scalars['String'];
};

export type Query = {
   __typename?: 'Query';
  getUser: UserResponse;
  getUserByFirebaseId: UserResponse;
};


export type QueryGetUserArgs = {
  id: Scalars['String'];
};


export type QueryGetUserByFirebaseIdArgs = {
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

export type UserResponse = {
   __typename?: 'UserResponse';
  user?: Maybe<User>;
  errors: Array<Maybe<Error>>;
};
