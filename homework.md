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
- Add API level validations on Patch request & signup POST api
- DATA Sanitization - Add API validation for each field
- Install validator
- Explore validator library function and Use validator functions for password, email, url
- NEVER TRUST req.body

- Validate data in Signup API
- Install bcrypt package
- Create PasswordHash using bcrypt.hash & save the user in encrypted password
- Create a login API
- Compare passwords and throw errors if email or password is invalid

- install cookie-parser
- just send a dummy cookie to user
- Create GET /profile API and check if you get the cookie back
- install jsonwebtoken
- // IN login API, after email and password validattion, create a JWT token and send it to user in cookies
- read the cookies inside your profile API and find the logged in user
- userAuth Middleware
- Add the userAuth middleware in profile API and a new sendConnectionRequest API
- Set the expiry of JWT token and cookies to 7 days
- Create userSchema method to getJWT()
- Create userSchema method to comparePassword(passwordInputByUser)

- Explore tinder APIs
- Create a list of all API you can think of in Dev Tinder
- Group multiple routes under respective routers
- Read documentation for express.Router
- Create routes folder for managing auth, profile, request routers
- create authRouter, profileRouter, requestRouter
- Import these routers in app.js
- Create POST /logout API
- Create PATCH /profile/edit
- Create PATCH /profile/password API => forgot password api
- Make sure you validate all data in every POST, PATCH
- Test all APIs and 6

- Create Connection Request Schema
- Send Connection Request API
- Proper validation of Data
- Think about All corner cases
- $or query $and query in mongoose - https://www.mongodb.com/docs/manual/reference/operator/query-logical/
- Read more about indexes in MongoDB
- Why do we need index in DB?
- What are advantages and disadvantages of creating indexes?
- Read this article about compound indexes - https://www.mongodb.com/docs/manual/indexes/
- ALWAYS THINK ABOUT CORNER CASES

- Write code with proper validations for POST /request/review/:status/:requestId
- Thought process - POST vs GET
- Read about ref and populate
- Create GET /user/request/received with all checks
- Crete GET /user/connections

- Logic for GET /feed API
- Explore the $nin, $and, $ne and other query operators
- Pagination

NOTES:

/feed?page=1&limit=10 => 1-10 => .skip(0) & limit(10)

/feed?page=10&limit=10 => 10-20 => .skip(10) & limit(10)

/feed?page=20&limit=10 => 20-30 => .skip(20) & limit(10)

/feed?page=30&limit=10 => 30-40 => .skip(30) & limit(10)

skip = (page - 1) \* limit
