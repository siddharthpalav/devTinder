- Create a repository
- Initialize the repository
- node_modules, package.json, package-lock.json
- Install express
- Create a server
- Listen to port 7777
- Write request handelers for /test, /hello
- Install nodemon and update scripts inside package.json
- What are dependencies
- What is the use of "-g" while npm install
- Difference between caret and tilde ( ^ vs ~)

- initialize git
- .gitignore
- Create a remote repo on github.com
- Push all code to remote origin
- Play with routes and route extension ex. /hello, / , hello/2, /xyz
- Order of the routes matter a lot

- Install postman app and make a workspace/collection > test API call
- Write logic to handle GET, POST, PATCH, DELETE API calls and test them on Postman
- Explore routing and use of ?, + , (), \* in the routes
- Use of regex in routes /a/ /.\*fly$/
- Reading the query params in the routes
- Reading the dynamically generated

- Multiple Route Handlers - Play with the code
- next()
- next function and errors along with res.send()
- app.use('/route', rH, [rH2, rh3], rH4, rH5)
- What is middleware? Why do we need it?
- How express JS basically handles requests behind the scenes
- Difference between app.use and app.all
- Write a dummy auth middleware for an admin
- Write a dummy auth middleware for all the user route except /user/login
- Error Handling using app.use("/", (err, req, res, next) = {});

- Create a free cluster on MongoDB official website (Mongo Atlas)
- Install mongoose library
- Connect your application to the Database "connection-url/devTinder
- Call the connectDB function and connect to database before starting application on 7777
- Create a User schema and user Model
- Create /signup API to add data to database
- Error handling using try, catch

- JS object vs JSON (differences)
- Add the express.json middleware to your app
- Make your signup API dynamic to receive data from the end user
- User.findOne with duplicate email ids, which object will the method return
- API - Get user by email
- API - Feed API - GET /feed - get all the users from the database
- API - Get User by ID
- Create a delete user API
- Difference between PATCH and PUT
- API - Update a user
- Explore the Mongoose Documentation
- What are options in a Model.findOneAndUpdate method, explore more about it
- API - Update the user with emai ID


- Explore schematype options from the documentation
- Add required, unique, lowercase, min, minLength, trim
- Add default 
- Create a custom validate function for gender
- Improve the DB schema - PUT all appropriate validation on each field in Schema
- Add timestamps to the userSchema