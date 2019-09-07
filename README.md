# GraphQLBE

Backend setup for GraphQL

1. Clone this repo and run npm install
2. Create file variables.env as following:
   - FRONTEND_URL="http://localhost:7777"
   - PRISMA_ENDPOINT="PutYourPrismaEndpointHere"
   - PRISMA_SECRET="omgplzdonttellanyone"
   - APP_SECRET="jwtsecret123321"
   - STRIPE_SECRET="sk_123youchanget his"
   - PORT=4444
3. Globally install prisma cli
   - npm i -g prisma
4. Run
   - prisma login
5. Run
   - npm run deploy (do this every time you change the datamodel.prisma )
6. Start the server
   - npm run dev
7. Go to http://localhost:4444, you will see the graphql client.

- Install eslint and prettier extensions if you want..
- Visit this link you want more information: https://github.com/huynet/lint
