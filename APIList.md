# Devtinder APIs

## authRouter

- POST /signup
- POST /login
- POST /logout

## profileRouter

- GET /profile/view
- PATCH /profile/edit
- PATCH /profile/password

## connectionRequestRouter

- POST /request/send/interested/:userId
- POST /reqeust/send/ignored/:userId
- POST /reqeust/review/accepted/:requestId
- POST /request/review/rejected/:requestId

## user

- GET /user/connections
- POST /user/requests
- GET /user/feed - Gets you the profiles of others users on platforms

Status: ignore, interested, accepted, rejected
