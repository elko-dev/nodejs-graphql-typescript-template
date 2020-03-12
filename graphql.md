mutation {
  createUser(
    email: "andrew@andrew.com"
    firstName: "firstName"
    lastName: "lastName"
    phoneNumber: "11111111111"
  ) {
    email
    firstName
    lastName
    phoneNumber
  }
}
