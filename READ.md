
<!-- Folder Structure -->
src
│
├── controllers/
│   ├── blog.controllers.js
│   └── user.controllers.js
│
├── models/
│   ├── blog.model.js
│   └── user.model.js
│
├── routes/
│   ├── blog.routes.js
│   └── user.routes.js
│
├── middleware/
│   └── auth.js
│
├── routes/
│   └── route.js
│
├── app.js
│
├── package.json
│
└── README.md


<!-- Work of this code -->
1. The project entails setting up a Node.js application using Express for web framework and Mongoose for MongoDB integration. 
2. Data models for User and Blog objects are defined using Mongoose, enforcing constraints like uniqueness and requirement. 
3. Authentication and authorization are implemented using JSON Web Tokens (JWTs), managing sign-up, sign-in, and token refresh flows with token expiration set to 1 hour. 
4. Endpoints for blog functionalities such as creation, updating, deletion, and reading are created, ensuring user authentication and authorization for each action. 
5. Pagination and filtering are added to the blog list endpoint using MongoDB queries, with options like skip, limit, and sorting for enhanced user experience. 
6. Additionally, a reading time algorithm is developed, estimating reading time based on body length and average adult reading speed (e.g., 250 words per minute), providing users with estimated reading durations.

