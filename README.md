# node.js base 🛡️

> This is a base project with example requests to understand how node works, also designed for LAPR5 project setup purposes by ISEP.

## Development

We use `node` version `20.7.0`

> Mac OS only

```text
nvm install 20.7.0
```

```text
nvm use 20.7.0
```

> Windows shall use either nvm-windows or change the path variable (hard 😥)
> [nvm-windows link](https://github.com/coreybutler/nvm-windows)

The first time, you will need to run

```text
npm install
```

Then just start the server with

```text
npm run start
```

It uses nodemon for livereloading :peace-fingers:

## Database Used

> In this project MongoDB is used, we recommend using Mongo Compass.
> [Mongo Compass]()
>
> For Mac OS, we recommend you follow this guide to activate the mongo db service (it runs in the background).
> [Tutorial](https://www.youtube.com/watch?v=NLw7Tln6IeM&list=LL&index=1)

## Online one-click setup

- clone the `nodejs-base` repo.
- install the dependencies(npm install).
- run `cp .env.example .env` (copy the example .env file, then edit it to your liking).
- run `npm run start`.

[NodeJS Base](https://github.com/1210709/nodejs-base)

# API Validation

 By using [celebrate](https://github.com/arb/celebrate), the req.body schema becomes cleary defined at route level, so even frontend devs can read what an API endpoint expects without needing to write documentation that can get outdated quickly.

 ```js
 route.post('/signup',
  celebrate({
    body: Joi.object({
      name: Joi.string().required(),
      email: Joi.string().required(),
      password: Joi.string().required(),
    }),
  }),
  controller.signup)
 ```

 **Example error**

 ```json
 {
  "errors": {
    "message": "child \"email\" fails because [\"email\" is required]"
  }
 }
 ```

[Read more about celebrate here](https://github.com/arb/celebrate) and [the Joi validation API](https://github.com/hapijs/joi/blob/v15.0.1/API.md)
