 **User Sign-up**
````
mutation {
  signUpUser(
    email: "andrew@andrew.com"
    firstName: "firstName"
    lastName: "lastName"
    phoneNumber: "11111111111"
    password: "1234567890"
  ) {
    user {
      email
      firstName
      lastName
      phoneNumber
    }
     errors {
      message
    }
  }
}
`````
**Location**
````
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
````
**User Photo's**
````
POST http://localhost:4000/upload/uploadUserProfilePhoto/dev/0
````
**Push Notification's**
````
 mutation {
    sendPushNotifications(
        tokens:["12345aa"]
        title:"Test"
        message:"Test 1234"
        topic: ""
        pushIconUrl: ""
        sound: ""
        clickAction: ""
        androidNotificationChannel:""
        androidNotificationColor:""
        androidImageUrl:""
  ) {
    
      response
      errors {
        message
      }    
  }
  }
  mutation {
      sendPushNotifications(
          tokens:["12345aa"]
          title:"Test"
          message:"Test 1234"
    ) {
      
        response
        errors {
          message
        }    
    }
    }
  ````