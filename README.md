# Backend Boilerplate

## STACK: graphql-yoga, Express, Prisma

### Intruction

1. Clone this repo and run yarn install
2. Create file dev.env and test.env in the config folder according to the
   example file.
3. Globally install prisma cli
   - npm i -g prisma
4. Login to prisma
   - prisma login
5. Rerender the auto generated file by prisma
   - npm run deploy (do this every time you change the datamodel.prisma )
6. Start the server
   - yarn start
7. Go to http://localhost:{YOUR_PORT}, you will see the graphql client.
8. Other information:

- Install eslint and prettier extensions if you want..
- Visit this link you want more information about eslint and prettier:
  https://github.com/huynet/lint
- Graphql Yoga Repo and Docs: https://github.com/prisma-labs/graphql-yoga
- Tutorial:
  - Fullstack:
    https://drive.google.com/drive/folders/1gIHzSoYg2gwbupjEZjqsHnBGJVvij13T?usp=sharing
