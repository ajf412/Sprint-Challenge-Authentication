<!-- Answers to the Short Answer Essay Questions go here -->

1.  Describe Middleware, Sessions (as we know them in express), bcrypt and JWT.
- Middleware:  Functions that use req, res, next, and are called in the coding cycle.
- Sessions:  A user's specific visit to a site is a session.  Sessions can be saved using cookies.
- bcrypt:  A middleware that creates one way hashes.
- JWT:  jsonwebtoken:  A middleware that creates tokens to store user authentication for specified amounts of time.

2.  What does bcrypt do in order to prevent attacks?
- Hashes the password, so it can only be read as input, and stored as a hash.

3.  What are the three parts of the JSON Web Token?
- Header, Payload, Signature
