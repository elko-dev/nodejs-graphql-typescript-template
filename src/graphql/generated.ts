export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};

export type BooleanResponse = {
  __typename?: 'BooleanResponse';
  response?: Maybe<Scalars['Boolean']>;
  errors: Array<Maybe<Error>>;
};


export enum DaysOfWeek {
  Sunday = 'sunday',
  Monday = 'monday',
  Tuesday = 'tuesday',
  Wednesday = 'wednesday',
  Thursday = 'thursday',
  Friday = 'friday',
  Saturday = 'saturday'
}

export type Error = {
  __typename?: 'Error';
  message: Scalars['String'];
};

export type GenericResponse = {
  __typename?: 'GenericResponse';
  message?: Maybe<Scalars['String']>;
  errors: Array<Maybe<Error>>;
};

export type Location = {
  __typename?: 'Location';
  id: Scalars['ID'];
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
};

export type LocationResponse = {
  __typename?: 'LocationResponse';
  location?: Maybe<Location>;
  errors: Array<Maybe<Error>>;
};

export type LocationsResponse = {
  __typename?: 'LocationsResponse';
  locations?: Maybe<Array<Maybe<Location>>>;
  errors: Array<Maybe<Error>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  signUpUser?: Maybe<UserResponse>;
  signUpAuthorizedUser?: Maybe<UserResponse>;
  createLocation?: Maybe<LocationResponse>;
};


export type MutationSignUpUserArgs = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  phoneNumber?: Maybe<Scalars['String']>;
  password: Scalars['String'];
};


export type MutationSignUpAuthorizedUserArgs = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  authId: Scalars['String'];
  phoneNumber?: Maybe<Scalars['String']>;
};


export type MutationCreateLocationArgs = {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
};

export type PushNotification = {
  __typename?: 'PushNotification';
  title: Scalars['String'];
  message: Scalars['String'];
  pushIconUrl?: Maybe<Scalars['String']>;
  sound?: Maybe<Scalars['String']>;
  clickAction?: Maybe<Scalars['String']>;
  androidNotificationChannel?: Maybe<Scalars['String']>;
  androidNotificationColor?: Maybe<Scalars['String']>;
  androidImageUrl?: Maybe<Scalars['String']>;
};

export type PushNotificationResponse = {
  __typename?: 'PushNotificationResponse';
  location?: Maybe<Location>;
  errors: Array<Maybe<Error>>;
};

export type Query = {
  __typename?: 'Query';
  getUser: UserResponse;
  getUserByFirebaseId: UserResponse;
  getLocations: LocationsResponse;
};


export type QueryGetUserArgs = {
  id: Scalars['String'];
};


export type QueryGetUserByFirebaseIdArgs = {
  id: Scalars['String'];
};


export type QueryGetLocationsArgs = {
  input?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  phoneNumber?: Maybe<Scalars['String']>;
};

export type UserResponse = {
  __typename?: 'UserResponse';
  user?: Maybe<User>;
  errors: Array<Maybe<Error>>;
};
