## Task - B -

- NodeJS/Python + MySQL assignment Table "company" has the following columns
- Table "user" has the following columns: userld, userName, userName, mobile, password, companyld companyld is a foreign key to "company" table
- Write a function in NodeJS/Python that has "companyld" as a parameter. This function should return a list of users that belong to this companyld.

### Models

- User Model

```yaml
{
  userName: { string, mandatory },
  email: { string, mandatory, valid email, unique },
  password: { string, mandatory, valid password },
  mobile: { integer, mandatory },
  companyld: { integer, mandatory },
  createdAt: { timestamp },
  updatedAt: { timestamp },
}
```

## User APIs

### POST /register

- Create a user document from request body.
- **Response format**

```yaml
{
  "message": "User registration successfull",
  "data":
    {
      "userId": 3,
      "userName": "po",
      "email": "po@gmail.com",
      "password": "password",
      "mobile": "1111111111",
      "companyId": "1",
      "updatedAt": "2023-07-03T15:51:40.938Z",
      "createdAt": "2023-07-03T15:51:40.938Z",
    },
}
```

- Create a company document from request body.
- **Response format**

```yaml
{
  {
    "message": "Company registration successfull",
    "data":
      {
        "companyId": 2,
        "companyName": "WAYNE",
        "updatedAt": "2023-07-03T15:52:52.306Z",
        "createdAt": "2023-07-03T15:52:52.306Z",
      },
  },
}
```

### GET /users/companyId

- Get all users of a given companyId
- **Response format**

```yaml
{
  "data":
    [
      {
        "userId": 1,
        "userName": "Ashish",
        "email": "ash@gmail.com",
        "password": "password",
        "mobile": 1111111111,
        "companyId": 1,
        "createdAt": "2023-07-03T15:20:30.000Z",
        "updatedAt": "2023-07-03T15:20:30.000Z",
        "Company": { "companyId": 1, "companyName": "functionup" },
      },
      {
        "userId": 2,
        "userName": "batman",
        "email": "batman@gmail.com",
        "password": "password",
        "mobile": 1111111111,
        "companyId": 1,
        "createdAt": "2023-07-03T15:21:20.000Z",
        "updatedAt": "2023-07-03T15:21:20.000Z",
        "Company": { "companyId": 1, "companyName": "functionup" },
      },
      {
        "userId": 3,
        "userName": "po",
        "email": "po@gmail.com",
        "password": "password",
        "mobile": 1111111111,
        "companyId": 1,
        "createdAt": "2023-07-03T15:51:40.000Z",
        "updatedAt": "2023-07-03T15:51:40.000Z",
        "Company": { "companyId": 1, "companyName": "functionup" },
      },
    ],
}
```
