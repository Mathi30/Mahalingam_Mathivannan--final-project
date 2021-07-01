# FS1020-course-project-mathi

FS1020 Course project
Route Requirements
Note: Any validation or any other errors for requests should use the appropriate status code, alongside the documented response body for the error.


Route to create an entry when the user submits their contact form:
POST /contact_form/entries
Request body expected:
{
    "name": "some string",
    "email": "address@email.com", // should be a valid email address
    "phoneNumber": "2343331234",
    "content": "User's message goes here"
}
When saving the above, a property id should be added to the object that uses the format of a UUID v4. You can use a package such as uuid to generate it.
Successful request should return the created object, including its id with the appropriate status code, e.g.:
{
    "id": "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
    "name": "some string",
    "email": "address@email.com",
    "phoneNumber": "2343331234",
    "content": "User's message goes here"
}
In the event the body of the request is missing any of the following properties, or these fields have incorrect values: name, email, phoneNumber, content, it should be treated as a Bad Request, and the response should be in the format of:
{
    "message": "validation error",
    "invalid": ["email", "phoneNumber"] // this array should be populated with name of any required property that is missing or has incorrect data
}


Route to create a user:
POST /users
Request body accepted (all properties required):
{
    "name": "Some Name",
    "password": "password", // must be minimum 8 characters
    "email": "address@email.com" // must be a valid email address
}
When saving the above, a property id should be added to the object that uses the format of a UUID v4. You can use a package such as uuid to generate it.
Successful request should return the created object, including its id with the appropriate status code, e.g.:
{
    "id": "b34adff-3b7d-4bad-9bdd-2b0d7b3dcb6d",
    "name": "Some Name",
    "email": "address@email.com"
}
In the event any of the properties are missing, or the wrong values are provided, alongside the appropriate status code (Bad Request), the response should be in the format of:
{
    "message": "validation error",
    "invalid": ["email"] // this array should be populated with name of any required property that is missing or has incorrect data
}


Route to log a registered user in to create a JWT (JSON Web Token) token:
POST /auth
Expected request:
{
    "email": "address@email.com",
    "password": "somepassword"
}
Successful response (alongside the appropriate status code):
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
}
In the event the email and password do not match, Unauthorized status code should be given, with following response body:
{
    "message": "incorrect credentials provided"
}


Route to get a listing of all submissions when given a valid JWT is provided as part of the :
GET /contact_form/entries
Authorization: bearer token
Where token is the one received from the route definied above.
Upon success, an array consisting of all objects for the contact form entries should be displayed, e.g.:
[
    {
       "id": "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
        "name": "some string",
        "email": "address@email.com",
        "phoneNumber": "2343331234",
        "content": "User's message goes here"
    }, {
        "id": "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
        "name": "another one",
        "email": "msn@email.com",
        "phoneNumber": "4",
        "content": "Another message"
    }
]
In the event the JWT is invalid, or not provided, the Forbidden status code should be returned alongside with a reason why, e.g.:
{
    "message": "token not provided" // other options for this message include: "token expired"
}


Route to get a specific submission when given an ID alongside a valid JWT:
GET /contact_form/entries/:id
Authorization: bearer token
If successful, the response, alongside the appropriate status code should be similar to below based on the submission entry id given:
{
    "id": "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
    "name": "some string",
    "email": "address@email.com",
    "phoneNumber": "2343331234",
    "content": "User's message goes here"
}
If requested ID is not found, Not Found status code should be returned alongside a response:
{
    "message": "entry 23bacf-3b7d-4bad-9bdd-2b0d7b3dcb6d not found"
}
In the event the JWT is invalid, or not provided, the Forbidden status code should be returned alongside with a reason why, e.g.:
{
    "message": "token not provided" // other options for this message include: "token expired"
}


Node and Express Setup
1. Create new project in gitlab/Clone the project to your accout
2. Clone locally to your system
3. create a new branch
4. Create a .gitignore field
5. initalize  by npm init accept the default configuration
6. after initalization the package.json file will be created
7. Install express and esm by running  "npm install express esm --save"
8. Edit the package.josn file and  add "type": "module", toward the end.
9. Install nodemon by  as dev dependecy "npm install nodemon --save-dev"
10. edit package.json and add the lines below under script sesision
     "start": "node -r esm index.js",
    "dev": "nodemon -r esm index.js",
11. Create a new index,js file andd the following lines
import express from 'express'
const app = express()

app.use(express.json())

app.listen(3000, () => console.log("Server is listening on port 3000"))

12. Run the npm run dev commad in terminal to start the nodemon in dev mode.
