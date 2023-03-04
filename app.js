const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { makeExecutableSchema } = require("@graphql-tools/schema");
const { typeDefs } = require("./schemas/type_defs");
const { resolvers } = require("./schemas/resolvers")

const app = express();

const schema = new makeExecutableSchema({
    resolvers,
    typeDefs
})

app.use("/graphql", graphqlHTTP({
    schema: schema,
    graphiql: true
}))

app.listen(8000, () => {
  console.log("Server Running");
});
