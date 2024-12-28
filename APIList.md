# Devtinder APIs

## authRouter

- POST /signup
- POST /login
- POST /logout

## profileRouter

- GET /profile/view
- PATCH /profile/edit
- PATCH /profile/password // Forgot password API

## connectionRequestRouter

- POST /request/send/:status/:userId
- POST /request/review/:status/:requestId

## user

- GET /user/connections
- POST /user/requests
- GET /user/feed - Gets you the profiles of others users on platforms

Status: ignore, interested, accepted, rejected
