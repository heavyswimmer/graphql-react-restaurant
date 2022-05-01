const { ApolloServer } = require('apollo-server');

const queries = require('./typedefs-resolvers/_queries');
const restaurants = require('./typedefs-resolvers/restaurants');
const tools = require('./typedefs-resolvers/tools');

const typeDefs = [queries, restaurants.typeDefs, tools.typeDefs];

const resolvers = [restaurants.resolvers, tools.resolvers];

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
	console.log(`🚀  Server ready at ${url}`);
});
