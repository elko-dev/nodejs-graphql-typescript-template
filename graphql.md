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


mutation {
  createLocation(
    latitude: "10"
    longitude: "asdf"
    name: "myname"
    description: "coolplace"
  ) {
    location{
      id
      latitude
      longitude
      name
      description
    }
    errors{
      message
    }
  }
}
