# Project Focal Backend

This is the backend for Project Focal, a social media platform that allows users to create and share posts with others. The backend is built using Node.js and uses several technologies including Azure, MongoDB (CosmosDB), Azure Blob Storage, JWT tokens, and refresh tokens.

## Requirements

To run this backend, you will need:

 - Node.js (version 12 or higher)
 - MongoDB (CosmosDB)
 - Azure Blob Storage Account
 - Azure Account with Active Subscription
 - npm (Node Package Manager)

## Installation
1. Clone the repository to your local machine

```bash
$ git clone https://github.com/<YOUR-USERNAME>/project-focal-backend.git
```


Install dependencies using npm

```bash
$ cd project-focal-backend
$ npm install
```
Set the environment variables in .env file:
```js
MONGODB_URI=<MONGODB_URI>
JWT_SECRET=<JWT_SECRET>
```
Start the server

```bash
$ npm start
```
## API Endpoints

The following API endpoints are available:
### Authentication Endpoints

 - POST /api/auth/signup: Register a new user
 - POST /api/auth/signin: Login an existing user
 - POST /api/auth/refreshtoken: Generate a new access token using a refresh token
 - POST /api/auth/deleteuser: Delete user account

### Access Control Endpoints

 - GET /api/access/all: Public endpoint
 - GET /api/access/user: User endpoint (requires access token)
 - GET /api/access/mod: Moderator endpoint (requires access token and moderator role)
 - GET /api/access/admin: Admin endpoint (requires access token and admin role)

### Post Endpoints

 - POST /api/post: Create a new post
 - GET /api/post: Get all posts
 - GET /api/post/:id: Get post by id
 - PUT /api/post/:id: Update post by id
 - DELETE /api/post/:id: Delete post by id

## Access Tokens and Refresh Tokens

Access tokens and refresh tokens are used to authenticate and authorize users on the platform. Access tokens are short-lived tokens that are issued to a user upon successful authentication. These tokens typically expire after a short period of time, usually around 15-30 minutes. Refresh tokens are long-lived tokens that are used to generate new access tokens when they expire. Refresh tokens are typically valid for several days or even weeks.

## Technologies Used

This backend uses the following technologies:

 - Node.js
 - Azure
 - MongoDB (CosmosDB)
 - Azure Blob Storage
 - JWT tokens
 - Refresh tokens

## Contributors

    Domenico Valentino
    Nathan Aruna

## License

This project is licensed under the MIT License.