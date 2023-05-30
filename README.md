## Equipment shop
Used Nest.Js, npm, Prisma and docker
## Modules
Atuh, Post, User and prisma connection module
## Auth
On auth module I decided to create JWT to authorization all user action. <br>
JWT have a id (sub), email and hashed passowrd (I user bcrypt for that). <br>
User must have account to see offers in shop
## Authorization
To authorization I use guard module to cheac secret-key in JWT. <br>
In public.decorator I change the value (isPublic) to true, because some endpoints don't require JWT (for example register in auth controller)
## User
In this module we can create user with name and surname.<br>
User id is uuid (using uuidv4) and I take it from JWT (using GetUserID decorator where I take the sub field).<br>
All action on this module requires authorization.
## Post
In db I create one-to-many (using uuid filed to do that) relaction where user can have many posts.<br>
To create post you need pass: title(string), description(string) and price (float).
## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).
